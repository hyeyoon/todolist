# Todo List Project

## 1. Todo List Project 소개

* [TodoList Preview](http://hyeyoon.github.io/todolist)
* 나만의 Todo List를 추가하고 삭제할 수 있습니다.

## 2. 사용 기술
* HTML
* Sass
  * Susy
* Native JavaScript

## 3. 기능 소개

* input에 task를 입력하고 return key 또는 + 버튼을 누르면 task가 아래에 리스트 형식으로 추가됩니다.
    * 입력된 task는 가장 나중에 입력된 것이 리스트의 가장 위에 위치하게 됩니다.
    * 입력된 task를 드래그 앤 드롭(drag and drop)으로 순서를 변경할 수 있습니다.
* 리스트로 입력된 task를 클릭하면 완료된 task라는 의미로 텍스트 중간에 선이 그어지고, 반투명하게 처리됩니다.
* input 위에 위치한 Clear Completed 버튼을 클릭하면 완료된 task들이 한번에 삭제됩니다.
* task 리스트가 추가되고 삭제될 때마다 상단에 완료된 task를 제외한 현재 남아있는 task의 개수가 출력됩니다.
* 왼쪽 하단(데스크탑, 태블릿), 왼쪽 상단(모바일)에 위치한 '▶'에 마우스를 대면 배경 화면 리스트가 출력됩니다.
    * 각각의 배경색 아이콘을 클릭하면 전체 화면의 배경 색상이 변경됩니다.

## 4. 수정해야 할 것들

* count 에러
  * 한 항목을 계속 클릭할 경우 count가 계속 -됨
* 코드 정리
  * jsdoc 정리 및 추가
  * 함수 쪼개기
  * 주석 통일하기
* 아이템 등록 개수 네비게이터 fixed
  * backdrop filter 활용
* 배경화면 변경 기능의 접근성 issue
* 서버에 올리지 않아서(저장기능이 없어서) 새로고침 시 초기화
  * localstorage 활용
* 배경 색상을 customize 할 수 있도록 기능 추가
* Drag and Drop을 좀 더 자연스럽에 동작할 수 있게 수정
    * 아이템이 이동될 위치에 가이드라인 추가
* 버그 수정
