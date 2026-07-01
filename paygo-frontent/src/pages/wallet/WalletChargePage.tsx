import { IconWallet } from '@tabler/icons-react';
import Card from '../../components/common/Card';
import TextInput from '../../components/common/TextInput';
import { useState } from 'react';
import Button from '../../components/common/Button';

function WalletChargePage() {
    const balance = 3842000;
    const [chargeAmount, setChargeAmount] = useState('');

    // 충전할 금액 - 숫자만 입력 가능
    const handleCharge = (e) => {
        const onlyNumbersOne = e.target.value.replace(/[^0-9]/g, '');
        setChargeAmount(onlyNumbersOne);
    };

    // 충전 금액 최소
    const minCharge = 1000;

    // 충전 금액 최대
    const maxCharge = 10000000;

    // 충전할 금액 - 버튼 클릭 시 금액 추가
    const handleButtonCharge = (amount: number) => {
        const current = chargeAmount ? Number(chargeAmount.replace(/,/g, '')) : 0;
        setChargeAmount(String(current + amount));
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
                                    <div className="text-[#6266F1] text-2xl font-medium">
                                        {balance.toLocaleString()}원
                                    </div>
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
                                    value={
                                        chargeAmount ? Number(chargeAmount).toLocaleString() : ''
                                    }
                                    placeholder="100,000"
                                    className="text-2xl flex justify-center h-[48px] leading-[48px]"
                                    onChange={handleCharge}
                                />
                                <span className="text-2xl absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    원
                                </span>
                            </div>
                            <div className="text-xs text-[#B3B3B3] font-bold mt-2">
                                최소 {minCharge.toLocaleString()}원 최대{' '}
                                {maxCharge.toLocaleString()}원
                            </div>
                            <div>
                                <div className="flex gap-3 mt-5">
                                    <Button
                                        onClick={() => handleButtonCharge(10000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#d9d9d9]"
                                    >
                                        +{Number(10000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(30000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#d9d9d9]"
                                    >
                                        +{Number(30000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(50000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#d9d9d9]"
                                    >
                                        +{Number(50000).toLocaleString()} 원
                                    </Button>
                                </div>
                                <div className="flex gap-3 my-3">
                                    <Button
                                        onClick={() => handleButtonCharge(100000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#d9d9d9]"
                                    >
                                        +{Number(100000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(300000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#d9d9d9]"
                                    >
                                        +{Number(300000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(500000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#d9d9d9]"
                                    >
                                        +{Number(500000).toLocaleString()} 원
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="min-w-1/2">
                    <Card></Card>
                </div>
            </div>
        </div>
    );
}

export default WalletChargePage;
