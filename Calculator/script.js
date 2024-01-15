const output = document.querySelector('.output');
const numbers = document.querySelectorAll('.num');
const topDisplay = document.querySelector('#previous-num');
const bottomDisplay = document.querySelector('#current-num');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#btn-eq');

let currentNum = ''
let previousNum = ''
let clickedOp = false
let clickedEq = false


numbers.forEach(number => {
    number.addEventListener('click', () => {
        clickedOp = false
        bottomDisplay.innerHTML += number.innerHTML
        currentNum += number.innerHTML
console.log(clickedOp)
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (!clickedOp) {
            clickedOp = true
            topDisplay.innerHTML = bottomDisplay.innerHTML + operator.innerHTML
            
            let numvalues1 = parseInt(currentNum)
            let numvalues2 = parseInt(previousNum)
            
        if (!isNaN(numvalues1) && !isNaN(numvalues2)) {
            topDisplay.innerHTML = numvalues1 + numvalues2 + operator.innerHTML
            currentNum = numvalues1 + numvalues2
            if (clickedEq) {
                topDisplay.innerHTML =
                currentNum + operator.innerHTML;
               
            }
            }
                
                
    
        bottomDisplay.innerHTML = ' '
        previousNum = currentNum
            currentNum = ' '
        
            
        }
        
})
})



equals.addEventListener('click', () => {
    clickedEq === true
    if (topDisplay.innerHTML && bottomDisplay.innerHTML) {
           let numvalues1 = parseInt(currentNum);
           let numvalues2 = parseInt(previousNum);

           if (!isNaN(numvalues1) && !isNaN(numvalues2)) {
             topDisplay.innerHTML =
               numvalues1 + numvalues2;
               currentNum = numvalues1 + numvalues2;
                bottomDisplay.innerHTML = ' ';
                previousNum = currentNum;
                currentNum = 0;
        
           }
    }
})


function calculate(operatorType, previousNum, currentNum) {

    let result;

    switch (operatorType) {
        case '+':
            result = previousNum + currentNum
            break;
        case '-':
            result = previousNum - currentNum
            break;
        case 'x':
            result = previousNum * currentNum
            break;
        case '/':
            result = previousNum / currentNum
            break;
        case '%':
            result = (previousNum/100) * currentNum
            break;
    
        default:
            console.error('invalid operator', operatorType)
            break;
    }
    return result
    
}


function cancel() {
    
}

function deleteAll() {
    
}












