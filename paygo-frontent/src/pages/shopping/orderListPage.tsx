import { useState } from 'react';
import Card from '../../components/common/card';
import SelectBox from '../../components/common/selectBox';
import SelectCard from '../../components/common/selectCard';
import { orderClassification } from '../../constants/classification';
import { order } from '../../constants/order';

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
            {order.map((eachOrder) => (
                <Card
                    key={eachOrder.orderId}
                    className="flex flex-col gap-4 text-gray-400 font-medium"
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-sm">주문번호 {eachOrder.orderId}</div>
                            <div className="text-xs">{eachOrder.createAt}</div>
                        </div>
                        <div>
                            {eachOrder.orderStatus}
                        </div>
                    </div>
                    {eachOrder.items.map((item) => (
                        <div key={item.productId}>
                            
                        </div>
                    ))}
                </Card>
            ))}
        </div>
    );
}

export default OrderListPage;
