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
	document.getElementById("text_bar").innerHTML = "Checkout (4/4)";
	document.getElementById('krug6').style.border = "2px solid black";
	document.getElementById('krug6').style.backgroundColor = "white";
    document.getElementById('krug3').style.border = "2px solid black";
    document.getElementById('krug3').style.backgroundColor = "white";
    document.getElementById('text1').style.color = "#969799";
    document.getElementById('text2').style.color = "#969799";
    document.getElementById('text3').style.color = "#969799";
    document.getElementById('text4').style.color = "#f2674b";
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
