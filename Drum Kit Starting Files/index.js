//detectando clicks

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// guarda en la variable la cantidad de botones con clase .drum

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //document quiere decir que revisa el documento lo que hay en pantalla y busca
    //lo que tenga drum, es decir los 7 eventos una vez lo identifica como array
    // le decimos que lo recorra y cuando lo encutre adicione un addEventListener
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); //identifica la letra del click y llama la funcion
    // donde tiene el sonido

    buttonAnimation(buttonInnerHTML); //pasa a la letra y llama la funcion
    //segun la letra con la animación

  });
  // el codigo anterior permite que para cualquier boton se genera la alerta, para
  // el boton correspondiente
}


//detecnando teclas oprimidas

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  //event me permite detectar que tecla fue tipeada, pero la la letra que
  //contiene la tecla me la da event.key y llama la funcion
  buttonAnimation(event.key);
})

function makeSound(key) {

  switch (key) {
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:

  }

}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  //buscamos que quede de esta manera document.querySelector(".d");
  // para identificar la letra que esta oprimiendo
  activeButton.classList.add("pressed");
  //al boton activo adicione la class pressed que esta definida en el style.css
  // que deda como una animacion, cambia las caractrisiticas del boton
setTimeout(function(){
activeButton.classList.remove("pressed");}, 100);
//esto permite que el boton vuelva a quedar como al principio y no parezca presionado

}
// var audio = new Audio("sounds/snare.mp3");
// audio.play();
