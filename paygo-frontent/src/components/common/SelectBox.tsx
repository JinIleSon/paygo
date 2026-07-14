import { IconChevronDown } from '@tabler/icons-react';
import { cn } from '../../lib/utils';
import type React from 'react';

interface SelectBoxProps {
    children?: React.ReactNode;
    className?: string;
}

function SelectBox({ children, className, ...props }: SelectBoxProps) {
    const base =
        'text-gray-400 appearance-none pl-3.5 w-[14.5rem] h-[2.875rem] outline-none border border-[#D1D5DB] hover:text-gray-700 bg-white hover:bg-[#F4F4F4] hover:border-[#C5C8CD] rounded-md cursor-pointer duration-500 transition-colors';

    return (
        <div className="relative ml-auto">
            <select className={cn(base, className)} {...props}>
                {children}
            </select>
            <IconChevronDown
                size={14}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400"
            />
        </div>
    );
}

export default SelectBox;
