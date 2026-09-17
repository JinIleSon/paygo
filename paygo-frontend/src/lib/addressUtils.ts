interface daumAddress {
    zonecode: string; // 우편번호
    roadAddress: string; // 도로명 주소
}

export const searchAddress = (
    onComplete: (data: { zipCode: string, roadAddress: string }) => void
) => {
    new (window as any).daum.Postcode({
        oncomplete: (data: daumAddress) => {
            onComplete({
                zipCode: data.zonecode,
                roadAddress: data.roadAddress
            });
        },
    }).open();
};