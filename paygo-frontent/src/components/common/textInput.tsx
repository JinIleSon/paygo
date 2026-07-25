import React from 'react';
import { cn } from '../../lib/utils';

interface TextInputProps {
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

function TextInput({ value, onChange, placeholder, className, ...props }: TextInputProps) {
    const base =
        'w-full leading-10 pl-3.5 h-10 rounded-md outline-none bg-white border border-[#D9D9D9]';

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={cn(base, `font-medium text-gray-600`, className)}
            {...props}
        />
    );
}

export default TextInput;
