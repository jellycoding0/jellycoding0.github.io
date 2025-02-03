---
title: "[Git/Github] 설치 가이드 (윈도우10/11)"

categories:
  - Git

use_math: true
---

<br>


## <span style="color:rgb(81, 132, 209) ;">1. Git 설치하기</span>
1. [Git 공식 웹사이트](https://git-scm.com/)로 이동합니다.
2. 사용하는 운영 체제(Windows, macOS, Linux)에 맞는 설치 파일을 다운로드합니다.
![Image](https://github.com/user-attachments/assets/f3dea728-eb42-4c89-9734-a37324622ae3)



- Git파일 실행/설치 → Next 계속 클릭 → Finish
![Image](https://github.com/user-attachments/assets/94e2bb2d-e3d5-412d-be60-47f5e8e97cbf)


## <span style="color:rgb(81, 132, 209) ;">2. Git 설정하기</span>
- **Git 사용자 정보 설정**
  - Git은 누가 작업했는지 기록하기 위해 사용자 정보를 필요로 합니다. 아래 명령어로 사용자 이름과 이메일을 설정합니다:
  ```bash
  git config --global user.name "당신의 이름"
  git config --global user.email "당신의 이메일 주소"
  ```


- **Git 버전 확인하기**
- 원하는 폴더에 들어가 오른쪽 마우스 클릭  →  
- Git Bash Here을 클릭(윈도우 10),
- 터미널에서 열기 클릭(윈도우 11)
```
git --version
```

- **사용자 등록**
```
git config --global user.name "jellycoding0"
git config --global user.email jellycoding0@gmail.com
```
- **사용자 등록 확인**
```
git config --list 
```
- **로컬 저장소 만들기**
```
git init 
```

![Image](https://github.com/user-attachments/assets/24b8553f-2971-4af6-b8cb-72e3b427a4bd)


## <span style="color:rgb(81, 132, 209) ;"> 3. Github 로그인/회원가입
[Github](https://github.com/)로 이동합니다.

![Image](https://github.com/user-attachments/assets/c81062af-17de-4219-9b44-7631eff79171)


## <span style="color:rgb(81, 132, 209) ;"> 4. Github 원격 저장소 만들기

`Home` → Repository name 입력 →` Create a new repository` 클릭

![Image](https://github.com/user-attachments/assets/e4969c9e-65ff-4136-b6e3-913385d98ac0)

![Image](https://github.com/user-attachments/assets/f414ec98-dbea-46ea-a6c7-0f7035c3fdc9)

## <span style="color:rgb(81, 132, 209) ;"> 5. 실습 : Github(원격저장소) 업로드 하기

```jsx
git remote add origin [원격저장소 주소] //원격 저장소와 연결
// 원격저장소 주소 예시 →  https://github.com/jellycoding0/test1.git
git branch -m master main //브랜치 이름 바꾸기

//파일 업로드
git add .
git commit -m "commit message"
git push origin main

//참고) 파일 다운로드
git pull origin main
```

![Image](https://github.com/user-attachments/assets/873260dc-c8bd-44d9-aa07-29ed26771653)

- Github에서 파일 업로드 확인
![Image](https://github.com/user-attachments/assets/cfb160b8-c324-4227-b38e-d3561bf30121)

