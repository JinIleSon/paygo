import { IconWallet } from "@tabler/icons-react";
import Card from "../../components/common/Card";
import TextInput from "../../components/common/TextInput";
import { useState } from "react";

function WalletChargePage(){

    const balance = 3842000
    const [chargeAmount, setChargeAmount] = useState("");

    const handleCharge = (e) => {
        const onlyNumbersOne = e.target.value.replace(/[^0-9]/g, "");
        setChargeAmount(onlyNumbersOne);
    };

    return (
        <div>
            <div className="flex gap-8 pr-8 w-full">
                <div className="min-w-1/2">
                    <Card>
                        <div className="text-[gray] mb-6">충전 금액</div>
                        <Card className="bg-[#F5F6FF] border-0 px-6">
                            <div className="flex items-center">
                                <div>
                                    <div className="text-[gray] mb-2">현재 잔액</div>
                                    <div className="text-[#6266F1] text-2xl font-medium">{balance.toLocaleString()}원</div>
                                </div>
                                <div className="w-[60px] h-[60px] rounded-xl bg-[#EDECFF] flex items-center justify-center ml-auto">
                                    <IconWallet size={30} className="text-[#6266F1]" />
                                </div>
                            </div>
                        </Card>
                        <div>
                            <div className="text-[gray] mt-6 mb-3">충전할 금액</div>
                            <div className="relative">
                                <TextInput
                                    value={chargeAmount ? Number(chargeAmount).toLocaleString() : ""} 
                                    placeholder="100,000" 
                                    className="text-2xl flex justify-center h-[48px] leading-[48px]"
                                    onChange={handleCharge}
                                />
                                <span className="text-2xl absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    원
                                </span>
                                
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="min-w-1/2">
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}

export default WalletChargePage;