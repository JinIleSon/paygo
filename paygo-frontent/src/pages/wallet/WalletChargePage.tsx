import { IconWallet, IconBuildingBank, IconCreditCard, IconDeviceMobile } from '@tabler/icons-react';
import Card from '../../components/common/Card';
import TextInput from '../../components/common/TextInput';
import { useState } from 'react';
import Button from '../../components/common/Button';
import SelectCard from '../../components/common/SelectCard';

function WalletChargePage() {
    const balance = 3842000;
    const minCharge = 1000; // 충전 금액 최소
    const maxCharge = 2000000; // 충전 금액 최대
    const fee = 0; // TODO: 수수료 데이터 연동 필요
    const [chargeAmount, setChargeAmount] = useState('');

    // 충전할 금액 - 숫자만 입력 가능
    const handleCharge = (e) => {
        const onlyNumbersOne = e.target.value.replace(/[^0-9]/g, '');
        setChargeAmount(onlyNumbersOne);
    };

    // 충전할 금액 - 버튼 클릭 시 금액 추가
    const handleButtonCharge = (amount: number) => {
        const current = chargeAmount ? Number(chargeAmount.replace(/,/g, '')) : 0;
        const sum = current + amount;
        if (sum > maxCharge) return; // 최대 초과 시 막기
        setChargeAmount(String(sum));
    };

    const chargeSummary = [
        { title: '충전 금액', content: Number(chargeAmount).toLocaleString() + '원' },
        { title: '결제 수단', content: '계좌이체' }, // TODO: 결제 수단 데이터 연동 필요
        { title: '수수료', content: fee.toLocaleString() + '원' },
        {
            title: '충전 후 금액',
            content: Number(balance + Number(chargeAmount) - fee).toLocaleString() + '원',
        },
    ];

    const paymentMethods = [
        { id: 'account', label: '계좌이체', desc: '국민·신한·우리·하나 등' },
        { id: 'card', label: '신용/체크카드', desc: 'VISA·MasterCard 등' },
        { id: 'digitalWallet', label: '간편결제', desc: '카카오페이·네이버페이' },
    ];

    const [selectedPayment, setSelectedPayment] = useState('');

    const getIcon = (id: string) => {
        if (id === 'account') 
            return <div className="w-10 h-10 rounded-xl bg-[#E8FBF2] flex items-center justify-center"><IconBuildingBank size={20} className="text-[#22C55E]"/></div>;
        if (id === 'card')
            return <div className="w-10 h-10 rounded-xl bg-[#FEF9EB] flex items-center justify-center"><IconCreditCard size={20} className="text-[#E0B36B]"/></div>;
        return <div className="w-10 h-10 rounded-xl bg-[#FEF9EB] flex items-center justify-center"><IconDeviceMobile size={20} className="text-[#E0B36B]"/></div>;
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
                                <div className="w-[3.75rem] h-[3.75rem] rounded-xl bg-[#EDECFF] flex items-center justify-center ml-auto">
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
                                    className="text-2xl flex justify-center h-12 leading-[3rem]"
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
                                        className="flex-1 px-3 py-2 font-medium border border-[#D9D9D9]"
                                    >
                                        +{Number(10000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(30000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#D9D9D9]"
                                    >
                                        +{Number(30000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(50000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#D9D9D9]"
                                    >
                                        +{Number(50000).toLocaleString()} 원
                                    </Button>
                                </div>
                                <div className="flex gap-3 my-3">
                                    <Button
                                        onClick={() => handleButtonCharge(100000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#D9D9D9]"
                                    >
                                        +{Number(100000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(300000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#D9D9D9]"
                                    >
                                        +{Number(300000).toLocaleString()} 원
                                    </Button>
                                    <Button
                                        onClick={() => handleButtonCharge(500000)}
                                        className="flex-1 px-3 py-2 font-medium border border-[#D9D9D9]"
                                    >
                                        +{Number(500000).toLocaleString()} 원
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="my-6.5">
                        <div className="text-[gray] mb-6">충전 수단</div>
                        <div className="flex flex-col gap-3 mb-3">
                            {paymentMethods.map((method) => (
                                <SelectCard
                                    key={method.id}
                                    isSelected={selectedPayment === method.id}
                                    onClick={() => setSelectedPayment(method.id)}
                                    variant="secondary">
                                        <div className="flex items-center p-5 gap-5">
                                            {getIcon(method.id)}
                                            <div className="flex flex-col justify-start">
                                                <div className="flex font-medium">
                                                    {method.label}
                                                </div>
                                                <div>
                                                    {method.desc}
                                                </div>
                                            </div>
                                        </div>
                                </SelectCard>
                            ))

                            }
                        </div>
                    </Card>
                </div>
                <div className="min-w-1/2">
                    <Card>
                        <div className="text-[gray] mb-6">충전 요약</div>
                        <Card className="bg-[#FAFAFA] text-[gray]">
                            {chargeSummary.map((summary, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between py-3 ${index === chargeSummary.length - 1 ? 'border-t-2 border-[#E6E6E6] pt-5 pb-2.5' : ''} ${index === chargeSummary.length - 2 ? 'pb-7' : ''}`}
                                >
                                    <div
                                        className={`${index === chargeSummary.length - 1 ? 'text-xl' : ''}`}
                                    >
                                        {summary.title}
                                    </div>
                                    <div
                                        className={`font-bold ${index === chargeSummary.length - 1 ? 'text-[#6266F1] text-2xl' : 'text-black'}`}
                                    >
                                        {summary.content}
                                    </div>
                                </div>
                            ))}
                        </Card>
                        <div className="mt-6 mb-3">
                            <Button className="w-full h-11 font-bold">
                                충전하기
                            </Button>
                            <Button variant="secondary" className="w-full h-11 font-bold mt-3">
                                취소
                            </Button>
                        </div>
                    </Card>
                    <Card className="my-6.5">
                        <div className="text-[gray] mb-6">충전 유의사항</div>
                        <div className="text-lg flex flex-col gap-5 mb-3">
                            <div><span className="mr-3">ⓘ</span><span>1회 최대 충전 한도는 2,000,000원입니다.</span></div>
                            <div><span className="mr-3">ⓘ</span><span>계좌이체는 영업시간(09:00~22:00) 내에만 가능합니다.</span></div>
                            <div><span className="mr-3">ⓘ</span><span>충전된 금액은 Paygo 서비스 내에서만 사용 가능합니다.</span></div>
                            <div><span className="mr-3">ⓘ</span><span>충전 취소는 충전 후 24시간 이내에만 가능합니다.</span></div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default WalletChargePage;
