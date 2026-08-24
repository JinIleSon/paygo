import type React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function ModalShell({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return createPortal(
        <div
            className="fixed inset-0 bg-black/45 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="bg-white rounded-2xl p-5 w-80" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    );
}

export default ModalShell;
