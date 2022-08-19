const TLcorner = document.querySelector('#top-left-corner');
const TRcorner = document.querySelector('#top-right-corner');
const BRcorner = document.querySelector('#bottom-right-corner');
const BLcorner = document.querySelector('#bottom-left-corner');
const resultShape = document.querySelector('#result-shape');
// const doneBtn = document.querySelector('#done-btn');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let TL = TLcorner.value || 0;
    let TR = TRcorner.value || 0;
    let BR = BRcorner.value || 0;
    let BL = BLcorner.value || 0;
    resultShape.setAttribute('style', `border-radius: ${TL}px ${TR}px ${BR}px ${BL}px`);
    form.reset();
});
