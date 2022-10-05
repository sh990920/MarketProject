//이동할 링크 받아오기
const linkPath = "index.html";
//버튼 객체로 받아오기
const btn_mode = document.getElementById("btn_mode");
//실행 메서드
function mode(){
	location.href=linkPath;
}
//버튼이 눌렸을때 작동할 내용
btn_mode.addEventListener("click", mode);