import type { IconName } from '../constants/icon';

// 주문 상태
export type OrderStatus =
    | 'paymentComplete'    // 결제완료
    | 'shipping'           // 배송중
    | 'delivered'          // 배송완료
    | 'returnRequested'    // 반품 신청 (판매자 확인 중)
    | 'cancelled'          // 취소 (환불 대기)
    | 'refunded'           // 환불 완료
    | 'paymentFailed'      // 결제 실패
    | 'purchaseConfirmed';  // 구매 확정 (판매자 정산 진행)

// 모달 타입
export type OrderModalType = 
    | 'tracking'
    | 'cancel'
    | 'confirm'
    | 'return'
    | 'returnCancel'
    | 'repurchase'
    | 'reorder';

export type OrderModalState = { type: OrderModalType, order: Order } | null;

export type PaymentMethod = 'paygo' | 'account' | 'card' | 'simplePayment';

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
    paygo: 'Paygo 잔액 결제',
    account: '계좌이체',
    card: '신용/체크카드',
    simplePayment: '간편결제',
};

// 장바구니 CartItem과 생명주기가 달라 types로 정의
// orders 테이블과 1:N 관계이므로 order_items 테이블 생성(order_id로 연결)
export interface OrderItem {
    id: number; // PK
    orderId: number; // FK, orders 테이블의 id(식별자)
    productId: number; // FK, products 테이블의 id(식별자)
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
    id: number; // PK
    userId: number; // FK, users 테이블의 id(식별자)
    couponId?: number; // FK, coupons 테이블의 id(식별자) - 결제(사용) 시 used, 취소 시 active로 변경
    orderNumber: string; // 사용자에게 보이는 주문번호
    createdAt: string; // 주문시간
    orderStatus: OrderStatus; // 주문상태
    items: OrderItem[]; // 주문한 item 리스트
    discount: number; // 할인 금액
    totalPrice: number; // "할인까지 적용된" 총 금액 - 사용자 개인이 사용한 쿠폰까지 적용된 금액 저장
    failureReason?: string; // 실패사유 - 결제실패 시에 존재
    refundAmount?: number; // 환불 시에 존재
    paymentMethod: PaymentMethod; // 결제 수단
}

export interface OrderDetail extends Order {
    recipient: string; // 수취인
    recipientAddress: string; // 수취인 주소
    recipientPhone: string; // 수취인 연락처

    // cancelled, paymentFailed일 때 carrier, trackingNumber이 없음
    carrier?: string; // 택배사
    trackingNumber?: string; // 운송장 번호 - 앞이 0이 오는 경우가 있어 string

    // paymentFailed일 때 transactionNumber가 없음
    transactionNumber?: string; // 사용자에게 보이는 거래번호
}
