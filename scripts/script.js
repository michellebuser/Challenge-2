setInterval(draaien, 1);
setInterval(verandering,1) //nog aanpassen


function draaien(){
	var vandaag = new Date();
	var uur = vandaag.getHours() %12 * 30;
	var minuut = vandaag.getMinutes() * 6;
	var seconde = vandaag.getSeconds() * 6;	

	document.getElementById("uren").style.transform="rotate("+ uur+ "deg)";
	document.getElementById("minuten").style.transform="rotate("+ minuut+ "deg)";
	document.getElementById("seconden").style.transform="rotate("+ seconde+ "deg)";
}

function verandering(){
	var vandaag = new Date();
	var uur = vandaag.getHours();
	var minuut = vandaag.getMinutes() ;
	var seconde = vandaag.getSeconds();	
	var body = document.body;

if ("0"<= seconde&&seconde < "15") {
	body.classList.add("ochtend");
	body.classList.remove("nacht");


}
 else if ("15"<= seconde&&seconde < "30") {
 	body.classList.add("middag");
 	body.classList.remove("ochtend");


} 
 else if ("30"<= seconde&&seconde < "45") {
 	body.classList.add("avond");
 	body.classList.remove("middag");


} 
else {
    console.log("Have a good night!");
    body.classList.add("nacht");
    body.classList.remove("avond");

}

}