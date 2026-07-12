import { useState } from 'react';
import Card from '../../components/common/Card';
import SelectCard from '../../components/common/SelectCard';
import TextInput from '../../components/common/TextInput';
import Button from '../../components/common/Button';
import PeriodPicker from '../../components/common/PeriodPicker';
import { type DateRange } from 'react-day-picker';

function WalletHistoryPage() {
    const [selectedType, setSelectedType] = useState('');
    const [selectedStatement, setSelectedStatement] = useState('');
    const [search, setSearch] = useState('');
    const [period, setPeriod] = useState<DateRange | undefined>();

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

    const summary = [
        { title: '총 충전', content: 1250000, summation: 3 },
        { title: '총 지출', content: -680000, summation: 8 },
        { title: '총 환불', content: 45000, summation: 1 },
        { title: '실패 건수', content: 2, summation: '동시성 처리 실패 포함'}
    ];

    return (
        <div className="flex flex-col gap-6.5">
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
                    <div className="text-[gray] ml-auto mr-6">기간</div>
                    <div>
                        <PeriodPicker value={period} onChange={setPeriod} />
                    </div>
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
            <div className="flex gap-6.5">
                {summary.map((sum, index) => {
                    const isLast = index === summary.length - 1; // 마지막 인덱스

                    return (
                        <Card key={index} className="flex-1 flex flex-col gap-2 text-[gray]">
                            <div>{sum.title}</div>
                            <div className={`${!isLast && sum.content > 0 ? 'text-[#22C55E]' : 'text-[red]'} text-2xl font-medium`}>{/* 마지막 실패 건수는 중요도 때문에 빨간색으로 표현 */}
                                <span>{!isLast && sum.content > 0? '+' : ''}</span>{/* 마지막은 금액이 아니므로(실패 건수) +로 표시하지 않음 */}
                                {sum.content.toLocaleString()}
                                <span>{!isLast ? '원' : '건'}</span>
                            </div>
                            <div>
                                {sum.summation}
                                <span>{!isLast ? '건' : ''}</span>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default WalletHistoryPage;
