interface ShippingModalProps {
    title: string;
    orderId: string;
    productName: string;
    createdAt: string; // 주문 일자 기준으로 프론트엔드에서 목업형태로 계산
    closeLabel: string;
    onClose: () => void;
}

function ShippingModal() {}

export default ShippingModal;
