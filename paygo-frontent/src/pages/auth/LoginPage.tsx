import AuthLayout from "../../components/layout/AuthLayout.tsx";
import { IconCreditCard, IconWallet, IconShoppingCart, IconChartBar } from "@tabler/icons-react";

function LoginPage(){
    return (
        <AuthLayout>
            <div className="flex h-screen min-w-[1280px]"> {/* 1280px 이상은 내부 컴포넌트(1280px 이하)에 대해 찌그러지지 않음 */}
                <div className="flex-1 text-center content-center">
                    <div className="flex flex-col items-center justify-center border border-b">
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
                <div className="w-[740px] text-center content-center border-l border-[#f1f1f1] border-solid bg-[#fafafa]">
                    폼
                </div>
            </div>
        </AuthLayout>
    )
}

export default LoginPage