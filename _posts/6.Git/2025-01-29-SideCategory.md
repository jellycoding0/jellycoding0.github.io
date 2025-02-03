---
title: "[Blog] 카테고리 토글로 포스트 목록 표시하기"

categories:
  - Git

---

## 요약
카테고리 제목을 클릭하면 포스트 목록이 펼쳐지고, 다시 클릭하면 닫히는 기능을 간단하게 구현

![Image](https://github.com/user-attachments/assets/b25ebf99-5f2d-4e81-9e96-eac2fa9a91dc)

## 1. HTML (카테고리 구조)
- `_layouts/home.html` 수정
  - category-toggle: 클릭하면 포스트 목록을 토글.
  - post-list: 카테고리별 포스트 목록.
- `_includes/scripts.html` 수정

![Image](https://github.com/user-attachments/assets/a97919ee-86f2-443a-9f51-6c08a75dec50)



## 2. CSS (스타일링)
`_sass/minimal-mistakes/_archive.scss` 수정

![Image](https://github.com/user-attachments/assets/b2464c99-7c44-41cb-bda6-e7ea4f358e0d)

## 3. JavaScript (토글 기능)
`assets/js/main.js` 생성

![Image](https://github.com/user-attachments/assets/c09b0290-74a3-4cf8-b2a9-7c3b4bbfc899)

_main.js로 하고 싶었는데, 안됨..