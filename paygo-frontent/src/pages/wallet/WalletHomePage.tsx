import Button from '../../components/common/Button';
import { IconPlus, IconArrowRight } from '@tabler/icons-react';

function WalletHomePage() {
    // TODO: DB 데이터 연동 필요
    const balance = 3842000;
    const pg = 'PG-1234-5678-9012';

    // 빠른 송금
    const contacts = [
        { name: '김철수', bank: 'Paygo', account: '123-1234-1234-1234' },
        { name: '홍길동', bank: 'KB국민', account: '110-1234-1234-1234' },
        { name: '박민수', bank: '신한', account: '111-1234-1234-1234' },
    ]

    const avatarColors = [
        { bg: 'bg-[#E4E4FF]', text: 'text-[#6266f1]' },  // 인디고
        { bg: 'bg-[#E8FBF2]', text: 'text-[#6ccfa8]' },  // 그린
        { bg: 'bg-[#FEF9EB]', text: 'text-[#e0b36b]' },  // 앰버
    ]

    // 소비 카테고리
    const categories = [
        { name: '패션/의류', amount: 210000, color: 'bg-[#6266F1]' },
        { name: '전자기기', amount: 120000, color: 'bg-[#22C55E]' },
        { name: '스포츠/레저', amount: 89000, color: 'bg-[#F59E0B]' },
        { name: '기타', amount: 45000, color: 'bg-[#D1D5DB]' },
    ]

    const total = categories.reduce((sum, cat) => sum + cat.amount, 0)

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
                        <div className='text-[gray] '>빠른 송금</div>
                        { contacts.map((contact, index) => (
                            <div key={index} className="mt-auto py-4">
                                <div className="flex items-center gap-4">
                                    <div className={`${avatarColors[index % 3].bg} ${avatarColors[index % 3].text} flex items-center justify-center w-[40px] h-[40px] rounded-full  text-[14px] font-medium`}>
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
                    </div>
                    <div className="px-8 py-5 border border-[#D9D9D9] bg-white rounded-2xl my-6.5">
                        <div className='text-[gray] '>소비 카테고리</div>
                        {categories.map((cat, index) => (
                            <div key={index}>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletHomePage;
