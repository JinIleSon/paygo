import { IconBuildingBank, IconCreditCard, IconDeviceMobile, IconWallet } from "@tabler/icons-react";

export const getIcon = (id: string) => {
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