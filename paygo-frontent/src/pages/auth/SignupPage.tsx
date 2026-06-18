import AuthLayout from '../../components/layout/auth/AuthLayout';
import notebookImg from '../../assets/notebook.webp';
import { IconCreditCard } from '@tabler/icons-react';
import TextInput from '../../components/common/TextInput';
import PasswordInput from '../../components/common/PasswordInput';
import Button from '../../components/common/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [certificationNumber, setCertificationNumber] = useState('');

    // 인증번호 발송 버튼 눌렀을 때 버튼 누름 변수
    const [isOpen, setIsOpen] = useState(false);
    const [checkedFirst, setCheckedFirst] = useState(false);
    const [checkedSecond, setCheckedSecond] = useState(false);
    const [checkedThird, setCheckedThird] = useState(false);
    const isAllChecked = checkedFirst && checkedSecond && checkedThird;

    const existedEmail = 'abc@email.com'; // TODO: DB에서 불러와야 하는 데이터. 현재 하드코딩되어 있음

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordMatch = password === confirmPassword && confirmPassword !== '';

    const formatPhone = (digits: string) => {
        if (digits.length <= 3) return digits;
        else if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        else return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
    };

    const checkedStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 8l3.5 3.5L13 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundColor: '#9f9fa5', // 연한 회색빛 보라
        borderColor: '#9f9fa5', // 테두리도 같이 맞춰주기
    };

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setCheckedFirst(isChecked);
        setCheckedSecond(isChecked);
        setCheckedThird(isChecked);
    };

    return (
        <AuthLayout>
            <div className="flex-[4.5] h-screen flex items-center justify-center relative overflow-hidden">
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
            <div className="flex-[5.5] overflow-y-auto border-l border-[#D9D9D9] border-solid bg-[#fafafa]">
                <div className='flex justify-center py-20'>
                    <div className="w-[480px] ">
                        <div className="flex flex-col">
                            <div className="text-3xl font-medium">회원가입</div>
                            <div className="text-[#bdb6b1] font-bold mt-2">
                                Paygo 계정을 만들어보세요
                            </div>
                        </div>
                        <div className="flex-1 border-t border-[#d8d8d8] mt-14"></div>
                        <div className="text-[#bdb6b1] mt-6">기본 정보</div>
                        <div className="flex mt-6 text-[#bdb6b1] font-medium gap-3">
                            <div className="flex-[1]">
                                <div className="mb-2">성</div>
                                <div>
                                    <TextInput
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="손"
                                    />
                                </div>
                            </div>
                            <div className="flex-[1]">
                                <div className="mb-2">이름</div>
                                <div>
                                    <TextInput
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="진일"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-[#bdb6b1] font-medium text">
                            <div className="mb-2">이메일</div>
                            <div>
                                <TextInput
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@email.com"
                                />
                            </div>
                            <div className="h-[10px] mt-1 ml-1 text-sm text-[12px]">
                                {email &&
                                    (!isEmailValid ? (
                                        <div className="text-[#edaeaf]">
                                            이메일 형식이 올바르지 않습니다
                                        </div>
                                    ) : email !== existedEmail ? (
                                        <div className="text-[#8fe0ae]">사용 가능한 이메일입니다</div>
                                    ) : (
                                        <div className="text-[#edaeaf]">
                                            이미 사용 중인 이메일입니다
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="flex mt-5 text-[#bdb6b1] font-medium gap-3">
                            <div className="flex-[1]">
                                <div className="mb-2">비밀번호</div>
                                <div>
                                    <PasswordInput
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mt-1 ml-1 text-sm text-[12px] font-light">
                                    8자 이상, 영문/숫자/특수문자 포함
                                </div>
                            </div>
                            <div className="flex-[1]">
                                <div className="mb-2">비밀번호 확인</div>
                                <div>
                                    <PasswordInput
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mt-1 ml-1 text-sm text-[12px]">
                                    {password &&
                                        confirmPassword &&
                                        (isPasswordMatch ? (
                                            <div className="text-[#8fe0ae]">비밀번호가 일치합니다</div>
                                        ) : (
                                            <div className="text-[#edaeaf]">
                                                비밀번호가 일치하지 않습니다
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 border-t border-[#d8d8d8] mt-14"></div>
                        <div className="text-[#bdb6b1] mt-6">본인 인증</div>
                        <div className="flex mt-6 text-[#bdb6b1] font-medium">
                            <div className="flex-[2]">
                                <div className="mb-2">휴대폰 번호</div>
                                <div className="flex gap-3">
                                    <div className="flex-[5]">
                                        <TextInput
                                            value={formatPhone(phoneNumber)}
                                            onChange={(e) =>
                                                setPhoneNumber(
                                                    e.target.value.replace(/\D/g, '').slice(0, 11)
                                                )
                                            }
                                            placeholder="010-0000-0000"
                                            className="text-[#bdb6b1] font-medium"
                                        />
                                    </div>
                                    <Button
                                        className="flex-[2] font-bold"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        인증번호 발송
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-6 text-[#bdb6b1] font-medium">
                            <div className="flex-[2]">
                                <div className="mb-2">인증번호</div>
                                <div className="flex gap-3">
                                    <div className="flex-[6]">
                                        <TextInput
                                            value={certificationNumber}
                                            onChange={(e) => setCertificationNumber(e.target.value)}
                                            placeholder="6자리 입력"
                                            className="text-[#bdb6b1] font-medium"
                                        />
                                    </div>
                                    <Button className="flex-[1] font-bold">확인</Button>
                                </div>
                                {/* TODO: 인증번호 API 연동 시 시간 만료 및 타이머 기능 추가 */}
                                <div className="mt-1 ml-1 text-sm text-[14px] h-[22px]">
                                    {isOpen ? <div>인증번호가 발송되었습니다</div> : <div></div>}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 border-t border-[#d8d8d8] mt-14"></div>
                        <div className="text-[#bdb6b1] mt-6">약관 동의</div>
                        <div className="p-6 rounded-lg bg-white border border-[#d9d9d9] mt-6">
                            <label
                                htmlFor="agreeAll"
                                className="flex items-center gap-3 leading-0 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agreeAll"
                                    checked={isAllChecked}
                                    onChange={handleCheck}
                                    style={isAllChecked ? checkedStyle : undefined}
                                    className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer
                                        checked:bg-indigo-500 checked:border-indigo-500
                                        checked:bg-center checked:bg-no-repeat
                                        "
                                />
                                <span className="font-bold text-[18px]">전체 동의</span>
                            </label>
                            <div className="flex-1 border-t border-[#d8d8d8] my-6"></div>
                            <label
                                htmlFor="agreeFirst"
                                className="flex items-center gap-3 text-gray-500 leading-0 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agreeFirst"
                                    checked={checkedFirst}
                                    onChange={(e) => {
                                        setCheckedFirst(e.target.checked);
                                    }}
                                    style={checkedFirst ? checkedStyle : undefined}
                                    className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer
                                        checked:bg-indigo-500 checked:border-indigo-500
                                        checked:bg-center checked:bg-no-repeat
                                        "
                                />
                                <span className="">
                                    서비스 이용약관 동의<span className="font-bold"> (필수)</span>
                                </span>
                                <Link
                                    to="/terms-of-service"
                                    className="ml-auto underline text-[#bdb6b1]"
                                >
                                    보기
                                </Link>
                            </label>
                            <label
                                htmlFor="agreeSecond"
                                className="flex items-center gap-3 text-gray-500 leading-0 cursor-pointer mt-4"
                            >
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agreeSecond"
                                    checked={checkedSecond}
                                    onChange={(e) => {
                                        setCheckedSecond(e.target.checked);
                                    }}
                                    style={checkedSecond ? checkedStyle : undefined}
                                    className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer
                                        checked:bg-indigo-500 checked:border-indigo-500
                                        checked:bg-center checked:bg-no-repeat
                                        "
                                />
                                <span className="">
                                    개인정보 수집 및 이용 동의<span className="font-bold"> (필수)</span>
                                </span>
                                <Link
                                    to="/privacy-consent"
                                    className="ml-auto underline text-[#bdb6b1]"
                                >
                                    보기
                                </Link>
                            </label>
                            <label
                                htmlFor="agreeThird"
                                className="flex items-center gap-3 text-gray-500 leading-0 cursor-pointer mt-4"
                            >
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agreeThird"
                                    checked={checkedThird}
                                    onChange={(e) => {
                                        setCheckedThird(e.target.checked);
                                    }}
                                    style={checkedThird ? checkedStyle : undefined}
                                    className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer
                                        checked:bg-indigo-500 checked:border-indigo-500
                                        checked:bg-center checked:bg-no-repeat
                                        "
                                />
                                <span className="">
                                    마케팅 정보 수신 동의<span className=""> (선택)</span>
                                </span>
                                <Link
                                    to="/marketing-consent"
                                    className="ml-auto underline text-[#bdb6b1]"
                                >
                                    보기
                                </Link>
                            </label>
                        </div>
                        <div>
                            <Button className="w-full font-bold mt-6 h-[40px]">가입 완료</Button>
                        </div>
                        <div className="text-xs text-center mt-6 text-[#bdb6b1]">
                            <span className="mr-1">이미 계정이 있으신가요?</span>
                            <Link to="/login" className="text-[#6365EF] font-medium underline">
                                로그인
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default SignupPage;
