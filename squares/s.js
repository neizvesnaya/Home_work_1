window.onload = () => {
  // const pos = ["TL", "TR", "BL", "BR"];
  const position = {
    topLeft: "TL",
    topRight: "TR",
    bottomLeft: "BL",
    bottomRight: "BR"
  };

  const square = document.getElementById('s0');

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  function createNewDiv(parentW, parentH, pos) {

    let div = document.createElement("DIV");
    div.style.width = parentW / 2 + "px";
    div.style.height = parentH / 2 + "px";
    div.style.backgroundColor = getRandomColor();
    div.style.position = "absolute";

    switch (pos) {
      case position.topLeft:
        div.style.top = "0"
        div.style.left = "0"
        break;
      case position.topRight:
        div.style.top = "0"
        div.style.right = "0"
        break;
      case position.bottomLeft:
        div.style.bottom = "0"
        div.style.left = "0"
        break;
      case position.bottomRight:
        div.style.bottom = "0"
        div.style.right = "0"
        break;
    }

    return div;
  }

  function positioning(event) {
    let w2 = event.target.clientWidth / 2;
    let h2 = event.target.clientHeight / 2;
    let x = event.layerX;
    let y = event.layerY;

    if (x <= w2 && y <= h2){
      return position.topLeft;
    }
    if (x > w2 && y <= h2){
      return position.topRight;
    }
    if ( x <= w2 && y > h2 ){
      return position.bottomLeft;
    }
    if (x > w2 && y > h2) {
      return position.bottomRight;
    }

    return "Quadrant mismatch";
  }

  square.addEventListener("click", (event) => {
    let el = event.target;
    // console.dir(event);
    let pos = positioning(event);
    el.appendChild(createNewDiv(el.clientWidth, el.clientHeight, pos));
  });
};
