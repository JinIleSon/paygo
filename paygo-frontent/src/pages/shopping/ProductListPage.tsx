import { useState } from 'react';
import Card from '../../components/common/Card';
import SelectCard from '../../components/common/SelectCard';
import TextInput from '../../components/common/TextInput';
import Button from '../../components/common/Button';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import SelectBox from '../../components/common/SelectBox';

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
        </div>
    );
}

export default ProductListPage;
