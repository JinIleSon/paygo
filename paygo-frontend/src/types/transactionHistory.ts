export interface TransactionHistory {
    id: number; // PK
    userId: string; // FK -> 사용자ID
    // TODO: 실제 거래내역 연동 시 orderId 데이터도 함께 추가
    orderId?: string; // FK -> orders 테이블, order_items 테이블, products 테이블을 차례로 조인하여 가져온 뒤 한 달간 사용한 가격 파악(할인까지 추가)
    content: string; // 내용
    type: 'charge' | 'buy' | 'refund'; // 유형
    paymentMethod: string; // 결제수단
    amount: number; // 이 거래로 오간 금액
    balance: number; // 이 거래 완료 직후의 잔액
    statement: 'complete' | 'fail' | 'processing'; // 상태
    createdAt: string; // 거래시각
}