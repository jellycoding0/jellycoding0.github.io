---
title: "[Blog] Jekyll 기반 블로그 테마(minimal-mistake) 구조 요약"

categories:
  - Git

---


Minimal Mistakes는 Jekyll 기반 블로그 테마로, 디렉터리 구조와 구성 요소를 이해하면 커스터마이징에 큰 도움이 됩니다. 아래는 해당 테마의 주요 디렉터리와 파일을 정리한 문서입니다.

## <span style="color:rgb(81, 132, 209) ;"> 1.Minimal Mistakes 디렉터리 구조
```minimal-mistakes/
├── 📁_data                  # 데이터 파일 (yml, json 등) 저장
├── 📁_includes              # 재사용 가능한 HTML 조각 모음
├── 📁_layouts               # 레이아웃 파일 모음
├── 📁_sass                  # SCSS 스타일 정의
├── 📁assets                 # 이미지, JS, CSS 등 정적 파일
├── 📝_config.yml            # 사이트 설정 파일
├── 📝Gemfile                # Ruby 의존성 파일
├── 📝index.html             # 메인 페이지
└── 📝package.json           # NPM 스크립트 및 의존성
```

<br>

## <span style="color:rgb(81, 132, 209) ;"> 2. 주요 디렉터리와 파일 설명

### 2.1 📁_data 디렉터리
- 사이트를 커스터마이징할 데이터 파일이 저장된 디렉터리입니다. .yml, .json, .csv 등의 파일을 저장할 수 있으며, site.data 객체로 접근 가능합니다.

- 주요 파일
- 📘navigation.yml: 네비게이션 메뉴 정의
- 📘ui-text.yml: 사용자 인터페이스에서 사용하는 텍스트 정의
- 예시: navigation.yml

  ```bash
  main:
    - title: "Home"
      url: /
    - title: "Blog"
      url: /blog/
    - title: "About"
      url: /about/
  ```


  ### 2.2 📁_includes 디렉터리
- 재사용 가능한 HTML 파일을 저장하는 디렉터리입니다. Liquid 태그 include를 사용해 삽입할 수 있습니다.

- 주요 폴더 및 파일
  - 📁analytics-providers: 분석 도구 (Google Analytics 등)
  - 📁comments-providers: 댓글 플랫폼 (Disqus, Facebook 등)
  - 📁footer: 사이트 하단부 정의
  - 📘toc.html: 페이지 내 목차 생성
  - 📘video.html: 유튜브, 비메오 비디오 삽입
  - 예시: 유튜브 영상 삽입
    ```bash
    include video id="XsxDH4HcOWA" provider="youtube" 
    ```



### 2.3 📁_layouts 디렉터리
- 사이트 레이아웃을 정의하는 파일 모음입니다. _includes에 있는 파일과 조합하여 페이지를 구성합니다.

- 주요 레이아웃
  - default.html: 모든 페이지의 기본 레이아웃
  - single.html: 개별 포스트 레이아웃
  - archive.html: 아카이브 페이지 레이아웃

### 2.4 📁_sass 디렉터리
- 테마의 스타일 정의가 포함된 SCSS 파일들이 저장된 곳입니다. 변수와 믹스인을 활용해 손쉽게 스타일을 커스터마이징할 수 있습니다.

- 주요 파일
  - main.scss: 메인 스타일 파일
  - variables.scss: 색상, 폰트 등 변수 정의
  - mixins.scss: 스타일 믹스인 정의

### 2.5 📝_config.yml
- 사이트의 전역 설정 파일로, 테마 설정, 플러그인 설정, 기본 메타데이터 등을 정의합니다.

- 예시
  ```
  title: "My Blog"
  theme: "minimal-mistakes"
  google_analytics: "UA-XXXXXX-1"
  search: true
  ```

## <span style="color:rgb(81, 132, 209) ;"> 3. 블로그 커스터마이징 팁
1. Chrome 개발자 도구 활용
HTML, SCSS, Liquid 구조를 분석하고 빠르게 수정 사항을 테스트할 수 있습니다.
2. Liquid 태그 활용
재사용 가능한 컴포넌트를 만들거나 데이터를 동적으로 삽입할 때 유용합니다.
3. _data 폴더 활용
navigation.yml이나 ui-text.yml 같은 파일을 활용해 상단 메뉴나 텍스트를 쉽게 수정할 수 있습니다.
- 이 문서는 주요 구조를 이해하고 빠르게 활용할 수 있도록 설계되었습니다. 추가적인 세부 사항이나 질문이 있다면 말씀해 주세요!



---
