import type { Coupon } from '../types/coupon';

export const coupons: Coupon[] = [
    {
        id: '1',
        name: '첫 구매 혜택 5,000원권',
        discountType: 'fixed',
        discountValue: 5000,
        status: 'expired',
        expiresAt: '2026-08-03',
    },
    {
        id: '2',
        name: '신규 가입 10% 할인',
        discountType: 'percent',
        discountValue: 10,
        status: 'active',
        expiresAt: '2026-08-21',
    },
    {
        id: '3',
        name: 'Paygo하자 이벤트',
        discountType: 'fixed',
        discountValue: 10000,
        status: 'used',
        expiresAt: '2026-08-21',
    },
    {
        id: '4',
        name: '개인 회원 이벤트',
        discountType: 'fixed',
        discountValue: 20000,
        status: 'active',
        expiresAt: '2026-08-21',
    },
];
