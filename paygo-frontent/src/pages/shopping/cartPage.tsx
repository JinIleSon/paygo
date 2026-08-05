import { useState } from 'react';
import Card from '../../components/common/card';
import { useCartStore } from '../../stores/useCartStore';
import { IconAlertTriangle, IconX } from '@tabler/icons-react';
import Button from '../../components/common/button';
import { getHighestDiscount } from '../../lib/couponUtils';
import type { Coupon } from '../../types/coupon';

function CartPage() {
    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const updateItem = useCartStore((state) => state.updateItem);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const selectedItem = items.filter((item) => selectedIds.includes(item.cartItemId));
    const selectedItemPrice = selectedItem.reduce((sum, item) => sum + item.count * item.price, 0);

    // 개별 체크박스 토글
    const toggleItem = (cartItemId: string) => {
        setSelectedIds(
            (prev) =>
                prev.includes(cartItemId)
                    ? prev.filter((id) => cartItemId !== id) // 이미 선택됨 -> 제거
                    : [...prev, cartItemId] // 선택 안 됨 -> 추가
        );
    };

    // 전체 선택 토글
    const toggleAll = () => {
        setSelectedIds(
            (prev) =>
                prev.length === items.length
                    ? [] // 전부 선택됨 -> 전체 해제
                    : items.map((item) => item.cartItemId) // 아니면 -> 전체 선택
        );
    };

    const checkedStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 8l3.5 3.5L13 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundColor: '#6266F1', // 연한 회색빛 보라
        borderColor: '#6266F1', // 테두리도 같이 맞춰주기
    };

    const coupons : Coupon[] = [
        {
            id: '1',
            name: '첫 구매 혜택 5,000원권',
            discountType: 'fixed',
            discountValue: 5000,
            status: 'expired',
            expiresAt: '2026-08-03',
        },
        {
            id: '2',
            name: '신규 가입 10% 할인',
            discountType: 'percent',
            discountValue: 10,
            status: 'active',
            expiresAt: '2026-08-21',
        },
        {
            id: '3',
            name: 'Paygo하자 이벤트',
            discountType: 'fixed',
            discountValue: 10000,
            status: 'used',
            expiresAt: '2026-08-21',
        },
        {
            id: '4',
            name: '개인 회원 이벤트',
            discountType: 'fixed',
            discountValue: 20000,
            status: 'active',
            expiresAt: '2026-08-21',
        },
    ];

    const balance = 3842000; // TODO: 백엔드에서 값 불러와야 함

    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5 font-medium">
                        <Card>
                            <label
                                htmlFor="agreeAll"
                                className="cursor-pointer flex items-center gap-3 pt-0.5"
                            >
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agreeAll"
                                    checked={
                                        selectedIds.length === items.length && items.length > 0
                                    }
                                    onChange={toggleAll}
                                    style={
                                        selectedIds.length === items.length && items.length > 0
                                            ? checkedStyle
                                            : undefined
                                    }
                                    className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                                />
                                <div className="text-gray-500 text-lg pb-0.5">
                                    전체 선택 ({selectedIds.length}/{items.length})
                                </div>
                            </label>
                        </Card>
                        {items.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Card key={item.cartItemId} className="flex">
                                    <label
                                        htmlFor={`agree${item.cartItemId}`}
                                        className="cursor-pointer flex flex-wrap items-center gap-4"
                                    >
                                        <input
                                            id={`agree${item.cartItemId}`}
                                            type="checkbox"
                                            checked={selectedIds.includes(item.cartItemId)}
                                            onChange={() => {
                                                toggleItem(item.cartItemId);
                                            }}
                                            style={
                                                selectedIds.includes(item.cartItemId)
                                                    ? checkedStyle
                                                    : undefined
                                            }
                                            className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                                        />
                                        <div
                                            className={`w-[3.75rem] h-[3.75rem] rounded-xl flex items-center justify-center ml-auto ${item.itemBg}`}
                                        >
                                            <Icon size={30} className={item.itemText} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div>{item.productName}</div>
                                            <div className="flex">
                                                {item.size && (
                                                    <div className="text-gray-400 text-sm">
                                                        사이즈: {item.size} |
                                                    </div>
                                                )}
                                                <div className="text-gray-400 text-sm">
                                                    &nbsp;색상: {item.color}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <Button
                                                    variant="secondary"
                                                    className="px-2"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        updateItem(
                                                            item.cartItemId,
                                                            Math.max(0, item.count - 1)
                                                        );
                                                    }}
                                                >
                                                    –
                                                </Button>
                                                <div className="text-lg">{item.count}</div>
                                                <Button
                                                    variant="secondary"
                                                    className="px-2"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        updateItem(
                                                            item.cartItemId,
                                                            Math.min(item.stock, item.count + 1)
                                                        );
                                                    }}
                                                >
                                                    +
                                                </Button>
                                                <div>
                                                    {(item.count * item.price).toLocaleString()}원
                                                </div>
                                            </div>
                                            {item.stock <= 2 && (
                                                <div className="flex items-center gap-2 text-[red] text-sm">
                                                    <IconAlertTriangle size={18} />
                                                    <div>재고 {item.stock}개 남음 — 서두르세요</div>
                                                </div>
                                            )}
                                        </div>
                                    </label>
                                    <div className="ml-auto">
                                        <IconX
                                            onClick={() => removeItem(item.cartItemId)}
                                            className="cursor-pointer text-gray-400"
                                        />
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5 font-medium">
                        <Card className="h-180">
                            <div className="flex flex-col gap-4 text-gray-500">
                                <div className="text-lg">주문 요약</div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>상품 금액</div>
                                    <div className="text-[black]">
                                        {selectedItemPrice.toLocaleString()}원
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>할인 금액</div>
                                    <div className={`${getHighestDiscount(selectedItemPrice, coupons) > 0 ? "text-[red]" : "text-[black]"}`}>
                                        {/* TODO: coupon 타입 추가 후 가장 할인이 많이 되는 쿠폰 적용 필요 */}
                                        {
                                            getHighestDiscount(selectedItemPrice, coupons) > 0 ?
                                            '-' + getHighestDiscount(selectedItemPrice, coupons).toLocaleString() + '원' :
                                            '—'
                                        }
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>배송비</div>
                                    <div className="text-[black]">무료</div>
                                </div>
                                <div className="text-gray-400 -mt-3 flex justify-between">
                                    <div></div>
                                    <div className="text-[gray] text-sm">배송비는 Paygo가 부담했어요</div>
                                </div>
                                <div className="border-b border-[#D9D9D9]"></div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-xl text-gray-600">최종 결제</div>
                                    <div className="font-bold text-2xl text-[#6266F1]">
                                        {(Math.max(0, selectedItemPrice - getHighestDiscount(selectedItemPrice, coupons))).toLocaleString() + '원'}
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex flex-col gap-4 bg-[#F5F6FF]">
                            <div className="flex items-center justify-between text-lg">
                                <div className="text-gray-500">Paygo 잔액</div>
                                <div className="font-bold text-xl">{balance.toLocaleString()}원</div>
                            </div>
                            <div className="flex items-center justify-between text-lg">
                                <div className="text-gray-600">결제 후 잔액</div>
                                <div className="font-bold text-2xl text-[#6266F1]">{(balance - (Math.max(0, selectedItemPrice - getHighestDiscount(selectedItemPrice, coupons)))).toLocaleString()}원</div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
