import React from 'react';
import { cn } from '../../lib/utils';

interface TextInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    readOnly?: boolean;
}

function TextInput({ value, onChange, placeholder, readOnly = false, className, ...props }: TextInputProps) {
    const base =
        'w-full leading-10 font-medium text-gray-600 pl-3.5 h-10 rounded-md outline-none bg-white border border-[#D9D9D9]';

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className={cn(base, `read-only:bg-gray-100 read-only:cursor-default`, className)}
            {...props}
        />
    );
}

export default TextInput;
