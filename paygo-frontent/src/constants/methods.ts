import { user } from "./user";

export const chargeMethods = [
    { id: 'account', label: '계좌이체', desc: '국민·신한·우리·하나 등' },
    { id: 'card', label: '신용/체크카드', desc: 'VISA·MasterCard 등' },
    { id: 'digitalWallet', label: '간편결제', desc: '카카오페이·네이버페이' },
];

export const paymentMethods = [
    { id: 'paygo', label: 'Paygo 잔액 결제', desc: `사용 가능 잔액 ${user.balance.toLocaleString()}원`},
    ...chargeMethods,
]