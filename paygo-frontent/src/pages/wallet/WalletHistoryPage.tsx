import { Fragment, useState } from 'react';
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
        { title: '실패 건수', content: 2, summation: '동시성 처리 실패 포함' },
    ];

    const transactionHistory = [
        {
            id: 0,
            content: '지갑 충전',
            createdAt: '2025.01.15 14:23',
            type: '충전',
            paymentMethod: '계좌이체',
            amount: 300000,
            balance: 3842000,
            statement: '완료',
        },
        {
            id: 1,
            content: '나이키 에어맥스',
            createdAt: '2025.01.14 11:05',
            type: '구매',
            paymentMethod: 'Paygo 잔액',
            amount: -120000,
            balance: 3542000,
            statement: '완료',
        },
        {
            id: 2,
            content: '무선 이어폰',
            createdAt: '2025.01.13 16:42',
            type: '구매',
            paymentMethod: 'Paygo 잔액',
            amount: -89000,
            balance: 0,
            statement: '결제실패',
        },
        {
            id: 3,
            content: '주문 취소 환불',
            createdAt: '2025.01.12 09:30',
            type: '환불',
            paymentMethod: 'Paygo 잔액',
            amount: 45000,
            balance: 3751000,
            statement: '완료',
        },
        {
            id: 4,
            content: '캠핑 텐트',
            createdAt: '2025.01.11 20:15',
            type: '구매',
            paymentMethod: 'Paygo 잔액',
            amount: -211000,
            balance: 3706000,
            statement: '처리중',
        },
        {
            id: 5,
            content: '지갑 충전',
            createdAt: '2025.01.10 00:20',
            type: '충전',
            paymentMethod: '신용카드',
            amount: 500000,
            balance: 3917000,
            statement: '완료',
        },
    ];

    const graphStyle = 'flex justify-center items-center border-t border-[#D9D9D9]';

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
                                key={type.id}
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
                                key={state.id}
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
                            <div
                                className={`${!isLast && sum.content > 0 ? 'text-[#22C55E]' : 'text-[red]'} text-2xl font-medium`}
                            >
                                {/* 마지막 실패 건수는 중요도 때문에 빨간색으로 표현 */}
                                <span>{!isLast && sum.content > 0 ? '+' : ''}</span>
                                {/* 마지막은 금액이 아니므로(실패 건수) +로 표시하지 않음 */}
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
            <div className="text-[gray]">
                <Card>
                    <div className="grid grid-cols-[1fr_5rem_6rem_7rem_7.5rem_5rem] font-medium text-center">
                        <div className="py-3">내용</div>
                        <div className="py-3">유형</div>
                        <div className="py-3">결제수단</div>
                        <div className="py-3">금액</div>
                        <div className="py-3">잔액</div>
                        <div className="py-3">상태</div>
                        {transactionHistory.map((tran) => (
                            <Fragment key={tran.id}>
                                <div className="border-t border-[#D9D9D9] py-3 text-start">
                                    <div>{tran.content}</div>
                                    <div>{tran.createdAt}</div>
                                </div>
                                <div className={`${graphStyle}`}>{tran.type}</div>
                                <div className={`${graphStyle}`}>{tran.paymentMethod}</div>
                                <div className={`${graphStyle}`}>{tran.amount}</div>
                                <div className={`${graphStyle}`}>{tran.balance}</div>
                                <div className={`${graphStyle}`}>{tran.statement}</div>
                            </Fragment>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default WalletHistoryPage;
