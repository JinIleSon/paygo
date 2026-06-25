import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
    const base = 'border rounded-md cursor-pointer duration-500 transition-colors';

    const variants = {
        primary: 'border-[#4f4f4f] text-[#4D4D4D] hover:bg-gray-300',
        secondary: 'border-[#d9d9d9] bg-white hover:bg-gray-300',
    };

    return (
        <button className={cn(base, variants[variant], className)} {...props}>
            {children}
        </button>
    );
}

export default Button;
