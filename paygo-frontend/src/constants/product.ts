import type { Product, ProductDetail } from "../types/product";

export const popularItems : Product[] = [
    {
        id: 0,
        itemClassification: '패션/신발',
        name: '나이키 에어맥스',
        price: 120000,
        stock: 3,
        itemBg: 'bg-[#F5F6FF]',
        itemText: 'text-[#6266F1]',
        iconName: "IconShoe",
    },
    {
        id: 1,
        itemClassification: '전자기기',
        name: '소니 WH-1000 헤드폰',
        price: 389000,
        stock: 1,
        itemBg: 'bg-[#E8FBF2]',
        itemText: 'text-[#22C55E]',
        iconName: "IconHeadphones",
    },
    {
        id: 2,
        itemClassification: '스포츠/레저',
        name: '코베아 캠핑 텐트',
        price: 211000,
        stock: 8,
        itemBg: 'bg-[#FEF9EB]',
        itemText: 'text-[#E0B36B]',
        iconName: "IconTent",
    },
    {
        id: 3,
        itemClassification: '패션/의류',
        name: '유니클로 플리 티셔츠',
        price: 59900,
        stock: 12,
        itemBg: 'bg-[#FCF2F8]',
        itemText: 'text-[#D862A1]',
        iconName: "IconShirt",
    },
];

export const newItems : Product[] = [
    {
        id: 4,
        itemClassification: '전자기기',
        name: '맥북 프로 14인치 모니터',
        price: 2490000,
        stock: 5,
        itemBg: 'bg-[#EEF6FF]',
        itemText: 'text-[#4D84D8]',
        iconName: "IconDeviceLaptop",
    },
    {
        id: 5,
        itemClassification: '스포츠',
        name: '룰루레몬 요가 매트',
        price: 89000,
        stock: 2,
        itemBg: 'bg-[#F0FEFB]',
        itemText: 'text-[#22B1A0]',
        iconName: "IconYoga",
    },
    {
        id: 6,
        itemClassification: '생활용품',
        name: '발뮤다 커피 머그잔',
        price: 139000,
        stock: 6,
        itemBg: 'bg-[#FEF2F2]',
        itemText: 'text-[#EF4444]',
        iconName: "IconCoffee",
    },
    {
        id: 7,
        itemClassification: '패션/가방',
        name: '어반어스 데이트 백팩',
        price: 79000,
        stock: 9,
        itemBg: 'bg-[#F9FBFC]',
        itemText: 'text-[#7B808C]',
        iconName: "IconBackpack",
    },
];

