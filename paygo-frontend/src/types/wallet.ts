export interface Wallet {
    id: number; // PK
    userId: string; // 사용자 아이디
    balance: number; // 잔액
    minCharge: number; // 최소 충전금액
    maxCharge: number; // 최대 충전금액
}