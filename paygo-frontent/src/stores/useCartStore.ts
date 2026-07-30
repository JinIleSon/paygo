import { create } from 'zustand';
import type { CartItem } from '../types/cartItem';

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (cartItemId: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addItem: (item) => {
        const cartItemId = crypto.randomUUID(); // 36자리 문자열(8-4-4-4-12). 각 자리 16진수로 랜덤하게 채워짐. 같은 값이 나올 확률이 0에 가까움.
        set((state) => ({
            items: [...state.items, { ...item, cartItemId }],
        }));
    },

    removeItem: (cartItemId) =>
        set((state) => ({
            items: state.items.filter((i) => i.cartItemId !== cartItemId),
        })),
}));
