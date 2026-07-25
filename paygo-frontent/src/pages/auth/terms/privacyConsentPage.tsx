import { IconCreditCard } from '@tabler/icons-react';

const sections = [
    {
        id: 'purpose',
        title: '개인정보 수집 및 이용 목적',
        content: `Paygo 주식회사(이하 'Paygo')는 아래의 목적을 위해 개인정보를 수집 및 이용합니다. 수집한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 경우 사전에 별도 동의를 받겠습니다.`,
        bullets: [
            '회원 가입 및 본인 확인: 서비스 이용을 위한 계정 생성 및 본인 인증',
            '전자지갑 서비스 제공: 잔액 충전, 송금, 결제 처리 및 거래 내역 관리',
            '전자상거래 서비스 제공: 상품 주문, 결제, 배송 및 구매 확정 처리',
            '판매자 정산 서비스 제공: 판매 대금 정산 및 수수료 처리',
            '고객 상담 및 분쟁 처리: 서비스 이용 관련 문의 응대 및 불만 처리',
            '서비스 개선 및 신규 서비스 개발: 이용 현황 분석 및 맞춤형 서비스 제공',
            '법령 의무 준수: 전자금융거래법, 특정 금융거래정보의 보고 및 이용 등에 관한 법률 등 관련 법령 준수',
        ],
    },
    {
        id: 'items',
        title: '수집하는 개인정보 항목',
        content: `Paygo는 서비스 제공을 위해 필요한 최소한의 개인정보만을 수집합니다.`,
        bullets: [
            '필수 항목 (회원 가입 시): 이름, 이메일 주소, 비밀번호, 휴대전화번호, 생년월일',
            '필수 항목 (전자지갑 개설 시): 실명, 계좌번호, 은행명, 본인 인증 정보',
            '필수 항목 (판매자 등록 시): 사업자등록번호, 대표자명, 정산 계좌 정보',
            '자동 수집 항목: 서비스 이용 기록, 접속 로그, IP 주소, 결제 및 거래 내역, 기기 정보',
        ],
        footer: `민감정보(주민등록번호 등)는 법령에서 요구하는 경우에 한해 별도 동의를 받아 수집합니다.`,
    },
    {
        id: 'retention',
        title: '개인정보 보유 및 이용 기간',
        content: `Paygo는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 따라 일정 기간 보존이 필요한 경우 아래와 같이 보관합니다.`,
        bullets: [
            '회원 정보: 회원 탈퇴 시까지 (탈퇴 후 즉시 파기, 단 법령에 따른 보존 기간 적용)',
            '거래 및 결제 기록: 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)',
            '전자금융 거래 기록: 5년 (전자금융거래법)',
            '접속 로그 및 이용 기록: 3개월 (통신비밀보호법)',
            '소비자 불만 및 분쟁 처리 기록: 3년 (전자상거래 등에서의 소비자 보호에 관한 법률)',
        ],
        footer: `법령에 의한 보존 기간이 종료된 후에는 해당 정보를 즉시 파기합니다.`,
    },
    {
        id: 'thirdparty',
        title: '개인정보의 제3자 제공',
        content: `Paygo는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 아래의 경우에는 예외로 합니다.`,
        bullets: [
            '이용자가 사전에 동의한 경우',
            '법령의 규정에 의거하거나 수사 목적으로 법령에서 정한 절차와 방법에 따라 수사기관이 요구하는 경우',
            '거래 상대방(판매자/구매자) 간 원활한 거래 이행을 위해 필요한 최소한의 정보를 제공하는 경우',
            '금융사기 예방 및 대응을 위해 관련 기관에 제공이 필요한 경우',
        ],
        footer: `제3자 제공이 필요한 경우 제공 대상, 제공 항목, 제공 목적, 보유 기간을 사전에 안내하고 별도 동의를 받겠습니다.`,
    },
    {
        id: 'consignment',
        title: '개인정보 처리 위탁',
        content: `Paygo는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 외부에 위탁하고 있습니다.`,
        bullets: [
            '결제 처리: PG사(결제대행업체) — 결제 승인 및 취소 처리',
            '본인 인증: 본인인증 서비스 업체 — 회원 가입 및 계좌 연결 시 본인 확인',
            'SMS/알림: 문자 발송 서비스 업체 — 거래 알림, 인증번호 발송',
            '클라우드 인프라: 서버 호스팅 업체 — 데이터 저장 및 시스템 운영',
        ],
        footer: `위탁 계약 시 개인정보 보호 관련 법규 준수, 개인정보 보안, 비밀 유지 등을 규정하며, 위탁 업체가 이를 준수하는지 관리·감독합니다.`,
    },
    {
        id: 'rights',
        title: '이용자의 권리와 행사 방법',
        content: `이용자는 Paygo가 보유한 자신의 개인정보에 대해 언제든지 아래 권리를 행사할 수 있습니다.`,
        bullets: [
            '개인정보 열람 요청: 보유 중인 개인정보의 내용 확인',
            '개인정보 정정 요청: 부정확하거나 변경된 정보의 수정',
            '개인정보 삭제 요청: 불필요한 개인정보의 삭제 (단, 법령에 따른 보존 의무가 있는 경우 제외)',
            '개인정보 처리 정지 요청: 특정 목적의 개인정보 처리 중단',
        ],
        footer: `권리 행사는 고객센터 또는 서비스 내 설정 메뉴를 통해 신청할 수 있으며, Paygo는 지체 없이 처리하겠습니다.`,
    },
    {
        id: 'security',
        title: '개인정보 보호를 위한 안전조치',
        content: `Paygo는 개인정보 보호를 위해 아래와 같은 기술적·관리적 보호 조치를 취하고 있습니다.`,
        bullets: [
            '데이터 암호화: 비밀번호, 계좌번호 등 민감 정보는 암호화하여 저장 및 전송',
            '접근 통제: 개인정보에 접근 가능한 직원을 최소화하고 접근 권한을 엄격히 관리',
            '보안 점검: 정기적인 취약점 점검 및 보안 업데이트 적용',
            '개인정보 보호 교육: 개인정보를 취급하는 직원 대상 정기 교육 실시',
        ],
    },
    {
        id: 'contact',
        title: '개인정보 보호책임자 및 문의처',
        content: `Paygo는 개인정보 처리에 관한 업무를 총괄하고, 개인정보 관련 불만 처리 및 피해 구제를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.`,
        bullets: [
            '개인정보 보호책임자: Paygo 주식회사 개인정보보호팀',
            '이메일: privacy@paygo.kr',
            '고객센터: 서비스 내 고객센터 메뉴를 통해 문의',
        ],
        footer: `개인정보 침해에 대한 신고나 상담이 필요한 경우, 개인정보침해신고센터(privacy.kisa.or.kr), 개인정보분쟁조정위원회(www.kopico.go.kr) 등 외부 기관에도 도움을 요청하실 수 있습니다.`,
    },
];

function PrivacyConsentPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
                    <div className="w-[46px] h-[46px] rounded-2xl bg-[#6266f1] flex items-center justify-center">
                        <IconCreditCard size={24} color="white" />
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">
                        <span className="text-[#6266F1]">Pay</span>
                        <span>go</span>
                    </span>
                    <span className="text-gray-400 text-sm ml-1">개인정보 수집 및 이용 동의</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Title Block */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        개인정보 수집 및 이용 동의
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>시행일: 2026년 06월 15일</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                        <span>Paygo 주식회사</span>
                    </div>
                    <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-sm text-indigo-700 leading-relaxed">
                        Paygo는 개인정보 보호법 및 관련 법령에 따라 이용자의 개인정보를
                        수집·이용합니다. 아래 내용을 확인하시고 동의 여부를 결정해 주세요.
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
                    <div className="mx-auto mb-3 w-[46px] h-[46px] rounded-2xl bg-[#6266F1] flex items-center justify-center">
                        <IconCreditCard size={24} color="white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                        <span className="text-[#6266F1]">Pay</span>
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

export default PrivacyConsentPage;
