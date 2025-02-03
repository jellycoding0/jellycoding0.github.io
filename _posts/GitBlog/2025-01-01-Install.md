---
title: "[Blog] 깃블로그 시작하기 : Jekyll 로컬 서버"

categories:
  - Git


---
## <span style="color:rgb(81, 132, 209) ;">GitHub 계정 만들기
- GitHub Pages를 사용하기 위해 먼저 GitHub 계정이 필요
  - Sign Up 클릭 후 이메일, 비밀번호 설정
  - 계정 생성 후 이메일 인증 완료

## <span style="color:rgb(81, 132, 209) ;">1. Github Repo 생성
- GitHub Pages는 저장소(repository)를 기반으로 작동
  - GitHub 로그인 후 우측 상단의 + → `New repository` 클릭
  - `Repository` 이름을 `username.github.io`로 설정
  - `username`은 본인의 `GitHub 아이디`로 변경
  - `Public` 선택 후 `Create repository` 클릭
![Image](https://github.com/user-attachments/assets/b96de83c-932e-44d9-83fe-03852fbfcbff)


## <span style="color:rgb(81, 132, 209) ;">2. Jekyll, Ruby 설치
- GitHub Pages는 Jekyll을 기반으로 블로그를 생성
  - Ruby 설치 (Jekyll은 Ruby로 개발됨)
  ![Image](https://github.com/user-attachments/assets/ffa2183f-93cc-465d-841c-8f955279e4cc)
  - RubyGems를 이용해 Jekyll과 Bundler 설치
```
gem install jekyll bundler
jekyll -v //설치확인
```




## <span style="color:rgb(81, 132, 209) ;">3. jekyll 테마 Local 폴더에 다운
Minimal Mistakes 테마를 클론
- [minimal mistakes](https://github.com/mmistakes/minimal-mistakes)
```
git clone https://github.com/mmistakes/minimal-mistakes.git myblog
```




## <span style="color:rgb(81, 132, 209) ;">4. Jekyll 로컬 서버에서 수정 내용 바로 확인하기

### 프로젝트 루트 폴더에서 명령어 실행하기
먼저, Jekyll 블로그의 루트 폴더로 이동해야 합니다. 터미널(명령 프롬프트)에서 아래 명령어를 입력하세요:

```bash
cd C:\ws\jellycoding0.github.io
```

**Tip:** 루트 폴더에는 `Gemfile`이 위치해 있습니다.

---

### `_site` 폴더 삭제하기
Jekyll은 자동으로 `_site` 폴더를 생성하여 빌드된 결과물을 저장합니다. 새로 빌드할 때 오류가 발생하거나 캐시 문제를 방지하기 위해 `_site` 폴더를 삭제할 수 있습니다.

```bash
rmdir /s /q _site
```

**참고:** 이 명령어는 Windows 명령 프롬프트 기준입니다.

---

### 로컬 서버 실행하기
Jekyll 서버를 실행하면 수정한 내용을 로컬 환경에서 바로 확인할 수 있습니다.

```bash
bundle exec jekyll serve
```

- **자동 새로고침:** `--livereload` 옵션을 추가하면 수정 사항이 자동으로 반영됩니다.
  
```bash
bundle exec jekyll serve --livereload
```

---

### 로컬 서버 확인하기
서버가 정상적으로 실행되면 아래와 같은 메시지가 표시됩니다:

```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
```

웹 브라우저를 열고 아래 주소를 입력하면 블로그를 확인할 수 있습니다:

```
http://localhost:4000/
```