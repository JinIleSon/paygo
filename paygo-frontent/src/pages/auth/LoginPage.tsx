import AuthLayout from '../../components/layout/auth/AuthLayout.tsx';
import { useState, useRef } from 'react';
import {
    IconCreditCard,
    IconWallet,
    IconShoppingCart,
    IconChartBar,
    IconBrandGoogle,
} from '@tabler/icons-react';
import notebookImg from '../../assets/notebook.webp';
import Button from '../../components/common/Button.tsx';
import PasswordInput from '../../components/layout/auth/PasswordInput.tsx';

function LoginPage() {

    return (
        <AuthLayout>
            <div className="flex h-screen min-w-[1280px]">
                {/* 1280px 이상은 내부 컴포넌트(1280px 이하)에 대해 찌그러지지 않음 */}
                <div className="flex-[4.5] text-center content-center relative overflow-hidden">
                    {/* 배경 이미지 레이어 */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${notebookImg})`,
                            opacity: 0.1, // 투명도 조절(0.1 ~ 0.25 권장)
                        }}
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center gap-3 text-3xl font-medium">
                            <div className="w-[60px] h-[60px] rounded-2xl bg-[#6266f1] flex items-center justify-center">
                                <IconCreditCard size={34} color="white" />{' '}
                            </div>
                            <div className="">
                                <span className="text-[#6266f1]">Pay</span>
                                <span>go</span>
                            </div>
                        </div>
                        <div className="mt-10 mb-10 text-gray-400 font-medium">
                            <div className="mb-1">충전부터 결제, 정산까지</div>
                            <div>하나의 지갑으로 연결되는 경험</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-3.5">
                                <div className="w-[50px] h-[50px] rounded-2xl bg-[#edecff] flex items-center justify-center">
                                    <IconWallet size={28} color="#8679dc" />{' '}
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
                                    <IconShoppingCart size={28} color="#6ccfa8" />{' '}
                                </div>
                                <div className="text-[#49576f] font-medium flex flex-col">
                                    <div className="font-bold text-base text-start">빠른 결제</div>
                                    <div className="font-medium text-sm text-gray-400 mt-0.5">
                                        원클릭으로 상품 구매
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3.5 mt-5">
                                <div className="w-[50px] h-[50px] rounded-2xl bg-[#fef9eb] flex items-center justify-center">
                                    <IconChartBar size={28} color="#e0b36b" />{' '}
                                </div>
                                <div className="text-[#49576f] font-medium flex flex-col">
                                    <div className="font-bold text-base text-start">소비 분석</div>
                                    <div className="font-medium text-sm text-gray-400 mt-0.5">
                                        지출 패턴을 한 눈에
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[5.5] flex justify-center items-center border-l border-[#D9D9D9] border-solid bg-[#fafafa]">
                    <div className="w-[480px]">
                        <div className="flex flex-col">
                            <div className="text-3xl font-medium">로그인</div>
                            <div className="text-[#bdb6b1] font-bold mt-2">
                                Paygo 계정으로 시작하세요
                            </div>
                        </div>
                        <div className="mt-10 text-[#bdb6b1] font-medium text">
                            <div className="mb-2">이메일</div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="example@email.com"
                                    className="font-medium text-gray-600 pl-3.5 w-full h-[40px] leading-[40px] rounded-md outline-none bg-white border border-[#D9D9D9]"
                                />
                            </div>
                        </div>
                        <div className="mt-5 text-[#bdb6b1] font-medium">
                            <div className="flex mb-2">
                                <div>비밀번호</div>
                                <div className="ml-auto">
                                    <a
                                        href="#"
                                        className="text-xs text-[#6365EF] font-light underline"
                                    >
                                        비밀번호 찾기
                                    </a>
                                </div>
                            </div>
                            <div>
                                <PasswordInput />
                            </div>
                            <div className="mt-2 text-sm font-light">
                                8자 이상, 영문/숫자/특수문자 포함
                            </div>
                            <div className="mt-4 text-sm gap-2 flex">
                                <div>
                                    <input type="checkbox" name="" id="" className="mt-[1px]" />
                                </div>
                                <div>로그인 상태 유지</div>
                            </div>
                            <div className="mt-5">
                                <Button variant="primary" className="h-[40px] w-full">
                                    로그인
                                </Button>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <div className="flex-1 border-t border-[#d8d8d8]"></div>
                                <span className="text-sm font-light">또는</span>
                                <div className="flex-1 border-t border-[#d8d8d8]"></div>
                            </div>
                            <div className="mt-6">
                                <Button
                                    variant="secondary"
                                    className="flex items-center justify-center gap-1.5 w-full h-[50px]"
                                >
                                    <IconBrandGoogle size={20} color="#666666" />
                                    <span className="text-[14px] text-[#666666]">
                                        Google로 계속하기
                                    </span>
                                </Button>
                            </div>
                            <div className="text-xs text-center mt-6">
                                <span className="mr-1">아직 계정이 없으신가요?</span>
                                <a href="#" className="text-[#6365EF] font-medium underline">
                                    회원가입
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default LoginPage;
