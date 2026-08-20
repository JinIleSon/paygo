import type { Classification } from '../types/classification';

export const types: Classification[] = [
    { id: 'all', label: '전체' },
    { id: 'charge', label: '충전' },
    { id: 'buy', label: '구매' },
    { id: 'refund', label: '환불' },
];

export const statement: Classification[] = [
    { id: 'all', label: '전체' },
    { id: 'complete', label: '완료' },
    { id: 'fail', label: '실패' },
    { id: 'processing', label: '처리중' },
];

export const productClassification: Classification[] = [
    { id: 'all', label: '전체' },
    { id: 'fashion', label: '패션' },
    { id: 'electronicDevices', label: '전자기기' },
    { id: 'sports', label: '스포츠' },
    { id: 'dailyNecessities', label: '생활용품' },
    { id: 'food', label: '식품' },
];

export const orderClassification: Classification[] = [
    { id: 'all', label: '전체' },
    { id: 'paymentComplete', label: '결제완료' },
    { id: 'shipping', label: '배송중' },
    { id: 'delivered', label: '배송완료' },
    { id: 'cancelled', label: '취소' },
    { id: 'refunded', label: '환불' },
    { id: 'paymentFailed', label: '결제실패' },
];
