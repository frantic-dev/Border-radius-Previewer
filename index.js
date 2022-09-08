const TLcorner = document.querySelector('#top-left-corner');
const TRcorner = document.querySelector('#top-right-corner');
const BRcorner = document.querySelector('#bottom-right-corner');
const BLcorner = document.querySelector('#bottom-left-corner');
const resultShape = document.querySelector('#result-shape');
// const doneBtn = document.querySelector('#done-btn');
const form = document.querySelector('form');
const square = document.querySelector('#square');
const rectangle = document.querySelector('#rectangle');
// const custom = document.querySelector('#custom');

function appropriateShape(shape) {
  let addStyle;
  if (shape === 'rectangle') {
    addStyle = 'width: 40vw; height: 20vw;';
    console.log('rectangle');
  } else if (shape === 'square') {
    addStyle = 'width:40vh; height: 40vh;';
    console.log('square');
  }
  return addStyle;
}
rectangle.onclick = () => {
  resultShape.className = 'rectangle';
  resultShape.setAttribute('style', appropriateShape(resultShape.className));
};

square.onclick = () => {
  resultShape.className = 'square';
  resultShape.setAttribute('style', appropriateShape(resultShape.className));
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const TL = TLcorner.value || 0;
  const TR = TRcorner.value || 0;
  const BR = BRcorner.value || 0;
  const BL = BLcorner.value || 0;
  resultShape.setAttribute('style', `border-radius: ${TL}px ${TR}px ${BR}px ${BL}px; ${appropriateShape(resultShape.className)}`);
  form.reset();
});
