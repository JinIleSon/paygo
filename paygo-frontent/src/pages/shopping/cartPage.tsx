import { useState } from "react";
import Card from "../../components/common/card";
import { useCartStore } from "../../stores/useCartStore";

function CartPage() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    // 개별 체크박스 토글
    const toggleItem = (productId: number) => {
        setSelectedIds((prev) => 
            prev.includes(productId)
                ? prev.filter((id) => productId !== id) // 이미 선택됨 -> 제거
                : [...prev, productId]                  // 선택 안 됨 -> 추가
        );
    };

    // 전체 선택 토글
    const toggleAll = () => {
        setSelectedIds((prev) => 
            prev.length === items.length
            ? []                                        // 전부 선택됨 -> 전체 해제
            : items.map((item) => item.productId)       // 아니면 -> 전체 선택
        );
    };

    const checkedStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 8l3.5 3.5L13 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundColor: '#6266F1', // 연한 회색빛 보라
        borderColor: '#6266F1', // 테두리도 같이 맞춰주기
    };

    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5">
                        <Card>
                            <label htmlFor="agreeAll">
                                <input 
                                    type="checkbox" 
                                    name="" 
                                    id="agreeAll"
                                    checked={checked}
                                    onChange={(e) => {
                                        setChecked(e.target.checked)
                                    }}
                                    style={checked ? checkedStyle : undefined}
                                    className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                                />
                                    <div>전체 선택 (/{items.length})</div>
                            </label>
                        </Card>
                        {items.map((item) => (
                            <Card 
                                key={item.productId}
                                className="flex"
                                >
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5">

                    </div>
                </div>
            </div>            
        </div>
    );
}

export default CartPage;