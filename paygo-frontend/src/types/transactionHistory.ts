export interface TransactionHistory {
    id: string; // PK
    userId: string; // FK -> 사용자ID
    content: string; // 내용
    type: string; // 유형('charge', 'buy', 'refund')
    paymentMethod: string; // 결제수단
    amount: number; // 이 거래로 오간 금액
    balance: number; // 이 거래 완료 직후의 잔액
    statement: string; // 상태('complete', 'fail', 'processing')
    createdAt: string; // 거래시각
}