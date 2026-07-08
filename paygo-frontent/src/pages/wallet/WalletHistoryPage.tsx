import { useState } from 'react';
import Card from '../../components/common/Card';
import SelectCard from '../../components/common/SelectCard';
import TextInput from '../../components/common/TextInput';
import Button from '../../components/common/Button';

function WalletHistoryPage() {
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
    const [selectedStatement, setSelectedStatement] = useState('');
    const [search, setSearch] = useState('');

    return (
        <div>
            <Card>
                <div className="flex items-center">
                    <div className="text-[gray] mr-6">유형</div>
                    <div className="flex gap-3">
                        {types.map((type) => (
                            <SelectCard
                                onClick={() => setSelectedType(type.id)}
                                isSelected={selectedType === type.id}
                            >
                                <div>{type.label}</div>
                            </SelectCard>
                        ))}
                    </div>
                    <div className="text-[gray]">기간</div>
                </div>
                <div className="flex items-center mt-5">
                    <div className="text-[gray] mr-6">상태</div>
                    <div className="flex gap-3">
                        {statement.map((state) => (
                            <SelectCard
                                onClick={() => setSelectedStatement(state.id)}
                                isSelected={selectedStatement === state.id}
                            >
                                <div>{state.label}</div>
                            </SelectCard>
                        ))}
                    </div>
                    <div className="ml-auto flex gap-3">
                        <TextInput
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="검색어 입력"
                            className="w-100"
                        />
                        <Button variant="secondary" className="w-16">
                            검색
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default WalletHistoryPage;
