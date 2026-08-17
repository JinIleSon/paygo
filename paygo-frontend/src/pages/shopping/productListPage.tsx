import { useState } from 'react';
import Card from '../../components/common/card';
import SelectCard from '../../components/common/selectCard';
import TextInput from '../../components/common/textInput';
import Button from '../../components/common/button';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import SelectBox from '../../components/common/selectBox';
import { NavLink, useNavigate } from 'react-router-dom';
import { iconMap } from '../../constants/icons';
import { newItems, popularItems } from '../../constants/product';
import { productClassification } from '../../constants/classification';

function ProductListPage() {
    const [selectedType, setSelectedType] = useState('');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-6.5">
            <Card>
                <div className="flex items-center">
                    <div className="flex gap-3">
                        {productClassification.map((clas) => (
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
                                <NavLink
                                    to={`/shopping/product-detail/${item.id}`}
                                    className="flex-1"
                                >
                                    <div
                                        className={`flex justify-center items-center h-50 ${item.itemBg}`}
                                    >
                                        <Icon size={80} className={item.itemText} />
                                    </div>
                                    <div className="p-3 px-4.5 flex flex-col">
                                        <div className="text-sm text-gray-400 flex">
                                            <div>{item.itemClassification}</div>
                                            <div
                                                className={`ml-auto ${item.stock > 2 ? '' : 'text-red-400'}`}
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
                                                e.preventDefault(); // <a>, <NavLink> 기본 동작 막기
                                                e.stopPropagation(); // 이벤트 버블링 막기
                                                navigate(`/shopping/product-detail/${item.id}`);
                                            }}
                                        >
                                            <div className="pl-2 w-full">
                                                <div className="flex items-center justify-center text-xl">
                                                    <div className="mr-2">상세보기</div>
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
                                <NavLink
                                    to={`/shopping/product-detail/${item.id}`}
                                    className="flex-1"
                                >
                                    <div
                                        className={`flex justify-center items-center h-50 ${item.itemBg}`}
                                    >
                                        <Icon size={80} className={item.itemText} />
                                    </div>
                                    <div className="p-3 px-4.5 flex flex-col">
                                        <div className="text-sm text-gray-400 flex">
                                            <div>{item.itemClassification}</div>
                                            <div
                                                className={`ml-auto ${item.stock > 2 ? '' : 'text-red-400'}`}
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
                                                navigate(`/shopping/product-detail/${item.id}`);
                                            }}
                                        >
                                            <div className="pl-2 w-full">
                                                <div className="flex items-center justify-center text-xl">
                                                    <div className="mr-2">상세보기</div>
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
