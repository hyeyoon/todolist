// 배경 색상 변경
// DOM API, CSS 선택자 중에 클래스 선택자로 대상을 선택
var color_list       = document.getElementsByClassName('menu-colorlist')[0];
var bg_color         = document.body;
var color_list_items = color_list.getElementsByTagName('a');
// 배경 색상 변경
for (var i = 0; i < color_list_items.length; i++) {
  color_list_items[i].onclick = function() {
    var my_color = window.getComputedStyle(this,null).background;
    bg_color.style.background = my_color;
    return false;
  };
};

// Todolist 추가 버튼
var input = query('#input-todo');
var button = query('.todo__button');
var todo_list = query('.todo-list');
var todo_heading = query('.todo__heading');
var count = 0;
var html_str = null;

//  input에 사용자가 텍스트를 입력하고
// + 버튼을 누르면
button.onclick = function() {
  html_str = input.value;
  if (html_str === "") {
    console.log(html_str);
    window.alert('Please enter your task');
    input.focus();
    return
  }
  else {
    add_del_list();
  }
};
// input 키보드 이벤트
// return key 입력시
document.onkeypress = keyPress;
function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 32){
   //  input action;
   html_str = input.value;
   if (html_str === "") {
     console.log(html_str);
     window.alert('Please enter your task');
     input.focus();
     return
   }
   else {
     add_del_list();
   }
  }
}

/**
 * [add_del_list description]
 * 1.   인풋에 입력값이 있으면
 * 2.   리스트 아이템을 추가
 * 2-1. drag and drop을 위한 속성 추가
 * 3.   리스트 아이템을 클릭하면 remove-btn 클래스 추가
 *
 */
function add_del_list() {
  // 아래에 텍스트 출력
  var list = createElement('li');

  prepend(todo_list, list);
  el = makeEl('span', html_str, list, append);
  addClass(list, 'todo-list__item');

  // drag and drop event
  list.setAttribute('draggable', true);
  list.setAttribute('ondragstart', 'dragStarted(event)');
  list.setAttribute('ondragover', 'draggingOver(event)');
  list.setAttribute('ondrop', 'dropped(event)');

  // todo 갯수 출력
  count = count + 1;
  todo_heading.textContent = 'You have ' + count + ' things to do';

  input.value = '';
  input.focus();
  // 만약에 리스트 아이템이 있다면
  // 출력된 텍스트를 클릭하면
  // 가로선이 그어진다.
  if (todo_list.hasChildNodes()){
    var list_item = todo_list.children;
    for (var i=0; i<list_item.length; i++) {
      list_item[i].onclick = function() {
        this.classList.toggle('remove-btn');
        this.firstElementChild.classList.toggle('todo-list__text');

        // todo 갯수 출력
        count = count - 1;
        if (count <= 0) {
          todo_heading.textContent = 'Congrats! You made it!'
        }
        else {
          todo_heading.textContent = 'You have ' + count + ' things to do';
        }
      };
    };
  }
};

// HTML Drag and Drop API
// 리스트 Drag and Drop
var source;
function dragStarted(evt){
//start drag
source=evt.target;
//set data
evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
//specify allowed transfer
evt.dataTransfer.effectAllowed = "move";
}
function draggingOver(evt){
//drag over
evt.preventDefault();
//specify operation
evt.dataTransfer.dropEffect = "move";
}
function dropped(evt){
//drop
evt.preventDefault();
evt.stopPropagation();
//update text in dragged item
source.innerHTML = evt.target.innerHTML;
//update text in drop target
evt.target.innerHTML = evt.dataTransfer.getData("text/plain");
};

// remove-btn클래스를 갖고 있는 리스트 아이템 삭제 버튼
var remove_btn = query('.todo__button__remove');
remove_btn.onclick = function() {
  var remove_els = queryAll('.remove-btn', todo_list);
  if ( remove_els.length === 0 ) {
    window.alert('Please select at least one item below');
    return;
  }
  for ( var i=0; i<remove_els.length; i=i+1 ) {
    remove(remove_els[i]);
  }
};
