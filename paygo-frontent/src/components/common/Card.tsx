import type React from "react";
import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface CardProps {
    variant ?: 'primary' | 'secondary';
    className?: string;
    children?: ReactNode;
}

function Card({variant = 'secondary', children, className, ...props}: CardProps){
    
    const base = 'px-8 rounded-2xl';

    const variants = {
        primary: 'bg-[#6266F1] py-6.5',
        secondary: 'border border-[#D9D9D9] bg-white py-5'
    }
    
    return(
        <div className={cn(base, variants[variant], className)} {...props}>
            {children}
        </div>
    );   
}

export default Card;