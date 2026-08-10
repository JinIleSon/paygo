import Card from '../../components/common/card';
import { coupons } from '../../constants/coupon';
import { getHighestDiscount } from '../../lib/couponUtils';
import { useCartStore } from '../../stores/useCartStore';

function ProductPaymentPage() {
    const items = useCartStore((state) => state.items);
    const selectedIds = useCartStore((state) => state.selectedIds);
    const selectedItems = items.filter((i) => selectedIds.includes(i.cartItemId));

    const selectedItemPrice = selectedItems.reduce((sum, item) => sum + item.count * item.price, 0);

    const balance = 3842000; // TODO: 백엔드에서 값 불러와야 함

    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5">
                        <Card>
                            <div className="text-lg text-gray-500 font-medium">배송지</div>
                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-4">
                        <Card>
                            <div className="flex flex-col gap-4 text-gray-500">
                                <div className="text-lg">결제 금액</div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>상품 금액</div>
                                    <div className="text-[black]">
                                        {selectedItemPrice.toLocaleString()}원
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>할인 금액</div>
                                    <div
                                        className={`${getHighestDiscount(selectedItemPrice, coupons) > 0 ? 'text-[red]' : 'text-[black]'}`}
                                    >
                                        {/* TODO: coupon 타입 추가 후 가장 할인이 많이 되는 쿠폰 적용 필요 */}
                                        {getHighestDiscount(selectedItemPrice, coupons) > 0
                                            ? '-' +
                                              getHighestDiscount(
                                                  selectedItemPrice,
                                                  coupons
                                              ).toLocaleString() +
                                              '원'
                                            : '—'}
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>배송비</div>
                                    <div className="text-[black]">무료</div>
                                </div>
                                <div className="text-gray-400 -mt-3 flex justify-between">
                                    <div></div>
                                    <div className="text-[gray] text-sm">
                                        배송비는 Paygo가 부담했어요
                                    </div>
                                </div>
                                <div className="border-b border-[#D9D9D9]"></div>
                                <div className="flex justify-between mt-2">
                                    <div className="text-xl text-gray-600">최종 결제</div>
                                    <div className="font-bold text-2xl text-[#6266F1]">
                                        {Math.max(
                                            0,
                                            selectedItemPrice -
                                                getHighestDiscount(selectedItemPrice, coupons)
                                        ).toLocaleString() + '원'}
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex flex-col gap-4 bg-[#F5F6FF]">
                            <div className="flex items-center justify-between text-lg">
                                <div className="text-gray-500">현재 잔액</div>
                                <div className="font-bold text-xl">
                                    {balance.toLocaleString()}원
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-lg">
                                <div className="text-gray-600">결제 후 잔액</div>
                                <div className="font-bold text-2xl text-[#6266F1]">
                                    {(
                                        balance -
                                        Math.max(
                                            0,
                                            selectedItemPrice -
                                                getHighestDiscount(selectedItemPrice, coupons)
                                        )
                                    ).toLocaleString()}
                                    원
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPaymentPage;
