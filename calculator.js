let mass;
let RER;
let dop;
let vozrast;
let vozrast1;
let iu;
let castr;
let act;
let a15 = document.getElementById('a1'); 
let a25 = document.getElementById('a2'); 
let a35 = document.getElementById('a3'); 
let a45 = document.getElementById('a4'); 
let kip = document.getElementById('zapis2');
let ide = document.getElementById('ideal');
let dayy = document.getElementsByClassName("cal_day")[0];
function axc1(){
	act = 1;
	document.querySelector("#a1").classList.add("active_act");
	document.querySelector("#a2").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
}
function axc2(){
	act = 2;
	document.querySelector("#a2").classList.add("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
}
function axc3(){
	act = 3;
	document.querySelector("#a3").classList.add("active_act");
	document.querySelector("#a2").classList.remove("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
}
function axc4(){
	act = 4;
	document.querySelector("#a4").classList.add("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a2").classList.remove("active_act");
}
a15.onclick = axc1;
a25.onclick = axc2;
a35.onclick = axc3;
a45.onclick = axc4;

function calc() {
	iu = $('#mot').val();
	vozrast = String(document.getElementById("vozr").value);
	castr = $('#castr').val();
	mass = $('#ves').val();
	mass = Number(mass)
	vozrast1 = vozrast + $('#mot').val();
	RER = mass * 30 + 70;
	if (((Number(vozrast) < 4) && (iu == "months")) || (iu == "weeks")){ //Возраст собаки
		dop = 3;
	} else if ((Number(vozrast) > 4) && (iu == "months")){
		dop = 2;
	} else{
		if (castr == "IS"){
			if (act == 1){
				dop = 1.6;
			}else if (act == 2){
				dop = 2;
			}else if (act == 3){
				dop = 3;
			}else if (act == 4){
				dop = 6;
			}
			
		} else{
			if (act == 1){
				dop = 1.8;
			}else if (act == 2){
				dop = 2;
			}else if (act == 3){
				dop = 3;
			}else if (act == 4){
				dop = 6;
			}
		}
		
	}
	if (Number(ide) < mass){
		dop = 1;
	}
	RER *= dop;
	document.getElementsByClassName("cal_day")[0].innerHTML = String(RER);
	document.getElementsByClassName("cal_day")[1].innerHTML = String(RER);
	document.getElementsByClassName("cal_day")[2].innerHTML = String(RER);
	document.getElementsByClassName("cal_day")[3].innerHTML = String(RER);
	document.getElementById("text_bar").innerHTML = "Your Plan (3/4)";
	document.getElementById('krug5').style.border = "2px solid black";
	document.getElementById('krug5').style.backgroundColor = "white";

    year = String(document.getElementById("vozr").value) + " ";
    year += $('#mot').val();
    por = String(document.getElementById("por").value);
    por += " breed"
    ves = String(document.getElementById("ves").value) + " lb,";
    document.getElementById("vozr1").innerHTML = year;
    document.getElementById("por1").innerHTML = por;
    document.getElementById("ves1").innerHTML = ves;
    console.log(por);
    console.log(ves);
    console.log(year);
    document.querySelector(".recipes").classList.remove("noact");
    document.querySelector("#zapis2").classList.add("noact");
    document.getElementById('krug2').style.border = "2px solid black";
    document.getElementById('krug2').style.backgroundColor = "white";
    document.getElementById('text1').style.color = "#969799";
    document.getElementById('text2').style.color = "#969799";
    document.getElementById('text3').style.color = "#f2674b";
    document.getElementById('text4').style.color = "#969799";
}
kip.onclick = calc;
