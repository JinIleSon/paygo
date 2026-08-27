import { useState } from 'react';
import Card from '../../components/common/card';
import SelectBox from '../../components/common/selectBox';
import SelectCard from '../../components/common/selectCard';
import { orderClassification } from '../../constants/classification';
import { order } from '../../constants/order';
import { getOrderBadges } from '../../constants/useBadges';
import { iconMap } from '../../constants/icons';
import Button from '../../components/common/button';
import { formatDateTime } from '../../lib/dateUtils';
import { getRemainRefundedDate } from '../../lib/orderUtils';
import type { Order, OrderStatus } from '../../types/order';
import ConfirmModal from '../../components/modal/confirmModal';
function OrderListPage() {
    const [selectedType, setSelectedType] = useState<'all' | OrderStatus>('all');
    const [sortType, setSortType] = useState('latest');

    type ModalState =
        | { type: 'tracking'; order: Order }
        | { type: 'cancel'; order: Order }
        | { type: 'return'; order: Order }
        | { type: 'repurchase'; order: Order }
        | { type: 'reorder'; order: Order }
        | null;

    const [modal, setModal] = useState<ModalState>(null);

    const filteredOrders = order.filter(
        (eachOrder) => selectedType === 'all' || eachOrder.orderStatus === selectedType
    );

    const sortedOrders = [...filteredOrders].sort((a, b) => {
        if (sortType === 'latest') {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        } else if (sortType === 'oldest') {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        } else if (sortType === 'priceHigh') {
            return b.totalPrice - a.totalPrice;
        } else if (sortType === 'priceLow') {
            return a.totalPrice - b.totalPrice;
        }
        return 0; // sort에서 0 반환은 순서 그대로 유지
    });

    return (
        <div className="flex flex-col gap-6.5">
            <Card>
                <div className="flex items-center">
                    <div className="flex gap-3">
                        {orderClassification.map((clas) => (
                            <SelectCard
                                onClick={() => setSelectedType(clas.id as 'all' | OrderStatus)}
                                isSelected={selectedType === clas.id}
                                key={clas.id}
                            >
                                <div>{clas.label}</div>
                            </SelectCard>
                        ))}
                    </div>
                    <div className="ml-auto">
                        <SelectBox onChange={(e) => setSortType(e.target.value)}>
                            <option value="latest">최신순</option>
                            <option value="oldest">오래된 순</option>
                            <option value="priceHigh">높은 금액순</option>
                            <option value="priceLow">낮은 금액순</option>
                        </SelectBox>
                    </div>
                </div>
            </Card>
            {sortedOrders.map((eachOrder) => (
                <Card
                    key={eachOrder.orderId}
                    className="flex flex-col gap-4 text-gray-400 font-medium"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-sm">주문번호 {eachOrder.orderId}</div>
                            <div className="text-xs">{formatDateTime(eachOrder.createdAt)}</div>
                        </div>
                        <div>{getOrderBadges(eachOrder.orderStatus)}</div>
                    </div>
                    <div className="border-b border-[#D9D9D9]"></div>
                    {eachOrder.items.map((item) => {
                        const Icon = iconMap[item.iconName];

                        return (
                            <div key={item.productId}>
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-[3.75rem] h-[3.75rem] rounded-xl flex items-center justify-center ${item.itemBg}`}
                                    >
                                        <Icon size={30} className={item.itemText} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="truncate text-[black]">
                                            {item.productName}
                                        </div>
                                        <div className="flex text-gray-400 text-sm">
                                            {item.size && <div>사이즈: {item.size} |&nbsp;</div>}
                                            <div>색상: {item.color} |&nbsp;</div>
                                            <div>주문수량: {item.count}</div>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-[black] font-bold">
                                        {(item.price * item.count).toLocaleString()}원
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {eachOrder.failureReason && (
                        <div className="rounded-lg bg-[#FFE4E4] text-red-400 p-2 pl-4">
                            <span>ⓘ</span>
                            <span className="ml-2">{eachOrder.failureReason}</span>
                        </div>
                    )}
                    <div className="border-b border-[#D9D9D9]"></div>
                    {['paymentComplete', 'shipping', 'delivered'].includes(
                        eachOrder.orderStatus
                    ) && (
                        <div className="flex items-end">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-3 text-black text-lg items-center">
                                    <span>상품 금액</span>
                                    <span className="font-bold">
                                        {eachOrder.items
                                            .reduce((sum, item) => sum + item.price * item.count, 0)
                                            .toLocaleString()}
                                        원
                                    </span>
                                </div>
                                <div className="flex gap-3 text-black text-lg items-center">
                                    <span>할인 금액</span>
                                    <span className="text-red-400 font-bold">
                                        -{eachOrder.discount.toLocaleString()}원
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    {['paymentComplete', 'shipping', 'delivered'].includes(
                        eachOrder.orderStatus
                    ) && (
                        <div>
                            <div className="border-b border-[#D9D9D9]"></div>
                            <div className="flex justify-between mt-7 mb-2">
                                <div className="flex gap-3 text-black text-2xl items-end">
                                    <span>총 결제 금액</span>
                                    <span className="font-bold text-3xl text-[#6266F1]">
                                        {eachOrder.totalPrice.toLocaleString()}원
                                    </span>
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex gap-3">
                                        <Button variant="secondary" className="px-2 py-1">
                                            배송 조회
                                        </Button>
                                        {['paymentComplete', 'shipping'].includes(
                                            eachOrder.orderStatus
                                        ) ? (
                                            <Button
                                                variant="cancel"
                                                className="px-2 py-1"
                                                onClick={() =>
                                                    setModal({ type: 'cancel', order: eachOrder })
                                                }
                                            >
                                                주문/배송 취소
                                            </Button>
                                        ) : (
                                            <Button variant="cancel" className="px-2 py-1">
                                                교환/반품 신청
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* 취소접수 */}
                    {eachOrder.orderStatus === 'cancelled' && (
                        <div>
                            <div className="flex justify-between mt-3 mb-2">
                                <div className="flex gap-3 text-gray-500 text-2xl items-end">
                                    <span>주문 취소</span>
                                </div>
                                <div className="flex justify-end">
                                    <span className="text-red-400">
                                        {getRemainRefundedDate(eachOrder.createdAt) > 0
                                            ? getRemainRefundedDate(eachOrder.createdAt) +
                                              '일 뒤에 환불돼요'
                                            : '곧 환불 처리돼요'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* 환불 */}
                    {eachOrder.orderStatus === 'refunded' && (
                        <div>
                            <div className="flex justify-between mt-3 mb-2">
                                <div className="flex gap-3 text-black text-2xl items-end">
                                    <span>환불 완료</span>
                                    <span className="font-bold text-3xl text-[#22C55E]">
                                        {eachOrder.refundAmount !== undefined
                                            ? eachOrder.refundAmount.toLocaleString() + '원'
                                            : '—'}
                                    </span>
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex gap-3">
                                        <Button
                                            variant="retry"
                                            className="px-2 py-1"
                                            onClick={() =>
                                                setModal({ type: 'repurchase', order: eachOrder })
                                            }
                                        >
                                            재구매
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* 결제 실패 */}
                    {eachOrder.orderStatus === 'paymentFailed' && (
                        <div>
                            <div className="flex justify-between mt-3 mb-2">
                                <div className="flex gap-3 text-red-400 text-2xl items-center">
                                    <span>결제 실패</span>
                                </div>
                                <div className="flex justify-end">
                                    <div className="flex gap-3">
                                        <Button variant="retry" className="px-2 py-1">
                                            재주문
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Card>
            ))}

            {/* TODO: modalState에 따른 모달창 호출 후 따로 컴포넌트로 빼기 */}
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
                    description={``} // TODO: description 작성 필요
                    cancelLabel="아니오"
                    variant="cancel"
                    confirmLabel="취소하기"
                    onClose={() => setModal(null)}
                    // TODO: 이후 API 호출 필요
                    onConfirm={() => setModal(null)}
                ></ConfirmModal>
            )}
        </div>
    );
}

export default OrderListPage;
