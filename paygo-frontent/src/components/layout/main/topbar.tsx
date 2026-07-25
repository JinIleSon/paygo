import { IconArrowLeft, IconBell, IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCartStore } from '../../../stores/useCartStore';

const pageTitles: Record<string, string> = {
    '/wallet/home': '지갑 홈',
    '/wallet/charge': '충전',
    '/wallet/history': '거래내역',
    '/shopping/product-list': '상품 목록',
    '/shopping/product-detail': '상품 상세',
    '/shopping/product-payment': '주문/결제',
    '/shopping/cart': '장바구니',
    '/shopping/order-list': '주문 내역',
    '/shopping/order-detail': '주문 상세',
    '/account/mypage': '마이페이지',
    '/account/setting': '설정'
}

// 뒤로가기 있는 페이지
const showBackButtonPaths = [
    '/shopping/product-detail',
    '/shopping/product-payment',
    '/shopping/order-detail'
];

// 장바구니 아이콘 있는 페이지들
const showCartIconPaths = [
    '/shopping/product-list',
    '/shopping/product-detail',
    '/shopping/product-payment',
    '/shopping/order-list',
    '/shopping/order-detail'
];

function Topbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const title = pageTitles[location.pathname] || '';

    const cartCount = useCartStore((state) => state.items.length);

    const showBackButton = showBackButtonPaths.includes(location.pathname);
    const showCartIcon = showCartIconPaths.includes(location.pathname);

    return (
        <div className="flex items-center w-full font-bold border-b border-[#D9D9D9] shrink-0 p-5">
            {showBackButton && (
                <IconArrowLeft
                    size={26}
                    className="cursor-pointer mr-2" 
                    color="gray"
                    onClick={() => navigate(-1)}
                />
            )}
            <div className="pl-3">{title}</div>
            {location.pathname === '/shopping/cart' && cartCount > 0 && (
                <div className="ml-1">
                    ({cartCount})
                </div>
            )}
            <div className="flex gap-3 ml-auto">
                {showCartIcon && (
                    <div onClick={() => navigate('/shopping/cart')}>
                        <div className="flex cursor-pointer text-[gray] gap-1">
                            <IconShoppingCart 
                                size={26}
                                color="gray"
                            />
                            {cartCount > 0 && (
                                <div>
                                    {cartCount}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <IconBell size={26} className="cursor-pointer" color="gray" />
                <IconSearch size={26} className="cursor-pointer" color="gray" />
            </div>
        </div>
    );
}

export default Topbar;
