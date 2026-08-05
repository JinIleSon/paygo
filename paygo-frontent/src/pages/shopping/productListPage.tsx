import { useState } from 'react';
import Card from '../../components/common/card';
import SelectCard from '../../components/common/selectCard';
import TextInput from '../../components/common/textInput';
import Button from '../../components/common/button';
import {
    IconArrowRight,
    IconSearch,
} from '@tabler/icons-react';
import SelectBox from '../../components/common/selectBox';
import { NavLink, useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import { iconMap } from '../../constants/icons';

function ProductListPage() {
    const [selectedType, setSelectedType] = useState('');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const classification = [
        { id: 'all', label: '전체' },
        { id: 'fashion', label: '패션' },
        { id: 'electronicDevices', label: '전자기기' },
        { id: 'sports', label: '스포츠' },
        { id: 'dailyNecessities', label: '생활용품' },
        { id: 'food', label: '식품' },
    ];

    const popularItems : Product[] = [
        {
            id: 0,
            itemClassification: '패션/신발',
            name: '나이키 에어맥스',
            price: 120000,
            stock: 3,
            itemBg: 'bg-[#F5F6FF]',
            itemText: 'text-[#6266F1]',
            iconName: "IconShoe",
        },
        {
            id: 1,
            itemClassification: '전자기기',
            name: '소니 WH-1000 헤드폰',
            price: 389000,
            stock: 1,
            itemBg: 'bg-[#E8FBF2]',
            itemText: 'text-[#22C55E]',
            iconName: "IconHeadphones",
        },
        {
            id: 2,
            itemClassification: '스포츠/레저',
            name: '코베아 캠핑 텐트',
            price: 211000,
            stock: 8,
            itemBg: 'bg-[#FEF9EB]',
            itemText: 'text-[#E0B36B]',
            iconName: "IconTent",
        },
        {
            id: 3,
            itemClassification: '패션/의류',
            name: '유니클로 플리 티셔츠',
            price: 59900,
            stock: 12,
            itemBg: 'bg-[#FCF2F8]',
            itemText: 'text-[#D862A1]',
            iconName: "IconShirt",
        },
    ];

    const newItems : Product[] = [
        {
            id: 0,
            itemClassification: '전자기기',
            name: '맥북 프로 14인치 모니터',
            price: 2490000,
            stock: 5,
            itemBg: 'bg-[#EEF6FF]',
            itemText: 'text-[#4D84D8]',
            iconName: "IconDeviceLaptop",
        },
        {
            id: 1,
            itemClassification: '스포츠',
            name: '룰루레몬 요가 매트',
            price: 89000,
            stock: 2,
            itemBg: 'bg-[#F0FEFB]',
            itemText: 'text-[#22B1A0]',
            iconName: "IconYoga",
        },
        {
            id: 2,
            itemClassification: '생활용품',
            name: '발뮤다 커피 머그잔',
            price: 139000,
            stock: 6,
            itemBg: 'bg-[#FEF2F2]',
            itemText: 'text-[#EF4444]',
            iconName: "IconCoffee",
        },
        {
            id: 3,
            itemClassification: '패션/가방',
            name: '어반어스 데이트 백팩',
            price: 79000,
            stock: 9,
            itemBg: 'bg-[#F9FBFC]',
            itemText: 'text-[#7B808C]',
            iconName: "IconBackpack",
        },
    ];

    return (
        <div className="flex flex-col gap-6.5">
            <Card>
                <div className="flex items-center">
                    <div className="flex gap-3">
                        {classification.map((clas) => (
                            <SelectCard
                                onClick={() => setSelectedType(clas.id)}
                                isSelected={selectedType === clas.id}
                                key={clas.id}
                            >
                                <div>{clas.label}</div>
                            </SelectCard>
                        ))}
                    </div>
                    <div className="ml-auto">
                        <SelectBox>
                            <option value="latest">최신순</option>
                            <option value="priceAsc">낮은 가격순</option>
                            <option value="priceDesc">높은 가격순</option>
                        </SelectBox>
                    </div>
                </div>
                <div className="flex gap-3 items-center justify-end mt-5">
                    <IconSearch size={20} className="text-gray-400" />
                    <TextInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="검색어 입력"
                        className="w-100"
                    />
                    <Button variant="secondary" className="w-16 h-10">
                        검색
                    </Button>
                </div>
            </Card>
            <Card variant="primary">
                <div className="flex flex-col gap-1.5">
                    <div className="font-bold text-[white] text-xl">Paygo 첫 구매 혜택</div>
                    <div className="text-[#E2E3FF]">
                        첫 구매 시 5,000원 캐시백 - Paygo 잔액으로 바로 적립
                    </div>
                </div>
            </Card>
            <div>
                <div className="flex">
                    <div className="text-[gray]">인기 상품</div>
                    <NavLink to="#" className="ml-auto flex items-center text-[#6266F1]">
                        <div>전체보기</div>
                        <IconArrowRight size={16} />
                    </NavLink>
                </div>
                <div className="mt-4 grid grid-cols-[1fr_1fr_1fr_1fr] gap-4">
                    {popularItems.map((item) => {
                        const Icon = iconMap[item.iconName];

                        return (
                            <Card key={item.id} className="p-0 h-100 overflow-hidden flex flex-col">
                                <NavLink to="/shopping/product-detail" className="flex-1">
                                    <div
                                        className={`flex justify-center items-center h-50 ${item.itemBg}`}
                                    >
                                        <Icon size={80} className={item.itemText} />
                                    </div>
                                    <div className="p-3 px-4.5 flex flex-col">
                                        <div className="text-sm text-gray-400 flex">
                                            <div>{item.itemClassification}</div>
                                            <div
                                                className={`ml-auto ${item.stock > 2 ? '' : 'text-[red]'}`}
                                            >
                                                재고 {item.stock}개
                                            </div>
                                        </div>
                                        <div className="text-2xl text-gray-600 mt-3 truncate">
                                            {item.name}
                                        </div>
                                        <div className="flex text-3xl text-gray-600 font-medium mt-3">
                                            <div>{item.price.toLocaleString()}원</div>
                                        </div>
                                        <Button 
                                            className="flex p-2 w-full mt-3"
                                            onClick={(e) => {
                                                e.preventDefault();  // <a>, <NavLink> 기본 동작 막기
                                                e.stopPropagation(); // 이벤트 버블링 막기
                                                navigate('/shopping/product-detail');
                                            }}
                                        >
                                            <div className="pl-2 w-full">
                                                <div className="flex items-center justify-center text-xl">
                                                    <div className="mr-2">
                                                        상세보기
                                                    </div>
                                                    <IconArrowRight />
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </NavLink>
                            </Card>
                        );
                    })}
                </div>
            </div>
            <div>
                <div className="flex">
                    <div className="text-[gray]">신규 상품</div>
                    <NavLink to="#" className="ml-auto flex items-center text-[#6266F1]">
                        <div>전체보기</div>
                        <IconArrowRight size={16} />
                    </NavLink>
                </div>
                <div className="mt-4 grid grid-cols-[1fr_1fr_1fr_1fr] gap-4">
                    {newItems.map((item) => {
                        const Icon = iconMap[item.iconName];

                        return (
                            <Card key={item.id} className="p-0 h-100 overflow-hidden flex flex-col">
                                <NavLink to="/shopping/product-detail" className="flex-1">
                                    <div
                                        className={`flex justify-center items-center h-50 ${item.itemBg}`}
                                    >
                                        <Icon size={80} className={item.itemText} />
                                    </div>
                                    <div className="p-3 px-4.5 flex flex-col">
                                        <div className="text-sm text-gray-400 flex">
                                            <div>{item.itemClassification}</div>
                                            <div
                                                className={`ml-auto ${item.stock > 2 ? '' : 'text-[red]'}`}
                                            >
                                                재고 {item.stock}개
                                            </div>
                                        </div>
                                        <div className="text-2xl text-gray-600 mt-3 truncate">
                                            {item.name}
                                        </div>
                                        <div className="flex text-3xl text-gray-600 font-medium mt-3">
                                            <div>{item.price.toLocaleString()}원</div>
                                        </div>
                                        <Button 
                                            className="flex p-2 w-full mt-3"
                                            onClick={(e) => {
                                                e.preventDefault(); 
                                                e.stopPropagation(); 
                                                navigate('/shopping/product-detail');
                                            }}
                                        >
                                            <div className="pl-2 w-full">
                                                <div className="flex items-center justify-center text-xl">
                                                    <div className="mr-2">
                                                        상세보기
                                                    </div>
                                                    <IconArrowRight />
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </NavLink>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProductListPage;
