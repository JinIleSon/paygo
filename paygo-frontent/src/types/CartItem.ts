import type { Icon } from '@tabler/icons-react';

export interface CartItem {
    productId: number;
    productName: string;
    size?: number;
    color: string;
    count: number;
    icon: Icon;
    itemBg: string;
    itemText: string;
}
