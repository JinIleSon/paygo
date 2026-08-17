import { IconAlertTriangle, IconShoppingCart } from '@tabler/icons-react';
import Card from '../../components/common/card';
import { useState } from 'react';
import SelectCard from '../../components/common/selectCard';
import Button from '../../components/common/button';
import { useCartStore } from '../../stores/useCartStore';
import { useToastStore } from '../../stores/useToastStore';
import { iconMap } from '../../constants/icons';
import { useParams } from 'react-router-dom';
import { products } from '../../constants/product';
import { user } from '../../constants/user';

function ProductDetailPage() {
    const { productId } = useParams();
    const product = products.find((p) => p.id === Number(productId));

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState<'info' | 'description'>('info');
    const [selectedSize, setSelectedSize] = useState(-1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCount, setSelectedCount] = useState(1);

    const addItem = useCartStore((state) => state.addItem);
    const showToast = useToastStore((state) => state.showToast);

    if (!product) return <div>상품을 찾을 수 없습니다.</div>; // undefined 방지

    const handleAddToCart = () => {
        addItem({
            productId: product.id,
            productName: product.name,
            size: selectedSize, // 사용자가 고른 사이즈
            color: selectedColor, // 사용자가 고른 색
            price: product.discountPrice,
            stock: product.stock, // 남은 재고
            count: selectedCount, // 사용자가 고른 개수
            iconName: product.iconName,
            itemBg: product.itemBg,
            itemText: product.itemText,
        });

        showToast('장바구니에 상품을 담았어요');
    };

    const requireSize = product.size && product.size.length > 0;

    // size, color가 선택되지 않고, count가 stock보다 크고 0보다 작은지 판별
    const isAddToCartDisabled =
        (requireSize && selectedSize === -1) ||
        selectedColor === '' ||
        product.stock <= 0 ||
        selectedCount > product.stock ||
        selectedCount < 1;

    const balance = user.balance;
    const Icon = iconMap[product.iconName];

    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5">
                        <Card className="p-0 h-130 overflow-hidden">
                            <div
                                className="flex justify-center items-center h-100"
                                style={{ background: product.colorSet[selectedIndex].bg }}
                            >
                                <Icon
                                    size={160}
                                    style={{ color: product.colorSet[selectedIndex].color }}
                                />
                            </div>
                            <div className="px-6 py-4 gap-4 grid grid-cols-[1fr_1fr_1fr_1fr] h-30">
                                {product.colorSet.map((setting, index) => (
                                    <Card
                                        key={index}
                                        onClick={() => setSelectedIndex(index)}
                                        style={{
                                            backgroundColor: setting.bg,
                                            border:
                                                selectedIndex === index ? '2px solid #A7A7A7' : '',
                                        }}
                                        className="p-0 flex items-center justify-center cursor-pointer"
                                    >
                                        <Icon size={40} style={{ color: setting.color }} />
                                    </Card>
                                ))}
                            </div>
                        </Card>
                        <Card>
                            <div className="grid grid-cols-[1fr_1fr] border-b border-b-[#D9D9D9] mb-8">
                                <button
                                    className={`cursor-pointer font-medium py-3 border-b-2 ${selectedTab === 'info' ? 'text-[#6266F1] border-b-[#6266F1]' : 'text-[gray] border-b-transparent'}`}
                                    onClick={() => setSelectedTab('info')}
                                >
                                    상품 정보
                                </button>
                                <button
                                    className={`cursor-pointer font-medium py-3 border-b-2 ${selectedTab === 'description' ? 'text-[#6266F1] border-b-[#6266F1]' : 'text-[gray] border-b-transparent'}`}
                                    onClick={() => setSelectedTab('description')}
                                >
                                    상세 설명
                                </button>
                            </div>
                            {/* 상품 정보 탭 */}
                            {selectedTab === 'info' && (
                                <section>
                                    <div className="grid grid-cols-[8rem_1fr] gap-y-6 mb-8">
                                        <div className="text-[gray] font-medium">브랜드</div>
                                        <div>{product.brand}</div>
                                        <div className="text-[gray] font-medium">소재</div>
                                        <div>{product.subjectMatter}</div>
                                        <div className="text-[gray] font-medium">제조국</div>
                                        <div>{product.origin}</div>
                                        <div className="text-[gray] font-medium">출시일</div>
                                        <div>{product.createdAt}</div>
                                        <div className="text-[gray] font-medium">배송</div>
                                        <div>{product.deliveryAt}</div>
                                        <div className="text-[gray] font-medium">반품</div>
                                        <div>{product.return}</div>
                                    </div>
                                </section>
                            )}

                            {/* 상세 설명 탭 */}
                            {selectedTab === 'description' && (
                                <section>
                                    <div className="whitespace-pre-wrap text-[gray] font-medium mb-8">
                                        {product.description
                                            .split('\n')
                                            .map((line) => line.trim())
                                            .join('\n')}
                                    </div>
                                </section>
                            )}
                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5">
                        <Card className="pt-10 pb-12">
                            <div className="flex flex-col gap-4 font-medium">
                                <div className="text-[gray]">
                                    쇼핑 &gt; {product.itemClassification} &gt;{' '}
                                    <span className="text-[#6266F1]">{product.name}</span>
                                </div>
                                <div className="text-2xl">
                                    {product.name} {selectedColor && '— '}
                                    {selectedColor}
                                </div>{' '}
                                {/* TODO: 색상 선택 시 함께 바뀌어야 함 */}
                                <div className="flex items-end">
                                    <div className="text-xl text-red-400">
                                        <span className="text-2xl">
                                            {Math.floor(((product.originPrice - product.discountPrice) /
                                                product.originPrice) *
                                                100)}
                                            %
                                        </span>{' '}
                                        할인
                                    </div>
                                    <div className="text-[gray] ml-auto">
                                        재고{' '}
                                        <span
                                            className={`${product.stock > 2 ? 'text-[gray]' : 'text-red-400'}`}
                                        >
                                            {product.stock}개
                                        </span>{' '}
                                        남음
                                    </div>
                                </div>
                                <div className="flex items-end gap-1">
                                    <div className="text-4xl">
                                        {product.discountPrice.toLocaleString()}원
                                    </div>
                                    <div className="text-xl text-gray-300 line-through">
                                        {product.originPrice.toLocaleString()}원
                                    </div>
                                </div>
                                <div className="border-t border-t-[#D9D9D9] mt-4 mb-2"></div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="text-[gray]">사이즈 선택</div>
                                        <div className="flex flex-wrap gap-3">
                                            {product.size.map((s) => (
                                                <SelectCard
                                                    key={s}
                                                    onClick={() => setSelectedSize(s)}
                                                    isSelected={selectedSize === s}
                                                    variant="secondary"
                                                    className="px-4 py-1 rounded-md"
                                                >
                                                    {s}
                                                </SelectCard>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="text-[gray]">색상 선택</div>
                                        <div className="flex flex-wrap gap-3">
                                            {product.chooseColor.map((color) => (
                                                <SelectCard
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    isSelected={selectedColor === color}
                                                    variant="secondary"
                                                    className="px-4 py-1 rounded-md"
                                                >
                                                    {color}
                                                </SelectCard>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="text-[gray]">수량</div>
                                        <div className="flex items-center gap-5">
                                            <Button
                                                variant="secondary"
                                                className="px-3 py-1"
                                                onClick={() =>
                                                    setSelectedCount((prev) => {
                                                        if (prev > 0) return prev - 1;
                                                        return 0;
                                                    })
                                                }
                                            >
                                                –
                                            </Button>
                                            <div className="text-xl">{selectedCount}</div>
                                            <Button
                                                variant="secondary"
                                                className="px-3 py-1"
                                                onClick={() =>
                                                    setSelectedCount((next) => {
                                                        if (next < product.stock) return next + 1;
                                                        return next;
                                                    })
                                                }
                                            >
                                                +
                                            </Button>
                                            {product.stock <= 2 && (
                                                <div className="flex items-center gap-2 text-red-400">
                                                    <IconAlertTriangle size={20} />
                                                    <div>
                                                        재고 {product.stock}개 남음 — 서두르세요
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="py-9 flex flex-col gap-5">
                            <div className="flex justify-between items-center font-medium">
                                <div className="text-[gray]">Paygo 잔액</div>
                                <div className="text-2xl">{balance.toLocaleString()}원</div>
                            </div>

                            <div className="flex justify-between items-center font-medium">
                                <div className="text-[gray]">결제 후 잔액</div>
                                <div className="text-[#6266F1] text-2xl">
                                    {(balance - product.discountPrice).toLocaleString()}원
                                </div>
                            </div>

                            {/* 담기 버튼은 장바구니로 이동하면서 장바구니 테이블에 데이터 row 하나 추가 */}
                            <div className="grid grid-cols-[8rem_1fr] gap-3 mt-3 font-medium">
                                <Button
                                    variant="secondary"
                                    className="flex items-center justify-center gap-2 p-3 py-6 text-xl"
                                    onClick={handleAddToCart}
                                    isDisabled={isAddToCartDisabled}
                                >
                                    <IconShoppingCart size={25} />
                                    <div>담기</div>
                                </Button>
                                <Button
                                    className="flex items-center justify-center gap-2 p-3 py-6 text-xl"
                                    isDisabled={isAddToCartDisabled}
                                >
                                    <div>바로 구매</div>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
