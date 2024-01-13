const output = document.querySelector('.output');
const numbers = document.querySelectorAll('.num');
const topDisplay = document.querySelector('#previous-num');
const bottomDisplay = document.querySelector('#current-num');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#btn-eq');

let currentNum;
let previousNum;
let sum1
let isClicked = false

numbers.forEach((number) => {
    number.addEventListener('click', () => {
      if (isClicked) {
          topDisplay.innerHTML = ' '
          currentNum = 0;
          previousNum = 0;
          isClicked = false
      }
      currentNum = bottomDisplay.innerHTML + number.innerHTML;
      bottomDisplay.innerHTML = currentNum
    sizing();
  });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
      isClicked=false
      if (topDisplay.innerHTML && bottomDisplay.innerHTML) {
          sumOperator(currentNum,previousNum)
      }
    previousNum = topDisplay.innerHTML + bottomDisplay.innerHTML + operator.innerHTML;
    topDisplay.innerHTML = previousNum;
        bottomDisplay.innerHTML = ' ';
        currentNum = 0;
    sizing();
  });
});

function sum(currentNum,previousNum) {
        let valueCurrentNum = parseFloat(currentNum)
    let valuePreviousNum = parseFloat(previousNum)
    if (!isNaN(valueCurrentNum) && !isNaN(valuePreviousNum)) {
        sum1 = valuePreviousNum + valueCurrentNum
        topDisplay.innerHTML = sum1
        bottomDisplay.innerHTML = ' '

        isClicked = true
    }
}
function sumOperator(currentNum,previousNum) {
        let valueCurrentNum = parseFloat(currentNum)
    let valuePreviousNum = parseFloat(previousNum)
    if (!isNaN(valueCurrentNum) && !isNaN(valuePreviousNum)) {
        sum1 = valuePreviousNum + valueCurrentNum
        topDisplay.innerHTML = sum1
        bottomDisplay.innerHTML = ' '
    }
}

equals.addEventListener('click',() => {
    sum(currentNum,previousNum)
})


function sizing() {
  if (bottomDisplay.offsetWidth > output.offsetWidth) {
    bottomDisplay.style.fontSize = '30px';
  }
  if (topDisplay.offsetWidth > output.offsetWidth) {
    topDisplay.style.fontSize = '30px';
  }
}
