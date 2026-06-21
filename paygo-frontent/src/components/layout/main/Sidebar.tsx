import type React from "react";
import { IconCreditCard, IconWallet, IconPlus, IconList, IconShoppingBag, IconShoppingCart, IconPackage, IconUser, IconSettings, IconWall } from '@tabler/icons-react';

function Sidebar({ children } : { children : React.ReactNode }) {
    return (
        <div className="w-[240px] h-screen border border-[#D9D9D9]">
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
                <div className="font-medium text-[18px]">
                    지갑
                </div>
                <div className="flex items-center gap-3 py-2.5 pt-5">
                    <IconWallet size={20} color="gray"/>
                    <div>
                        지갑 홈
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconPlus size={20} color="gray"/>
                    <div>
                        충전
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconList size={20} color="gray"/>
                    <div>
                        거래내역
                    </div>
                </div>
            </div>
            <div className="border-b border-[#D9D9D9] mt-[-6px]"></div>
            <div className="p-6 text-[gray]">
                <div className="font-medium text-[18px]">
                    쇼핑
                </div>
                <div className="flex items-center gap-3 py-2.5 pt-5">
                    <IconShoppingBag size={20} color="gray"/>
                    <div>
                        상품 목록
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconShoppingCart size={20} color="gray"/>
                    <div>
                        장바구니
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconPackage size={20} color="gray"/>
                    <div>
                        주문내역
                    </div>
                </div>
            </div>
            <div className="border-b border-[#D9D9D9] mt-[-6px]"></div>
            <div className="p-6 text-[gray]">
                <div className="font-medium text-[18px]">
                    계정
                </div>
                <div className="flex items-center gap-3 py-2.5 pt-5">
                    <IconUser size={20} color="gray"/>
                    <div>
                        마이페이지
                    </div>
                </div>
                <div className="flex items-center gap-3 py-2.5">
                    <IconSettings size={20} color="gray"/>
                    <div>
                        설정
                    </div>
                </div>
            </div>
            <div className="border-b border-[#D9D9D9] mt-[-6px]"></div>
            <div className="mt-auto border-t border-[#D9D9D9]">
                손진일
            </div>
        </div>
    );
}

export default Sidebar;