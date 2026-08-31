import { useState } from 'react';
import SelectBox from '../common/selectBox';
import ModalShell from './modalShell';
import Button from '../common/button';

interface ReturnRequestModalProps {
    title: string;
    description: string;
    category: string;
    text: string;
    cancelLabel: string;
    confirmLabel: string;
    onClose: () => void;
    onConfirm: (reason: string, detailedReason: string) => void;
}

function ReturnRequestModal({
    title,
    description,
    category,
    text,
    cancelLabel,
    confirmLabel,
    onClose,
    onConfirm,
}: ReturnRequestModalProps) {
    const [reason, setReason] = useState('simple_change');
    const [detailedReason, setDetailedReason] = useState('');

    return (
        <ModalShell onClose={onClose}>
            <div className="flex flex-col gap-2">
                <div className="font-medium text-lg">{title}</div>
                <div className="whitespace-pre-line text-gray-500 text-sm">{description}</div>
                <div className="mt-2 font-medium text-gray-600">{category}</div>
                <div>
                    <SelectBox
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full"
                    >
                        <option value="simple_change">단순변심</option>
                        <option value="wrong_product">상품문제</option>
                        <option value="wrong_delivery">배송문제</option>
                    </SelectBox>
                </div>
                <div className="mt-3 font-medium text-gray-600">{text}</div>
                <div>
                    <textarea
                        value={detailedReason}
                        onChange={(e) => setDetailedReason(e.target.value)}
                        name=""
                        id=""
                        placeholder="구체적인 사유를 입력해주세요."
                        className="p-3 w-full border border-[#D1D5DB] hover:border-[#C5C8CD] hover:bg-[#F4F4F4] duration-500 rounded-md outline-none h-40"
                    ></textarea>
                </div>
                <div className="flex gap-3 w-full mt-3">
                    <Button variant="secondary" onClick={onClose} className="w-1/2 h-10">
                        {cancelLabel}
                    </Button>
                    <Button
                        variant="retry"
                        onClick={() => onConfirm(reason, detailedReason)}
                        className="w-1/2 h-10"
                    >
                        {confirmLabel}
                    </Button>
                </div>
            </div>
        </ModalShell>
    );
}

export default ReturnRequestModal;
