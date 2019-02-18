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
  
  document.body.addEventListener('keydown', (e) >= {
    const key = e.key;
    if (key == codes[index]) {
      i++;
      if (index == codes.length) {
        alert('You did it! Secret found!');
        index = 0;
      }
    }
    else {
      index = 0;
    }
  });
}
