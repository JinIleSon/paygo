import { useState } from 'react';
import Card from '../../components/common/card';
import SelectBox from '../../components/common/selectBox';
import SelectCard from '../../components/common/selectCard';
import { orderClassification } from '../../constants/classification';
import { order } from '../../constants/order';
import { getOrderBadges } from '../../constants/useBadges';
import { iconMap } from '../../constants/icons';
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
                            {getOrderBadges(eachOrder.orderStatus)}
                        </div>
                    </div>
                    <div className="border-b border-[#D9D9D9]"></div>
                    {eachOrder.items.map((item) => {
                        const Icon = iconMap[item.iconName];

                        return (
                        <div 
                            key={item.productId}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-[3.75rem] h-[3.75rem] rounded-xl flex items-center justify-center ${item.itemBg}`}
                                >
                                    <Icon size={30} className={item.itemText} />
                                </div>
                                <div
                                    className="flex flex-col gap-2"
                                >
                                    <div className="truncate text-[black]">{item.productName}</div>
                                    <div className="flex text-gray-400 text-sm">
                                        {item.size && (
                                            <div>사이즈: {item.size} |&nbsp;</div>
                                        )}
                                        <div>색상: {item.color} |&nbsp;</div>
                                        <div>주문수량: {item.count}</div>
                                    </div>
                                </div>
                                <div className="ml-auto text-[black] font-bold">{(item.price * item.count).toLocaleString()}원</div>
                            </div>
                        </div>
                    );
                })}
                <div className="border-b border-[#D9D9D9]"></div>
                </Card>
            ))}
        </div>
    );
}

export default OrderListPage;
