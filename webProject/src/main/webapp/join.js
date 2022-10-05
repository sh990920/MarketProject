/**
 * 
 */
 const linkPath = "Welcome.html";
 //저장된 id값
const id = "sh990920";
//입력받는 id값
const tx_id = document.getElementById("tx_id");
//아이디가 중복이면 다음창으로 안넘어가게
let equals = false;
//id비교 메서드
function equalsId(){
	if(tx_id.value == id){
		alert("이미 사용중인 아이디 입니다.");
		tx_id.value = "";
		equals = false;
	}else if(tx_id.value == ""){
		alert("사용할 아이디를 입력하세요.")
		tx_id.value = "";
		equals = false;
	}else{
		alert("사용 가능한 아이디입니다.");
		equals = true;
	}
}
//버튼객체 받아오기
const btn_equals = document.getElementById("btn_equals");
//버튼 클릭시 id비교
btn_equals.addEventListener("click", equalsId);

const btn_join = document.getElementById("btn_join");
const form_id = document.getElementById("form_id");
function join(){
	if(equals == false){
		alert("중복체크를 해주세요");
	}else{
		form_id.submit();
		//location.href=linkPath;
	}
}
btn_join.addEventListener("click", join);

