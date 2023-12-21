function song(){

  console.log('ok')
var audio = new Audio("moye moye sex.mp3");
audio.play();
audio.loop = true;

}
var button = document.getElementById("btn");

window.onload =  function () {
  
    var marqueeText = "Moye Moye | ";
    var repetitions = 5; // Replace with your repetitions
  
    var marqueeElements = document.getElementsByClassName("marquee-text");
    // console.log('ok');
    
    for (var i = 0; i < marqueeElements.length; i++) {
      for (var j = 0; j < repetitions; j++) {
        marqueeElements[i].innerHTML += marqueeText;
      }
    }
  

    // Trigger a click event on the button
    button.click();
    
  };
  
 

  