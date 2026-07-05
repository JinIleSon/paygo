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
        secondary: 'rounded-md'
    };

    return (
        <button onClick={onClick}
        className={cn(
            variants[variant], 
            isSelected
            ? 'border-[#6266F1] bg-[#E4E4FF] text-[#6266F1]'
            : 'text-[gray] hover:bg-[#F5F6FF] hover:text-[#6266F1] cursor-pointer duration-500',
            className
        )}
        {...props}
        >
            {children}
        </button>
    );
}

export default SelectCard;