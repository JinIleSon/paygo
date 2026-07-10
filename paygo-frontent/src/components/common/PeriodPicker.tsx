import { useEffect, useRef, useState } from 'react';
import { type DateRange, DayPicker } from 'react-day-picker';
import { ko } from 'react-day-picker/locale';
import 'react-day-picker/style.css';
import Button from './Button';
import { IconCalendar, IconChevronDown } from '@tabler/icons-react';
import { format } from 'date-fns';

interface PeriodPickerProps {
    value?: DateRange;
    onChange: (range: DateRange | undefined) => void;
}

function PeriodPicker({ value, onChange }: PeriodPickerProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative">
            <Button variant="secondary" onClick={() => setOpen(!open)}>
                <div className="flex items-center gap-1.5 p-2 w-[14.5rem]">
                    <IconCalendar size={30} className="" />
                    <div className="">
                        {value?.from ? format(value.from, 'yy.MM.dd') + ' ~ ' : '기간 선택'}
                        {value?.to ? format(value.to, 'yy.MM.dd') : ''}
                    </div>
                    <IconChevronDown size={14} className="ml-auto mr-1" />
                </div>
            </Button>

            {open && (
                <div className="absolute right-0 top-[calc(100%+8px)] z-10 rounded-xl border border-gray-200 bg-white p-4 shadow-lg outline-none">
                    <DayPicker mode="range" selected={value} onSelect={onChange} locale={ko} />
                </div>
            )}
        </div>
    );
}

export default PeriodPicker;
