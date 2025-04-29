# OSSCA Team1 - Next.js 실습

## next-movie-viewer 디렉토리 구조 설명
```ruby
next-movie-viewer/
├── src/
│   ├── app/                   
│   │   ├── movies/            
│   │   │   ├── page.tsx       # 영화 목록 페이지 (TMDB API 활용)
│   │   │   └── error.tsx      # 영화 목록 조회 중 발생하는 에러 처리 컴포넌트
│   │   └── layout.tsx         # 전체 앱 공통 레이아웃 (헤더, 글로벌 스타일 등)
│   │
│   ├── components/            
│   │   ├── common/            # 버튼, 스피너 등 여러 기능에서 재사용 가능한 공통 UI 컴포넌트
│   │   └── features/          
│   │       └── movies/        # 영화 관련 페이지에서만 사용하는 기능성 컴포넌트 모음
│   │           ├── MovieCard.tsx     # 단일 영화 카드 UI
│   │           ├── MovieList.tsx     # 영화 목록 UI 구성
│   │           └── Pagination.tsx    # 페이지네이션 UI
│   │
│   ├── services/             
│   │   └── tmdb/              # TMDB API 연동 관련 모듈
│   │       └── api.ts         # 영화 목록, 검색, 상세 등 API 호출 함수 모음
│   │
│   ├── styles/                # 글로벌 스타일(CSS, Tailwind 등) 정의
│   ├── utils/                 # 날짜 변환, 쿼리 처리 등 유틸리티 함수
│   └── hooks/                 # 커스텀 훅 (예: `useFetch`, `useDebounce` 등)
│
├── public/                    # 정적 리소스 (이미지, 폰트 등)
├── .next/                     # Next.js 빌드 결과 (자동 생성, Git에 제외)
├── node_modules/              # 설치된 라이브러리
├── package.json               # 프로젝트 의존성, 스크립트 등 기본 설정
├── tsconfig.json              # TypeScript 설정
├── next.config.ts             # Next.js 실행 및 환경 설정
└── postcss.config.mjs         # PostCSS 플러그인 설정 (Tailwind 등)
```

## 주요 디렉토리 설명
주요 디렉토리 설명:
1.src/app/
- Next.js 13+ App Router 구조
- 페이지와 레이아웃 정의
2.src/components/
- 재사용 가능한 컴포넌트
- common: 공통 UI 컴포넌트
- features: 기능별 컴포넌트
3.src/services/
- API 호출 관련 로직
- TMDB API 통신
4.src/styles/
- 전역 스타일 정의
5.src/utils/
- 유틸리티 함수
6.src/hooks/
- 커스텀 React 훅
> 이 구조는 Next.js 13+의 App Router를 사용하는 모던 React 애플리케이션의 전형적인 구조를 따르고 있습니다.

## 커밋 컨벤션 포맷
> <타입> : <작업 내용 요약>
```
feat: 영화 목록 페이지 추가
fix: API 응답 오류 처리 추가
refactor: MovieCard 컴포넌트 구조 개선
style: 코드 포맷팅 적용 (prettier)
chore: TMDB API 키 환경변수 설정
docs: 디렉토리 구조 README 정리
```