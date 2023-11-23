# 나만의 음악(락) 유튜브 사이트 만들기

유튜브 API를 이용해서 음악을 듣는 사이트를 만들었습니다.

음악 장르 중 가장 좋아하는 락에서 유명한 락밴드들을 모아봤습니다.
유명 락밴드의 음악이 듣고싶다면 여기서 원하는 밴드를 선택해 그들의 음악을 들어보세요!
신나는 음악부터 음울한 음악까지 모두 경험해보실 수 있습니다.

<img src="https://kiwowki.github.io/youtube-project/src/assets/img/cover.jpg">

## 셋팅

### 필요한 패키지 설치 한 번에 하기

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


### YOUTUBE API 사용하기
[YOUTUBE API](https://developers.google.com/youtube/v3/docs/)

1. Reference에서 원하는 API(Search: list)를 선택해 Try this method에서 설정(part: snippet, maxResult: 48) 후 show code 합니다.

2. YOUTUBE API의 cURL 중 https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&key=[YOUR_API_KEY]를 복사해서 ([YOUR_API_KEY]에는 []도 지우고 본인 api 키를 넣습니다.) postman의 My Workspace에 들어가서 GET 링크 넣는 곳에 삽입합니다.

3. YOUTUBE API의 application/json에 나온 내용을 복사해 postman의 My Workspace에 들어가 body에 삽입합니다.

4. .env 파일을 만들어 REACT_APP_YOUTUBE_API_KEY=[YOUR_API_KEY] 를 작성합니다.

5. 이 이후는 검색해서 추가할 것.


### Postman란?
[포스트맨 다운로드 바로가기](https://www.postman.com/downloads/)

API 개발 및 테스트를 위한 협업 도구로, 다양한 API 요청을 만들고 테스트할 수 있는 플랫폼입니다. Postman을 사용하면 간단하게 HTTP 요청을 생성하고, 서버로 요청을 보내고, 응답을 확인할 수 있습니다. 주로 개발자, 테스트 엔지니어, API 디자이너, 프로덕트 매니저 등이 API를 효과적으로 관리하고 테스트하기 위해 사용합니다.


### Rapid YOUTUBE API 사용하기
[Rapid-API Youtube v3](https://rapidapi.com/ytdlfree/api/youtube-v31/)

1. 



### 더보기 기능 추가하기
전반적인 순서:
더보기 버튼 누르기 -> nextPageToken이 있다면 handleLoadMore 발동 -> fetchVideos에 searchId, nextPageToken 전달 -> fetchVideos가 setVideos에 기존데이터에 데이터를 추가함 -> useEffect가 데이터를 보여줌


### Suspense 기능 사용하기
header, footer 빼고 main대신 suspense 씀
fallback하고 import대신 lazy 어쩌고 함..


### react-helmet-async
헬맷 바꿔줌
Helmet - defer={true} => 로딩이 되기 전? 후? 나오게하기?
%s - ?


#### useParams
react-router-dom을 연동해서 url 값을 가져오는 훅. 

#### useState
const [ videos, setvideos]
videos-> 변수
setvideos-> 함수

#### useEffect
동적으로 나오게 하는..

#### loading 페이지 부드럽게 나오기
  const searchPageClass = loading ? 'isLoading' : 'isLoaded';
  className에 isLoading, isLoaded 추가하는 기능임.
  scss opacity 조절해서 애니메이션 주기

