import AuthLayout from "../../components/layout/AuthLayout.tsx";
import { useState, useRef } from "react";
import { IconCreditCard, IconWallet, IconShoppingCart, IconChartBar } from "@tabler/icons-react";

function LoginPage(){
    const [password, setPassword] = useState('');
    const [focused, setFocused] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <AuthLayout>
            <div className="flex h-screen min-w-[1280px]"> {/* 1280px 이상은 내부 컴포넌트(1280px 이하)에 대해 찌그러지지 않음 */}
                <div className="flex-1 text-center content-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center gap-3 text-3xl font-medium">
                            <div className="w-[60px] h-[60px] rounded-2xl bg-[#6266f1] flex items-center justify-center">
                                <IconCreditCard size={34} color="white"/> {/* 아이콘은 tabler에서 사용 */}
                            </div>
                            <div className="">
                                <span className="text-[#6266f1]">Pay</span>
                                <span>go</span>
                            </div>
                        </div>
                        <div className="mt-10 mb-10 text-gray-400 font-medium">
                            <div className="mb-1">
                                충전부터 결제, 정산까지
                            </div>
                            <div>
                                하나의 지갑으로 연결되는 경험
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-3.5">
                                <div className="w-[50px] h-[50px] rounded-2xl bg-[#edecff] flex items-center justify-center">
                                    <IconWallet size={28} color="#8679dc"/> {/* 아이콘은 tabler에서 사용 */}
                                </div>
                                <div className="text-[#49576f] flex flex-col">
                                    <div className="font-bold text-base text-start">
                                        간편 지갑 충전
                                    </div>
                                    <div className="font-medium text-sm text-gray-400 mt-0.5">
                                        내 계좌에서 바로 충전
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3.5 mt-5">
                                <div className="w-[50px] h-[50px] rounded-2xl bg-[#e8fbf2] flex items-center justify-center">
                                    <IconShoppingCart size={28} color="#6ccfa8"/> {/* 아이콘은 tabler에서 사용 */}
                                </div>
                                <div className="text-[#49576f] font-medium flex flex-col">
                                    <div className="font-bold text-base text-start">
                                        빠른 결제
                                    </div>
                                    <div className="font-medium text-sm text-gray-400 mt-0.5">
                                        원클릭으로 상품 구매
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3.5 mt-5">
                                <div className="w-[50px] h-[50px] rounded-2xl bg-[#fef9eb] flex items-center justify-center">
                                    <IconChartBar size={28} color="#e0b36b"/> {/* 아이콘은 tabler에서 사용 */}
                                </div>
                                <div className="text-[#49576f] font-medium flex flex-col">
                                    <div className="font-bold text-base text-start">
                                        소비 분석
                                    </div>
                                    <div className="font-medium text-sm text-gray-400 mt-0.5">
                                        지출 패턴을 한 눈에
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[740px] text-center content-center border-l border-[#D9D9D9] border-solid bg-[#fafafa]">
                    <div className="ml-20 text-start">
                        <div className="flex flex-col">
                            <div className="text-3xl font-medium text-">
                                로그인
                            </div>
                            <div className="text-[#bdb6b1] font-bold mt-2">
                                Paygo 계정으로 시작하세요
                            </div>
                        </div>
                        <div className="mt-10 text-[#bdb6b1] font-medium text">
                            <div className="mb-2">
                                이메일
                            </div>
                            <div>
                                <input type="text" placeholder="example@email.com" className="font-medium text-gray-600 pl-3.5 w-[400px] h-[40px] leading-[40px] rounded-md outline-none border border-[#D9D9D9]"/>
                            </div>
                        </div>
                        <div className="mt-5 text-[#bdb6b1] font-medium text">
                            <div className="mb-2">
                                비밀번호
                            </div>
                            <div className="relative w-[400px] h-[40px]"
                            onClick={() => inputRef.current?.focus()}>
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
                                        <span className="inline-block w-[1px] h-[22px] bg-gray-600 ml-[1px] animate-blink"/>
                                    )}
                                    {!password && !focused && (
                                        <span className="absolute text-[12px] tracking-widest text-gray-400">●●●●●●●</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default LoginPage