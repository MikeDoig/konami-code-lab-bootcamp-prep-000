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

// function init() {
//   let index = 0;
//   document.body.addEventListener('keydown', (e) => {
//     const key = e.key;
//     index = (codes[index] == key) ? ++index: 0;
//     if (index==codes.length) {
//       alert('You did it!');
//     index = 0;
    
//   }
//   });
// }

function init() {
  let index = 0;
  
  document.body.addEventListener('keydown', function(e)  {
    const key = e.key;
    if (codes[index] == key) {
    // index = key;
    index++;
    }
    if (index == codes.length) {
      alert('You did it! Secret found!');
      index = 0;
    }
    // else {
    //   index = 0;
    // }
  });
}
