import { IconCreditCard } from '@tabler/icons-react';

const sections = [
    {
        id: 'overview',
        title: '마케팅 정보 수신 동의 안내',
        content: `Paygo 주식회사(이하 'Paygo')는 개인정보 보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계 법령에 따라 광고성 정보를 전송하기 위해 이용자의 사전 수신 동의를 받고 있습니다.

마케팅 정보 수신에 동의하시면 Paygo가 제공하는 결제 혜택, 이벤트, 신규 서비스 소식 등 다양한 정보를 받아보실 수 있습니다.`,
    },
    {
        id: 'method',
        title: '전송 방법',
        content: `마케팅 정보는 아래 채널을 통해 전송됩니다.`,
        bullets: [
            '이메일: 가입 시 등록한 이메일 주소로 발송',
            'SMS/MMS: 가입 시 등록한 휴대전화번호로 문자 발송',
            '앱 푸시 알림: Paygo 앱 설치 기기로 푸시 메시지 발송',
            '서비스 내 알림: Paygo 서비스 접속 시 알림 메시지 발송',
        ],
        footer: `전송 채널은 서비스 운영 방침에 따라 변경될 수 있으며, 변경 시 사전에 안내드립니다.`,
    },
    {
        id: 'content',
        title: '전송 내용',
        content: `발송되는 마케팅 정보는 관련 법령을 준수하여 아래와 같은 내용으로 구성됩니다.`,
        bullets: [
            '결제 혜택 안내: 캐시백, 포인트 적립, 할인 쿠폰 등 결제 관련 혜택 정보',
            '이벤트 안내: Paygo가 진행하는 각종 프로모션 및 이벤트 정보',
            '신규 서비스 소식: 새로운 기능, 서비스 업데이트 및 개선 사항 안내',
            '판매자 정산 혜택: 판매자 회원 대상 수수료 할인 및 정산 관련 혜택 정보',
            '맞춤형 정보: 이용 패턴을 분석한 개인화된 서비스 및 상품 추천',
        ],
        footer: `광고성 정보 이외에 의무적으로 안내되어야 하는 정보성 내용(거래 확인, 법령상 고지 등)은 수신 동의 여부와 무관하게 제공됩니다.`,
    },
    {
        id: 'items',
        title: '수집 항목',
        content: `마케팅 정보 전송을 위해 아래 항목을 수집합니다.`,
        bullets: [
            '이름',
            '이메일 주소',
            '휴대전화번호',
            '서비스 이용 기록 및 거래 내역 (맞춤형 마케팅 목적)',
        ],
    },
    {
        id: 'purpose',
        title: '이용 목적',
        content: `수집한 정보는 아래 목적으로만 이용됩니다.`,
        bullets: [
            '결제 혜택 및 프로모션 안내 이메일·SMS 발송',
            '신규 서비스 및 기능 업데이트 안내',
            '이벤트 경품 및 사은품 제공',
            '이용 패턴 기반 맞춤형 마케팅 및 판촉 정보 제공',
        ],
    },
    {
        id: 'withdrawal',
        title: '수신 동의 철회',
        content: `마케팅 정보 수신에 동의하신 이후에도 언제든지 동의를 철회하실 수 있습니다.`,
        bullets: [
            '고객센터를 통한 철회 요청',
            "수신된 이메일 하단의 '수신 거부' 링크 클릭",
            '수신된 SMS의 수신 거부 안내에 따라 철회',
        ],
        footer: `수신을 동의하지 않아도 Paygo의 기본 서비스(결제, 송금, 전자상거래 등)는 정상적으로 이용하실 수 있습니다. 다만 수신 거부 시 결제 혜택, 이벤트, 신규 서비스 소식 등의 마케팅 정보를 제공받지 못할 수 있습니다.`,
    },
    {
        id: 'retention',
        title: '수신 동의 변경 및 보유 기간',
        content: `마케팅 정보 수신 동의와 관련한 보유 기간 및 변경 방법은 아래와 같습니다.`,
        bullets: [
            '보유 기간: 마케팅 정보 수신 동의일로부터 2년',
            '보유 기간 초과 시 동의 절차를 재진행하며, 미동의 시 즉시 파기',
            '회원 탈퇴 또는 수신 동의 철회 시 즉시 파기',
        ],
        footer: `수신 동의 변경(동의/철회)은 Paygo 앱 설정 페이지에서 언제든지 가능합니다.`,
    },
];

function MarketingConsentPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-2xl bg-[#6266f1] flex items-center justify-center">
                        <IconCreditCard size={24} color="white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                        <span className="text-[#6266f1]">Pay</span>
                        <span>go</span>
                    </span>
                    <span className="text-gray-400 text-sm ml-1">마케팅 정보 수신 동의</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Title Block */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">마케팅 정보 수신 동의</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>시행일: 2026년 06월 15일</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                        <span>Paygo 주식회사</span>
                    </div>
                    <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-sm text-indigo-700 leading-relaxed">
                        마케팅 정보 수신은 선택 사항입니다. 동의하지 않으셔도 Paygo의 기본 서비스는
                        정상적으로 이용하실 수 있습니다.
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
                        <IconCreditCard size={24} color="white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                        <span className="text-[#6266f1]">Pay</span>
                        <span>go</span>
                        <span> 주식회사</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        본 동의서는 한국어를 정본으로 하며, 대한민국 법령이 적용됩니다.
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">시행일: 2026년 06월 15일</p>
                </div>
            </div>
        </div>
    );
}

export default MarketingConsentPage;
