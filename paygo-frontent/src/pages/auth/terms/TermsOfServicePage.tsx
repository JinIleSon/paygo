import { IconCreditCard } from '@tabler/icons-react';

const sections = [
    {
        id: 'welcome',
        title: '여러분을 환영합니다',
        content: `Paygo 서비스 및 제품(이하 '서비스')을 이용해 주셔서 감사합니다. 본 약관은 Paygo가 제공하는 결제·전자지갑·전자상거래 서비스의 이용과 관련하여 Paygo 주식회사(이하 'Paygo')와 이를 이용하는 Paygo 서비스 회원(이하 '회원') 또는 비회원과의 관계를 설명하며, 여러분의 안전한 서비스 이용에 필요한 중요한 정보를 포함하고 있습니다.

Paygo 서비스를 이용하시거나 회원으로 가입하실 경우 본 약관 및 관련 운영 정책에 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.`,
    },
    {
        id: 'services',
        title: '다양한 Paygo 서비스를 이용해 보세요',
        content: `Paygo는 전자지갑 충전부터 상품 구매, 결제, 판매자 정산에 이르기까지 돈의 흐름 전반을 하나의 플랫폼에서 처리할 수 있는 결제 커머스 서비스를 제공합니다. 여러분은 PC, 모바일 등 인터넷 이용이 가능한 각종 단말기를 통해 아래 서비스를 자유롭게 이용하실 수 있습니다.`,
        bullets: [
            '전자지갑: 잔액 충전, 보유 및 송금',
            '결제: 상품 구매 시 지갑 잔액 또는 연결 결제수단을 통한 간편 결제',
            '전자상거래: 상품 검색, 주문, 구매 확정',
            '판매자 정산: 구매 확정 후 판매 대금 자동 정산',
        ],
        footer: `Paygo는 기본적으로 모든 회원에게 동일한 내용의 서비스를 제공합니다. 다만 관련 법령 또는 서비스 운영상의 필요에 따라 연령, 본인인증 여부, 계좌 연결 상태 등을 기준으로 일부 기능(예: 송금 한도, 충전 한도 등)의 이용을 제한할 수 있습니다.`,
    },
    {
        id: 'membership',
        title: '회원으로 가입하시면 서비스를 더욱 편리하게 이용할 수 있습니다',
        content: `여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며, Paygo는 이에 대한 승낙을 통해 회원 가입 절차를 완료하고 서비스 이용 계정(이하 '계정')을 부여합니다.

회원은 계정을 통해 전자지갑 개설, 상품 주문, 결제 내역 조회, 정산 현황 확인 등 Paygo의 핵심 기능을 이용할 수 있습니다. 계정 운영과 관련한 세부 사항은 계정 운영정책 및 고객센터에서 확인해 주세요.

자신의 계정을 타인에게 판매, 양도, 대여하거나 타인이 사용하도록 허락해서는 안 됩니다. 계정을 통해 이루어지는 모든 거래 행위의 책임은 해당 계정의 회원에게 있습니다.`,
    },
    {
        id: 'wallet',
        title: '전자지갑과 결제 서비스 이용 시 유의사항입니다',
        content: `Paygo의 전자지갑은 실제 금전적 가치를 보유하는 수단이므로, 이용 시 아래 사항을 반드시 확인해 주시기 바랍니다.`,
        bullets: [
            '충전: 연결된 계좌 또는 카드를 통해 충전할 수 있으며, 충전 한도는 관련 법령 및 운영정책에 따라 설정됩니다.',
            '결제 및 송금: 잘못된 결제 또는 송금은 취소가 어려울 수 있으므로 수취인 정보 및 금액을 반드시 확인 후 진행해 주세요.',
            '환불: 구매 취소 또는 환불에 따른 잔액 반환은 Paygo의 환불 정책 및 판매자와의 합의에 따라 처리됩니다.',
            '잔액 출금: 전자지갑 잔액은 연결 계좌로 출금 신청이 가능하며, 출금 처리 기간 및 수수료는 고객센터에서 확인하실 수 있습니다.',
        ],
        footer: `Paygo의 전자지갑 잔액은 예금자 보호 대상이 아니며, Paygo의 서비스 운영 방침에 따라 관리됩니다.`,
    },
    {
        id: 'seller',
        title: '판매자 회원을 위한 정산 서비스를 제공합니다',
        content: `판매자 회원은 Paygo 플랫폼을 통해 상품을 등록하고 구매자와 거래할 수 있습니다. 구매자의 구매 확정 이후 Paygo는 판매 대금에서 수수료를 공제한 금액을 판매자에게 정산합니다.`,
        bullets: [
            '정산 주기: 구매 확정 후 영업일 기준 Paygo가 정한 주기에 따라 정산됩니다.',
            '수수료: 판매 금액의 일정 비율이 서비스 이용 수수료로 공제되며, 수수료율은 서비스 정책 페이지에서 확인하실 수 있습니다.',
            '정산 보류: 분쟁, 환불 요청, 법령 위반 의심 등의 사유가 있는 경우 정산이 일시 보류될 수 있습니다.',
        ],
        footer: `판매자 회원은 상품 정보, 가격, 재고 등을 정확하게 유지할 책임이 있으며, 허위 상품 등록이나 거래 사기 행위는 즉시 계정 정지 및 법적 조치로 이어질 수 있습니다.`,
    },
    {
        id: 'privacy',
        title: '여러분의 개인정보와 거래 정보를 소중히 보호합니다',
        content: `Paygo는 서비스 제공을 위해 필요한 최소한의 개인정보 및 금융 정보를 수집하며, 관련 법령(전자금융거래법, 개인정보 보호법 등)에 따라 안전하게 관리합니다. 수집·이용하는 정보의 상세 내용은 개인정보 처리방침에서 확인하실 수 있습니다.

결제 및 송금 내역 등 거래 정보는 관련 법령에서 정한 기간 동안 보존되며, 이는 거래 분쟁 해결 및 법적 의무 이행을 위해 필요합니다.`,
    },
    {
        id: 'respect',
        title: '타인의 권리를 존중해 주세요',
        content: `여러분은 Paygo 서비스를 이용함에 있어 타인의 계정 정보, 결제 수단, 개인정보를 무단으로 사용해서는 안 됩니다. 또한 타인을 사칭하거나 허위 거래를 통해 부당한 이익을 취하는 행위는 엄격히 금지되며, 이는 형사처벌 대상이 될 수 있습니다.`,
    },
    {
        id: 'prohibited',
        title: '다음과 같은 행위는 금지됩니다',
        content: `Paygo 서비스의 안전한 운영과 이용자 보호를 위해 아래 행위를 금지합니다.`,
        bullets: [
            '타인의 계정, 결제 수단, 개인정보를 도용하거나 무단 사용하는 행위',
            '허위 거래, 자전 거래, 허위 리뷰 등을 통한 부정 이익 취득 행위',
            '자동화 수단(매크로, 봇 등)을 이용한 비정상적 거래 또는 어뷰징 행위',
            '전자금융거래법 등 관련 법령을 위반하는 자금 이동 또는 세탁 행위',
            '존재하지 않는 상품의 등록 또는 거래 의사 없는 허위 판매 행위',
            'Paygo 서비스의 결제·정산 시스템을 역설계하거나 무단으로 조작하는 행위',
        ],
    },
    {
        id: 'restriction',
        title: '부득이 서비스 이용을 제한할 경우 합리적인 절차를 따릅니다',
        content: `여러분이 본 약관 및 관련 운영정책을 위반하는 경우, Paygo는 사전 경고, 기능 일부 제한, 계정 일시 정지, 계정 영구 정지의 단계적 조치를 취할 수 있습니다. 다만 명백한 사기 행위, 자금세탁, 타인 피해 발생 등 긴급한 사안의 경우 즉시 계정을 정지하고 잔액 출금을 제한할 수 있습니다.

서비스 이용이 영구 정지된 경우, 미정산 금액 및 지갑 잔액의 처리는 관련 법령 및 Paygo 운영정책에 따르며, 분쟁이 있는 경우 고객센터를 통해 문의하시기 바랍니다.`,
    },
    {
        id: 'liability',
        title: 'Paygo의 잘못은 Paygo가 책임집니다',
        content: `Paygo는 서비스 이용 중 Paygo의 고의 또는 과실로 발생한 손해에 대해 관련 법령에 따라 배상합니다. 다만 천재지변, 불가항력적 사유, 또는 이용자의 고의·과실로 인한 손해에 대해서는 책임을 부담하지 않습니다.

결제 오류, 시스템 장애 등 Paygo 귀책 사유로 인한 거래 피해는 고객센터를 통해 신고하시면 확인 후 처리해 드립니다.`,
    },
    {
        id: 'withdrawal',
        title: '언제든지 서비스 이용계약을 해지하실 수 있습니다',
        content: `회원은 언제든지 Paygo 서비스 이용계약 해지를 신청할 수 있습니다. 다만 해지 신청 전 전자지갑 잔액 출금, 진행 중인 거래 완료, 미수령 정산금 수령을 먼저 완료하시기 바랍니다. 잔액 및 미정산금이 남은 상태에서 탈퇴하는 경우의 처리 절차는 고객센터에서 안내드립니다.

계약 해지 시 회원 계정 및 거래 내역 등 데이터는 관련 법령에서 정한 보존 기간을 제외하고 삭제됩니다.`,
    },
    {
        id: 'notice',
        title: '주요 사항을 안내하고 여러분의 의견에 귀 기울이겠습니다',
        content: `Paygo는 서비스 변경, 수수료 정책 변경, 시스템 점검 등 주요 사항을 이메일, 앱 내 알림 등을 통해 사전에 안내합니다. 회원 전체에 대한 공지가 필요한 경우 서비스 초기 화면 또는 공지사항에 7일 이상 게시합니다.

여러분의 의견은 고객센터를 통해 언제든지 전달하실 수 있습니다.`,
    },
    {
        id: 'amendment',
        title: '약관 변경 시 사전에 공지합니다',
        content: `Paygo는 필요 시 본 약관을 개정할 수 있으며, 변경 내용은 적용 7일 전(이용자에게 불리한 변경의 경우 30일 전)에 서비스 내 공지 및 개별 통지를 통해 안내합니다. 공지 기간 내 별도 이의가 없으면 변경된 약관에 동의한 것으로 간주됩니다.

본 약관은 한국어를 정본으로 하며, 본 약관과 관련된 분쟁에는 대한민국 법령이 적용됩니다.`,
    },
];

