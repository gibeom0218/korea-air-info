# korea-air-info

공공데이터 API를 활용해 전국 시도별 실시간 대기질(PM10, PM2.5 등)을 제공하는 웹 서비스

![메인화면 스크린샷](https://github.com/user-attachments/assets/682c9f9b-6ab3-4205-b996-801a9fbb19e3) 

## 🌐 배포 주소
- [https://korea-air-info.vercel.app](https://korea-air-info.vercel.app/)

## 📌 주요 기능
- 전국 시도별 대기질 정보(PM10, PM2.5, 오존 등) 제공
- 선택된 지역의 상세 미세먼지 농도 시각화
- 측정값에 따른 색상 구분(좋음/보통/나쁨/매우 나쁨)
- 모바일 반응형 UI 지원

## 🛠 사용 기술
- **Frontend:** Next.js, Chart.js
- **Styling:** Tailwind CSS
- **API:** [한국환경공단_에어코리아_대기오염정보 Open API](https://www.data.go.kr/data/15073861/openapi.do)
- **Deployment:** Vercel

## 📁 프로젝트 구조 예시

```
src/
├── app/                # 페이지 단위 컴포넌트
│   ├── api/            # 공공데이터 호출용 API 서버 처리
│   ├── components/     # UI 컴포넌트 모음
│   └── lib/            # 차트 등 외부 라이브러리 래핑 또는 설정
├── constants/          # 공통으로 사용하는 상수들
└── types/              # 데이터 타입 정의 (TypeScript 인터페이스 등)
```

## 🚀 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/gibeom0218/korea-air-info.git

# 2. 패키지 설치
npm install

# 3. 로컬 서버 실행
npm run dev
