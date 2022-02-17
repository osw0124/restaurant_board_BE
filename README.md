# restaurant_board_BE

## 🍰 맛있는거 4조 🍰
내가 좋아하는 맛집을 소개하고
다양한 사람들의 맛집까지 공유 할 수 있는 시간!


## 1, 제작기간 & 팀원 소개
- 2022년 02월 11일 ~ 2022년 02년 17일

* FE : 고주열, 이호빈, 장혜진
* BE : 반장훈, 오세웅


## 2.사용기술 📌
* React
* node.js(NPM)
* express
* mongoose(mongoDB)
* JWT(Jason Web Token)
* crypto-js
* CORS

## 3.실행화면 😄

## 4.핵심기능🛠
**메인 페이지**

* 다른 유저들이 작성한 상세 내용을 간단하게 보여줌
* 로그인 하지 않아도 볼 수 있음
* 카드의 이미지를 누르면 상세 페이지로 이동
* 내가 쓴 게시글만 수정 삭제 버튼이 보임

**로그인 페이지**

* 아이디 패스워드 입력 가능
* 비회원인 경우 바로 회원가입 페이지로 갈 수 있는 버튼 있음

**회원가입 페이지**

* 아이디 패스워드는 조건에 맞아야 함 (아이디는 이메일 형식 비밀번호는 대, 소문자와 특수문자(!@#*-_), 숫자를 포함한 8자~ 16자)
* 아이디와 닉네임 중복 확인이 가능
* 입력한 패스워드 재확인 가능
* 회원가입이 완료되면 메인으로 이동

**게시글 작성 페이지**

* 로그인한 회원만 접근 가능
* 사진업로드시 미리보기 가능
* 평점 주기 가능 (5점만점)
* 게시글 작성 시간은 서버에서 자동 생성
* 글작성 버튼을 누르면 메인으로 이동

**상세 페이지**

* 게시글에 맞는 상세 정보 열람 가능
* 게시글에 맞는 댓글 정보(누가 언제 어떤 내용을 썼는지) 열람 가능
* 댓글 달기 가능

**수정 페이지**

* 그 게시글의 기존 정보도 인풋 안에 보여짐
* 게시글 수정 버튼 누르면 메인으로 이동

**Header /Footer**

* 로그인을 안한경우에는 로그인 회원가입 버튼 노출
* 로그인을 하면 회원의 닉네임(00님 안녕하세요)과 글쓰기 로그아웃 버튼 노출
* 로코클릭시 메인으로 이동
* 푸터에는 조의이름과 구성원이 표시 되어있음

## 5.트러블 슈팅 😮‍💨
**이미지의 url이 길어 DB저장이 힘듬**

: 제한 용량을 늘려서 저장이 가능하게 수정 했지만 여전히 길다

**토큰 정보를 이용한 사용자 정보 조회 안됨**

: 현재 로그인한 사용자의 정보를 조회하는 미들웨어를 사용하기 위해서 프론트에서 response header에 Authorization를 같이 전달



## 6.개인회고 🤫

**반장훈**
* 개인적으로 즐거웠던 프로젝트였습니다. 백엔드로서 좋아요 기능 외에 다른 기능을 추가해보지 못한 것은 아쉬웠지만,
기본기를 탄탄하게 다질 수 있었던 한 주였습니다.
아쉬웠던 점은 client에서 보내주는 이미지의 url 길이가 매우 길어서 서버에서 DB로 들어가는 데이터의 제한 용량을 늘리는 방식을 택했지만
다른 조원분들이 multer와 S3를 이용해 이미지를 저장하는 방식을 보고 '진작에 저런 생각을 왜 하지 못했을까' 하는 생각이 들었습니다.
**수정중입니다**
