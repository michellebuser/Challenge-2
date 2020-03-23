setInterval(clockHands, 1);
setInterval(changeBackground,1) 
/* de verandering van de achtergrond is nu om de 15 seconden
    om aan te tonen dat er om de zoveel tijd een visuele verandering
    zichtbaar is. Dit moet in het echt natuurlijk om de 6 uur zijn.
*/    


function clockHands (){
  var today = new Date();
  var hour = today.getHours() %12 * 30;
  var minute = today.getMinutes() * 6;
  var second = today.getSeconds() * 6; 

  document.getElementById("hours").style.transform="rotate("+ hour+ "deg)";
  document.getElementById("minutes").style.transform="rotate("+ minute+ "deg)";
  document.getElementById("seconds").style.transform="rotate("+ second+ "deg)";
}

function changeBackground(){
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes() ;
  var second = today.getSeconds(); 
  var body = document.body;

  if ("0"<= second&&second < "15") {
    body.classList.add("morning");
    body.classList.remove("night");
  }

  else if ("15"<= second&&second < "30") {
    body.classList.add("afternoon");
    body.classList.remove("morning");
  } 

  else if ("30"<= second&&second < "45") {
    body.classList.add("evening");
    body.classList.remove("afternoon");
  } 


  else {
      body.classList.add("night");
      body.classList.remove("evening");
  }

}



















