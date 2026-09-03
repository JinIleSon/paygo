import { useParams } from "react-router-dom";
import Card from "../../components/common/card";
import { order } from "../../constants/order";
import { formatDateTime } from "../../lib/dateUtils";
import { getOrderBadges } from "../../constants/useBadges";
import { IconAlertTriangle } from "@tabler/icons-react";
import ShippingStep from "../../components/ship/shippingStep";
import { iconMap } from "../../constants/icons";

function OrderDetailPage() {
    const { orderId } = useParams<{ orderId: string }>();
    const orderDetail = order.find((o) => o.orderId === orderId);

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
                                        <div className="font-bold">
                                            {(item.price * item.count).toLocaleString()}원
                                        </div>
                                    </div>
                                );
                            })}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailPage;