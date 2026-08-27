import Button from '../common/button';
import ModalShell from './modalShell';

interface ConfirmModalProps {
    title: string;
    description: string;
    cancelLabel: string;
    confirmLabel: string;
    variant?: 'secondary' | 'primary' | 'cancel';
    onClose: () => void;
    onConfirm: () => void;
}

function ConfirmModal({
    title,
    description,
    cancelLabel,
    confirmLabel,
    variant,
    onClose,
    onConfirm,
}: ConfirmModalProps) {
    return (
        <ModalShell onClose={onClose}>
            <div className="flex flex-col gap-2">
                <div className="font-medium text-lg">{title}</div>
                <div className="text-gray-600">{description}</div>
                <div className="flex gap-3 w-full mt-3">
                    <Button variant="secondary" onClick={onClose} className="w-1/2 h-10">
                        {cancelLabel}
                    </Button>
                    <Button variant={variant} onClick={onConfirm} className="w-1/2 h-10">
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </ModalShell>
    );
}

export default ConfirmModal;
