import type { Icon } from "@tabler/icons-react";

// 두 타입 공통 필드 모음(Product 또는 ProductDetail)
export interface ProductBase {
    id: number;
    itemClassification: string;
    name: string;
    stock: number;
    itemBg: string;
    itemText: string;
    icon: Icon;
}

// 목록 리스트
export interface Product extends ProductBase {
    price: number;
}

// 컬러 옵션
export interface ColorOption {
    color: string;
    bg: string;
}

// 상세 페이지용
export interface ProductDetail extends ProductBase {
    colorSet: ColorOption[];

    brand: string;
    subjectMatter: string;
    origin: string;
    createdAt: string;
    deliveryAt: string;
    return: string;

    description: string;

    originPrice: number;
    discountPrice: number;

    size: number[];
    chooseColor: string[];
}