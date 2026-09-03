import { useState } from 'react';
import Card from '../../components/common/card';
import { coupons } from '../../constants/coupon';
import { user } from '../../constants/user';
import { getDiscount } from '../../lib/couponUtils';
import { useCartStore } from '../../stores/useCartStore';
import Button from '../../components/common/button';
import { IconAlertTriangle, IconLock } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { iconMap } from '../../constants/icons';
import SelectCard from '../../components/common/selectCard';
import { paymentMethods } from '../../constants/methods';
import SelectBox from '../../components/common/selectBox';
import type { Coupon } from '../../types/coupon';
import { getMethodIcon } from '../../constants/useIcons';

function ProductPaymentPage() {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('');

    const usableCoupon = coupons.filter(
        (coupon) => coupon.userId === user.id && coupon.status === 'active'
    );

    const [selectedCoupon, setSelectedCoupon] = useState<Coupon | undefined>(usableCoupon[0]);
    const items = useCartStore((state) => state.items);
    const selectedIds = useCartStore((state) => state.selectedIds);
    const selectedItems = items.filter((i) => selectedIds.includes(i.cartItemId));
    const selectedItemPrice = selectedItems.reduce((sum, item) => sum + item.count * item.price, 0);
    const navigate = useNavigate();

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
            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
        );
    }

    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5 font-medium">
                        <Card>
                            <div className="flex justify-between">
                                <div className="text-lg text-gray-500 mb-6">배송지</div>
                                <div>
                                    <button
                                        className="text-[#6266F1] cursor-pointer"
                                        onClick={() => navigate('/account/mypage')}
                                    >
                                        변경
                                    </button>
                                </div>
                            </div>
                            <Card className="flex flex-col gap-1 bg-[#FAFAFA]">
                                <div className="text-lg">{user.name} (기본 배송지)</div>
                                <div className="text-gray-500">{user.address}</div>
                                <div className="text-gray-500">{user.phone}</div>
                            </Card>
                        </Card>
                        <Card>
                            <div className="text-lg text-gray-500 mb-6">
                                주문 상품 ({selectedItems.length}건)
                            </div>
                            {selectedItems.map((item) => {
                                const Icon = iconMap[item.iconName];

                                return (
                                    <div
                                        key={item.cartItemId}
                                        className="flex items-center gap-4 mb-4"
                                    >
                                        <div
                                            className={`w-[3.75rem] h-[3.75rem] rounded-xl flex items-center justify-center ${item.itemBg}`}
                                        >
                                            <Icon size={30} className={item.itemText} />
                                        </div>
                                        <div
                                            className={`w-50 truncate flex flex-col ${item.stock <= 2 ? '' : 'gap-2'}`}
                                        >
                                            <div className="truncate">{item.productName}</div>
                                            <div className="flex text-gray-400 text-xs">
                                                {item.size !== -1 && (
                                                    <div>사이즈: {item.size} |&nbsp;</div>
                                                )}
                                                <div>색상: {item.color} |&nbsp;</div>
                                                <div>주문수량: {item.count}</div>
                                            </div>
                                            {item.stock <= 2 && (
                                                <div className="flex items-center gap-2 text-red-400 text-sm mt-1">
                                                    <IconAlertTriangle
                                                        size={item.stock == 1 ? 18 : 14}
                                                    />
                                                    <div className="whitespace-pre-line">
                                                        재고 {item.stock}개 남음
                                                        {item.stock === 1 &&
                                                            '\n동시 주문 시 구매불가 가능'}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="font-bold">
                                            {(item.price * item.count).toLocaleString()}원
                                        </div>
                                    </div>
                                );
                            })}
                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-4 font-medium">
                        <Card>
                            <div className="text-lg text-gray-500 mb-6">결제 수단</div>
                            <div className="flex flex-col gap-3 mb-3">
                                {paymentMethods.map((method) => (
                                    <SelectCard
                                        key={method.id}
                                        isSelected={selectedPayment === method.id}
                                        onClick={() => setSelectedPayment(method.id)}
                                        variant="secondary"
                                        importance="high"
                                    >
                                        <div className="flex items-center p-5 gap-5">
                                            {getMethodIcon(method.id)}
                                            <div className="flex flex-col justify-start">
                                                <div className="flex font-medium">
                                                    {method.label}
                                                </div>
                                                <div>{method.desc}</div>
                                            </div>
                                        </div>
                                    </SelectCard>
                                ))}
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col gap-4 text-gray-500">
                                <div className="text-lg mb-2">결제 금액</div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>상품 금액</div>
                                    <div className="text-[black]">
                                        {selectedItemPrice.toLocaleString()}원
                                    </div>
                                </div>
                                <div className="text-gray-400 flex items-center justify-between">
                                    <div>쿠폰 선택</div>
                                    <div>
                                        <SelectBox
                                            className="h-10"
                                            value={selectedCoupon?.id ?? ''}
                                            onChange={(e) => {
                                                const coupon = usableCoupon.find(
                                                    (coupon) => coupon.id === e.target.value
                                                );
                                                setSelectedCoupon(coupon);
                                            }}
                                        >
                                            {usableCoupon.length > 0 &&
                                                usableCoupon.map((coupon) => (
                                                    <option key={coupon.id} value={coupon.id}>
                                                        {coupon.name}
                                                    </option> // TODO: 사용 시 status - 'used'로 변경
                                                ))}
                                            {usableCoupon.length === 0 && (
                                                <option value="#">
                                                    선택가능한 쿠폰이 없습니다
                                                </option>
                                            )}
                                        </SelectBox>
                                    </div>
                                </div>
                                <div className="text-gray-400 flex justify-between">
                                    <div>할인 금액</div>
                                    <div
                                        className={`${selectedCoupon && getDiscount(selectedItemPrice, selectedCoupon) > 0 ? 'text-red-400' : 'text-[black]'}`}
                                    >
                                        {selectedCoupon &&
                                        getDiscount(selectedItemPrice, selectedCoupon) > 0
                                            ? '-' +
                                              getDiscount(
                                                  selectedItemPrice,
                                                  selectedCoupon
                                              ).toLocaleString() +
                                              '원'
                                            : '—'}
                                    </div>
                                </div>
                                <div className="mt-2 text-gray-400 flex justify-between">
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
                                        {selectedCoupon &&
                                            Math.max(
                                                0,
                                                selectedItemPrice -
                                                    getDiscount(selectedItemPrice, selectedCoupon)
                                            ).toLocaleString() + '원'}
                                    </div>
                                </div>
                            </div>
                        </Card>
                        {selectedPayment === 'paygo' && (
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
                                        {selectedCoupon &&
                                            (
                                                balance -
                                                Math.max(
                                                    0,
                                                    selectedItemPrice -
                                                        getDiscount(
                                                            selectedItemPrice,
                                                            selectedCoupon
                                                        )
                                                )
                                            ).toLocaleString()}
                                        {!selectedCoupon &&
                                            (
                                                balance - Math.max(0, selectedItemPrice)
                                            ).toLocaleString()}
                                        원
                                    </div>
                                </div>
                            </Card>
                        )}
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
                        <div>
                            {/* TODO: 결제하기 버튼 누르고 난 뒤 트랜잭션 처리 완료 필요 */}
                            <Button
                                className="p-3 w-full text-xl font-bold"
                                disabled={!isChecked || !selectedPayment}
                                onClick={() => navigate('/shopping/order-list')}
                            >
                                {selectedCoupon &&
                                    Math.max(
                                        0,
                                        selectedItemPrice -
                                            getDiscount(selectedItemPrice, selectedCoupon)
                                    ).toLocaleString() + '원 결제하기'}
                                {!selectedCoupon &&
                                    Math.max(0, selectedItemPrice).toLocaleString() + '원 결제하기'}
                            </Button>
                        </div>
                        <div className="text-gray-500 text-sm flex justify-center items-center gap-1 -mt-1">
                            <IconLock size={20} />
                            결제 처리 중 중복 요청이 방지됩니다
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPaymentPage;
