---
layout: single
title: "2.Git 설치 및 설정: 초보자를 위한 쉬운 가이드"

categories:
  - Git

toc: true

# author_profile: false #왼쪽에 떠있는거 끄기

toc_sticky: true # 목차고정
toc_label: 목차
toc_icon: "fas fa-wine-glass"

---


---

## <span style="color:rgb(81, 132, 209) ;">1. Git 설치하기</span>

1.1 Git 다운로드
1. [Git 공식 웹사이트](https://git-scm.com/)로 이동합니다.
2. 사용하는 운영 체제(Windows, macOS, Linux)에 맞는 설치 파일을 다운로드합니다.


1.2 Git 설치하기 (Windows 기준)
1. 다운로드한 설치 파일을 실행합니다.
2. 설치 과정에서 다음과 같은 옵션을 선택합니다:
   - **기본 에디터 선택**: 기본으로 "Vim"이 선택됩니다. "VS Code"나 원하는 에디터로 변경 가능합니다.
   - **환경 변수 추가**: "Git from the command line"을 선택합니다.
3. 설치를 완료합니다.

---


## <span style="color:rgb(81, 132, 209) ;">2. Git 설정하기</span>
- 2.1 Git 사용자 정보 설정

  - Git은 누가 작업했는지 기록하기 위해 사용자 정보를 필요로 합니다. 아래 명령어로 사용자 이름과 이메일을 설정합니다:
  ```bash
  git config --global user.name "당신의 이름"
  git config --global user.email "당신의 이메일 주소"
  ```


## <span style="color:rgb(81, 132, 209) ;">3. Git 버전 확인하기</span>
```bash
git --version
```

## <span style="color:rgb(81, 132, 209) ;">4. Git 기본 설정 파일</span>
Git 설정 파일은 다음과 같이 구성됩니다:
- 글로벌 설정: 모든 프로젝트에서 공통으로 사용하는 설정 (--global 옵션).
- 로컬 설정: 특정 프로젝트에서만 사용하는 설정.

글로벌 설정은 사용자 디렉토리의 .gitconfig 파일에 저장됩니다.


## <span style="color:rgb(81, 132, 209) ;">5. 실습: 첫 Git 저장소 만들기</span>
1. 새로운 폴더를 만듭니다
    ```bash
    mkdir my-first-git
    cd my-first-git
    ```
2. 폴더를 Git 저장소로 초기화합니다
    ```bash
    git init
    ```
3. 완료 메시지 확인
    ```bash
    Initialized empty Git repository in /path/to/my-first-git/.git/
    ```




