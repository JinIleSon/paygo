import Button from "../common/button";
import ModalShell from "./modalShell";

interface ConfirmModalProps {
    title: string;
    description: string;
    cancelLabel: string;
    confirmLabel: string;
    variant?: 'secondary' | 'primary' | 'cancel';
    onClose: () => void;
    onConfirm: () => void;
}

function ConfirmModal({ title, description, cancelLabel, confirmLabel, variant, onClose, onConfirm } : ConfirmModalProps) {
    return (
        <ModalShell onClose={onClose}>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
            <div className="flex gap-3">
                <Button variant='secondary' onClick={onClose}>
                    {cancelLabel}
                </Button>
                <Button variant={variant} onClick={onConfirm}>
                    {confirmLabel}
                </Button>
            </div>
        </ModalShell>
    );
}

export default ConfirmModal;