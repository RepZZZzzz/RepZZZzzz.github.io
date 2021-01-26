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
const media1025 = window.matchMedia('(min-width: 1025px)');
const media769 = window.matchMedia('(min-width: 769px)');
const media426 = window.matchMedia('(min-width: 426px)');
const media375 = window.matchMedia('(min-width:376px)');
const media321 = window.matchMedia('(min-width:321px)');
const maxmedia321 = window.matchMedia('(max-width:321px)');
document.getElementById('text1').style.color = "#f2674b";
function handleButtonClick1() {
    document.querySelector("#conten").classList.add("noact");
    document.querySelector(".zapis2").classList.remove("noact");
    if (media1025.matches){
    	 document.getElementsByClassName('progress2')[0].style.width = "1750%";
    	} else if (media769.matches){
    		document.getElementsByClassName('progress2')[0].style.width = "1150%";
    	} else if (media426.matches){
    		document.getElementById("text_bar").innerHTML = "My Dog (2/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "1550%";
    	} else if (media375.matches){
    		document.getElementById("text_bar").innerHTML = "My Dog (2/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "750%";
    		document.getElementById('krug4').style.border = "2px solid black";
    		document.getElementById('krug4').style.backgroundColor = "white";
    	}else if (media321.matches){
    		document.getElementById("text_bar").innerHTML = "My Dog (2/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "710%";
    		document.getElementById('krug4').style.border = "2px solid black";
    		document.getElementById('krug4').style.backgroundColor = "white";
    	}else if (maxmedia321.matches){
    		document.getElementById("text_bar").innerHTML = "My Dog (2/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "540%";
    		document.getElementById('krug4').style.border = "2px solid black";
    		document.getElementById('krug4').style.backgroundColor = "white";
    	}
    document.getElementById('krug1').style.border = "2px solid black";
    document.getElementById('krug1').style.backgroundColor = "white";
    document.getElementById('text1').style.color = "#969799";
    document.getElementById('text2').style.color = "#f2674b";
    document.getElementById('text3').style.color = "#969799";
    document.getElementById('text4').style.color = "#969799";
}
function handleButtonClick2() {
	if (media1025.matches){
    	 document.getElementsByClassName('progress2')[0].style.width = "3750%";;
    	} else if (media769.matches){
    		document.getElementsByClassName('progress2')[0].style.width = "2550%";
    	} else if (media426.matches){
    		document.getElementById("text_bar").innerHTML = "Your Plan (3/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "3350%";
    	} else if (media375.matches){
    		document.getElementById("text_bar").innerHTML = "Your Plan (3/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "1750%";
    		document.getElementById('krug5').style.border = "2px solid black";
    		document.getElementById('krug5').style.backgroundColor = "white";
    	}else if (media321.matches){
    		document.getElementById("text_bar").innerHTML = "Your Plan (3/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "1500%";
    		document.getElementById('krug5').style.border = "2px solid black";
    		document.getElementById('krug5').style.backgroundColor = "white";
    	}else if (maxmedia321.matches){
    		document.getElementById("text_bar").innerHTML = "Your Plan (3/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "1200%";
    		document.getElementById('krug5').style.border = "2px solid black";
    		document.getElementById('krug5').style.backgroundColor = "white";
    	}

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
function div_color5(){
	document.querySelector("#a5").classList.add("active_act");
	document.querySelector("#a6").classList.remove("active_act");
	document.querySelector("#a7").classList.remove("active_act");
	document.querySelector("#a8").classList.remove("active_act");
}
function div_color6(){
	document.querySelector("#a6").classList.add("active_act");
	document.querySelector("#a5").classList.remove("active_act");
	document.querySelector("#a7").classList.remove("active_act");
	document.querySelector("#a8").classList.remove("active_act");
}
function div_color7(){
	document.querySelector("#a7").classList.add("active_act");
	document.querySelector("#a5").classList.remove("active_act");
	document.querySelector("#a6").classList.remove("active_act");
	document.querySelector("#a8").classList.remove("active_act");
}
function div_color8(){
	document.querySelector("#a8").classList.add("active_act");
	document.querySelector("#a7").classList.remove("active_act");
	document.querySelector("#a6").classList.remove("active_act");
	document.querySelector("#a5").classList.remove("active_act");
}
function div_color1(){
	document.querySelector("#a1").classList.add("active_act");
	document.querySelector("#a2").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
}
function div_color2(){
	document.querySelector("#a2").classList.add("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
}
function div_color3(){
	document.querySelector("#a3").classList.add("active_act");
	document.querySelector("#a2").classList.remove("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a4").classList.remove("active_act");
}
function div_color4(){
	document.querySelector("#a4").classList.add("active_act");
	document.querySelector("#a1").classList.remove("active_act");
	document.querySelector("#a3").classList.remove("active_act");
	document.querySelector("#a2").classList.remove("active_act");
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
function handleButtonClick3() {
	if (media1025.matches){
    	 document.getElementsByClassName('progress2')[0].style.width = "5700%";;
    	} else if (media769.matches){
    		document.getElementsByClassName('progress2')[0].style.width = "3850%";
    	} else if (media426.matches){
    		document.getElementById("text_bar").innerHTML = "Checkout (4/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "5150%";
    	} else if (media375.matches){
    		document.getElementById("text_bar").innerHTML = "Checkout (4/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "2700%";
    		document.getElementById('krug6').style.border = "2px solid black";
    		document.getElementById('krug6').style.backgroundColor = "white";
    	}else if (media321.matches){
    		document.getElementById("text_bar").innerHTML = "Checkout (4/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "2350%";
    		document.getElementById('krug6').style.border = "2px solid black";
    		document.getElementById('krug6').style.backgroundColor = "white";
    	}else if (maxmedia321.matches){
    		document.getElementById("text_bar").innerHTML = "Checkout (4/4)";
    		document.getElementsByClassName('progress2')[1].style.width = "1970%";
    		document.getElementById('krug6').style.border = "2px solid black";
    		document.getElementById('krug6').style.backgroundColor = "white";
    	}
    document.getElementById('krug3').style.border = "2px solid black";
    document.getElementById('krug3').style.backgroundColor = "white";
    document.getElementById('text1').style.color = "#969799";
    document.getElementById('text2').style.color = "#969799";
    document.getElementById('text3').style.color = "#969799";
    document.getElementById('text4').style.color = "#f2674b";
}
zapis2.onclick = handleButtonClick2;
conten.onclick = handleButtonClick1;
recipes.onclick = handleButtonClick3;
recipes22.onclick = handleButtonClick3;
a1.onclick = div_color1;
a2.onclick = div_color2;
a3.onclick = div_color3;
a4.onclick = div_color4;
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

$("#food1").change(function() 
{
    var href = $(this).val();
    if (href == "homemade food"){
    	document.querySelector(".food1").classList.add("noact");
    	document.querySelector("#by").classList.add("noact");
    }
    else{
    	document.querySelector(".food1").classList.remove("noact");
    	document.querySelector("#by").classList.remove("noact");
    }
});
