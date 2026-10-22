export type SettlementStatus = 
// OrderStatus - paymentFailed는 애초에 결제가 실패한 것이니 판매자가 받을 돈 자체가 없어 정산에 올리질 않음
    | 'pending' // 진행중(OrderStatus - paymentComplete, shipping, delivered)
    | 'held' // 보류중(OrderStatus - returnRequested)
    | 'completed' // 정산완료(OrderStatus - purchaseConfirmed)
    | 'cancelled' // 취소(OrderStatus - cancelled, refunded)

// 판매자를 위한 정산 따라다니는 테이블
export interface Settlement {
    id: number; // PK
    sellerId: number; // FK, users 테이블의 판매자 id(식별자)
    orderId: number; // FK, orders 테이블의 id(식별자). OrderStatus에 따라 SettlementStatus 변경
    settlementStatus: SettlementStatus; // 정산상태
    saleAmount: number; // 판매 금액 (이 판매자 상품의 price × count 합계, '쿠폰 할인 전')
    fee: number; // Paygo에서 가져가는 수수료(백분율을 통해 받아온 값 - saleAmount에서 ~%만큼 떼서 fee 프로퍼티에 넣음)
    amount: number; // 판매자 수익(saleAmount - fee)
    createdAt: string; // 정산 건 시작 시각
    settledAt?: string; // 정산이 완료(completed)된 시각
}