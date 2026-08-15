import type { OrderStatus } from "../types/order";

export const getHistoryBadge = (statement: string) => {
    if (statement === '완료')
        return <span className="rounded-full text-[#22C55E] bg-[#E8FBF2] px-2 py-1 text-xs">완료</span>;
    if (statement === '결제실패')
        return <span className="bg-[#FFE4E4] text-[red] px-2 py-1 rounded-full text-xs">결제실패</span>;
    if (statement === '처리중')
        return <span className="bg-[#F5F6FF] text-[#6266F1] px-2 py-1 rounded-full text-xs">처리중</span>;
};

export const getOrderBadges = (orderStatus: OrderStatus) => {
    if (orderStatus === 'paymentComplete')
        return <span className="rounded-full bg-[#F5F6FF] text-[#6266F1] px-2 py-1 text-xs">결제완료</span>;
    if (orderStatus === 'shipping')
        return <span className="rounded-full bg-[#FEF9EB] text-[#E0B36B] px-2 py-1 text-xs">배송중</span>;
    if (orderStatus === 'delivered')
        return <span className="rounded-full bg-[#E8FBF2] text-[#22C55E] px-2 py-1 text-xs">배송완료</span>;
    if (orderStatus === 'cancelled')
        return <span className="rounded-full bg-[#F4F4F4] text-gray-500 px-2 py-1 text-xs">취소</span>;
    if (orderStatus === 'refunded')
        return <span className="rounded-full bg-[#FCF2F8] text-[#D862A1] px-2 py-1 text-xs">환불</span>;
    if (orderStatus === 'paymentFailed')
        return <span className="rounded-full bg-[#FFE4E4] text-[red] px-2 py-1 text-xs">결제실패</span>;
};