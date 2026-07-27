import { create } from "zustand";
import type { Toast } from "../types/toast";

interface ToastState {
    toasts: Toast[];
    showToast: (message: string, type?: Toast['type']) => void;
    removeToast: (id: number) => void;
}

export const useToastStore = create<ToastState>((set) => ({
    toasts: [],

    showToast: (message, type = 'success') => {
        const id = Date.now();

        // 새 토스트를 배열 끝에 추가
        set((state) => ({
            toasts: [...state.toasts, { id, message, type }]
        }));

        // 2초 뒤 같은 id를 배열에서 제거
        setTimeout(() => {
            set((state) => ({
                toasts: state.toasts.filter((t) => t.id !== id)
            }));
        }, 2000);
    },

    removeToast: (id) => 
        set((state) => ({
            toasts: state.toasts.filter((t) => t.id !== id)
        }))
}));