export interface Coupon {
    id: string;
    userId: string; // 쿠폰 소유자
    name: string; // 쿠폰명
    discountType: 'percent' | 'fixed'; // 할인이 정률인지 정액인지
    discountValue: number;
    status: 'active' | 'used' | 'expired'; // 활성, 사용, 만료
    expiresAt: string; // 만료일
}
