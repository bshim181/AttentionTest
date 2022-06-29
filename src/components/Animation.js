function generateRandom(min = 0, max = 100) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor(rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 15);

  let dim = 600;
  let boxdim = 50;

  let vertDir = 1;
  let horiDir = 1;
  let x_displacement = 4;
  let y_displacement = 4;
  
  function frame() {
  
    if ((elem.offsetTop <= 0 || elem.offsetTop >= dim-boxdim) && (pos !== 0)) {
        vertDir *= -1
        x_displacement = generateRandom(2, 8) * horiDir;
        y_displacement = generateRandom(2, 8) * vertDir;
    }
 
    if ((elem.offsetLeft <= 0 || elem.offsetLeft >= dim-boxdim) && (pos !== 0)) {
        horiDir *= -1
        x_displacement = generateRandom(2, 8) * horiDir;
        y_displacement = generateRandom(2, 8) * vertDir;
    }
    
    let leftDisp = elem.offsetLeft + x_displacement;
    let topDisp = elem.offsetTop + y_displacement;
 
    elem.style.left = leftDisp + "px";
    elem.style.top = topDisp + "px";
    pos++;

    if (elem.offsetTop < 0) {
        elem.style.top = 0 + "px";
    } else if (elem.offsetTop > dim-boxdim) {
        elem.style.top = dim - boxdim + "px";
    } else if (elem.offsetLeft < 0) {
        elem.style.left = 0 + "px";
    } else if (elem.offsetLeft > dim-boxdim) {
        elem.style.left = dim - boxdim + "px"
    }
  }
}
export default myMove;