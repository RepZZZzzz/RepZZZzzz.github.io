
let conten = document.getElementById('conten');
let recipes = document.getElementById('recipes');
let recipes22 = document.getElementById('recipes22');
let zapis2 = document.getElementById('zapis2');
let a1 = document.getElementById('a1'); 
let a2 = document.getElementById('a2'); 
let a3 = document.getElementById('a3'); 
let a4 = document.getElementById('a4'); 
let add1 = document.getElementById('add1'); 
let add2 = document.getElementById('add2'); 
let add3 = document.getElementById('add3'); 
let add4 = document.getElementById('add4'); 
let add112 = document.getElementById('add11');
let add212 = document.getElementById('add22');
let add312 = document.getElementById('add33');
let add412 = document.getElementById('add44');
let trk = document.getElementById('TRK'); 
let beef = document.getElementById('BEEF'); 
let chick = document.getElementById('CHICK'); 
let pork = document.getElementById('PORK'); 
let ves;
let por;
let year;
var rt = false;
var ch_trr = false;
const media1025 = window.matchMedia('(min-width: 1025px)');
const media769 = window.matchMedia('(min-width: 769px)');
const media426 = window.matchMedia('(min-width: 426px)');
const media375 = window.matchMedia('(min-width:376px)');
const media321 = window.matchMedia('(min-width:321px)');
const maxmedia321 = window.matchMedia('(max-width:321px)');
document.getElementById('text1').style.color = "#f2674b";
let mass;
let RER;
let dop;
let vozrast;
let tr = false;
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
	tr = true;
}
function axc2(){
	act = 2;
	document.querySelector("#a2").classList.add("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
	tr = true;
}
function axc3(){
	act = 3;
	document.querySelector("#a3").classList.add("active_act");
	document.querySelector("#a2").classList.remove("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
	tr = true;
}
function axc4(){
	act = 4;
	document.querySelector("#a4").classList.add("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a2").classList.remove("active_act");
	tr = true;
}
a15.onclick = axc1;
a25.onclick = axc2;
a35.onclick = axc3;
a45.onclick = axc4;

function calc() {
	vozrast = document.getElementById("vozr").value;
	mass = $('#ves').val();
	if (isNaN(Number(mass))){
		alert("Введите целое число массы тела!")
	} else if(isNaN(Number(vozrast))){
		alert("Введите целое число возраст!")
	} else{
	if($("#por").val() == ""){
  		alert("Заполните все пункты!");
	} else if($("#vozr").val() == ""){
		alert("Заполните все пункты!");
	}else if($("#ves").val() == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("she").value == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("mot").value == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("has").value == ""){
		alert("Заполните все пункты!");
	}else if($("#food1").val() == ""){
	alert("Заполните все пункты!");
	}else if(document.getElementById("castr").value == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("scr").value == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("sl").value == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("select22").value == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("ideal").value == ""){
	alert("Заполните все пункты!");
	}else if(rt == false){
		alert("Заполните все пункты!");
	}else if(tr == false){
		alert("Заполните все пункты!");
	}else{
	iu = $('#mot').val();
	vozrast = String(document.getElementById("vozr").value);
	castr = $('#castr').val();
	mass = $('#ves').val();
	mass = Number(mass);
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
	document.getElementById("cal_day").value = String(RER);
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
    document.querySelector(".recipes").classList.remove("noact");
    document.querySelector("#zapis2").classList.add("noact");
    document.getElementById('krug2').style.border = "2px solid black";
    document.getElementById('krug2').style.backgroundColor = "white";
    document.getElementById('text1').style.color = "#969799";
    document.getElementById('text2').style.color = "#969799";
    document.getElementById('text3').style.color = "#f2674b";
    document.getElementById('text4').style.color = "#969799";
}
}
}
kip.onclick = calc;

function div_color5(){
	document.querySelector("#a5").classList.add("active_act");
	document.querySelector("#a6").classList.remove("active_act");
	document.querySelector("#a7").classList.remove("active_act");
	document.querySelector("#a8").classList.remove("active_act");
	rt = true;
}
function div_color6(){
	document.querySelector("#a6").classList.add("active_act");
	document.querySelector("#a5").classList.remove("active_act");
	document.querySelector("#a7").classList.remove("active_act");
	document.querySelector("#a8").classList.remove("active_act");
	rt = true;
}
function div_color7(){
	document.querySelector("#a7").classList.add("active_act");
	document.querySelector("#a5").classList.remove("active_act");
	document.querySelector("#a6").classList.remove("active_act");
	document.querySelector("#a8").classList.remove("active_act");
	rt = true;
}
function div_color8(){
	document.querySelector("#a8").classList.add("active_act");
	document.querySelector("#a7").classList.remove("active_act");
	document.querySelector("#a6").classList.remove("active_act");
	document.querySelector("#a5").classList.remove("active_act");
	rt = true;
}

function add11(){
	document.querySelector("#TRK").classList.remove("NoactiveZ");
}
function add12(){
	document.querySelector("#BEEF").classList.remove("NoactiveZ");
}
function add13(){
	document.querySelector("#CHICK").classList.remove("NoactiveZ");
}
function add14(){
	document.querySelector("#PORK").classList.remove("NoactiveZ");
}
function add21(){
	document.querySelector("#TRK").classList.remove("NoactiveZ");
}
function add22(){
	document.querySelector("#BEEF").classList.remove("NoactiveZ");
}
function add23(){
	document.querySelector("#CHICK").classList.remove("NoactiveZ");
}
function add24(){
	document.querySelector("#PORK").classList.remove("NoactiveZ");
}
function tur(){
	document.querySelector("#TRK").classList.add("NoactiveZ");
}

function bf(){
	document.querySelector("#BEEF").classList.add("NoactiveZ");
}

function ch(){
	document.querySelector("#CHICK").classList.add("NoactiveZ");
}

function prk(){
	document.querySelector("#PORK").classList.add("NoactiveZ");
}
trk.onclick = tur;
beef.onclick = bf;
chick.onclick = ch;
pork.onclick = prk;
function handleButtonClick1() {
	if($(".names").val() == ""){
  		alert("Заполните все пункты!");
	} else if($(".name_dog1").val() == ""){
		alert("Заполните все пункты!");
	}else if($(".zip_int").val() == ""){
		alert("Заполните все пункты!");
	}else if($(".email1").val() == ""){
		alert("Заполните все пункты!");
	}else if(document.getElementById("select11").value == ""){
		alert("Заполните все пункты!");
	}else{
	    document.querySelector("#conten").classList.add("noact");
	    document.querySelector(".zapis2").classList.remove("noact");
		document.getElementById("text_bar").innerHTML = "My Dog (2/4)";
		document.getElementById('krug4').style.border = "2px solid black";
		document.getElementById('krug4').style.backgroundColor = "white";
	    document.getElementById('krug1').style.border = "2px solid black";
	    document.getElementById('krug1').style.backgroundColor = "white";
	    document.getElementById('text1').style.color = "#969799";
	    document.getElementById('text2').style.color = "#f2674b";
	    document.getElementById('text3').style.color = "#969799";
	    document.getElementById('text4').style.color = "#969799";
	}
}
function handleButtonClick3() {
	if ((document.getElementsByClassName("vkus_ch")[0].checked) || (document.getElementsByClassName("vkus_ch")[1].checked)|| (document.getElementsByClassName("vkus_ch")[2].checked)||(document.getElementsByClassName("vkus_ch")[3].checked)){
	document.getElementById("text_bar").innerHTML = "Checkout (4/4)";
	document.getElementById('krug6').style.border = "2px solid black";
	document.getElementById('krug6').style.backgroundColor = "white";
    document.getElementById('krug3').style.border = "2px solid black";
    document.getElementById('krug3').style.backgroundColor = "white";
    document.getElementById('text1').style.color = "#969799";
    document.getElementById('text2').style.color = "#969799";
    document.getElementById('text3').style.color = "#969799";
    document.getElementById('text4').style.color = "#f2674b";
    var dogname = $(".name_dog1").val();
	var namepolz = $(".names").val();
	var lb = $("#ves").val();
	var vozrr = String($("#vozr").val()) + $("#mot").val();
	var kcal = $(".cal_day").val();
	alert("Письмо отправлено на вашу электронную почту!!")
} else{
	alert("Выберите минимум один вкус!")
}
}

conten.onclick = handleButtonClick1;
recipes.onclick = handleButtonClick3;
recipes22.onclick = handleButtonClick3;

a5.onclick = div_color5;
a6.onclick = div_color6;
a7.onclick = div_color7;
a8.onclick = div_color8;
add1.onclick = add11;
add2.onclick = add12;
add3.onclick = add13;
add4.onclick = add14;
add112.onclick = add21;
add212.onclick = add22;
add312.onclick = add23;
add412.onclick = add24;
$("#has").change(function() 
{
    var href = $(this).val();
    if (href == "HAS"){
    	document.querySelector(".iss").classList.remove("noact");
    	document.querySelector(".iss1").classList.remove("noact");
    	document.querySelector(".iss2").classList.remove("noact");
    }
    else{
    	document.querySelector(".iss").classList.add("noact");
    	document.querySelector(".iss1").classList.add("noact");
    	document.querySelector(".iss2").classList.add("noact");
    }
});
$("#she").change(function() 
{
    var href = $(this).val();
    if (href == "SHE"){
    	document.getElementById("he").innerHTML = "SHE";
    }
    else if (href == "HE"){
    	document.getElementById("he").innerHTML = "HE";
    } else{
     	document.getElementById("he").innerHTML = "";

    }
});
$("#food1").change(function() 
{
    var href1 = $(this).val();
    if (href1 == "homemade food"){
    	document.querySelector(".food1").classList.add("noact");
    	document.querySelector("#by").classList.add("noact");
    }
    else{
    	document.querySelector(".food1").classList.remove("noact");
    	document.querySelector("#by").classList.remove("noact");
    }
});
$(document).ready(function () {
// Listen to submit event on the <form> itself!
$('#aj').submit(function (e) {

e.preventDefault();

var name = $("#namename").val();
var namedog = $(".name_dog1").val();
var email = $(".email1").val();
var vess = $("#ves").val();
var vozr = $("#vozr").val() + " " + $("#mot").val();
var kcal = $("#cal_day").val();
$.post("email.php", { 
 	name: name,
	namedog: namedog,
	email: email,
	vess: vess,
	vozr: vozr,
	kcal: kcal
}).done(function(data) {
    console.log("ResponseText:" + data);
});
});
});