let check_num = 3;
var op = 3;
var ty = 7;
var tur2 = "Turkey";
var beef2 = "Beef";
var chick2 = "Chick";
var pork2 = "";
document.getElementsByClassName("ch_ad")[3].innerHTML = "Maximum selected" ;
q = "." + "ch" + String(3);
$(q).attr('disabled',true);
document.getElementsByClassName("ch_ad")[7].innerHTML = "Maximum selected" ;
q = "." + "ch" + String(7);
$(q).attr('disabled',true);
document.getElementById("tur_ch").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[0].checked) {
		check_num += 1;
		tur2 = "Turkey";
		op -= 0;
		document.getElementsByClassName("ch_ad")[0].innerHTML = "Added (" + String(check_num) + "/3)" ;
}else{
	tur2 = "";
	check_num -= 1;
	op += 0;
	document.getElementsByClassName("ch_ad")[0].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch();

}

document.getElementById("be_ch").onclick = function(){
	if (document.getElementsByClassName("vkus_ch")[1].checked) {
		beef2 = "Beef";
		check_num += 1;
		op -= 1;
		document.getElementsByClassName("ch_ad")[1].innerHTML = "Added (" + String(check_num) + "/3)" ;

} else{
	check_num -= 1;
	beef2 = "";
	op += 1;
	document.getElementsByClassName("ch_ad")[1].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch();

}

document.getElementById("ch_ch").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[2].checked) {
		chick2 = "Chicken";
		check_num += 1;
		op -= 2;
		document.getElementsByClassName("ch_ad")[2].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	chick2 = "";
	op += 2;
	document.getElementsByClassName("ch_ad")[2].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch();

}


document.getElementById("po_ch").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[3].checked) {
		check_num += 1;
		pork2 = "Pork";
		op -= 3;
		document.getElementsByClassName("ch_ad")[3].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	op += 3;
	pork2 = "";
	document.getElementsByClassName("ch_ad")[3].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
ch();
console.log(check_num);
}


document.getElementById("tur_ch1").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[4].checked) {
		tur2 = "Turkey";
		check_num += 1;
		ty -= 4;
		document.getElementsByClassName("ch_ad")[4].innerHTML = "Added (" + String(check_num) + "/3)" ;
}else{
	check_num -= 1;
	tur2 = "";
	ty += 4;
	document.getElementsByClassName("ch_ad")[4].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch1()
}

document.getElementById("be_ch1").onclick = function(){
	if (document.getElementsByClassName("vkus_ch")[5].checked) {
		check_num += 1;
		beef2 = "Beef";
		ty -= 5;
		document.getElementsByClassName("ch_ad")[5].innerHTML = "Added (" + String(check_num) + "/3)" ;

} else{
	check_num -= 1;
	beef2 = "";
	ty += 5;
	document.getElementsByClassName("ch_ad")[5].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch1();
}

document.getElementById("ch_ch1").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[6].checked) {
		chick2 = "Chicken";
		check_num += 1;
		ty -= 6;
		document.getElementsByClassName("ch_ad")[6].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	ty += 6;
	chick2 = "";
	document.getElementsByClassName("ch_ad")[6].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch1();
}


document.getElementById("po_ch1").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[7].checked) {
		check_num += 1;
		pork2 = "Pork";
		ty -= 7;
		document.getElementsByClassName("ch_ad")[7].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	ty += 7;
	pork2 = "";
	document.getElementsByClassName("ch_ad")[7].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
ch1();
console.log(check_num);
}

function ch1() {
	ty1 = "." + "ch" + String(ty);
	console.log(tur2);
	console.log(beef2);
	console.log(chick2);
	console.log(pork2);
	if (check_num == 3){
		document.getElementsByClassName("ch_ad")[ty].innerHTML = "Maximum selected" ;
		$(ty1).attr('disabled',true);
	} else{
		$(ty1).attr('disabled',false);
		document.getElementsByClassName("ch_ad")[4].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch4").attr('disabled',false);
		document.getElementsByClassName("ch_ad")[5].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch5").attr('disabled',false);
		document.getElementsByClassName("ch_ad")[6].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch6").attr('disabled',false);
		document.getElementsByClassName("ch_ad")[7].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch7").attr('disabled',false);
	}
}
function ch() {
	op1 = "." + "ch" + String(op);
	console.log(tur2);
	console.log(beef2);
	console.log(chick2);
	console.log(pork2);
	if (check_num == 3){
		document.getElementsByClassName("ch_ad")[op].innerHTML = "Maximum selected" ;
		$(op1).attr('disabled',true);
	} else{
		$(op1).attr('disabled',false);
		document.getElementsByClassName("ch_ad")[0].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch0").attr('disabled',false);
		document.getElementsByClassName("ch_ad")[1].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch1").attr('disabled',false);
		document.getElementsByClassName("ch_ad")[2].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch2").attr('disabled',false);
		document.getElementsByClassName("ch_ad")[3].innerHTML = "Added (" + String(check_num) + "/3)" ;
		$(".ch3").attr('disabled',false);
	}
}
$(document).ready(function () {
// Listen to submit event on the <form> itself!
$('#aj').submit(function (e) {
var name = $("#namename").val();
var zip = $(".zip_int").val();
var castr = $("#castr").val();
var food1 = $("#food1").val();
var por = $("#por").val();
var sl = $("#sl").val();
var hass = $("#has").val();
var idea = $("#ideal").val();
var namedog = $(".name_dog1").val();
var email = $(".email1").val();
var vess = $("#ves").val();
var vozr = $("#vozr").val() + " " + $("#mot").val();
var kcal = $("#cal_day").val();
e.preventDefault();
$.post("email.php", { 
	zip: zip,
	castr: castr,
	food: food1,	
	por: por,
	sl: sl,
	has: hass,
	ideal: idea,
 	tur: tur2,
	beef: beef2,
	name: name,
	namedog: namedog,
	email: email,
	vess: vess,
	vozr: vozr,
	kcal: kcal,
	chick: chick2,
	pork: pork2
}).done(function(data) {
    console.log("ResponseText:" + data);
});
});
});