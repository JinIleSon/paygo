export const getHistoryBadge = (statement: string) => {
        if (statement === '완료')
            return (
                <span className="rounded-full text-[#22C55E] bg-[#E8FBF2] px-2 py-1 text-xs">
                    완료
                </span>
            );
        if (statement === '결제실패')
            return (
                <span className="bg-[#FFE4E4] text-[red] px-2 py-1 rounded-full text-xs">
                    결제실패
                </span>
            );
        if (statement === '처리중')
            return (
                <span className="bg-[#F5F6FF] text-[#6266F1] px-2 py-1 rounded-full text-xs">
                    처리중
                </span>
            );
    };