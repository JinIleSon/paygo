import MainLayout from "../../components/layout/main/MainLayout";

function WalletHomePage(){

    const balance = 3842000;
    const pg = 'PG-1234-5678-9012';

    return (
        // MainLayout에서 Outlet으로 불러온 레이아웃 상태
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="px-8 py-6.5 bg-[#6266f1] rounded-2xl">
                        <div className="text-[#E2E3FF]">Paygo 지갑 잔액</div>
                        <div className="py-3 text-white text-[32px] font-medium">{balance.toLocaleString()}원</div>
                        <div className="flex items-center gap-3">
                            <div className="text-[#E2E3FF]">{pg}</div>
                            <div className="p-5 text-xl rounded-lg border border-white">+ 충전</div> {/* TODO: button 컴포넌트 transition-colors 추가 및 props 추가 */}
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