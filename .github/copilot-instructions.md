# Editorial 저장소 Copilot 안내

## 프로젝트 명령어

이 프로젝트는 npm으로 관리하는 Next.js 15 App Router 애플리케이션입니다.

```bash
npm install       # 의존성 설치
npm run dev       # http://localhost:3000에서 개발 서버 실행
npm run build     # 프로덕션 빌드 생성
npm start         # 프로덕션 빌드 실행
npm run lint      # 설정된 Next.js/ESLint 검사 실행
```

현재 `package.json`에는 테스트 스크립트가 없고, 저장소에도 테스트 파일이나 테스트 러너가 없습니다. 따라서 전체 테스트나 단일 테스트를 실행하는 지원 명령은 없습니다. 테스트를 추가할 때는 사용할 러너와 파일명/테스트명 필터 명령을 `package.json`과 이 문서에 함께 기록하세요.

현재 `npm run lint`는 체크인된 Next 15 및 ESLint 9 설정 조합에서 ESLint flat config의 parser를 직렬화하지 못해 정상 완료되지 않습니다. 생성된 `.next` 파일을 제외하고 확인하려면 다음 명령을 사용할 수 있습니다.

```bash
npx eslint app components util
```

이 명령도 기존 소스의 오류와 경고를 보고합니다. 대표적으로 `components/Sidebar.js`의 내부 경로용 일반 `<a>` 태그가 있습니다. 변경 대상과 직접 관련이 없는 기존 문제는 별도로 범위를 넓혀 수정하지 마세요.

## 아키텍처

- `app/`은 Next.js App Router 페이지와 API 라우트 트리입니다. `app/layout.js`가 공통 레이아웃이며 HTML5 UP 스타일시트, 전역 CSS, `Header`, `Sidebar`, `public/assets/js`의 레거시 JavaScript를 함께 로드합니다.
- 홈 화면(`app/page.js`)은 주로 프레젠테이션 역할을 합니다. 브라우저 전용 기능은 `components/Clock.js`의 `/api/time` 주기 조회와 `components/spinningCube.js`의 Canvas 애니메이션처럼 클라이언트 컴포넌트로 분리되어 있습니다.
- 게시판은 서버 렌더링 페이지와 클라이언트 상호작용을 조합합니다.
  - `app/board/list/page.js`, `app/board/detail/[id]/page.js`, `app/board/edit/[id]/page.js`는 서버에서 MongoDB를 직접 조회합니다.
  - `app/board/write/page.js`와 수정 페이지는 HTML form을 API route handler로 제출합니다.
  - `app/board/list/ListItem.js`는 직렬화된 게시물을 렌더링하고 삭제 API를 호출하는 클라이언트 컴포넌트입니다.
  - `app/board/detail/[id]/Comment.js`는 브라우저에서 댓글을 조회하고 생성합니다.
- `app/api/`에는 게시물, 댓글, 시계 API가 있습니다. 게시물은 `Forum.post` 컬렉션에, 댓글은 `Forum.comment` 컬렉션에 저장되며 댓글의 `parent`가 게시물을 참조합니다.
- `util/database.js`가 MongoDB 연결을 관리합니다. 연결 문자열은 `DATABASE_URL` 환경 변수에서 읽습니다. 개발 환경에서는 연결 Promise를 `global._mongo`에 캐시하고, 그 외 환경에서는 새 연결 Promise를 만듭니다. 게시판 기능을 실행하려면 유효한 `DATABASE_URL`이 필요합니다.
- `public/`에는 HTML5 UP에서 가져온 화면 자산이 있습니다. CSS, Sass, JavaScript, 이미지, 웹폰트는 URL 루트 기준으로 참조합니다(예: `/images/pic10.jpg`).

## 저장소별 규칙

- 서버 전용 MongoDB 접근은 서버 컴포넌트 또는 route handler에 두세요. React hook, 브라우저 API, 이벤트 핸들러, 클라이언트 `fetch`가 필요한 컴포넌트에만 `'use client'`를 추가하세요.
- URL 또는 문서 식별자는 데이터베이스 경계에서 MongoDB `ObjectId`로 변환하세요. 게시물 form은 `FormData`, 댓글 생성은 JSON을 사용하며, 게시물 작성/수정 성공 시 redirect response를 반환하는 기존 방식을 따르세요.
- React 앱 내부 이동에는 `next/link`, 최적화가 필요한 이미지에는 `next/image`를 사용하세요. HTML5 UP의 기존 마크업, CSS 클래스명, 공개 자산 경로는 함부로 바꾸지 마세요.
- 저장소 루트 import에는 `jsconfig.json`에 설정된 `@/*` 별칭을 사용할 수 있습니다. 기존 인접 파일의 import 방식을 존중하고, 관련 없는 파일까지 import 스타일을 일괄 변경하지 마세요.
- 코드는 JavaScript ES module(`"type": "module"`)입니다. 파일을 수정할 때는 해당 파일 주변의 따옴표와 세미콜론 스타일을 따르고, 무관한 코드의 포맷은 변경하지 마세요.
- 화면 문구와 API 메시지는 한국어인 경우가 많고 HTML5 UP 템플릿 문구는 영어입니다. 게시판을 확장할 때 기존 언어와 필드명(`title`, `contents`, `comment`, `_id`)을 유지하세요.
- 인증은 현재 활성화되어 있지 않습니다. 댓글 route에 있는 `next-auth` 코드는 주석 처리된 placeholder일 뿐이므로, 게시판 변경 API가 인증된 사용자만 호출된다고 가정하지 마세요.
