// function cel(number){
// "화씨돈도 = 섭씨온도*1.8+32" <br>
// "섭씨온도 = (화씨온도-32)*5/9" <br>
// };

// const 

// //1. 섭씨를 화씨로
// // c = (F-32)*5/9 
// function ctof(c){
//     const f = c*1.8+32;
//     return f;
// }

// console.log(ctof(20)); // 결과값 온도 숫자로 리턴 

// //2. 화씨를 섭씨로 
// // F = 섭씨 * 1.8 +32(C)
// function ftoc(f){
//     const c = ((f-32)*5)/9;
//     return c;
// }

// console.log(ftoc(68)); // 결과값 온도 숫자로 리턴

// refactoring code
function convertTemperature(temp, unit) {
 if (unit === "C") {
   // Convert Celsius to Fahrenheit: C = (F - 32) * 5/9
   const f = temp * 1.8 + 32;
   return f;
 } else if (unit === "F") {
   // Convert Fahrenheit to Celsius: F = C * 1.8 + 32
   const c = ((temp - 32) * 5) / 9;
   return c;
 } else {
   // Handle invalid input
   return NaN;
 }
}

// console.log(convertTemperature(20, "C"));
// console.log(convertTemperature(68, "F"));

// 버튼 전화 효과 
const btns = document.querySelectorAll('.btn-box button'); // 전환 버튼
const cvt = document.querySelector(".cvt"); //전환 텍스트 박스
const cvtTxt = document.querySelector('.cvt span'); //전환 텍스트가 들어갈 공간

// 버튼 클릭 시 텍스트 입력
btns. forEach((btn, idx) => {
    btn.addEventListener("click", function(){
        btns.forEach((item) => {
            item.classList.remove("active"); // 버튼 클릭 시 전체 버튼의 active 클래스 삭제 
        }); 
        const thisText = this.textContent; // 클릭한 버튼 텍스트 저장 
        cvtTxt.textContent = thisText; // 저장한 텍스트 삽입
        btns[idx].classList.add("active"); // 클릭한 대상 요소에 active 클래스 추가
    });
});

cvt.addEventListener('click', function() {
    const leftValue = document.querySelector(".left").Value;
    if(!leftValue) {
        alert("변환할 온도를 입력해 주세요.");
        return;
    }

    if (cvtTxt.textContent === "") {
        alert("변환 형태를 선택해 주세요.");
        return;
    }
    if(cvtTxt.textContent ==="화씨를 섭씨로") {
        document.querySelector(".right").value = convertTemperature(leftValue, "F");
    } else {
        document.querySelector(".right").value = convertTemperature(leftValue, "C");
    }
});