import { useState } from "react";
import Card from "../../components/common/Card";
import SelectCard from "../../components/common/SelectCard";

function WalletHistoryPage(){

    const types = [
        { id: 'all', label: '전체' },
        { id: 'charge', label: '충전' },
        { id: 'buy', label: '구매' },
        { id: 'refund', label: '환불' },
    ];

    const statement = [
        { id: 'all', label: '전체' },
        { id: 'complete', label: '완료' },
        { id: 'fail', label: '실패' },
        { id: 'processing', label: '처리중' },
    ];

    const [selectedType, setSelectedType] = useState('');

    return (
        <div>
            <Card>
                <div className="flex items-center">
                    <div className="text-[gray] mr-6">유형</div>
                    <div className="flex gap-3">
                        {types.map((type) => (
                            <SelectCard
                            onClick={() => setSelectedType(type.id)}
                            isSelected={selectedType === type.id}>
                                <div>
                                    {type.label}
                                </div>
                            </SelectCard>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default WalletHistoryPage;