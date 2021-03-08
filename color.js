let color = document.getElementById('color'); 
let color2 = document.getElementById('color2'); 
let coll = true;
function colorch() {
	if (coll == true){
	document.body.style.background = "#2c2c2c";
	document.getElementById("pr").src="img/prof1.png";
	document.getElementById("se").src="img/search1.png";
	document.getElementById('na').src="img/nastr1.png";
	for (let fruit of document.getElementsByClassName("col")) {
	  		fruit.style.background = "#404040";
	  		fruit.style.color = "white";
	coll = false;
	} 
	for (let fruit of document.getElementsByClassName("h")) {
	  		fruit.style.color = "white";
	  	}
	for (let fruit of document.getElementsByClassName("slid_nazv")) {
	  		fruit.style.background = "#404040";
	  	}
	}else{
		document.body.style.background = "#9E5428";
		document.getElementById("pr").src="img/prof.png";
		document.getElementById("se").src="img/search.png";
		document.getElementById('na').src="img/nastr.png";
		for (let fruit of document.getElementsByClassName("col")) {
	  		fruit.style.background = "#F8BD97";
	  		fruit.style.color = "black";
	coll = true;
}
	for (let fruit of document.getElementsByClassName("h")) {
	  		fruit.style.color = "#F8BD97";
	  	}
	for (let fruit of document.getElementsByClassName("slid_nazv")) {
	  		fruit.style.background = "#F8BD97";
	  	}
}
}

color.onclick = colorch;

function colorch1() {
	if (coll == true){
	document.body.style.background = "#2c2c2c";
	document.getElementById("pr2").src="img/prof1.png";
	document.getElementById("se2").src="img/search1.png";
	document.getElementById('na2').src="img/nastr1.png";
	for (let fruit of document.getElementsByClassName("col")) {
	  		fruit.style.background = "#404040";
	  		fruit.style.color = "white";
	coll = false;
	} 
	for (let fruit of document.getElementsByClassName("h")) {
	  		fruit.style.color = "white";
	  	}
	for (let fruit of document.getElementsByClassName("slid_nazv")) {
	  		fruit.style.background = "#404040";
	  	}
	}else{
		document.body.style.background = "#9E5428";
		document.getElementById("pr2").src="img/prof.png";
		document.getElementById("se2").src="img/search.png";
		document.getElementById('na2').src="img/nastr.png";
		for (let fruit of document.getElementsByClassName("col")) {
	  		fruit.style.background = "#F8BD97";
	  		fruit.style.color = "black";
	coll = true;
	}
	for (let fruit of document.getElementsByClassName("h")) {
	  		fruit.style.color = "#F8BD97";
	  	}
	for (let fruit of document.getElementsByClassName("slid_nazv")) {
	  		fruit.style.background = "#F8BD97";
	  	}
}
}

color2.onclick = colorch1;
