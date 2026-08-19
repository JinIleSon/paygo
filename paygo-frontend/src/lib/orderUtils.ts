export function getRemainRefundedDate(createdAt: string): number {
    const refundDate = new Date(createdAt);
    refundDate.setDate(refundDate.getDate() + 7);

    const now = new Date();
    const diffDate = Math.ceil((refundDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)); // 1000 = 1000밀리초 = 1초
    
    return Math.max(0, diffDate); // 음수가 되면 0으로 매핑되게끔
}