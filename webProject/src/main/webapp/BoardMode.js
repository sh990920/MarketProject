const linkPath = "index.html";

const btn_mode = document.getElementById("btn_mode");

function mode(){
	location.href=linkPath;
}

btn_mode.addEventListener("click", mode);