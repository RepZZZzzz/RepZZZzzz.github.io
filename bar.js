let wi = 0;
var name ;

$('input').on('keyup',function(e){
    if ($(this).hasClass("name_dog1") == true){
    	for (let fruit of document.getElementsByClassName("dogname")) {
	  		fruit.innerHTML = $(this).val();
		    console.log($(this).val());	
}
 } else{
 	wi = 0;
 }
})
$('input').keyup();

