import React, { useRef, useState } from 'react';

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordInput({ value, onChange, ...props }: PasswordInputProps) {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div
            className="relative w-full h-10 bg-white"
            onClick={() => inputRef.current?.focus()}
        >
            {/* 실제 입력받는 투명 input */}
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)} // 클릭하면 focused = true
                onBlur={() => setFocused(false)} // 다른 곳 누르면 focused = false
                className="absolute inset-0 w-full h-full opacity-0 cursor-text"
            />
            {/* 보여주는 div */}
            <div className="flex items-center h-full pl-3.5 border border-[#D9D9D9] rounded-md text-gray-600">
                <span className="text-xs tracking-widest text-gray-600">
                    {'●'.repeat(value.length)}
                </span>
                {/* 가짜 커서 */}
                {focused && (
                    <span className="inline-block w-px h-[1.375rem] bg-gray-600 ml-px animate-blink" />
                )}
                {!value && !focused && (
                    <span className="absolute text-xs tracking-widest text-gray-400">
                        ●●●●●●●
                    </span>
                )}
            </div>
        </div>
    );
}

export default PasswordInput;