export const products: ProductDetail[] = [
    {
        id: 0,
        itemBg: 'bg-[#F5F6FF]',
        itemText: 'text-[#6266F1]',
        iconName: 'IconShoe',
        colorSet: [
            { color: '#6266F1', bg: '#F5F6FF' },
            { color: '#22C55E', bg: '#E8FBF2' },
            { color: '#E0B36B', bg: '#FEF9EB' },
            { color: '#D862A1', bg: '#FCF2F8' },
        ],
        brand: 'Nike',
        subjectMatter: '메쉬, 합성 소재',
        origin: '베트남',
        createdAt: '2024년 9월',
        deliveryAt: '결제 후 2~3일 이내',
        return: '수령 후 7일 이내',
        description: `나이키 에어맥스는 Nike Air 기술의 가장 큰 힐 유닛을 탑재하여 하루 종일 편안한 착화감을 제공합니다.

                    ▪ 경량 메쉬 어퍼로 통기성이 뛰어나 장시간 착용에도 발이 쾌적합니다.
                    ▪ 270도를 감싸는 대형 Air 유닛이 충격을 흡수하여 발뒤꿈치를 부드럽게 받쳐줍니다.
                    ▪ 내구성 높은 고무 아웃솔이 다양한 노면에서도 안정적인 그립력을 발휘합니다.
                    ▪ 세련된 디자인으로 캐주얼 코디부터 스포티한 룩까지 다양하게 매칭 가능합니다.

                    일상 착용부터 가벼운 운동까지, 스타일과 편안함을 동시에 원하는 분께 추천합니다.`,
        itemClassification: '패션/신발',
        name: '나이키 에어맥스',
        originPrice: 160000,
        discountPrice: 120000,
        stock: 3,
        size: [240, 245, 250, 260, 265, 270, 275],
        chooseColor: ['인디고', '그린', '옐로', '핑크'],
    },
    {
        id: 1,
        itemBg: 'bg-[#E8FBF2]',
        itemText: 'text-[#22C55E]',
        iconName: 'IconHeadphones',
        colorSet: [
            { color: '#22C55E', bg: '#E8FBF2' },
            { color: '#333333', bg: '#F2F2F2' },
        ],
        brand: 'Sony',
        subjectMatter: '플라스틱, 인조가죽',
        origin: '말레이시아',
        createdAt: '2024년 5월',
        deliveryAt: '결제 후 2~3일 이내',
        return: '수령 후 7일 이내',
        description: `소니 WH-1000 헤드폰은 업계 최고 수준의 노이즈 캔슬링 기술을 탑재해 주변 소음을 완벽히 차단합니다.

                    ▪ 30시간 이상 지속되는 배터리로 장시간 사용에도 문제없습니다.
                    ▪ 고음질 오디오 코덱을 지원해 스튜디오급 사운드를 경험할 수 있습니다.
                    ▪ 인체공학적 이어패드로 장시간 착용에도 편안합니다.
                    ▪ 터치 컨트롤로 간편하게 음량과 재생을 조절할 수 있습니다.

                    출퇴근길부터 여행까지, 몰입감 있는 사운드가 필요한 분께 추천합니다.`,
        itemClassification: '전자기기',
        name: '소니 WH-1000 헤드폰',
        originPrice: 429000,
        discountPrice: 389000,
        stock: 1,
        size: [],
        chooseColor: ['블랙', '실버'],
    },
    {
        id: 2,
        itemBg: 'bg-[#FEF9EB]',
        itemText: 'text-[#E0B36B]',
        iconName: 'IconTent',
        colorSet: [
            { color: '#E0B36B', bg: '#FEF9EB' },
            { color: '#4D84D8', bg: '#EEF6FF' },
        ],
        brand: 'Kovea',
        subjectMatter: '폴리에스터, 알루미늄 폴대',
        origin: '대한민국',
        createdAt: '2024년 3월',
        deliveryAt: '결제 후 3~4일 이내',
        return: '수령 후 7일 이내',
        description: `코베아 캠핑 텐트는 4인 가족이 여유롭게 사용할 수 있는 넉넉한 공간을 제공합니다.

                    ▪ 완전 방수 원단으로 우천 시에도 안심하고 사용할 수 있습니다.
                    ▪ 초경량 알루미늄 폴대로 설치와 철수가 간편합니다.
                    ▪ 이중 지퍼 도어로 통풍과 프라이버시를 동시에 확보합니다.
                    ▪ 수납 가방이 함께 제공되어 휴대와 보관이 용이합니다.

                    가족 캠핑부터 백패킹까지, 다양한 아웃도어 활동에 추천합니다.`,
        itemClassification: '스포츠/레저',
        name: '코베아 캠핑 텐트',
        originPrice: 249000,
        discountPrice: 211000,
        stock: 8,
        size: [],
        chooseColor: ['카키', '네이비'],
    },
    {
        id: 3,
        itemBg: 'bg-[#FCF2F8]',
        itemText: 'text-[#D862A1]',
        iconName: 'IconShirt',
        colorSet: [
            { color: '#D862A1', bg: '#FCF2F8' },
            { color: '#7B808C', bg: '#F9FBFC' },
            { color: '#333333', bg: '#F2F2F2' },
        ],
        brand: 'Uniqlo',
        subjectMatter: '폴리에스터 플리스',
        origin: '베트남',
        createdAt: '2024년 11월',
        deliveryAt: '결제 후 1~2일 이내',
        return: '수령 후 7일 이내',
        description: `유니클로 플리스 티셔츠는 부드러운 촉감과 뛰어난 보온성을 자랑합니다.

                    ▪ 가볍고 따뜻한 플리스 소재로 환절기 아우터로 활용하기 좋습니다.
                    ▪ 정전기 방지 가공으로 쾌적한 착용감을 제공합니다.
                    ▪ 세탁 후에도 형태가 잘 유지됩니다.
                    ▪ 다양한 색상으로 데일리 코디에 활용하기 좋습니다.

                    캐주얼한 일상복부터 레이어드 룩까지 두루 활용할 수 있습니다.`,
        itemClassification: '패션/의류',
        name: '유니클로 플리스 티셔츠',
        originPrice: 69900,
        discountPrice: 59900,
        stock: 12,
        size: [90, 95, 100, 105, 110],
        chooseColor: ['핑크', '그레이', '블랙'],
    },
    {
        id: 4,
        itemBg: 'bg-[#EEF6FF]',
        itemText: 'text-[#4D84D8]',
        iconName: 'IconDeviceLaptop',
        colorSet: [
            { color: '#4D84D8', bg: '#EEF6FF' },
            { color: '#7B808C', bg: '#F9FBFC' },
        ],
        brand: 'Apple',
        subjectMatter: '알루미늄 유니바디',
        origin: '중국',
        createdAt: '2024년 10월',
        deliveryAt: '결제 후 2~3일 이내',
        return: '수령 후 7일 이내',
        description: `맥북 프로 14인치는 강력한 성능과 뛰어난 화질을 겸비한 프로페셔널용 노트북입니다.

                    ▪ Liquid Retina XDR 디스플레이로 선명하고 정확한 색 표현이 가능합니다.
                    ▪ 최대 18시간 지속되는 배터리로 하루 종일 작업할 수 있습니다.
                    ▪ 강력한 칩셋으로 영상 편집, 개발 등 고사양 작업도 무리 없이 처리합니다.
                    ▪ 다양한 포트를 지원해 확장성이 뛰어납니다.

                    전문 작업부터 일상 사용까지, 최고의 성능을 원하는 분께 추천합니다.`,
        itemClassification: '전자기기',
        name: '맥북 프로 14인치 모니터',
        originPrice: 2690000,
        discountPrice: 2490000,
        stock: 5,
        size: [],
        chooseColor: ['스페이스 그레이', '실버'],
    },
    {
        id: 5,
        itemBg: 'bg-[#F0FEFB]',
        itemText: 'text-[#22B1A0]',
        iconName: 'IconYoga',
        colorSet: [
            { color: '#22B1A0', bg: '#F0FEFB' },
            { color: '#D862A1', bg: '#FCF2F8' },
        ],
        brand: 'Lululemon',
        subjectMatter: '천연고무, 폴리우레탄',
        origin: '베트남',
        createdAt: '2024년 6월',
        deliveryAt: '결제 후 2~3일 이내',
        return: '수령 후 7일 이내',
        description: `룰루레몬 요가 매트는 뛰어난 그립감과 쿠셔닝으로 안정적인 운동을 돕습니다.

                    ▪ 미끄럼 방지 표면으로 격렬한 동작에도 안정적입니다.
                    ▪ 적당한 두께로 관절 부담을 줄여줍니다.
                    ▪ 땀 흡수가 뛰어나 습식 요가에도 적합합니다.
                    ▪ 가볍고 말기 쉬워 휴대가 간편합니다.

                    요가부터 필라테스, 홈트레이닝까지 두루 활용할 수 있습니다.`,
        itemClassification: '스포츠',
        name: '룰루레몬 요가 매트',
        originPrice: 99000,
        discountPrice: 89000,
        stock: 2,
        size: [],
        chooseColor: ['민트', '핑크'],
    },
    {
        id: 6,
        itemBg: 'bg-[#FEF2F2]',
        itemText: 'text-[#EF4444]',
        iconName: 'IconCoffee',
        colorSet: [
            { color: '#EF4444', bg: '#FEF2F2' },
            { color: '#7B808C', bg: '#F9FBFC' },
        ],
        brand: 'Balmuda',
        subjectMatter: '도자기',
        origin: '일본',
        createdAt: '2024년 4월',
        deliveryAt: '결제 후 2~3일 이내',
        return: '수령 후 7일 이내',
        description: `발뮤다 커피 머그잔은 미니멀한 디자인과 뛰어난 보온성을 자랑합니다.

                    ▪ 이중 벽 구조로 음료의 온도를 오래 유지합니다.
                    ▪ 전자레인지, 식기세척기 사용이 가능해 관리가 편리합니다.
                    ▪ 손잡이 인체공학 설계로 그립감이 뛰어납니다.
                    ▪ 심플한 디자인으로 어떤 공간에도 잘 어울립니다.

                    매일 아침 커피 타임을 특별하게 만들어줄 아이템입니다.`,
        itemClassification: '생활용품',
        name: '발뮤다 커피 머그잔',
        originPrice: 159000,
        discountPrice: 139000,
        stock: 6,
        size: [],
        chooseColor: ['화이트', '블랙'],
    },
    {
        id: 7,
        itemBg: 'bg-[#F9FBFC]',
        itemText: 'text-[#7B808C]',
        iconName: 'IconBackpack',
        colorSet: [
            { color: '#7B808C', bg: '#F9FBFC' },
            { color: '#4D84D8', bg: '#EEF6FF' },
            { color: '#333333', bg: '#F2F2F2' },
        ],
        brand: 'Urban Earth',
        subjectMatter: '방수 나일론',
        origin: '대한민국',
        createdAt: '2024년 8월',
        deliveryAt: '결제 후 1~2일 이내',
        return: '수령 후 7일 이내',
        description: `어반어스 데이트 백팩은 실용성과 스타일을 모두 갖춘 데일리 백팩입니다.

                    ▪ 발수 코팅 원단으로 우천 시에도 내용물을 안전하게 보호합니다.
                    ▪ 노트북 수납 공간이 별도로 마련되어 있어 통학·출근용으로 적합합니다.
                    ▪ 다양한 수납 포켓으로 소지품을 체계적으로 정리할 수 있습니다.
                    ▪ 인체공학적 스트랩으로 장시간 착용에도 편안합니다.

                    데일리룩부터 여행까지, 활용도 높은 백팩을 찾는 분께 추천합니다.`,
        itemClassification: '패션/가방',
        name: '어반어스 데이트 백팩',
        originPrice: 89000,
        discountPrice: 79000,
        stock: 9,
        size: [],
        chooseColor: ['그레이', '네이비', '블랙'],
    },
];