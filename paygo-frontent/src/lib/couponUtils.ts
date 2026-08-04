import type { Coupon } from '../types/coupon';

// 쿠폰 사용 가능 여부
export function isCouponUsable(coupon: Coupon) : boolean {
    const isExpired = new Date(coupon.expiresAt) < new Date();
    if (!isExpired && coupon.status === 'active')
        return true;
    return false;
}

// 쿠폰 할인 방식(% 또는 정액)
export function calculateDiscountPrice(total: number, coupon: Coupon): number {
    // 정률일 때 할인
    if (coupon.discountType === 'percent')
        return total * (coupon.discountValue / 100);

    // 정액일 때 할인
    return coupon.discountValue;
}

// 현재가 대비 가장 많은 할인이 되는 쿠폰(정률/정액) 가격 
export function getHighestDiscount(total: number, coupon: Coupon[]): number {
    // 쿠폰 사용 가능("active" + 기간 내) 중 가장 할인이 많이 되는 값
    const usableCoupon = coupon.filter((c) => isCouponUsable(c));
    return usableCoupon.reduce((max, c) => Math.max(max, calculateDiscountPrice(total, c)), 0);
}