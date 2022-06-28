
function myMove() {
    console.log("hello");
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5)
    let leftCounter = 0
    let topCounter = 0
    function frame() {
        if (pos == 350 * 4) {
            clearInterval(id);
        } 
        else if(pos < 350) {
            topCounter++;
            elem.style.top = topCounter + "px";
        }
        else if (pos < 350 * 2) {
            leftCounter++;
            elem.style.left = leftCounter + "px";
        }
        else if(pos < 350 *3) {
            topCounter--;
            elem.style.top = topCounter + "px";
        }
        else {
            leftCounter--;
            elem.style.left= leftCounter + "px"
        }
        pos++;
    }
  }

  export default myMove;