export interface User {
    userId: string;          // PK이자 사용자 ID
    name: string;
    email: string;
    password: string;
    phone: string;
    zipCode: string;
    roadAddress: string;
    detailAddress: string;
    grade: string;           // 등급: '일반회원', 'VIP', 'VVIP'
}