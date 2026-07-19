import { IconShoe } from "@tabler/icons-react";
import Card from "../../components/common/Card";
import { useState } from "react";

function ProductDetailPage() {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState<'info' | 'description'>('info');

    const product = { 
            id: 0, 
            itemBg: 'bg-[#F5F6FF]',
            itemText: 'text-[#6266F1]',
            icon: IconShoe,
            colorSet:[
                { color: '#6266F1', bg: '#F5F6FF' },
                { color: '#22C55E', bg: '#E8FBF2' },
                { color: '#E0B36B', bg: '#FEF9EB' },
                { color: '#D862A1', bg: '#FCF2F8' },
            ],

            // 상품 정보
            brand: 'Nike',
            subjectMatter: '메쉬, 합성 소재',
            origin: '베트남',
            createdAt: '2024년 9월',
            deliveryAt: '결제 후 2~3일 이내',
            return: '수령 후 7일 이내',

            // 상세 설명
            description: `나이키 에어맥스 270은 Nike Air 기술의 가장 큰 힐 유닛을 탑재하여 하루 종일 편안한 착화감을 제공합니다.

                        ▪ 경량 메쉬 어퍼로 통기성이 뛰어나 장시간 착용에도 발이 쾌적합니다.
                        ▪ 270도를 감싸는 대형 Air 유닛이 충격을 흡수하여 발뒤꿈치를 부드럽게 받쳐줍니다.
                        ▪ 내구성 높은 고무 아웃솔이 다양한 노면에서도 안정적인 그립력을 발휘합니다.
                        ▪ 세련된 디자인으로 캐주얼 코디부터 스포티한 룩까지 다양하게 매칭 가능합니다.

                        일상 착용부터 가벼운 운동까지, 스타일과 편안함을 동시에 원하는 분께 추천합니다.`,
            
            // 오른쪽 섹션
            itemClassification: '패션/신발',
            name: '나이키 에어맥스',
            discountPrice: 120000,

            stock: 3,
            size: [240, 245, 250, 260, 265, 270, 275],
            chooseColor: ['인디고', '그린', '옐로', '핑크']
        };

        const Icon = product.icon;

    return (
        <div>
            <div className="flex gap-8 pr-8">
                <div className="min-w-1/2">
                    <div className="flex flex-col gap-6.5">
                        <Card className="p-0 h-130 overflow-hidden">
                            <div className="flex justify-center items-center h-100" style={{background: product.colorSet[selectedIndex].bg}}>
                                <Icon size={160} style={{color: product.colorSet[selectedIndex].color}}/>
                            </div>
                            <div className="px-6 py-4 gap-4 grid grid-cols-[1fr_1fr_1fr_1fr] h-30">
                                {product.colorSet.map((setting, index) => (
                                    <Card 
                                        key={index}
                                        onClick={() => setSelectedIndex(index)} 
                                        style={{
                                            backgroundColor: setting.bg,
                                            border: selectedIndex === index ? '2px solid #A7A7A7' : ''
                                        }} 
                                        className="p-0 flex items-center justify-center cursor-pointer"> 
                                        <Icon size={40} style={{color: setting.color}}/>
                                    </Card>
                                ))}
                            </div>
                        </Card>
                        <Card>
                            <div className="grid grid-cols-[1fr_1fr] border-b border-b-[#D9D9D9] mb-8">
                                <button 
                                    className={`cursor-pointer font-medium py-3 border-b-2 ${selectedTab === 'info' ? "text-[#6266F1] border-b-[#6266F1]" : "text-[gray] border-b-transparent"}`}
                                    onClick={() => setSelectedTab('info')}>상품 정보</button>
                                <button 
                                    className={`cursor-pointer font-medium py-3 border-b-2 ${selectedTab === 'description' ? "text-[#6266F1] border-b-[#6266F1]" : "text-[gray] border-b-transparent"}`}
                                    onClick={() => setSelectedTab('description')}>상세 설명</button>
                            </div>
                                {/* 상품 정보 탭 */}
                                {selectedTab === 'info' && 
                                    <section>
                                        <div className="grid grid-cols-[8rem_1fr] gap-y-6 mb-8">
                                            <div className="text-[gray] font-medium">브랜드</div>
                                            <div>{product.brand}</div>
                                            <div className="text-[gray] font-medium">소재</div>
                                            <div>{product.subjectMatter}</div>
                                            <div className="text-[gray] font-medium">제조국</div>
                                            <div>{product.origin}</div>
                                            <div className="text-[gray] font-medium">출시일</div>
                                            <div>{product.createdAt}</div>
                                            <div className="text-[gray] font-medium">배송</div>
                                            <div>{product.deliveryAt}</div>
                                            <div className="text-[gray] font-medium">반품</div>
                                            <div>{product.return}</div>
                                        </div>
                                    </section>
                                }

                            {/* 상세 설명 탭 */}
                            {selectedTab === 'description' && 
                                <section>
                                    <div className="whitespace-pre-wrap text-[gray] font-medium mb-8">
                                        {product.description.split('\n').map((line) => line.trim()).join('\n')}
                                    </div>
                                </section>
                            }
                        </Card>
                    </div>
                </div>
                <div className="min-w-1/2">
                
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;