import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SelectCardProps{
    variant?: 'primary' | 'secondary';
    isSelected?: boolean;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
}

function SelectCard({variant = 'primary', isSelected, onClick, children, className, ...props} : SelectCardProps){

    const variants = {
        primary : 'rounded-full',
        secondary: 'rounded-xl'
    };

    return (
        <button onClick={onClick}
        className={cn(
            'transition-all duration-200',
            variants[variant], 
            isSelected
            ? 'border border-[#6C6DD3] bg-[#E4E4FF]'
            : 'border border-transparent border-[#D9D9D9] text-[gray] hover:bg-[#F5F6FF] cursor-pointer duration-500',
            className
        )}
        {...props}
        >
            {children}
        </button>
    );
}

export default SelectCard;