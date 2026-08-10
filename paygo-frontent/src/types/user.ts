export interface User {
    id: string;
    password: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    grade: string; // 등급: '일반회원', 'VIP', 'VVIP'
}