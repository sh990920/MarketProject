//다크모드인지 데이모드인지 확인 변수
let check = true;
//버튼 변수
const btn_mode = document.getElementById("btn_mode");
//a태그 변수(querySelectorAll로 적용이 안됨)
const a_tag1 = document.getElementById("a_tag1");
const a_tag2 = document.getElementById("a_tag2");
const a_tag3 = document.getElementById("a_tag3");
//h2태그 변수(querySelectorAll로 적용이 안됨)
const tx_h2_1 = document.getElementById("tx_h2_1");
const tx_h2_2 = document.getElementById("tx_h2_2");
//처음 css설정
btn_mode.value = "다크모드로 보기";
btn_mode.style.color = "white";
btn_mode.style.backgroundColor = "black";
//버튼이 눌렸을 때 실행할 메서드
function mode() {
	
	if (check == true) { //다크모드
		document.body.style.backgroundColor = 'black';
		tx_h2_1.style.color = "white";
		tx_h2_2.style.color = "white";
		a_tag1.style.color = "white";
		a_tag2.style.color = "white";
		a_tag3.style.color = "white";
		btn_mode.value = "데이모드로 보기";
		btn_mode.style.color = "black";
		btn_mode.style.backgroundColor = "white";
		check = false;
	} else { //데이모드
		document.body.style.backgroundColor = 'white';
		tx_h2_1.style.color = "black";
		tx_h2_2.style.color = "black";
		a_tag1.style.color = "black";
		a_tag2.style.color = "black";
		a_tag3.style.color = "black";
		btn_mode.value = "다크모드로 보기";
		btn_mode.style.color = "white";
		btn_mode.style.backgroundColor = "black";
		check = true;
	}
}
btn_mode.addEventListener("click", mode);