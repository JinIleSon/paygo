export interface TransactionHistory {
    id: number; // PK
    userId: number; // FK -> User의 id(식별자)
    // TODO: 실제 거래내역 연동 시 orderId 데이터도 함께 추가
    orderId?: number; // FK -> orders 테이블, order_items 테이블, products 테이블을 차례로 조인하여 가져온 뒤 한 달간 사용한 가격 파악(할인까지 추가)
    settlementId?: number; // FK -> 판매했을 때 정산 테이블(settlements) id
    content: string; // 내용
    type: 'charge' | 'buy' | 'refund' | 'transferIn' | 'transferOut' | 'settlement'; // 유형
    paymentMethod?: string; // 결제수단(결제 시)
    amount: number; // 이 거래로 오간 금액(판매자가 정산받을 때는 쿠폰 무시, 수수료만 빼고 받기)
    balance: number; // 이 거래 완료 직후의 잔액
    statement: 'completed' | 'failed' | 'processing'; // 상태
    createdAt: string; // 거래시각
    counterpartyId?: number; // 입금·출금용. 거래 상대방 사용자 User의 id(식별자). type이 transferIn 또는 transferOut일 때
}