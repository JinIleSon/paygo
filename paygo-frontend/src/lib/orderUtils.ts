import type { OrderStatus } from "../types/order";

export function getRemainRefundedDate(createdAt: string): number {
    const refundDate = new Date(createdAt);
    refundDate.setDate(refundDate.getDate() + 7);

    const now = new Date();
    const diffDate = Math.ceil((refundDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)); // 1000 = 1000밀리초 = 1초
    
    return Math.max(0, diffDate); // 음수가 되면 0으로 매핑되게끔
}

export function getShippingStep(orderStatus: OrderStatus) {
    const STEP_OF_ORDER: Record<string, number> = {
        paymentComplete: 1,
        shipping: 2,
        delivered: 3
    };
    
    const step = STEP_OF_ORDER[orderStatus] ?? 0;
    const labels = ["주문완료", "상품준비", "배송중", "배송완료"];

    // label과 done/current/pending이 따로 놀지 않게 객체로 묶음
    const result = labels.map((label, i) => ({
                    label: label,
                    // 배송과 관련 없는 상태일 경우 전체 pending 상태
                    status: ["cancelled", "refunded", "paymentFailed"].includes(orderStatus) ? "pending" : step > i ? "done" : step === i ? "current" : "pending"}));

    return result;
}