import Button from '../../components/common/Button';
import MainLayout from '../../components/layout/main/MainLayout';
import { IconPlus, IconArrowRight } from '@tabler/icons-react';

function WalletHomePage() {
    const balance = 3842000;
    const pg = 'PG-1234-5678-9012';

    return (
        // MainLayout에서 Outlet으로 불러온 레이아웃 상태
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="px-8 py-6.5 bg-[#6266f1] rounded-2xl">
                        <div>
                            <div className="text-[#E2E3FF]">Paygo 지갑 잔액</div>
                            <div className="py-3 text-white text-[32px] font-medium">
                                {balance.toLocaleString()}원
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-[#E2E3FF]">{pg}</div>
                                <div className="flex ml-auto gap-3">
                                    <Button variant="secondary" className="p-3">
                                        <div className="flex items-center gap-2">
                                            <IconPlus size={16} />
                                            <div>충전</div>
                                        </div>
                                    </Button>
                                    <Button variant="secondary" className="p-3">
                                        <div className="flex items-center gap-2">
                                            <IconArrowRight size={16} />
                                            <div>송금</div>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="px-8 py-5 border border-[#D9D9D9] bg-white rounded-2xl">
                        빠른 송금
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletHomePage;
