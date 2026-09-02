import { useParams } from "react-router-dom";
import Card from "../../components/common/card";
import { order } from "../../constants/order";
import { formatDateTime } from "../../lib/dateUtils";
import { getOrderBadges } from "../../constants/useBadges";
import { IconAlertTriangle } from "@tabler/icons-react";

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
                            className="flex flex-col gap-4 text-gray-400 font-medium"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-sm">주문번호 {orderDetail.orderId}</div>
                                    <div className="text-xs">{formatDateTime(orderDetail.createdAt)}</div>
                                </div>
                                <div>{getOrderBadges(orderDetail.orderStatus)}</div>
                            </div>

                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-4 font-medium">
                        <Card>
                            
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetailPage;