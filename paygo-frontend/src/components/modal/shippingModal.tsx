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
    closeLabel: string;
    onClose: () => void;
}

function ShippingModal({ title, orderId, productName, count, orderStatus, closeLabel, onClose } : ShippingModalProps) {
    return (
        <ModalShell onClose={onClose}>
            <div className="flex flex-col gap-2">
                <div className="font-medium text-lg">{title}</div>
                <div className="text-gray-600 text-sm">
                    {orderId} · {productName} 
                    {count > 0 && <span> 외 {count}개</span>}
                </div>
                <div className="mt-3">
                    <ShippingStep orderStatus={orderStatus}></ShippingStep>
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
