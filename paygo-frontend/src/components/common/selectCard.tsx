import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SelectCardProps{
    variant?: 'primary' | 'secondary';
    importance?: 'high' | 'low';
    isSelected?: boolean;
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
}

function SelectCard({variant = 'primary', importance = 'low', isSelected, onClick, children, className, ...props} : SelectCardProps){

    const variants = {
        primary : 'rounded-full px-3.5 py-1',
        secondary: 'rounded-xl'
    };

    const colorStyles = {
        high : {
            selected: 'border border-[#6C6DD3] bg-[#E4E4FF] text-[#6266F1]',
            unselected: 'border border-[#D9D9D9] text-[gray] hover:border-[#B4B6F8] hover:bg-[#F5F6FF] hover:text-[#9294F5] cursor-pointer duration-500'
        },
        low : {
            selected: 'border border-[#C2C2C2] bg-[#EEEEEE] text-gray-900',
            unselected: 'border hover:text-gray-700 bg-white hover:bg-[#F4F4F4] hover:border-[#C5C8CD]',
        }
    }

    return (
        <button onClick={onClick}
        className={cn(
            'border border-[#D1D5DB] text-gray-400 transition-all duration-200 cursor-pointer',
            variants[variant], 
            isSelected
            ? colorStyles[importance].selected
            : colorStyles[importance].unselected,
            className
        )}
        {...props}
        >
            {children}
        </button>
    );
}

export default SelectCard;