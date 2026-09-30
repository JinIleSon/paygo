export function getKoreanType(type: string) {
    if (type === 'charge')
        return '충전';
    else if (type === 'buy')
        return '구매';
    else if (type === 'refund')
        return '환불';
    else if (type === 'transferIn')
        return '입금';
    else if (type === 'transferOut')
        return '출금';
    return '구매';
}

export function getKoreanStatement(statement: string) {
    if (statement === 'complete')
        return '완료';
    else if (statement === 'fail')
        return '결제실패';
    else if (statement === 'processing')
        return '처리중';
    return '완료';
}