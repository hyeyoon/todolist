/*! helper.js © yamoo9.net, 2017 */
/**
 *  요소 노드를 생성하는 헬퍼 함수
 *  @param   {String}  el_name   생성하고자 하는 노드 이름
 *  @return  {HTMLElement}       생성된 요소 노드 반환
 */
function createElement(el_name) {
  return document.createElement(el_name);
}
/**
 *  텍스트 노드를 생성하는 헬퍼 함수
 *  @param   {String}  content   생성하고자 텍스트 콘텐츠
 *  @return  {TextNode}          생성된 텍스트 노드
 */
function createText(content) {
  return document.createTextNode(content);
}
/**
 *  요소노드를 생성(콘텐츠[HTML 유형 가능] 포함)하거나, 특정 부모노드에 자식노드로 삽입하는 헬퍼 함수
 *  @param   {String}        el_name  생성할 노드 이름
 *  @param   {String}        html_str 생성된 노드 내부에 삽입될 HTML 코드
 *  @param   {HTMLElement}   context  생성된 노드의 부모 요소노드
 *  @param   {String}        method   삽입될 위치 [append, prepend]
 *  @return  {HTMLElement}   생성된 요소노드 반환
 */
function makeEl(el_name, html_str, context, method) {
  // 초기 값 설정
  method  = method || 'append';
  // 전달인자로 요소 노드와 HTML Code 생성
  var el = createElement(el_name);
  el.innerHTML = html_str;
  // 만약 context 가 존재한다면?
  if ( context ) {
    if ( method === 'append' ) {
      context.insertAdjacentElement('beforeend', el);
    } else {
      context.insertAdjacentElement('afterbegin', el);
    }
  }
  // 생성된 요소노드 반환
  return el;
}
/**
 *  querySelector 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {HTMLElement}               문서 요소노드 반환
 */
function query(selector_str, context) {
  var parent = null;
  if ( context !== undefined ) {
    parent = context;
  } else {
    parent = document;
  }
  return parent.querySelector(selector_str);
}
/**
 *  querySelectorAll 헬퍼 함수
 *  @param    {String}      selector_str  CSS 선택자
 *  @param    {HTMLElement} context       컨텍스트(부모) 요소노드
 *  @return   {Nodelist}                  문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  var parent = null;
  if ( context !== undefined ) {
    parent = context;
  } else {
    parent = document;
  }
  return parent.querySelectorAll(selector_str);
}

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 *  @return   {HTMLElement}              자식노드
 */
function append(parent_node, child_node) {
  parent_node.appendChild(child_node);
  return child_node;
}
/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  parent_node 부모노드
 *  @param    {HTMLElement}  child_node  자식노드
 *  @return   {HTMLElement}              자식노드
 */
function prepend(parent_node, child_node) {
  var first = parent_node.children[0];
  parent_node.insertBefore(child_node, first);
  return child_node;
}

/**
 *  insertNode를 targetNode 앞에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @return   {HTMLElement}              삽입 요소 노드를 반환
 */
function before(insert_node, target_node) {
  target_node.parentNode.insertBefore(insert_node, target_node);
  return insert_node;
}
/**
 *  insertNode를 targetNode 뒤에 삽입하는 헬퍼 함수 (형제로서 삽입)
 *  @param    {HTMLElement}  target_node 목표 요소 노드
 *  @param    {HTMLElement}  insert_node 삽입 요소 노드
 *  @return   {HTMLElement}              삽입 요소 노드를 반환
 */
function after(target_node, insert_node) {
  var next = target_node.nextElementSibling;
  // 조건 1. target_node 뒤에 형제 노드가 없다면?
  if ( next === null ) {
    append(target_node.parentNode, insert_node);
  }
  // 조건 2. target_node 뒤에 형제 노드가 있다면?
  else {
    before(insert_node, next);
  }
  return insert_node;
}
/**
 *  전달된 요소노드를 부모노드로부터 제거하는 헬퍼 함수
 *  @param    {HTMLElement}  element_node 제거할 요소노드
 *  @return   {HTMLElement}               제거된 요소노드 반환
 */
function remove(element_node) {
  element_node.parentNode.removeChild(element_node);
  return element_node;
}
/**
 *  새로운 노드로 이전 노드를 대체하는 헬퍼 함수
 *  @param    {HTMLElement}  replace_node   대체할 노드
 *  @param    {HTMLElement}  replaced_node  대체될 노드
 *  @return   {HTMLElement}                 대체될 노드 반환
 */
