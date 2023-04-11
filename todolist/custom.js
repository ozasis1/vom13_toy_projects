// 1. 글 입력 후 버튼 클릭 했을때 리스트 요소 생성
// 2. input text unll sign show alert to text
// 3. 완료 일정 리스트 색상 표시 (complete 클래스 추가)
// 4. delete todo list
// 5. input null 시 엔터 한번만 진행

// 요소 선택
const btn = document.querySelector('.btn');
const lists = document.querySelector('.lists');
const inputBox = document.querySelector('.input-box');
const alert = document.querySelector(".alert");

// 초기화 변수
let liContent = "";

// aletrTxt 함수 정의
const alertTxt = () => {
    alert.style.display = "blcok";
    const alertElement = document.createElement('p');// p태그 생성
    alertElement.append('일정을 입력해 주세요.'); // p 태그에 텍스트 추가
    alert.append(alertElement);// 텍스트가 추가된 p 태그를 div 태그 내부에 추가
setTimeout(()=> {
    // alert.style.display = "none";
    alertElement.remove();
    },1000); // 2초후 메시지 사라짐
};

// todo list 생성 함수 정의
const addTodo = () => {
    const input = document.querySelector('.input');
    const inputValue=input.value;
    // alert(inputValue);
    if(!inputValue) {
    // 예외처리
        alertTxt();
        return;
    }

   liContent = `
        <li>
            <p>${inputValue}</p>
            <span class="delete-icon"><i class="ri-delete-bin-2-fill"></i></span>
        </li>
    `; // 입력한 일정 리스트 생성
    lists.insertAdjacentHTML('afterbegin', liContent); //일정 리스트추가
    input.value = ''; //일정 입력후 입력창 비우기
    input.focus(); // 일정 입력후 포커스 이동
};

// 버튼 클릭 시 todo list 함수 호출
btn.addEventListener('click', addTodo);

// 엔터 키보드 입력 시 버튼 클릭
inputBox.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        btn.click();
    }
});
// define complete function
const showComplete = (a) => {
    console.log(a.target.nodeName);
    if(a.target.nodeName === "LI" || a.target.nodeName === "p"){
        a.target.classList.toggle("complete");
    } else if (a.target.nodeName === "p"){
        a.target.parentNode.classList.toggle("complet");
    }
    else if (a.target.nodeName === "I"){
        a.target.parentNode.classList.remove();
    }
};
// call complete sign function when delete button click
lists.addEventListener('click', showComplete);
