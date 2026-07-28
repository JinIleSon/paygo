import { useToastStore } from '../../stores/useToastStore';

function ToastContainer() {
    const toasts = useToastStore((state) => state.toasts);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-3">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`animate-toast-in px-4 py-3 rounded-lg shadow-lg text-sm text-white ${
                        toast.type === 'success' ? 'bg-gray-900' : 'bg-red-500'
                    }`}
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );
}

export default ToastContainer;
