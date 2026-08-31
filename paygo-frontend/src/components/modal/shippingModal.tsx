import Button from "../common/button";
import ModalShell from "./modalShell";

interface ShippingModalProps {
    title: string;
    orderId: string;
    productName: string;
    count: number; // 몇 개 외로 계산
    createdAt: string; // 주문 일자 기준으로 프론트엔드에서 목업형태로 계산
    closeLabel: string;
    onClose: () => void;
}

function ShippingModal({ title, orderId, productName, count, createdAt, closeLabel, onClose } : ShippingModalProps) {
    return (
        <ModalShell onClose={onClose}>
            <div className="font-medium text-lg">{title}</div>
            <div className="text-gray-400">
                {orderId} · {productName} 외 {count}개
            </div>
            <div className="w-full">
                <Button
                    variant="secondary" onClick={onClose} className="h-10"
                >
                    {closeLabel}
                </Button>
            </div>
        </ModalShell>
    );
}

export default ShippingModal;
