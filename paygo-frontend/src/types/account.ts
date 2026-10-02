export interface Account {
    id: number; // PK
    userId: number; // FK -> User의 id(식별자)
    bankName: string; // 은행 이름
    accountNumber: string; // 계좌번호
    isPrimary: boolean; // 대표 계좌 여부(충전/출금 시 기본으로 쓸 계좌)
}