function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-2xl bg-[#6266f1] flex items-center justify-center">
                        <IconCreditCard size={24} color="white" />{' '}
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                        <span className="text-[#6266f1]">Pay</span>
                        <span>go</span>
                    </span>
                    <span className="text-gray-400 text-sm ml-1">서비스 이용약관</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Title Block */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">서비스 이용약관</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>시행일: 2026년 06월 15일</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                        <span>Paygo 주식회사</span>
                    </div>
                    <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-sm text-indigo-700 leading-relaxed">
                        본 약관은 Paygo의 결제·전자지갑·전자상거래 서비스 이용에 관한 여러분과 Paygo
                        주식회사 사이의 권리와 의무를 규정합니다. 서비스 이용 전 반드시 확인해
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
                    <div className="mx-auto mb-3 w-[46px] h-[46px] rounded-2xl bg-[#6266f1] flex items-center justify-center">
                        <IconCreditCard size={24} color="white" />{' '}
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                        <span className="text-[#6266f1]">Pay</span>
                        <span>go</span>
                        <span> 주식회사</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        본 약관은 한국어를 정본으로 하며, 대한민국 법령이 적용됩니다.
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">시행일: 2026년 06월 15일</p>
                </div>
            </div>
        </div>
    );
}

export default TermsOfServicePage;
