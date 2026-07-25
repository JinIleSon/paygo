import { create } from "zustand";
import type { CartItem } from "../types/cartItem";

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (productId: number, color: string, size?: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addItem: (item) => 
        set((state) => ({
            items: [...state.items, item]
    })),

    removeItem: (productId, color, size) =>
        set((state) => ({
            items: state.items.filter(
                (i) => !(i.productId === productId && i.color === color && i.size === size)
            )
        }))
}));