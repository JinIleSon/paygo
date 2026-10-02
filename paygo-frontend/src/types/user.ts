export interface User {
    id: number; // PK
    loginId: string;          // 사용자 실제 아이디
    name: string;
    email: string;
    password: string;
    phone: string;
    zipCode: string;
    roadAddress: string;
    detailAddress: string;
    grade: string;           // 등급: '일반회원', 'VIP', 'VVIP'
}