import { useRef, useState } from "react"

function PasswordInput(){
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div
            className="relative w-full h-[40px] bg-white"
            onClick={() => inputRef.current?.focus()}
        >
            {/* 실제 입력받는 투명 input */}
            <input
                ref={inputRef}
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused(true)} // 클릭하면 focused = true
                onBlur={() => setFocused(false)} // 다른 곳 누르면 focused = false
                className="absolute inset-0 w-full h-full opacity-0 cursor-text"
            />
            {/* 보여주는 div */}
            <div className="flex items-center h-full pl-3.5 border border-[#D9D9D9] rounded-md text-gray-600">
                <span className="text-[12px] tracking-widest text-gray-600">
                    {'●'.repeat(password.length)}
                </span>
                {/* 가짜 커서 */}
                {focused && (
                    <span className="inline-block w-[1px] h-[22px] bg-gray-600 ml-[1px] animate-blink" />
                )}
                {!password && !focused && (
                    <span className="absolute text-[12px] tracking-widest text-gray-400">
                        ●●●●●●●
                    </span>
                )}
            </div>
        </div>
    )
}

export default PasswordInput