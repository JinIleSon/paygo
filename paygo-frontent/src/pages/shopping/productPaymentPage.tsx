import { useState } from 'react';
import Card from '../../components/common/card';
import { coupons } from '../../constants/coupon';
import { user } from '../../constants/user';
import { getHighestDiscount } from '../../lib/couponUtils';
import { useCartStore } from '../../stores/useCartStore';

function ProductPaymentPage() {
    const [isChecked, setIsChecked] = useState(false);
    const items = useCartStore((state) => state.items);
    const selectedIds = useCartStore((state) => state.selectedIds);
    const selectedItems = items.filter((i) => selectedIds.includes(i.cartItemId));
    const selectedItemPrice = selectedItems.reduce((sum, item) => sum + item.count * item.price, 0);

    const balance = user.balance; // TODO: 백엔드에서 값 불러와야 함
    const checkedStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 8l3.5 3.5L13 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundColor: '#6266f1', // 연한 회색빛 보라
        borderColor: '#6266f1', // 테두리도 같이 맞춰주기
    };

    function handleTermsLinkClick() {
        const width = 720;
        const height = 900;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        window.open(
            '/shopping/product-payment/terms',
            'orderPaymentTerms', // 창 이름 - 동일 이름이면 재클릭 시 새로 안 열리고 기존 창 재사용
            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,noopener,noreferrer` // noopener - 새 창이 원래 창을 조작 못 하게 막음, noreferrer - 어느 페이지에서 왔는지 출처 제공 방지
        );
    }

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
                        <div className="flex justify-between">
                            <label
                                htmlFor="agreeTerms"
                                className="flex gap-2.5 items-center cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    name=""
                                    id="agreeTerms"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    style={isChecked ? checkedStyle : undefined}
                                    className="appearance-none inline-block w-5 h-5 border-2 border-gray-300 rounded cursor-pointer"
                                />
                                <div className="text-gray-500 pb-0.5">
                                    주문 내용 확인 및 결제 동의
                                </div>
                            </label>
                            <button
                                className="text-[#6266F1] mb-1 cursor-pointer"
                                onClick={handleTermsLinkClick}
                            >
                                약관 보기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPaymentPage;
