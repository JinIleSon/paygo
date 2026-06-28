import Button from '../../components/common/Button';
import { IconPlus, IconArrowRight, IconArrowDown, IconArrowUp } from '@tabler/icons-react';
import Card from '../../components/common/Card';

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

    return (
        // MainLayout에서 Outlet으로 불러온 레이아웃 상태
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <Card variant="primary">
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
                    </Card>
                    <div className="flex my-6.5">
                        <Card className="mr-6.5 flex flex-col items-center">
                            <div className="flex items-center gap-1.5 text-[#22C55E] font-medium">
                                <IconArrowUp size={24}/>
                                <div className="text-xl">이번달 충전</div>
                            </div>
                            <div className="py-6 text-xl font-bold">{(1250000).toLocaleString()}<span className="text-sm text-gray-400 ml-1">원</span></div>
                            <div className="flex items-center gap-1.5">
                                <IconArrowUp size={16} />
                                <div>지난달 대비 <span className="font-bold text-[#22C55E]">+12%</span></div>
                            </div>
                        </Card>
                        <Card className="flex flex-col items-center">
                            <div className="flex items-center gap-1.5 text-[red] font-medium">
                                <IconArrowDown size={24}/>
                                <div className="text-xl">이번달 지출</div>
                            </div>
                            <div className="py-6 text-xl font-bold">{(680000).toLocaleString()}<span className="text-sm text-gray-400 ml-1">원</span></div>
                            <div className="flex items-center gap-1.5">
                                <IconArrowUp size={16} />
                                <div>지난달 대비 <span className="font-bold text-[red]">+12%</span></div>
                            </div>
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
                                        className={`${avatarColors[index % 3].bg} ${avatarColors[index % 3].text} flex items-center justify-center w-[40px] h-[40px] rounded-full  text-[14px] font-medium`}
                                    >
                                        {contact.name.slice(-2)}
                                    </div>
                                    <div>
                                        <div className="flex font-medium">{contact.name}</div>
                                        <div className="text-[gray] text-[14px]">
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
                </div>
            </div>
        </div>
    );
}

export default WalletHomePage;
