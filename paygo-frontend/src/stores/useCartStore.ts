import { create } from 'zustand';
import type { CartItem } from '../types/cartItem';
import { persist } from 'zustand/middleware';

interface CartState {
    items: CartItem[];
    selectedIds: string[];
    addItem: (item: Omit<CartItem, 'cartItemId'>) => void; // cartItemId 필드 없는 CartItem 타입으로 입력받음.
    removeItem: (cartItemId: string) => void;
    updateItem: (cartItemId: string, count: number) => void;
    toggleItem: (cartItemId: string) => void;
    toggleAll: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            selectedIds: [],

            addItem: (item) => {
                const cartItemId = crypto.randomUUID(); // 36자리 문자열(8-4-4-4-12). 각 자리 16진수로 랜덤하게 채워짐. 같은 값이 나올 확률이 0에 가까움.
                set((state) => ({
                    items: [...state.items, { ...item, cartItemId }],
                }));
            },

            removeItem: (cartItemId) =>
                set((state) => ({
                    items: state.items.filter((i) => i.cartItemId !== cartItemId),
                    selectedIds: state.selectedIds.filter((id) => id !== cartItemId )
                })
            ),
            
            updateItem: (cartItemId, count) =>
                set((state) => ({
                    items: state.items.map((i) => i.cartItemId === cartItemId ? { ...i, count } : i),
                })
            ),

            toggleItem: (cartItemId) =>
                set((state) => ({
                    selectedIds: state.selectedIds.includes(cartItemId)
                        ? state.selectedIds.filter((id) => cartItemId !== id)
                        : [...state.selectedIds, cartItemId]
                })
            ),

            toggleAll: () =>
                set((state) => ({
                    selectedIds: state.selectedIds.length === state.items.length
                        ? []
                        : state.items.map((item) => item.cartItemId)
                })
            ),
        }),
        {
            name: 'cart-storage' // localStorage에 저장될 키 이름
        }
    ),
);
