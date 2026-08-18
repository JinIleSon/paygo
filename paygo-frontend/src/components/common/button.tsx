import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'cancel';
    isDisabled?: boolean;
}

function Button({ variant = 'primary', isDisabled = false, className, children, ...props }: ButtonProps) {
    const base = 'text-gray-400 border rounded-md cursor-pointer duration-500 transition-colors disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'border-[#D1D5DB] bg-white text-[#4D4D4D] hover:border-[#B4B6F8] hover:bg-[#F5F6FF] hover:text-[#9294F5]',
        secondary: 'border-[#D1D5DB] hover:text-gray-700 bg-white hover:bg-[#F4F4F4] hover:border-[#C5C8CD]',
        cancel: 'border-red-400 bg-[#FFE4E4] text-red-400 hover:bg-red-200 hover:border-red-500 hover:text-red-500'
    };

    return (
        <button 
            disabled={isDisabled}
            className={cn(base, variants[variant], className)} 
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
