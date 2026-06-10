import AuthLayout from '../../components/layout/auth/AuthLayout';
import notebookImg from '../../assets/notebook.webp';
import { IconCreditCard } from '@tabler/icons-react';
import TextInput from '../../components/common/TextInput';
import PasswordInput from '../../components/common/PasswordInput';
import Button from '../../components/common/Button';

function SignupPage() {
    return (
        <AuthLayout>
            <div className="flex-[4.5] text-center content-center relative overflow-hidden">
                {/* 배경 이미지 레이어 */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${notebookImg})`,
                        opacity: 0.1, // 투명도 조절(0.1 ~ 0.25 권장)
                    }}
                />
                <div className="relative z-10 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-3 text-3xl font-medium">
                        <div className="w-[60px] h-[60px] rounded-2xl bg-[#6266f1] flex items-center justify-center">
                            <IconCreditCard size={34} color="white" />{' '}
                        </div>
                        <div className="">
                            <span className="text-[#6266f1]">Pay</span>
                            <span>go</span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-20">
                        <div className="flex gap-3.5 items-center">
                            <div>
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="20" cy="20" r="20" fill="#6266f1" />
                                    <text
                                        x="20"
                                        y="19"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fill="white"
                                        fontWeight="bold"
                                        fontSize="16"
                                    >
                                        1
                                    </text>
                                </svg>
                            </div>
                            <div className="text-[#49576f] flex flex-col">
                                <div className="font-bold text-base text-start">기본 정보</div>
                                <div className="font-medium text-sm text-gray-400 mt-0.5">
                                    이름, 이메일, 비밀번호
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="flex justify-center items-center w-[2px] h-[60px] bg-gray-400 opacity-40 rounded-full my-2"></div>
                        </div>
                        <div className="flex gap-3.5 items-center">
                            <div>
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="20" cy="20" r="20" fill="#6266f1" />
                                    <text
                                        x="20"
                                        y="19"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fill="white"
                                        fontWeight="bold"
                                        fontSize="16"
                                    >
                                        2
                                    </text>
                                </svg>
                            </div>
                            <div className="text-[#49576f] font-medium flex flex-col">
                                <div className="font-bold text-base text-start">본인 인증</div>
                                <div className="font-medium text-sm text-gray-400 mt-0.5">
                                    휴대폰 번호 인증
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="flex justify-center items-center w-[2px] h-[60px] bg-gray-400 opacity-40 rounded-full my-2"></div>
                        </div>
                        <div className="flex gap-3.5 items-center">
                            <div>
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="20" cy="20" r="20" fill="#6266f1" />
                                    <text
                                        x="20"
                                        y="19"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        fill="white"
                                        fontWeight="bold"
                                        fontSize="16"
                                    >
                                        3
                                    </text>
                                </svg>
                            </div>
                            <div className="text-[#49576f] font-medium flex flex-col">
                                <div className="font-bold text-base text-start">약관 동의</div>
                                <div className="font-medium text-sm text-gray-400 mt-0.5">
                                    서비스 이용약관
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
                            <TextInput placeholder="example@email.com" />
                        </div>
                    </div>
                    <div className="mt-5 text-[#bdb6b1] font-medium">
                        <div className="flex mb-2">
                            <div>비밀번호</div>
                            <div className="ml-auto">
                                <a href="#" className="text-xs text-[#6365EF] font-light underline">
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
        </AuthLayout>
    );
}

export default SignupPage;
