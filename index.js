// Your code here

const dodger = document.getElementById("dodger");
function  moveDodgerLeft(){
    dodger.style.backgroundColor = "#FF69B4";
    dodger.style.bottom = "0px";
    dodger.style.left = "0px";
}



function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if ( left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }