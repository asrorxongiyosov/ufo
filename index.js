// Detecting Button Press
var numberOfButtons = document.querySelectorAll(".btn").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "A":
      var btnA = new Audio("sounds/A.mp3");
      btnA.play();
      break;
    case "B":
      var btnB = new Audio("sounds/B.mp3");
      btnB.play();
      break;
    case "C":
      var btnC = new Audio("sounds/C.mp3");
      btnC.play();
      break;
    case "E":
      var btnE = new Audio("sounds/E.mp3");
      btnE.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function show() {
  document.getElementById("ufoAnimation").style.display = "block";

  document.getElementById("btnID").style.display = "none";
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
