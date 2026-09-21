export interface Account {
    id: string; // PK
    userId: string; // FK -> 사용자 ID
    bankName: string; // 은행 이름
    accountNumber: string; // 계좌번호
    isPrimary: boolean; // 대표 계좌 여부(충전/출금 시 기본으로 쓸 계좌)
}