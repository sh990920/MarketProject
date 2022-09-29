//이동할 링크 path
var linkPath = "index.html";
//id 변수
var id = "sh990920";
//pw 변수
var pw = "1234";
//id태그 가져오는 변수
var writeID = document.getElementById("id");
//pw태그 가져오는 변수
var writePW = document.getElementById("pw");
//버튼태그 가져오는 변수
var btn_login = document.getElementById("btn_login");
//from태그 가져오는 변수
var form_login = document.getElementById("from_login"); 
//id와 pw가 일치하면 로그인 시켜주기
function mode(){
	var inputID = writeID.value;
	var inputPW = writePW.value;
	if(id == inputID){
		if(pw == inputPW){
  			form_login.submit();
		}else{
			alert("비밀번호가 잘못되었습니다.")
			writePW.value = "";
		}
	}else{
		alert("ID가 존재하지 않습니다.")
		writeID.value = "";
		writePW.value = "";
	}
	
}
