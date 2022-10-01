//이동할 링크 path
const linkPath = "index.html";
//id태그 가져오는 변수
const writeID = document.getElementById("id");
//pw태그 가져오는 변수
const writePW = document.getElementById("pw");
//버튼태그 가져오는 변수
const btn_login = document.getElementById("btn_login");
//from태그 가져오는 변수
const form_login = document.getElementById("from_login"); 
//로그인
function mode(){
	//location.href=linkPath;
	form_login.submit();
	
}
//버튼 클릭시 mode()메서드 실행
btn_login.addEventListener("click", mode);
