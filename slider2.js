let left2 = document.getElementById("l2");
let right2 = document.getElementById("r2");
var sllideIndex2 = 1;
let stt2 = 2500;
const mediaQueryn = window.matchMedia('(max-width: 769px)')
const mediaQueryn1 = window.matchMedia('(min-width: 427px)')
const mediaQueryn2 = window.matchMedia('(max-width: 426px)')
showsllides(sllideIndex2);
function plussllide() {
    showsllides(sllideIndex2 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minussllide() {
    showsllides(sllideIndex2 -= 1);  
}

/* Устанавливает текущий слайд */
function currentsllide(n) {
    showsllides(sllideIndex2 = n);
}

/* Основная функция слайдера */
function showsllides(n) {
    if (mediaQueryn.matches && mediaQueryn1.matches) {
        $('.noact').remove();
        var i;
        stt2 = 2500;
        var sllides = document.getElementsByClassName("sll2");
        if (n > sllides.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides.length
        }
        for (i = 0; i < sllides.length; i++) {
            sllides[i].style.display = "none";
        }
        sllides[sllideIndex2 - 1].style.display = "block";
        var sllides2 = document.getElementsByClassName("sll1");
        if (n > sllides2.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides2.length
        }
        for (i = 0; i < sllides2.length; i++) {
            sllides2[i].style.display = "none";
        }
        sllides2[sllideIndex2 - 1].style.display = "block";
        var sllides3 = document.getElementsByClassName("sll2");
        if (n > sllides3.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides3.length
        }
        for (i = 0; i < sllides3.length; i++) {
            sllides3[i].style.display = "none";
        }
        sllides3[sllideIndex2 - 1].style.display = "block";
    } else if(mediaQueryn2.matches){
        $('.noact').remove();
        $('.noact2').remove();
        var i;
        stt2 = 2500;
        var sllides = document.getElementsByClassName("sll");
        if (n > sllides.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides.length
        }
        for (i = 0; i < sllides.length; i++) {
            sllides[i].style.display = "none";
        }
        sllides[sllideIndex2 - 1].style.display = "block";
        var sllides2 = document.getElementsByClassName("sll1");
        if (n > sllides2.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides2.length
        }
        for (i = 0; i < sllides2.length; i++) {
            sllides2[i].style.display = "none";
        }
        sllides2[sllideIndex2 - 1].style.display = "block";
    }else{
        var i;
        stt2 = 2500;
        var sllides = document.getElementsByClassName("sll");
        if (n > sllides.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides.length
        }
        for (i = 0; i < sllides.length; i++) {
            sllides[i].style.display = "none";
        }
        sllides[sllideIndex2 - 1].style.display = "block";
        var sllides2 = document.getElementsByClassName("sll1");
        if (n > sllides2.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides2.length
        }
        for (i = 0; i < sllides2.length; i++) {
            sllides2[i].style.display = "none";
        }
        sllides2[sllideIndex2 - 1].style.display = "block";
        var sllides3 = document.getElementsByClassName("sll2");
        if (n > sllides3.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides3.length
        }
        for (i = 0; i < sllides3.length; i++) {
            sllides3[i].style.display = "none";
        }
        sllides3[sllideIndex2 - 1].style.display = "block";
        var sllides4 = document.getElementsByClassName("sll3");
        if (n > sllides4.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides4.length
        }
        for (i = 0; i < sllides4.length; i++) {
            sllides4[i].style.display = "none";
        }
        sllides4[sllideIndex2 - 1].style.display = "block";
        var sllides5 = document.getElementsByClassName("sll4");
        if (n > sllides5.length) {
          sllideIndex2 = 1
        }
        if (n < 1) {
            sllideIndex2 = sllides5.length
        }
        for (i = 0; i < sllides5.length; i++) {
            sllides5[i].style.display = "none";
        }
        sllides5[sllideIndex2 - 1].style.display = "block";
    }
}
left2.onclick = minussllide;
right2.onclick = plussllide;
setInterval(plussllide, stt2);