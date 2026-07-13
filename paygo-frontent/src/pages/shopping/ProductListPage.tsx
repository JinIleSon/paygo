import { useState } from "react";
import Card from "../../components/common/Card";
import SelectCard from "../../components/common/SelectCard";
import TextInput from "../../components/common/TextInput";
import Button from "../../components/common/Button";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";

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
        <div>
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
                    <div className="relative ml-auto">
                        <select
                            className="font-medium text-gray-400 appearance-none pl-3.5 w-[14.5rem] h-[2.875rem] w-70 rounded-md outline-none bg-white border border-[#D9D9D9]"
                        >
                            <option value="latest">최신순</option>
                            <option value="priceAsc">낮은 가격순</option>
                            <option value="priceDesc">높은 가격순</option>
                        </select>
                        <IconChevronDown size={14} className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400"/>
                    </div>
                </div>
                <div className="flex gap-3 items-center justify-end mt-5">
                    <IconSearch size={20} className="text-gray-400" />
                    <TextInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="검색어 입력"
                        className="w-60"
                    />
                    <Button variant="secondary" className="w-16 h-10">
                        검색
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default ProductListPage;