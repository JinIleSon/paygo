import Button from '../../components/common/Button';
import {
    IconShoppingBag,
    IconPlus,
    IconArrowRight,
    IconArrowDown,
    IconArrowUp,
    IconRefresh,
} from '@tabler/icons-react';
import Card from '../../components/common/Card';
import { NavLink } from 'react-router-dom';

function WalletHomePage() {
    // TODO: DB 데이터 연동 필요
    const balance = 3842000;
    const pg = 'PG-1234-5678-9012';

    // 빠른 송금
    const contacts = [
        { name: '김철수', bank: 'Paygo', account: '123-1234-1234-1234' },
        { name: '홍길동', bank: 'KB국민', account: '110-1234-1234-1234' },
        { name: '박민수', bank: '신한', account: '111-1234-1234-1234' },
    ];

    const avatarColors = [
        { bg: 'bg-[#E4E4FF]', text: 'text-[#6266F1]' }, // 인디고
        { bg: 'bg-[#E8FBF2]', text: 'text-[#6CCFA8]' }, // 그린
        { bg: 'bg-[#FEF9EB]', text: 'text-[#E0B36B]' }, // 앰버
    ];

    // 소비 카테고리
    const categories = [
        { name: '패션/의류', amount: 210000, color: 'bg-[#6266F1]' },
        { name: '전자기기', amount: 120000, color: 'bg-[#22C55E]' },
        { name: '스포츠/레저', amount: 89000, color: 'bg-[#F59E0B]' },
        { name: '기타', amount: 45000, color: 'bg-[#D1D5DB]' },
    ];

    // 비율에 따른 bar 그리기용
    const total = categories.reduce((sum, cat) => sum + cat.amount, 0);

    // 공지사항
    const notices = [
        { title: '수수료 정책 변경 안내', date: '2026.06.29' },
        { title: '앱 업데이트 v2.1.0', date: '2026.06.15' },
        { title: '설 연휴 운영시간 안내', date: '2026.01.02' },
    ];

    // 최근 거래내역
    const transHistory = [
        {
            title: '지갑 충전',
            date: '01.15 14:23',
            change: 300000,
            balance: 3842000,
            statement: '완료',
        },
        {
            title: '나이키 슈즈 구매',
            date: '01.14 11:05',
            change: -120000,
            balance: 3542000,
            statement: '완료',
        },
        {
            title: '무선 이어폰 구매',
            date: '01.13 16:42',
            change: -89000,
            balance: 3662000,
            statement: '결제실패',
        },
        {
            title: '주문 취소',
            date: '01.12 09:30',
            change: 45000,
            balance: 3751000,
            statement: '완료',
        },
        {
            title: '캠핑 도구 구매',
            date: '01.11 20:15',
            change: -211000,
            balance: 3706000,
            statement: '처리중',
        },
    ];

    // 텍스트에 따른 아이콘 종류
    const getIcon = (title: string) => {
        if (title.includes('충전')) return (
        <div className="w-10 h-10 rounded-xl bg-[#FEF9EB] flex items-center justify-center">
            <IconPlus size={20} className="text-[#E0B36B]" />
        </div>
    )
    if (title.includes('취소')) return (
        <div className="w-10 h-10 rounded-xl bg-[#E8FBF2] flex items-center justify-center">
            <IconRefresh size={20} className="text-[#22C55E]" />
        </div>
    )
    return (
        <div className="w-10 h-10 rounded-xl bg-[#F5F6FF] flex items-center justify-center">
            <IconShoppingBag size={20} className="text-[#6266F1]" />
        </div>
    ) // 구매 등 기본 아이콘
    };

    const getBadge = (statement: string) => {
        if (statement === '완료') return <span className="rounded-full text-[#22C55E] bg-[#E8FBF2] px-2 py-1 text-xs">완료</span>
        if (statement === '결제실패') return <span className="bg-[#FFE4E4] text-[red] px-2 py-1 rounded-full text-xs">결제실패</span>
        if (statement === '처리중') return <span className="bg-[#F5F6FF] text-[#6266F1] px-2 py-1 rounded-full text-xs">처리중</span>
    };

    return (
        // MainLayout에서 Outlet으로 불러온 레이아웃 상태
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <Card variant="primary">
                        <div>
                            <div className="text-[#E2E3FF]">Paygo 지갑 잔액</div>
                            <div className="py-3 text-white text-[2rem] font-medium">
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
                    </Card>
                    <div className="flex my-6.5">
                        <Card className="mr-6.5 flex flex-col items-center">
                            <div className="flex items-center gap-1.5 text-[#22C55E] font-medium">
                                <IconArrowUp size={24} />
                                <div className="text-xl">이번달 충전</div>
                            </div>
                            <div className="py-6 text-xl font-bold">
                                {(1250000).toLocaleString()}
                                <span className="text-sm text-gray-400 ml-1">원</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <IconArrowUp size={16} />
                                <div>
                                    지난달 대비{' '}
                                    <span className="font-bold text-[#22C55E]">+12%</span>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex flex-col items-center">
                            <div className="flex items-center gap-1.5 text-[red] font-medium">
                                <IconArrowDown size={24} />
                                <div className="text-xl">이번달 지출</div>
                            </div>
                            <div className="py-6 text-xl font-bold">
                                {(680000).toLocaleString()}
                                <span className="text-sm text-gray-400 ml-1">원</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <IconArrowUp size={16} />
                                <div>
                                    지난달 대비 <span className="font-bold text-[red]">+12%</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="text-[gray]">최근 거래내역</div>
                            <NavLink to="#" className="ml-auto flex items-center text-[#6266F1]">
                                <div>전체보기</div>
                                <IconArrowRight size={16} />
                            </NavLink>
                        </div>
                        <Card className="mt-2">
                            {transHistory.map((trans, index) => (
                                <div key={index} className="grid grid-cols-[2.5rem_7.5rem_6.875rem_4.375rem] gap-4 justify-center items-center border-b-2 border-[#E6E6E6] last:border-b-0 py-[1.28125rem]">
                                    <div>
                                        {getIcon(trans.title)}
                                    </div>
                                    <div>
                                        <div>{trans.title}</div>
                                        <div className="text-sm text-[gray] font-medium">{trans.date}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className={trans.change > 0 ? `text-[#22C55E] font-medium` : `text-[red] font-medium`}>
                                            {trans.change > 0 ? '+' : ''}{trans.change.toLocaleString()}원
                                        </div>
                                        <div className="text-sm text-[gray] font-medium">잔액 {trans.balance.toLocaleString()}원</div>
                                    </div>
                                    <div className="flex justify-center">
                                        {getBadge(trans.statement)}
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <Card>
                        <div className="text-[gray] ">빠른 송금</div>
                        {contacts.map((contact, index) => (
                            <div key={index} className="mt-auto py-4">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`${avatarColors[index % 3].bg} ${avatarColors[index % 3].text} flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium`}
                                    >
                                        {contact.name.slice(-2)}
                                    </div>
                                    <div>
                                        <div className="flex font-medium">{contact.name}</div>
                                        <div className="text-[gray] text-sm">
                                            <span>{contact.bank}</span>
                                            <span className="ml-2">{contact.account}</span>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <Button variant="secondary" className="p-3">
                                            <div className="flex items-center gap-2">
                                                <IconArrowRight size={16} />
                                                <div>송금</div>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Card>
                    <Card className="my-6.5">
                        <div className="text-[gray] ">소비 카테고리</div>
                        {categories.map((cat, index) => (
                            <div key={index}>
                                <div className="mt-4">
                                    <div className="flex text-[gray]">
                                        <div>{cat.name}</div>
                                        <div className="ml-auto text-[black] font-bold">
                                            {cat.amount.toLocaleString()}원
                                        </div>
                                    </div>
                                    <div className="flex mt-2.5 mb-2.5">
                                        <div
                                            style={{ width: `${(cat.amount / total) * 100}%` }} // 채우는 부분
                                            className={`${cat.color} h-1 rounded-full`}
                                        ></div>
                                        <div
                                            style={{
                                                width: `${100 - (cat.amount / total) * 100}%`, // 빈 회색 부분
                                            }}
                                            className={`bg-[#E6E6E6] h-1 rounded-full`}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Card>
                    <Card className="">
                        <div className="text-[gray] mb-2">공지사항</div>
                        {notices.map((notice, index) => (
                            <div
                                key={index}
                                className="py-2.5 border-b-2 border-[#E6E6E6] last:border-b-0"
                            >
                                <NavLink to="#">
                                    <div>{notice.title}</div>
                                    <div className="text-sm text-[gray] font-medium">
                                        {notice.date}
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default WalletHomePage;
