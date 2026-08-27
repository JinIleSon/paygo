import { useState } from "react";
import SelectBox from "../common/selectBox";
import ModalShell from "./modalShell";
import Button from "../common/button";

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

function ReturnRequestModal({ title, description, category, text, cancelLabel, confirmLabel, onClose, onConfirm } : ReturnRequestModalProps){
    const [reason, setReason] = useState('simple_change');
    const [detailedReason, setDetailedReason] = useState('');
    
    return (
        <ModalShell onClose={onClose}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{category}</div>
            <div>
                <SelectBox value={reason} onChange={(e) => setReason(e.target.value)}>
                    <option value="simple_change">단순 변심</option>
                    <option value="wrong_product">상품문제</option>
                    <option value="wrong_delivery">배송문제</option>
                </SelectBox>
            </div>
            <div>{text}</div>
            <div>
                <textarea
                    value={detailedReason} 
                    onChange={(e) => setDetailedReason(e.target.value)}
                    name="" id="" placeholder="구체적인 사유를 입력해주세요.">
                </textarea>
            </div>
            <div>
                <Button variant="secondary" onClick={onClose}>{cancelLabel}</Button>
                <Button variant="retry" onClick={() => onConfirm(reason, detailedReason)}>{confirmLabel}</Button>
            </div>
        </ModalShell>
    );
}

export default ReturnRequestModal;