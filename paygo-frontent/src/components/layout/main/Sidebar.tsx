import type React from 'react';
import {
    IconCreditCard,
    IconWallet,
    IconPlus,
    IconList,
    IconShoppingBag,
    IconShoppingCart,
    IconPackage,
    IconUser,
    IconSettings,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

function Sidebar({ children }: { children: React.ReactNode }) {
    const name = '손진일'; // TODO: 백엔드에서 불러와야 할 데이터
    const nameInitial = name.slice(-2);

    const grade = '일반회원'; // TODO: 백엔드에서 불러와야 할 데이터

    // 마우스 hover 또는 색상 변경, 애니메이션
    const navItemClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-3 py-2.5 cursor-pointer transition-colors duration-200
        ${
            isActive
                ? 'bg-[#E4E4FF] text-[#6266f1] font-medium'
                : 'text-[gray] hover:bg-[#EAECFF] hover:text-[#6266f1]'
        }`;

    return (
        <div className="w-[240px] h-screen border-x border-[#D9D9D9] flex flex-col">
            <div className="flex items-center p-6 gap-3 text-2xl font-bold">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#6266f1] flex items-center justify-center">
                    <IconCreditCard size={23} color="white" />
                </div>
                <div className="">
                    <span className="text-[#6266f1]">Pay</span>
                    <span>go</span>
                </div>
            </div>
            <div className="border-b border-[#D9D9D9]"></div>
            <div className="p-6 text-[gray]">
                <div className="font-medium text-[18px]">지갑</div>
                <NavLink
                    to="/wallet/home"
                    className={({ isActive }) => `${navItemClass({ isActive })} mt-3`}
                >
                    <IconWallet size={20} color="gray" />
                    <div>지갑 홈</div>
                </NavLink>
                <div className="flex items-center gap-3 py-2.5">
                    <IconPlus size={20} color="gray" />
                    <div>충전</div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconList size={20} color="gray" />
                    <div>거래내역</div>
                </div>
            </div>
            <div className="border-b border-[#D9D9D9] mt-[-6px]"></div>
            <div className="p-6 text-[gray]">
                <div className="font-medium text-[18px]">쇼핑</div>
                <div className="flex items-center gap-3 py-2.5 pt-5">
                    <IconShoppingBag size={20} color="gray" />
                    <div>상품 목록</div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconShoppingCart size={20} color="gray" />
                    <div>장바구니</div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconPackage size={20} color="gray" />
                    <div>주문내역</div>
                </div>
            </div>
            <div className="border-b border-[#D9D9D9] mt-[-6px]"></div>
            <div className="p-6 text-[gray]">
                <div className="font-medium text-[18px]">계정</div>
                <div className="flex items-center gap-3 py-2.5 pt-5">
                    <IconUser size={20} color="gray" />
                    <div>마이페이지</div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconSettings size={20} color="gray" />
                    <div>설정</div>
                </div>
            </div>
            <div className="mt-auto border-t border-[#D9D9D9] p-6">
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#E4E4FF] text-[#6266f1] text-[14px] font-medium">
                        {nameInitial}
                    </div>
                    <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-[gray] text-[14px]">{grade}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
