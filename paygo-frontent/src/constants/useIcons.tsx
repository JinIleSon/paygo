import { IconBuildingBank, IconCreditCard, IconDeviceMobile, IconPlus, IconRefresh, IconShoppingBag, IconWallet } from "@tabler/icons-react";

export const getMethodIcon = (id: string) => {
    if (id === 'account')
        return (
            <div className="w-10 h-10 rounded-xl bg-[#E8FBF2] flex items-center justify-center">
                <IconBuildingBank size={20} className="text-[#22C55E]" />
            </div>
        );
    if (id === 'card')
        return (
            <div className="w-10 h-10 rounded-xl bg-[#FCF2F8] flex items-center justify-center">
                <IconCreditCard size={20} className="text-[#D862A1]" />
            </div>
        );
    if (id === 'paygo')
        return (
            <div className="w-10 h-10 rounded-xl bg-[#F5F6FF] flex items-center justify-center">
                <IconWallet size={20} className="text-[#6266F1]" />
            </div>
        );
    return (
        <div className="w-10 h-10 rounded-xl bg-[#FEF9EB] flex items-center justify-center">
            <IconDeviceMobile size={20} className="text-[#E0B36B]" />
        </div>
    );
};

// 텍스트에 따른 아이콘 종류
export const getHistoryIcon = (title: string) => {
    if (title.includes('충전')) return (
        <div className="w-10 h-10 rounded-xl bg-[#FEF9EB] flex items-center justify-center">
            <IconPlus size={20} className="text-[#E0B36B]" />
        </div>
    );
    if (title.includes('취소') || title.includes('환불')) return (
        <div className="w-10 h-10 rounded-xl bg-[#E8FBF2] flex items-center justify-center">
            <IconRefresh size={20} className="text-[#22C55E]" />
        </div>
    );
    return (
        <div className="w-10 h-10 rounded-xl bg-[#F5F6FF] flex items-center justify-center">
            <IconShoppingBag size={20} className="text-[#6266F1]" />
        </div>
    ); // 구매 등 기본 아이콘
};