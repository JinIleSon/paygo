import Card from "../../components/common/Card";

function WalletChargePage(){
    return (
        <div>
            <div className="flex gap-8 pr-8 w-full">
                <div className="min-w-1/2">
                    <Card>
                        <div className="text-[gray] mb-6">충전 금액</div>
                        <Card className="bg-[#F5F6FF] border-0">
                            <div className="text-[gray] mb-6">현재 잔액</div>
                        </Card>
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