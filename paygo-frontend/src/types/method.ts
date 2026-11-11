// 결제 수단 공통 타입
export type PaymentMethod = 'paygo' | 'account' | 'card' | 'simplePayment';

// 충전 수단 공통 타입(paygo 제외)
export type ChargeMethod = Exclude<PaymentMethod, 'paygo'>;