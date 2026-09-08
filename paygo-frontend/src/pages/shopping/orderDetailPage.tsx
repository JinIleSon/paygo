import { useParams } from "react-router-dom";
import Card from "../../components/common/card";
import { order } from "../../constants/order";
import { addDays, diffDays, formatDateTime, formatYearMonthDay } from "../../lib/dateUtils";
import { getOrderBadges } from "../../constants/useBadges";
import { IconAlertTriangle } from "@tabler/icons-react";
import ShippingStep from "../../components/ship/shippingStep";
import { iconMap } from "../../constants/icons";
import { PAYMENT_METHOD_LABELS, type Order } from "../../types/order";
import { getRemainRefundedDate } from "../../lib/orderUtils";
import Button from "../../components/common/button";
import { useState } from "react";
import ShippingModal from "../../components/modal/shippingModal";
import ConfirmModal from "../../components/modal/confirmModal";
import ReturnRequestModal from "../../components/modal/returnRequestModal";

function OrderDetailPage() {
    const { orderId } = useParams<{ orderId: string }>();
    const orderDetail = order.find((o) => o.orderId === orderId);
    const today = new Date().toISOString(); // 렌더링 시작 시점에 날짜 한 번만 계산

    type ModalState =
        | { type: 'tracking'; order: Order }
        | { type: 'cancel'; order: Order }
        | { type: 'return'; order: Order }
        | { type: 'repurchase'; order: Order }
        | { type: 'reorder'; order: Order }
        | null;

    const [modal, setModal] = useState<ModalState>(null);

    if (!orderDetail)
        return <div className="fixed inset-0 left-60 flex flex-col items-center justify-center gap-2 text-gray-600">
                    <IconAlertTriangle size={110} className="text-gray-400"/>
                    <div className="text-2xl font-medium">주문을 찾을 수 없어요.</div>
                </div>

    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5 font-medium">
                        <Card
                            className="flex flex-col gap-8 text-gray-400 font-medium"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-sm">주문번호 {orderDetail.orderId}</div>
                                    <div className="text-xs">{formatDateTime(orderDetail.createdAt)}</div>
                                </div>
                                <div>{getOrderBadges(orderDetail.orderStatus)}</div>
                            </div>
                            <div className="flex items-center justify-center mb-4">
                                <ShippingStep orderStatus={orderDetail.orderStatus} isOrderDetailPage={true}></ShippingStep>
                            </div>
                        </Card>
                        <Card>
                            <div className="text-lg text-gray-500 mb-6 font-medium">주문 상품 ({orderDetail.items.length}건)</div>
                            {orderDetail.items.map((item) => {
                                const Icon = iconMap[item.iconName];

                                return (
                                    <div
                                        key={item.productId}
                                        className="flex items-center gap-4 mb-4"
                                    >
                                        <div
                                            className={`w-[3.75rem] h-[3.75rem] rounded-xl flex items-center justify-center ${item.itemBg}`}
                                        >
                                            <Icon size={30} className={item.itemText} />
                                        </div>
                                        <div
                                            className="w-50 flex flex-col gap-2 truncate"
                                        >
                                            <div className="truncate">{item.productName}</div>
                                            <div className="flex text-gray-400 text-xs">
                                                {item.size && (
                                                    <div>사이즈: {item.size} |&nbsp;</div>
                                                )}
                                                <div>색상: {item.color} |&nbsp;</div>
                                                <div>주문수량: {item.count}</div>
                                            </div>
                                        </div>
                                        <div className="font-bold flex-1 text-right">
                                            {(item.price * item.count).toLocaleString()}원
                                        </div>
                                    </div>
                                );
                            })}
                        </Card>
                        <Card>
                            <div className="flex flex-col gap-4 text-gray-500">
                                <div className="text-lg mb-2">배송 정보</div>
                                <div className="text-gray-400 flex items-center justify-between">
                                    <div className="w-19">받는 분</div>
                                    <div className="text-[black]">
                                        {orderDetail.recipient}
                                    </div>
                                </div>
                                <div className="text-gray-400 flex items-center justify-between gap-10">
                                    <div className="w-19">주소</div>
                                    <div className="text-[black] text-right">
                                        {orderDetail.recipientAddress}
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div className="w-19">연락처</div>
                                    <div className={`text-[black] ${["cancelled", "paymentFailed"].includes(orderDetail.orderStatus) ? 'mb-4' : ''}`}>
                                        {orderDetail.recipientPhone}
                                    </div>
                                </div>
                                {/* 거래가 취소되거나 결제가 실패하면 운송장번호 없음 */}
                                {!["cancelled", "paymentFailed"].includes(orderDetail.orderStatus) &&
                                <div className="text-gray-400 flex justify-between">
                                    <div className="w-19">운송장번호</div>
                                    <div className="text-[#6266F1] font-bold mb-4">
                                        {`${orderDetail.carrier} · ${orderDetail.trackingNumber}`}
                                    </div>
                                </div>
                                }
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-4 font-medium">
                        <Card>
                            <div className="flex flex-col gap-4 text-gray-500">
                                <div className="text-lg mb-2">결제 정보</div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>상품 금액</div>
                                    <div className="text-[black]">
                                        {orderDetail.items.reduce((sum, item) => (item.price * item.count) + sum, 0).toLocaleString()}원
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>할인 금액</div>
                                    <div
                                        className={`${orderDetail.discount > 0 ? 'text-red-400' : 'text-[black]'}`}
                                    >
                                        {orderDetail.discount > 0
                                            ? '-' +
                                              orderDetail.discount.toLocaleString() +
                                              '원'
                                            : '—'}
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>배송비</div>
                                    <div className="text-[black]">무료</div>
                                </div>
                                <div className="text-gray-400 -mt-3 flex justify-between">
                                    <div></div>
                                    <div className="text-[gray] text-sm">
                                        배송비는 Paygo가 부담했어요
                                    </div>
                                </div>
                                <div className="border-b border-[#D9D9D9]"></div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-xl text-gray-600">결제 금액</div>
                                    <div className="font-bold text-2xl text-[#6266F1]">
                                        {orderDetail.totalPrice.toLocaleString() + '원'}
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="bg-[#F5F6FF]">
                            <div className="flex flex-col gap-4 text-gray-500">
                                <div className="text-gray-400 flex items-center justify-between">
                                    <div className="w-26">결제 수단</div>
                                    <div className="text-[black]">
                                        {PAYMENT_METHOD_LABELS[orderDetail.paymentMethod]}
                                    </div>
                                </div>
                                <div className="text-gray-400 flex items-center justify-between">
                                    <div className="w-26">결제 일시</div>
                                    <div className="text-[black]">
                                        {formatDateTime(orderDetail.createdAt)}
                                    </div>
                                </div>
                                {/* 결제실패 시 거래 ID가 없음 */}
                                {orderDetail.orderStatus !== 'paymentFailed' && (
                                    <div className="text-gray-400 flex items-center justify-between">
                                        <div className="w-26">거래 ID</div>
                                        <div className="text-[#6266F1] font-bold">
                                            {orderDetail.transactionId}
                                        </div>
                                    </div>
                                )}

                                {/* 주문 취소, 환불, 결제 실패 시 환불 관련 시 환불 관련 내용 삭제 */}
                                {["paymentComplete", "shipping", "delivered"].includes(orderDetail.orderStatus) ? (
                                    <div className="text-gray-400 flex items-center justify-between">
                                        <div className="w-26">환불 가능 여부</div>
                                        <div className="font-bold">
                                            {diffDays(today, String(addDays(orderDetail.createdAt, 7))) >= 0 ? (
                                                <div className="text-[#22C55E]">{`가능 (D-${diffDays(today, String(addDays(orderDetail.createdAt, 7)))})`}</div>
                                            ) : (
                                                <div className="text-red-400">불가</div>
                                            )}
                                        </div>
                                    </div>
                                ) : (["cancelled", "refunded"].includes(orderDetail.orderStatus) && (
                                    <div className="text-gray-400 flex items-center justify-between">
                                        <div className="w-26">환불 상태</div>
                                        <div className="font-bold">
                                            {orderDetail.orderStatus === "cancelled" ? (
                                                <span className="text-red-400">
                                                    {getRemainRefundedDate(orderDetail.createdAt) > 0
                                                        ? getRemainRefundedDate(orderDetail.createdAt) +
                                                            '일 뒤에 환불돼요'
                                                        : '곧 환불 처리돼요'}
                                                </span>
                                            ) : (
                                                <span className="text-[#22C55E]">
                                                    환불 완료
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {["paymentComplete", "shipping", "delivered"].includes(orderDetail.orderStatus) && (
                                    <div className="text-gray-400 flex items-center justify-between">
                                        <div className="w-26">환불 마감일</div>
                                        <div className="text-[black]">
                                            {formatYearMonthDay(String(addDays(orderDetail.createdAt, 7)))}
                                        </div>
                                    </div>
                                )}
                                {orderDetail.orderStatus === "refunded" && (
                                    <div className="text-gray-400 flex items-center justify-between">
                                        <div className="w-26">환불 금액</div>
                                        <div className="font-bold">
                                            <span className="text-[black]">
                                                {orderDetail.refundAmount?.toLocaleString()}원
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                        <div className="flex flex-col gap-3">
                            {/* 결제완료, 배송중, 배송완료 시 배송 조회가 나타남 */}
                            {["paymentComplete", "shipping", "delivered"].includes(orderDetail.orderStatus) && (
                                <Button
                                    variant="secondary"
                                    className="p-3 text-xl"
                                    onClick={() => setModal({ type: 'tracking', order: orderDetail })}
                                >
                                    배송 조회
                                </Button>
                            )}
                            {/* 배송중, 결제완료일 때 주문/배송 취소, 배송완료일 때 교환/반품 신청 */}
                            {["shipping", "paymentComplete"].includes(orderDetail.orderStatus) ? (
                                <Button
                                    variant="secondary"
                                    className="p-3 text-xl"
                                    onClick={() => setModal({ type: 'cancel', order: orderDetail })}
                                >
                                    주문/배송 취소
                                </Button>
                            ) : (orderDetail.orderStatus === "delivered" && (
                                <Button
                                    variant="secondary"
                                    className="p-3 text-xl"
                                    onClick={() => setModal({ type: 'return', order: orderDetail })}
                                >
                                    교환/반품 신청
                                </Button>
                            ))}
                            {/* 결제실패 시 재주문, 그 외에는 재구매(장바구니 담기) 가능하도록 함. 사용자가 장바구니로 확인 후에 구매할 수 있도록 함 */}
                            {orderDetail.orderStatus === "paymentFailed" ? (
                                <Button
                                    variant="secondary"
                                    className="p-3 text-xl"
                                    onClick={() => setModal({ type: 'reorder', order: orderDetail })}
                                >
                                    재주문
                                </Button>
                            ) : (
                                <Button
                                    variant="secondary"
                                    className="p-3 text-xl"
                                    onClick={() => setModal({ type: 'repurchase', order: orderDetail })}
                                >
                                    재구매
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {modal?.type === 'cancel' && (
                <ConfirmModal
                    title="주문을 취소할까요?"
                    description={`취소하면 결제 금액 ${modal?.order.totalPrice.toLocaleString()}원이 7일 뒤에 환불돼요. 배송이 이미 시작된 경우 취소가 제한될 수 있어요.`}
                    cancelLabel="아니오"
                    variant="cancel"
                    confirmLabel="취소하기"
                    onClose={() => setModal(null)}
                    // TODO: 이후 API 호출 필요
                    onConfirm={() => setModal(null)}
                ></ConfirmModal>
            )}
            {modal?.type === 'repurchase' && (
                <ConfirmModal
                    title="다시 구매할까요?"
                    description={`${modal?.order.items.map((item) => item.productName).join(', ')}를 같은 옵션으로 장바구니에 담아요.`}
                    cancelLabel="아니오"
                    variant="retry"
                    confirmLabel="장바구니에 담기"
                    onClose={() => setModal(null)}
                    // TODO: 이후 API 호출 필요
                    onConfirm={() => setModal(null)}
                ></ConfirmModal>
            )}
            {modal?.type === 'reorder' && (
                <ConfirmModal
                    title="재주문할까요?"
                    description={`이전과 동일한 상품, 수량으로 다시 주문해요.`}
                    subDescription="재고 부족으로 실패했던 주문은 재고 확인 후 결제가 진행돼요."
                    cancelLabel="아니오"
                    variant="retry"
                    confirmLabel="재주문"
                    onClose={() => setModal(null)}
                    // TODO: 이후 API 호출 필요
                    onConfirm={() => setModal(null)}
                ></ConfirmModal>
            )}
            {modal?.type === 'return' && (
                <ReturnRequestModal
                    title="교환 / 반품 신청"
                    description={`${modal?.order.items
                    .map((item) => 
                        [item.productName, item.size, item.color, `${item.count}개`]
                        .filter((i) => i !== undefined)
                        .join(' · ')
                    )
                    .join('\n')}`}
                    category="사유"
                    text="상세 사유 (선택)"
                    cancelLabel="취소"
                    confirmLabel="신청하기"
                    onClose={() => setModal(null)}
                    // TODO: API 연동 시 변경 필요
                    onConfirm={() => setModal(null)}
                >

                </ReturnRequestModal>
            )}
            {modal?.type === 'tracking' && (
                <ShippingModal
                    title="배송 조회"
                    orderId={modal?.order.orderId}
                    productName={modal?.order.items[0].productName}
                    count={modal?.order.items.length - 1}
                    orderStatus={modal?.order.orderStatus}
                    isOrderDetailPage={false}
                    closeLabel="닫기"
                    createdAt={modal?.order.createdAt}
                    onClose={() => setModal(null)}
                >
                </ShippingModal>
            )}
        </div>
    );
}

export default OrderDetailPage;