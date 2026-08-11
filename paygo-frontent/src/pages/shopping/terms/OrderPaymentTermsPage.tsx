import { IconCreditCard } from '@tabler/icons-react';

interface Section {
    id: string;
    title: string;
    content: string;
    bullets?: string[];
    footer?: string;
}

const sections: Section[] = [
    {
        id: 'order-check',
        title: '주문 내용을 확인해 주세요',
        content: `회원은 결제를 진행하기 전 아래 주문 정보를 반드시 확인하여야 하며, Paygo는 확인된 주문 내용을 기준으로 결제 및 배송 절차를 진행합니다.`,
        bullets: [
            '상품명, 옵션, 수량 및 상품별 판매가',
            '쿠폰·포인트 적용 내역 및 최종 결제 금액',
            '배송지 정보 및 배송 방법',
            '결제 수단(전자지갑 잔액, 연결 카드 등)',
        ],
        footer: `주문 내용 확인 후 '결제하기'를 선택하면 회원과 Paygo, 그리고 판매자 간 매매계약이 성립되며, 확인 소홀로 인한 불이익은 회원에게 있을 수 있습니다.`,
    },
    {
        id: 'wallet-payment',
        title: '전자지갑 잔액 결제에 동의합니다',
        content: `회원이 전자지갑 잔액으로 결제하는 경우, 결제 승인과 동시에 주문 금액이 지갑 잔액에서 차감됩니다.`,
        bullets: [
            '잔액이 결제 금액보다 부족한 경우 결제가 진행되지 않으며, 충전 후 다시 시도해 주셔야 합니다.',
            '동시에 여러 건의 결제가 요청되는 경우에도 잔액이 중복 차감되지 않도록 처리되며, 처리 중에는 결제가 순차적으로 진행될 수 있습니다.',
            '결제 처리 중 오류가 발생한 경우 차감된 잔액은 자동으로 원상 복구되며, 복구 처리 결과는 결제 내역에서 확인하실 수 있습니다.',
        ],
    },
    {
        id: 'pg-agency',
        title: '결제대행(PG) 서비스 이용에 동의합니다',
        content: `카드 결제 등 전자지갑 잔액 외의 결제 수단을 이용하는 경우, Paygo는 결제의 안전한 처리를 위해 전자결제대행업체(이하 'PG사')에 결제 처리를 위탁합니다.`,
        bullets: [
            'PG사는 결제 승인, 취소, 정산 등 결제 처리 업무만을 수행하며 그 외의 목적으로 정보를 이용하지 않습니다.',
            '카드 정보 등 민감한 결제 정보는 Paygo 서버에 저장되지 않으며, PG사의 보안 정책에 따라 관리됩니다.',
        ],
        footer: `PG사와의 위탁 계약 현황은 고객센터를 통해 확인하실 수 있습니다.`,
    },
    {
        id: 'privacy-collection',
        title: '결제를 위한 개인정보 수집·이용에 동의합니다',
        content: `Paygo는 주문 및 결제 처리를 위해 아래 개인정보를 수집·이용합니다.`,
        bullets: [
            '수집 항목: 주문자명, 연락처, 배송지 주소, 결제 수단 정보(카드사명, 승인번호 등)',
            '수집 목적: 주문 확인, 결제 처리, 배송, 결제 관련 고객 문의 대응',
            '보유 기간: 전자상거래법 등 관련 법령에서 정한 기간 동안 보관 후 파기',
        ],
        footer: `회원은 개인정보 수집·이용에 동의하지 않을 권리가 있으나, 동의하지 않을 경우 주문 및 결제 서비스 이용이 제한될 수 있습니다.`,
    },
    {
        id: 'privacy-third-party',
        title: '개인정보 제3자 제공에 동의합니다',
        content: `원활한 주문 처리를 위해 아래와 같이 개인정보가 제3자에게 제공됩니다.`,
        bullets: [
            '제공받는 자: 판매자, PG사, 배송업체',
            '제공 항목: 주문자명, 연락처, 배송지 주소, 주문 상품 정보',
            '제공 목적: 상품 배송, 결제 승인 처리, 판매자 정산 및 고객 응대',
            '보유 및 이용 기간: 배송 완료 및 관련 법령상 보존 기간까지',
        ],
        footer: `제공에 동의하지 않으실 경우 상품 배송 및 결제가 정상적으로 처리되지 않을 수 있습니다.`,
    },
    {
        id: 'cancel-refund',
        title: '주문 취소 및 환불 안내입니다',
        content: `구매 확정 전 주문은 아래 기준에 따라 취소 및 환불이 가능합니다.`,
        bullets: [
            '결제 완료 후 상품 준비(배송 시작) 전까지는 전액 취소가 가능합니다.',
            '배송이 시작된 이후에는 판매자와의 협의 또는 반품 절차를 통해 환불이 진행됩니다.',
            '전자지갑 잔액으로 결제한 건이 취소되는 경우, 환불 금액은 지갑 잔액으로 즉시 반환됩니다.',
            '카드 결제 취소는 PG사 정책에 따라 카드사 승인 취소 처리 기간이 소요될 수 있습니다.',
        ],
    },
    {
        id: 'settlement',
        title: '구매 확정 및 판매자 정산 안내입니다',
        content: `회원이 상품 수령 후 구매를 확정하면, 해당 거래 건의 판매 대금은 Paygo가 정한 정산 주기에 따라 판매자에게 정산됩니다. 구매 확정 이후에는 단순 변심에 의한 취소·환불이 제한될 수 있으며, 이 경우 판매자와 개별적으로 반품 절차를 협의하셔야 합니다.`,
    },
    {
        id: 'agree-confirm',
        title: '결제 진행에 최종 동의합니다',
        content: `'결제하기' 버튼을 선택하면 회원은 위 주문 내용 확인 의무, 전자지갑 잔액 결제, 결제대행 서비스 이용, 개인정보 수집·이용 및 제3자 제공에 관한 사항 전체에 동의한 것으로 간주됩니다.`,
        footer: `본 약관은 전자상거래 등에서의 소비자보호에 관한 법률, 전자금융거래법, 개인정보 보호법을 준수하여 작성되었습니다.`,
    },
];

function OrderPaymentTermsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
                    <div className="w-[40px] h-[40px] rounded-xl bg-[#6266F1] flex items-center justify-center">
                        <IconCreditCard size={23} color="white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                        <span className="text-[#6266F1]">Pay</span>
                        <span>go</span>
                    </span>
                    <span className="text-gray-400 text-sm ml-1">주문 내용 확인 및 결제 동의</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Title Block */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        주문 내용 확인 및 결제 동의
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>시행일: 2026년 08월 11일</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                        <span>Paygo 주식회사</span>
                    </div>
                    <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-sm text-indigo-700 leading-relaxed">
                        아래 내용은 결제 진행 시 동의하시는 주문 확인 의무, 결제 처리 방식, 개인정보
                        수집·이용 및 제3자 제공에 관한 세부 사항입니다. 결제 전 반드시 확인해
                        주세요.
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="mb-10 p-5 bg-white border border-gray-200 rounded-xl">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        목차
                    </p>
                    <ol className="space-y-1">
                        {sections.map((section, idx) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className="flex items-start gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors py-0.5"
                                >
                                    <span className="text-gray-400 tabular-nums w-5 shrink-0 text-right">
                                        {idx + 1}.
                                    </span>
                                    <span>{section.title}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {sections.map((section, idx) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="mt-0.5 w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center shrink-0">
                                    {idx + 1}
                                </span>
                                <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                                    {section.title}
                                </h2>
                            </div>

                            <div className="ml-11 space-y-4">
                                {section.content.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-sm text-gray-700 leading-7">
                                        {para}
                                    </p>
                                ))}

                                {section.bullets && (
                                    <ul className="space-y-2 mt-2">
                                        {section.bullets.map((bullet, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-gray-700"
                                            >
                                                <span className="mt-3 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                                                <span className="leading-7">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.footer && (
                                    <p className="text-sm text-gray-500 leading-7 border-l-2 border-indigo-200 pl-3">
                                        {section.footer}
                                    </p>
                                )}
                            </div>

                            {idx < sections.length - 1 && (
                                <div className="mt-10 border-b border-gray-100" />
                            )}
                        </section>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                    <div className="mx-auto mb-3 w-[40px] h-[40px] rounded-xl bg-[#6266F1] flex items-center justify-center">
                        <IconCreditCard size={23} color="white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                        <span className="text-[#6266F1]">Pay</span>
                        <span>go</span>
                        <span> 주식회사</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        본 약관은 한국어를 정본으로 하며, 대한민국 법령이 적용됩니다.
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">시행일: 2026년 08월 11일</p>
                </div>
            </div>
        </div>
    );
}

export default OrderPaymentTermsPage;
