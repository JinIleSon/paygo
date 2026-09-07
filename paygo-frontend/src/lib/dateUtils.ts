export function formatYearMonthDay(isoString: string): string {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
}

export function formatDateTime(isoString: string): string {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}`;
}

export function addDays(isoString: string, days: number): Date {
    const date = new Date(isoString);
    date.setDate(date.getDate() + days);
    return date;
}

export function diffDays(isoString1: string, isoString2: string): number {
    const date1 = new Date(isoString1);
    const date2 = new Date(isoString2);
    
    const diffMs = date2.getTime() - date1.getTime(); // 밀리초 단위 계산
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // 1초->1분->1시간->24시간(1일)
    
    return diffDays;
}