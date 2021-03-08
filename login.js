let log = document.getElementsByClassName('logi_in')[0];
let log2 = document.getElementsByClassName('logi_in')[1];
let prof = document.getElementById("but1");
let prof2 = document.getElementById("but2");
let po = true;
function login1() {
	if (po){
		log.style.display = "block";
		po = false;
	} else{
		log.style.display = "none";
		po = true;
	}
}

function login2() {
	if (po){
		log2.style.display = "block";
		po = false;
	} else{
		log2.style.display = "none";
		po = true;
	}
}
prof.onclick = login1;
prof2.onclick = login2;