export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    grade: string;           // 등급: '일반회원', 'VIP', 'VVIP'
    balance: number;
    minCharge: number;       // 충전 금액 최소
    maxCharge: number;       // 충전 금액 최대
    accountNumber: string;   // 계좌번호
}