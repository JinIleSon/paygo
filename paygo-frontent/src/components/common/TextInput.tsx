import React from 'react';
import { cn } from '../../lib/utils';

interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

function TextInput({ value, onChange, placeholder, className, ...props }) {
    const base =
        'w-full leading-[40px] pl-3.5 h-[40px] rounded-md outline-none bg-white border border-[#d9d9d9]';

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
