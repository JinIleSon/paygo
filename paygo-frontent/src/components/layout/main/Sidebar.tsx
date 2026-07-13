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

function Sidebar() {
    const name = '손진일'; // TODO: 백엔드에서 불러와야 할 데이터
    const nameInitial = name.slice(-2);

    const grade = '일반회원'; // TODO: 백엔드에서 불러와야 할 데이터

    // 마우스 hover 또는 색상 변경, 애니메이션
    const navItemClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-3 py-2.5 px-6 cursor-pointer transition-colors duration-500
        ${
            isActive
                ? 'bg-[#E4E4FF] text-[#6266F1] font-medium border-r-2 border-[#6266F1]'
                : 'text-[gray] hover:bg-[#F5F6FF] hover:text-[#9294F5]'
        }`;

    return (
        <div className="w-60 h-screen border-x border-[#D9D9D9] flex flex-col shrink-0">
            <div className="flex items-center p-6 gap-3 text-2xl font-bold">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#6266F1] flex items-center justify-center">
                    <IconCreditCard size={23} color="white" />
                </div>
                <div className="">
                    <span className="text-[#6266F1]">Pay</span>
                    <span>go</span>
                </div>
            </div>
            <div className="border-b border-[#D9D9D9]"></div>
            <div className="py-6 text-[gray]">
                <div className="font-medium px-6 text-lg">지갑</div>
                <NavLink
                    to="/wallet/home"
                    className={({ isActive }) => `${navItemClass({ isActive })} mt-3`}
                >
                    <IconWallet size={20} />
                    <div>지갑 홈</div>
                </NavLink>
                <NavLink to="/wallet/charge" className={navItemClass}>
                    <IconPlus size={20} />
                    <div>충전</div>
                </NavLink>
                <NavLink to="/wallet/history" className={navItemClass}>
                    <IconList size={20} />
                    <div>거래내역</div>
                </NavLink>
            </div>
            <div className="border-b border-[#D9D9D9] -mt-1.5"></div>
            <div className="py-6 text-[gray]">
                <div className="px-6 font-medium text-lg">쇼핑</div>
                <NavLink
                    to="/shopping/product-list"
                    className={({ isActive }) => `${navItemClass({ isActive })} mt-3`}
                >
                    <IconShoppingBag size={20} />
                    <div>상품 목록</div>
                </NavLink>
                <NavLink to="/shopping/cart" className={navItemClass}>
                    <IconShoppingCart size={20} />
                    <div>장바구니</div>
                </NavLink>
                <NavLink to="/shopping/order-list" className={navItemClass}>
                    <IconPackage size={20} />
                    <div>주문내역</div>
                </NavLink>
            </div>
            <div className="border-b border-[#D9D9D9] -mt-1.5"></div>
            <div className="py-6 text-[gray]">
                <div className="px-6 font-medium text-lg">계정</div>
                <NavLink
                    to="/account/mypage"
                    className={({ isActive }) => `${navItemClass({ isActive })} mt-3`}
                >
                    <IconUser size={20} />
                    <div>마이페이지</div>
                </NavLink>
                <NavLink to="/account/setting" className={navItemClass}>
                    <IconSettings size={20} />
                    <div>설정</div>
                </NavLink>
            </div>
            <div className="mt-auto border-t border-[#D9D9D9] p-6">
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E4E4FF] text-[#6266F1] text-sm font-medium">
                        {nameInitial}
                    </div>
                    <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-[gray] text-sm">{grade}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
