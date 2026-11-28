package com.paygo.domain.order.entity;

public enum OrderStatus {
    PAYMENT_COMPLETED, // 결제완료
    SHIPPING, // 배송중
    DELIVERED, // 배송완료
    RETURN_REQUESTED, // 반품 신청 (판매자 확인 중)
    CANCELLED, // 취소 (환불 대기)
    REFUNDED, // 환불 완료
    PAYMENT_FAILED, // 결제 실패
    PURCHASE_CONFIRMED // 구매 확정 (판매자 정산 진행)
}
