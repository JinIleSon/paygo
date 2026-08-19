# Paygo — 지갑 충전부터 정산까지, 결제 커머스 플랫폼

[상태 배지: 🚧 진행중 | Frontend 90% · Backend 설계 완료/구현 예정]

## 프로젝트 소개
지갑 충전 → 상품 구매 → 판매자 정산까지, 돈의 흐름 전체를 
설계한 결제 커머스 플랫폼입니다.

## 스크린샷

<br><br>
상품 목록
<br><br>
<img width="1262" height="1336" alt="image" src="https://github.com/user-attachments/assets/201acfdb-e0f9-4c5f-9968-1682723cd709" />

<br><br>
상품 상세
<br><br>
<img width="1288" height="1080" alt="image" src="https://github.com/user-attachments/assets/9c931c74-1b83-4307-bbbd-8cfa690fa406" />

<br><br>
장바구니
<br><br>
<img width="1261" height="1120" alt="image" src="https://github.com/user-attachments/assets/8deddbf3-e213-4018-81e6-beec13e4aa33" />

<br><br>
주문/결제
<br><br>
<img width="1260" height="1288" alt="image" src="https://github.com/user-attachments/assets/8a6e7f4b-1ca3-4ecb-a90f-401de9de0453" />

<br><br>
주문 내역
<br><br>
<img width="1267" height="1722" alt="Group 4" src="https://github.com/user-attachments/assets/cb7a22c0-63bb-40d9-b8e7-b081915f5fc5" />

<br><br>
지갑 홈
<br><br>
<img width="1285" height="1050" alt="image" src="https://github.com/user-attachments/assets/a8e1f2e6-085b-4b38-bc8d-1f8bf71a7f38" />

<br><br>
충전
<br><br>
<img width="1287" height="1018" alt="image" src="https://github.com/user-attachments/assets/dce58e22-209c-40c8-abd0-86bbdf1a981c" />

<br><br>
거래내역
<br><br>
<img width="1274" height="970" alt="image" src="https://github.com/user-attachments/assets/ceac7558-1046-4b42-b67e-f9c2d7598638" />

<br><br>
로그인
<br><br>
<img width="1278" height="928" alt="image" src="https://github.com/user-attachments/assets/9aa993fb-52b0-468f-935c-61b0db2f504f" />

<br><br>
회원가입
<br><br>
<img width="1271" height="1052" alt="image" src="https://github.com/user-attachments/assets/3e85bca0-ef15-4f63-a834-de0f7ac4d660" />

<br><br>
서비스 이용약관
<br><br>
<img width="1210" height="1025" alt="image" src="https://github.com/user-attachments/assets/69a76546-2bec-4eb0-8ef0-2c21e5b79204" />

## 기술 스택
| 구분 | 상태 | 내용 |
|---|---|---|
| Frontend | ✅ 구현중 | React, TypeScript, Tailwind, React Query, Zustand |
| Backend | 📐 설계 완료 · 구현 예정 | Spring Boot, Spring Security, JPA, QueryDSL |
| DB | 📐 설계 완료 | MySQL, Redis |
| Infra | 📐 계획 | Docker, GitHub Actions, Railway |

## 아키텍처 설계 (구현 예정)
이 프로젝트의 핵심은 화면 UX 자체가 아니라 그 아래 깔린 
동시성/트랜잭션 설계입니다.

- **동시성 제어**: 지갑 잔액 차감은 낙관적 락(@Version), 
  상품 재고 차감은 Redis 분산 락(Redisson)으로 분리 설계
  → 화면에서도 재고 1개 남은 상품에 경고 문구를 미리 노출해 
    이 시나리오를 UX로 먼저 검증
- **트랜잭션 설계**: 주문→결제→재고차감→정산을 하나의 
  트랜잭션으로 묶고, 실패 시 전체 롤백 + 실패 내역 별도 보존
  → 주문내역 화면의 "결제실패, 잔액 차감 안 됨" 문구가 
    이 설계를 미리 반영한 것
- **인증**: JWT Access/Refresh, 구매자/판매자 권한 분리 (설계)

## 진행 상황
- [x] 화면 설계 및 프론트엔드 12개 화면 중 10개 완료
- [ ] 나머지 2개 화면
- [ ] 백엔드 API 연동
- [ ] 낙관적 락 / 분산 락 구현
