import { addDays, formatYearMonthDay } from "../../lib/dateUtils";
import { getShippingStep } from "../../lib/orderUtils";
import type { OrderStatus } from "../../types/order";
import Button from "../common/button";
import ShippingStep from "../ship/shippingStep";
import ModalShell from "./modalShell";

interface ShippingModalProps {
    title: string;
    orderId: string;
    productName: string;
    count: number; // 몇 개 외로 계산
    orderStatus: OrderStatus;
    isOrderDetailPage: boolean;
    createdAt: string;
    closeLabel: string;
    onClose: () => void;
}

function ShippingModal({ title, orderId, productName, count, orderStatus, isOrderDetailPage, createdAt, closeLabel, onClose } : ShippingModalProps) {
    // getShippingStep(orderStatus) = [{ label: label, status: done/current/pending }, ... ]
    const message = getShippingStep(orderStatus).map((m) => {
        if (m.status !== "current")
            return undefined;
        // 현재 단계(current)인 orderStatus에 대해서 message 보여줌
        if (m.label === "주문완료")
            return formatYearMonthDay(createdAt) + "\u00A0\u00A0" + "주문이 정상적으로 접수됐어요.";
        else if (m.label === "상품준비")
            return formatYearMonthDay(String(addDays(createdAt, 1))) + "\u00A0\u00A0" + "상품을 정성껏 준비하고 있어요.";
        else if (m.label === "배송중")
            return formatYearMonthDay(String(addDays(createdAt, 2))) + "\u00A0\u00A0" + "상품이 배송 중이에요. 곧 도착해요.";
        else
            return formatYearMonthDay(String(addDays(createdAt, 3))) + "\u00A0\u00A0" + "배송이 완료됐어요. 확인해주세요.";
    });

    return (
        <ModalShell onClose={onClose}>
            <div className="flex flex-col gap-2">
                <div className="font-medium text-lg">{title}</div>
                <div className="text-gray-600 text-sm">
                    {orderId} · {productName} 
                    {count > 0 && <span> 외 {count}개</span>}
                </div>
                <div className="mt-3">
                    <ShippingStep orderStatus={orderStatus} isOrderDetailPage={isOrderDetailPage}></ShippingStep>
                </div>
                <div className="mt-3 py-2 pl-4 flex items-center text-sm w-full rounded-lg bg-gray-100 text-gray-600">
                    {message.filter((m) => m !== undefined)}
                </div>
                <div className="mt-3 w-full">
                    <Button
                        variant="secondary" onClick={onClose} className="w-full h-10"
                    >
                        {closeLabel}
                    </Button>
                </div>
            </div>
        </ModalShell>
    );
}

export default ShippingModal;
