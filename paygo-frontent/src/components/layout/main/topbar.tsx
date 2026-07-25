import { IconBell, IconSearch } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

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

function Topbar() {

    const location = useLocation();
    const title = pageTitles[location.pathname] || '';

    return (
        <div className="flex items-center w-full font-bold border-b border-[#D9D9D9] shrink-0 p-5">
            <div className="pl-3">{title}</div>
            <div className="flex gap-3 ml-auto">
                <IconBell size={26} className="cursor-pointer" color="gray" />
                <IconSearch size={26} className="cursor-pointer" color="gray" />
            </div>
        </div>
    );
}

export default Topbar;
