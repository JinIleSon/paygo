import { create } from "zustand";
import type { Toast } from "../types/toast";

interface ToastStore {
    toasts: Toast[],
    showToast: (message: string, type?: Toast['type']) => void;
    removeToast: (id: number) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
    toasts: [],

    showToast: (message, type = 'success') => {
        const id = Date.now();

        set((state) => ({
            toasts: [...state.toasts, { id, message, type }]
        }));

        // 2초 뒤 state에서 제거
        setTimeout(() => {
            set((state) => ({
                toasts: state.toasts.filter((t) => t.id !== id)
            }));
        }, 2000);
    },

    removeToast: (id) => {
        set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id)
        }));
    }
}));