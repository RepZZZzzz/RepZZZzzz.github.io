let left = document.getElementById("l");
let right = document.getElementById("r");
var slideIndex = 1;
let stt = 2000;
const mediaQuery = window.matchMedia('(max-width: 769px)')
const mediaQuery1 = window.matchMedia('(min-width: 427px)')
const mediaQuery2 = window.matchMedia('(max-width: 426px)')
showSlides(slideIndex);
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    if (mediaQuery.matches && mediaQuery1.matches) {
        $('.noact').remove();
        var i;
        stt = 2000;
        var slides = document.getElementsByClassName("sl");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        var slides2 = document.getElementsByClassName("sl1");
        if (n > slides2.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides2.length
        }
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slides2[slideIndex - 1].style.display = "block";
        var slides3 = document.getElementsByClassName("sl2");
        if (n > slides3.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides3.length
        }
        for (i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        slides3[slideIndex - 1].style.display = "block";
    } else if(mediaQuery2.matches){
        $('.noact').remove();
        $('.noact2').remove();
        var i;
        stt = 2000;
        var slides = document.getElementsByClassName("sl");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        var slides2 = document.getElementsByClassName("sl1");
        if (n > slides2.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides2.length
        }
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slides2[slideIndex - 1].style.display = "block";
    }else{
        var i;
        stt = 2000;
        var slides = document.getElementsByClassName("sl");
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        var slides2 = document.getElementsByClassName("sl1");
        if (n > slides2.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides2.length
        }
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slides2[slideIndex - 1].style.display = "block";
        var slides3 = document.getElementsByClassName("sl2");
        if (n > slides3.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides3.length
        }
        for (i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        slides3[slideIndex - 1].style.display = "block";
        var slides4 = document.getElementsByClassName("sl3");
        if (n > slides4.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides4.length
        }
        for (i = 0; i < slides4.length; i++) {
            slides4[i].style.display = "none";
        }
        slides4[slideIndex - 1].style.display = "block";
        var slides5 = document.getElementsByClassName("sl4");
        if (n > slides5.length) {
          slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides5.length
        }
        for (i = 0; i < slides5.length; i++) {
            slides5[i].style.display = "none";
        }
        slides5[slideIndex - 1].style.display = "block";
    }
}
left.onclick = minusSlide;
right.onclick = plusSlide;
setInterval(plusSlide, stt);