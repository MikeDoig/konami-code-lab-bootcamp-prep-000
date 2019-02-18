const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  function secretCode(e) {
    const key = e.key;
    for (let i=0; i<codes.length; i++){
    if (key == codes[i]) {
      i++;
      if (index == codes.length) {
        alert('You did it! Secret found!');
        index = 0;
      }
    }
    else {
      index = 0;
    }
    }
  }
}
