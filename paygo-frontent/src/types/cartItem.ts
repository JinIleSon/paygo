import type { Icon } from '@tabler/icons-react';

export interface CartItem {
    productId: number;
    productName: string;
    size?: number;
    color: string;
    price: number;
    stock: number; // TODO: 목업 단계 임시값, 추후 실시간 재고 조회로 대체 예정
    count: number;
    icon: Icon;
    itemBg: string;
    itemText: string;
}