function replace(replace_node, replaced_node) {
  replaced_node.parentNode.replaceChild(replace_node, replaced_node);
  return replaced_node;
}
/**
 *  노드 A와 노드 B의 위치를 교체하는 헬퍼 함수
 *  @param    {HTMLElement}  replace_node   대체할 노드
 *  @param    {HTMLElement}  replaced_node  대체될 노드
 */
function change(replace_node, replaced_node) {
  var sibling = replace_node.nextElementSibling;
  var parent  = replace_node.parentNode;

  replace(replace_node, replaced_node);

  if ( sibling !== null ) {
    // 형제
    // before(삽입, 목표)
    before(replaced_node, sibling);
  } else {
    // 부모
    // append(부모, 자식)
    append(parent, replaced_node);
  }
}

/**
 *  노드를 가볍게 또는 깊게(자손, 인라인 스크립트 이벤트 까지) 복제하는 헬퍼 함수
 *  @param    {HTMLElement}  node   복사할 노드
 *  @param    {Boolean}      deep   깊은 복사 설정
 *  @return   {HTMLElement}         복제된 노드 반환
 */
function clone(node, deep) {
  if ( deep === undefined ) {
    deep = false;
  }
  return node.cloneNode(deep);
}

/**
 *  요소노드에 전달된 class 속성 이름값이 일치하는 것이 있는지 유무 파악 헬퍼 함수
 *  @param    {HTMLElement}  el_node      class 속성 값을 포함하는지 확인하고자 하는 HTML 요소노드
 *  @param    {String}       class_name   일치 유무를 파악하고자 하는 문자형 데이터
 *  @returns {boolean}                    일치유무 파악 후 결과 반환
 */
function hasClass(el_node, class_name) {
  // el_node의 class 속성 값에 전달된 class_name이 존재한다면 true 반환
  // el_node 요소노드에서 class 속성 값을 가져온다
  // 가져온 속성 값을 .split()로 쪼개서 집합(배열)을 만든다.
  // 반복문을 사용해서 class_name 값과 일치하는 원소(아이템)가 있는지 확인한다.
  // 만약 일치하는 원소가 있다면 true 아니라면 false를 반환한다.
  var old_classes = el_node.getAttribute('class') || '';
  // if (typeof old_classes !== 'string') {
  //   old_classes = '';
  // }
  old_classes = old_classes.split(' ');
  for (var i=0; i<old_classes.length; i++) {
    var class_item = old_classes[i];
    if (class_item === class_name) {
      return true;
    }
  }return false;
}

/**
 *  요소노드에 class 속성을 추가하는 헬퍼 함수
 *  @param    {HTMLElement}  el_node   class 속성을 추가할 HTML 요소노드
 *  @param    {String}      class_name   적용할 class속성 값 이름
 */
function addClass(el_node, class_name) {
  // 전달인자 검증(Arguments Validation)
  if(el_node.nodeType !== 1) {
    // 문제가 발생하면, 오류 발생
    throw new Error('첫번째 전달 인자의 유형은 요소노드여야 합니다.');
  }
  if (typeof class_name !== 'string') {
    throw new Error('두번째 전달 인자의 유형은 문자형 이어야 합니다. ');
  }


  if (!hasClass(el_node, class_name)) {
    //Core DOM 방식
    var old_class = el_node.getAttribute('class') || '';
    el_node.setAttribute('class', class_name);

    //HTML DOM 방식
    // el_node.className += ' ' + class_name;
  }
}

/**
 * 요소노드에 class 속성을 제거하는 헬퍼 함수
 * @param  {HTMLElement} el_node    class 속성을 제거할 HTML 요소노드
 * @param  {String} class_name 제거할 class 속성값 이름
 */
function removeClass(el_node, class_name) {
  // [옵션] class_name값을 사용자가 전달하지 않았을 경우
  if (!class_name) {
    // el_node.removeAttribute('class');
    el_node.setAttribute('class', '');
  }
  // 해당 클래스 속성 이름이 존재하면 제거
  if (hasClass(el_node, class_name)) {
    var old_classes = el_node.getAttribute('class').split(' ');
    for (var i=0; i<old_classes.length; i++) {
      var class_item = old_classes[i];
      if (class_item === class_name) {
        old_classes.splice(i, 1);
      }
    }
    el_node.setAttribute('class', old_classes.join(' '));
  }
}
