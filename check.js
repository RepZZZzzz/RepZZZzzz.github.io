let check_num = 3;
var op = 3;
var ty = 7;
document.getElementsByClassName("ch_ad")[3].innerHTML = "Maximum selected" ;
q = "." + "ch" + String(3);
$(q).attr('disabled',true);
document.getElementsByClassName("ch_ad")[7].innerHTML = "Maximum selected" ;
q = "." + "ch" + String(7);
$(q).attr('disabled',true);
document.getElementById("tur_ch").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[0].checked) {
		check_num += 1;
		op -= 0;
		document.getElementsByClassName("ch_ad")[0].innerHTML = "Added (" + String(check_num) + "/3)" ;
}else{
	check_num -= 1;
	op += 0;
	document.getElementsByClassName("ch_ad")[0].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch();

}

document.getElementById("be_ch").onclick = function(){
	if (document.getElementsByClassName("vkus_ch")[1].checked) {
		check_num += 1;
		op -= 1;
		document.getElementsByClassName("ch_ad")[1].innerHTML = "Added (" + String(check_num) + "/3)" ;

} else{
	check_num -= 1;
	op += 1;
	document.getElementsByClassName("ch_ad")[1].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch();

}

document.getElementById("ch_ch").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[2].checked) {
		check_num += 1;
		op -= 2;
		document.getElementsByClassName("ch_ad")[2].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	op += 2;
	document.getElementsByClassName("ch_ad")[2].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch();

}


document.getElementById("po_ch").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[3].checked) {
		check_num += 1;
		op -= 3;
		document.getElementsByClassName("ch_ad")[3].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	op += 3;
	document.getElementsByClassName("ch_ad")[3].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
ch();
console.log(check_num);
}


document.getElementById("tur_ch1").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[4].checked) {
		check_num += 1;
		ty -= 4;
		document.getElementsByClassName("ch_ad")[4].innerHTML = "Added (" + String(check_num) + "/3)" ;
}else{
	check_num -= 1;
	ty += 4;
	document.getElementsByClassName("ch_ad")[4].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch1()
}

document.getElementById("be_ch1").onclick = function(){
	if (document.getElementsByClassName("vkus_ch")[5].checked) {
		check_num += 1;
		ty -= 5;
		document.getElementsByClassName("ch_ad")[5].innerHTML = "Added (" + String(check_num) + "/3)" ;

} else{
	check_num -= 1;
	ty += 5;
	document.getElementsByClassName("ch_ad")[5].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch1();
}

document.getElementById("ch_ch1").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[6].checked) {
		check_num += 1;
		ty -= 6;
		document.getElementsByClassName("ch_ad")[6].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	ty += 6;
	document.getElementsByClassName("ch_ad")[6].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
console.log(check_num);
ch1();
}


document.getElementById("po_ch1").onclick = function(){

	if (document.getElementsByClassName("vkus_ch")[7].checked) {
		check_num += 1;
		ty -= 7;
		document.getElementsByClassName("ch_ad")[7].innerHTML = "Added (" + String(check_num) + "/3)" ;
} else{
	check_num -= 1;
	ty += 7;
	document.getElementsByClassName("ch_ad")[7].innerHTML = "Added (" + String(check_num) + "/3)" ;
}
ch1();
console.log(check_num);
}

function ch1() {
	ty1 = "." + "ch" + String(ty);
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
	console.log(op)
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