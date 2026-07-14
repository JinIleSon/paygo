import { useState } from 'react';
import Card from '../../components/common/Card';
import SelectCard from '../../components/common/SelectCard';
import TextInput from '../../components/common/TextInput';
import Button from '../../components/common/Button';
import { IconArrowRight, IconChevronDown, IconSearch, IconShoe, IconShoppingCartPlus } from '@tabler/icons-react';
import SelectBox from '../../components/common/SelectBox';
import { NavLink } from 'react-router-dom';

function ProductListPage() {
    const [selectedType, setSelectedType] = useState('');
    const [search, setSearch] = useState('');

    const classification = [
        { id: 'all', label: '전체' },
        { id: 'fashion', label: '패션' },
        { id: 'electronicDevices', label: '전자기기' },
        { id: 'sports', label: '스포츠' },
        { id: 'dailyNecessities', label: '생활용품' },
        { id: 'food', label: '식품' },
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
                    <div className="text-[#E2E3FF]">첫 구매 시 5,000원 캐시백 - Paygo 잔액으로 바로 적립</div>
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
                    <Card className="p-0 h-100 overflow-hidden">
                        <div className="flex justify-center items-center h-1/2 bg-[#F5F6FF]">
                            <IconShoe size={80} className="text-[#6266F1]"/>
                        </div>
                        <div className="p-3 pl-4.5 pr-4.5 flex flex-col">
                            <div className="text-sm text-gray-400 flex">
                                <div>패션/신발</div><div className="ml-auto">재고 3개</div>
                            </div>
                            <div className="text-2xl text-gray-600 mt-3">나이키 에어맥스</div>
                            <div className="flex text-2xl text-gray-600 font-medium mt-3">
                                <div>120,000원</div>
                            </div>
                            <div className="mt-4">
                                <Button className="flex p-2 w-full ">
                                    <div className="flex items-center justify-center pl-2 w-full">
                                        <IconShoppingCartPlus/>
                                        <div className="ml-auto mr-2 text-xl">
                                            장바구니 추가
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProductListPage;
