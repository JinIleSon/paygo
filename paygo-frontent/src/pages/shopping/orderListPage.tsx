import { useState } from 'react';
import Card from '../../components/common/card';
import SelectBox from '../../components/common/selectBox';
import SelectCard from '../../components/common/selectCard';
import { orderClassification } from '../../constants/classification';

function OrderListPage() {
    const [selectedType, setSelectedType] = useState('');

    return (
        <div className="flex flex-col gap-6.5">
            <Card>
                <div className="flex items-center">
                    <div className="flex gap-3">
                        {orderClassification.map((clas) => (
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
                            <option value="oldest">오래된 순</option>
                            <option value="priceHigh">높은 금액순</option>
                            <option value="priceLow">낮은 금액순</option>
                        </SelectBox>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default OrderListPage;
