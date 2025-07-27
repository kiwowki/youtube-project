# 나만의 음악(락) 유튜브 사이트 만들기

YOUTUBE API를 이용해서 유튜브를 대체하여 음악을 듣는 사이트를 만들었습니다.

유명 락밴드의 음악이 듣고 싶다면 여기서 원하는 밴드를 선택해 그들의 음악을 들어보세요!
신나는 음악부터 감성적인 음악까지 모두 경험해 보실 수 있습니다.
또한 오늘의 락 추천 페이지와 락밴드의 채널 정보를 확인하고, 목록에 없는 밴드의 채널 및 노래 검색도 한번 해보시길 바랍니다.

<img src="https://kiwowki.github.io/youtube-project/src/assets/img/cover.jpg">

[rock-music-youtube.netlify.app](https://rock-music-youtube.netlify.app/)

### 셋팅

#### 필요한 패키지 설치 한 번에 하기

`npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`

- react-router-dom: React 애플리케이션에서 라우팅을 구현하기 위한 라이브러리입니다.
- axios: HTTP 요청을 처리하는 라이브러리로, API 호출 등에 사용됩니다.
- react-icons: 다양한 아이콘을 제공하는 React 컴포넌트를 포함한 라이브러리입니다.
- react-player: 동영상 및 음악 플레이어를 React 애플리케이션에 통합할 수 있는 라이브러리입니다.
- sass: CSS 전처리기 중 하나인 Sass를 사용하기 위한 패키지입니다.
- react-helmet-async: 동적으로 변경되는 헤더를 관리하기 위한 React Helmet의 비동기 버전입니다.
- swiper: 이미지 슬라이더 및 갤러리를 만들기 위한 라이브러리입니다.

### Swiper 사용하기

[swiper 사이트 바로가기](https://swiperjs.com/)

- Resources의 Swiper Demos에서 원하는 슬라이드 디자인을 찾아 CodeSandbox:React의 코드를 원하는 코드에 적용.

##### Swiper, SwiperSlide, Navigation, Autoplay, Responsive breakpoints 적용

- navigation: 좌 우 화살표   
- Autoplay: 자동 이동   
- breakpoints: Swiper의 반응형 데모   
   
- swiper.scss를 만들어서 추가로 scss작업

### YOUTUBE API 첫 시작 및 활용
- API KEY 받기
  [YouTube Data API v3](https://console.cloud.google.com/apis/api/youtube.googleapis.com/)

  1. 사용자 인증 정보 페이지에서 키 발급

  2. .env 파일(프로젝트 최상단)에 REACT_APP_GOOGLE_YOUTUBE_KEY=[YOUR_API_KEY] 하여 넣기

- API 활성화

  1. YouTube Data API v3 활성화

  2. Google Cloud 콘솔 API 라이브러리 페이지로 이동

  3. 해당 프로젝트(554232169123) 선택 확인

  4. 상단의 사용 설정(Enable) 버튼 클릭

  5. 활성화 완료 후 수 분 기다렸다가 재시도

- API 활용하기
  [YOUTUBE API](https://developers.google.com/youtube/v3/docs/)

  1. Reference에서 원하는 API(Search: list)를 선택해 Try this method에서 설정(part: snippet, maxResult: 48) 후 show code 하기

  2. YOUTUBE API의 cURL 중 https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&key=[YOUR_API_KEY]를 복사. postman의 My Workspace에 들어가서 GET 링크 넣는 곳에 삽입 해보기

  3. YOUTUBE API의 application/json에 나온 내용을 복사해 postman의 My Workspace에 들어가 body에 삽입

  4. 정상 작동을 확인했다면 API 호출을 담당할 함수 작성(utils > api.js)

  5. 컴포넌트에서 함수 호출하고 실행 후 콘솔을 확인하여 API에서 받아온 데이터를 확인(Home, Channel, Video, Search 페이지 등)

- 주의 할 점
  api호출에 일일 쿼터 사용량이 제한되어있으므로 과도한 호출은 자제 하도록 한다.
  => api 호출 파라미터 maxResults: 48 -> 20 으로 변경


### Postman이란?
[포스트맨 다운로드 바로가기](https://www.postman.com/downloads/)

API 개발 및 테스트를 위한 협업 도구로, 다양한 API 요청을 만들고 테스트할 수 있는 플랫폼입니다. Postman을 사용하면 간단하게 HTTP 요청을 생성하고, 서버로 요청을 보내고, 응답을 확인할 수 있습니다. 주로 개발자, 테스트 엔지니어, API 디자이너, 프로덕트 매니저 등이 API를 효과적으로 관리하고 테스트하기 위해 사용합니다.


### 더보기 기능 추가하기
전반적인 순서:
더보기 버튼 누르기 -> nextPageToken이 있다면 handleLoadMore 발동 -> fetchVideos에 searchId, nextPageToken 전달 -> fetchVideos가 setVideos에 기존데이터에 데이터를 추가함 -> useEffect가 데이터를 보여줌


### Suspense 기능 사용하기
Home, Today, Musician, Channel, Search, Video 컴포넌트들을 lazy 함수를 사용하여 비동기적으로 import합니다. 이렇게 하면 각 페이지 컴포넌트들이 필요한 시점에서 비동기적으로 로딩됩니다.
Suspense 컴포넌트를 사용하여 로딩 중에 보여줄 컴포넌트(Main)를 지정합니다. 이는 페이지 컴포넌트들이 로딩되는 동안 메인 컴포넌트를 보여주게 됩니다.


### react-helmet-async
Helmet : Helmet 컴포넌트는 <head> 요소의 내용을 동적으로 변경하는 역할을 합니다. Helmet 컴포넌트 안에서 titleTemplate, defaultTitle, defer 속성 등을 설정하여 페이지의 제목과 메타 데이터를 조작할 수 있습니다.  
    
defer: defer 속성은 스크립트를 비동기로 로드하도록 지시합니다. 이를 통해 페이지의 로딩 속도를 향상시킬 수 있습니다.   
   
titleTemplate: titleTemplate은 페이지의 제목을 동적으로 설정하기 위한 템플릿입니다. %s는 문자열 포맷팅에서 사용되는 플레이스홀더로, %s 자리에 실제 제목이 들어가게 됩니다. 예를 들어, props.title 값이 "My Music"이면 실제로 설정되는 제목은 "My Music | Musician Youtube"가 됩니다.
   
   
#### useParams
react-router-dom을 연동해서 url 값을 가져오는 훅. 

#### useState
`const [ videos, setvideos ]`   
videos-> 변수   
setvideos-> 함수   

#### useEffect
컴포넌트에서 부수 효과(side effect)를 수행하기 위해 사용됩니다. 부수 효과란 컴포넌트 외부의 데이터를 가져오거나 조작하는 작업을 말합니다. 예를 들어, API 요청을 보내거나 이벤트 리스너를 등록하는 등의 작업을 수행할 수 있습니다.

### loading 페이지 부드럽게 나오기
  `const searchPageClass = loading ? 'isLoading' : 'isLoaded';`   
  className에 isLoading, isLoaded를 추가하는 코드입니다.   
  scss에서 opacity를 조절해서 애니메이션을 줍니다.


## 트러블 슈팅

<details>
<summary>Netlify Page Not Found 에러</summary>
- SPA(싱글 페이지 애플리케이션) 라우팅 설정이 필요한 경우
React 또는 Vue와 같은 SPA 프레임워크를 사용하고 있다면, 서버 사이드에서 URL을 직접 처리하는 설정이 필요할 수 있습니다. Netlify는 기본적으로 SPA를 지원하지만, 몇 가지 추가적인 설정이 필요한 경우가 있습니다.
   
해결방법   
- React의 경우
1. public/_redirects 파일을 생성
2. `/*    /index.html   200` 작성
3. `npm run build` 를 하고 다시 배포해보기  

</details>

   
<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,   
윈도우에서는 줄 하나가 CR(Carriage Return)과 LF, 즉 CRLF로 이루어지는데   
Git이 이 둘 중 어느 쪽으로 선택할지 혼란이 온 것이다.   
   
해결방법   
`git config --global core.autocrlf true` // 시스템 전체에 적용 
⠀  
`git config core.autocrlf true` // 해당 프로젝트에만 적용

</details>
