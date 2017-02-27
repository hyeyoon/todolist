# Todo List Project

## 1. Todo List Project 소개

* [TodoList Preview](http://hyeyoon.github.io/todolist)
* 나만의 Todo List를 추가하고 삭제할 수 있습니다.

## 2. 기능 소개

* input에 task를 입력하고 return key 또는 + 버튼을 누르면 task가 아래에 리스트 형식으로 추가됩니다.
    * 입력된 task는 가장 나중에 입력된 것이 리스트의 가장 위에 위치하게 됩니다.
    * 입력된 task를 드래그 앤 드롭(drag and drop)으로 순서를 변경할 수 있습니다.
* 리스트로 입력된 task를 클릭하면 완료된 task라는 의미로 텍스트 중간에 선이 그어지고, 반투명하게 처리됩니다.
* input 위에 위치한 Clear Compleated 버튼을 클릭하면 완료된 task들이 한번에 삭제됩니다.
* task 리스트가 추가되고 삭제될 때마다 상단에 완료된 task를 제외한 현재 남아있는 task의 개수가 출력됩니다.
* 왼쪽 하단(데스크탑, 태블릿), 왼쪽 상단(모바일)에 위치한 '▶'에 마우스를 대면 배경 화면 리스트가 출력됩니다.
    * 각각의 배경색 아이콘을 클릭하면 전체 화면의 배경 색상이 변경됩니다.

## 3. 수정해야 할 것들

* 배경화면 변경 기능의 접근성 issue
* 서버에 올리지 않아서(저장기능이 없어서) 새로고침 시 초기화
* 배경 색상을 customize 할 수 있도록 기능 추가
* Drag and Drop을 좀 더 자연스럽에 동작할 수 있게 수정
    * 아이템이 이동될 위치에 가이드라인 추가
* 버그 수정
