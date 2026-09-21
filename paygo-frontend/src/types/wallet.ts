export interface Wallet {
    userId: string; // 사용자 ID, PK
    balance: number; // 잔액
    minCharge: number; // 최소 충전금액
    maxCharge: number; // 최대 충전금액
}