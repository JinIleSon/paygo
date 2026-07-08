import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    const base = 'border rounded-md cursor-pointer duration-500 transition-colors';

    const variants = {
        primary: 'border-[#D9D9D9] bg-white text-[#4D4D4D] hover:border-[#B4B6F8] hover:bg-[#F5F6FF] hover:text-[#9294F5]',
        secondary: 'border-[#D9D9D9] bg-white hover:bg-[#F0F0F0] hover:border-[#BCBCBD]',
    };

    return (
        <button className={cn(base, variants[variant], className)} {...props}>
            {children}
        </button>
    );
}

export default Button;
