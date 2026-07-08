import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    const base = 'border rounded-md cursor-pointer duration-500 transition-colors';

    const variants = {
        primary: 'border-[#4F4F4F] text-[#4D4D4D] hover:bg-[#DDDDDD] hover:border-indigo-100',
        secondary: 'border-[#D9D9D9] bg-white hover:bg-[#DDDDDD] hover:border-indigo-100',
    };

    return (
        <button className={cn(base, variants[variant], className)} {...props}>
            {children}
        </button>
    );
}

export default Button;
