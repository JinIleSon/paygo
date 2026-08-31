import Button from "../common/button";
import ModalShell from "./modalShell";

interface ShippingModalProps {
    title: string;
    orderId: string;
    productName: string;
    count: number; // 몇 개 외로 계산
    closeLabel: string;
    onClose: () => void;
}

function ShippingModal({ title, orderId, productName, count, closeLabel, onClose } : ShippingModalProps) {
    return (
        <ModalShell onClose={onClose}>
            <div className="flex flex-col gap-2">
                <div className="font-medium text-lg">{title}</div>
                <div className="text-gray-600 text-sm">
                    {orderId} · {productName} 
                    {count > 0 && <span> 외 {count}개</span>}
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
