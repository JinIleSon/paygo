// 빠른 송금 목록 API 응답 타입 (테이블 없음, transaction_histories·users·wallets 조인 결과)
export interface QuickTransferOut {
    userId: number; // 상대방 users.id (화면 미표시, 송금 대상 지정용)
    name: string; // 이름
    walletNumber: string; // 지갑계좌번호
}