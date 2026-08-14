import type { IconName } from "../constants/icons";

export type OrderStatus = 'paymentComplete' | 'shipping' | 'delivered' | 'cancelled' | 'refunded' | 'paymentFailed'; // cancelled는 취소, refunded 취소 후 환불까지
export type DeliveryStatus = 'paymentComplete' | 'productReady' | 'shipping' | 'delivered';
export type PaymentMethod = 'paygo' | 'account' | 'card' | 'simplePayment';

// 장바구니 CartItem과 생명주기가 달라 types로 정의
export interface OrderItem {
    productId: number; // 상품 고유 ID
    productName: string;
    size?: number;
    color: string;
    price: number;
    count: number;
    iconName: IconName;
    itemBg: string;
    itemText: string;
}

export interface Order {
    orderId: string;     // 주문번호
    createAt: string;    // 주문시간
    orderStatus: OrderStatus; // 주문상태
    items: OrderItem[];  // 주문한 item 리스트
    totalPrice: number;  // "할인까지 적용된" 총 금액 - 사용자 개인이 사용한 쿠폰까지 적용된 금액 저장
    failureReason?: string; // 실패사유 - 결제실패 시에 존재
    refundAmount?: number;  // 환불 시에 존재
}

export interface OrderDetail extends Order {
    deliveryStatus: DeliveryStatus; // 배송상태
    recipient: string;              // 수취인
    recipientAddress: string;       // 수취인 주소
    recipientPhone: string;         // 수취인 연락처
    carrier: string;                // 택배사
    trackingNumber: string;         // 운송장 번호 - 앞이 0이 오는 경우가 있어 string
    discount: number;               // 할인 금액
    paymentMethod: PaymentMethod;   // 결제 수단
    transactionId: string;          // 거래 ID
}