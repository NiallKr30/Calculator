



const output= document.querySelector('#output')
const result= document.querySelector('#result')
const text = document.querySelector('#btn-text');
const romNo = document.querySelector('#btn-rn');
const percent = document.querySelector('#btn-per');
const fullStop = document.querySelector('#btn-dot');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const plus = document.querySelector('#btn-p');
const multiply = document.querySelector('#btn-mul');
const equals = document.querySelector('#btn-eq');
const divide = document.querySelector('#btn-divide');
const cancel = document.querySelector('#btn-cancel');




let results = result.innerText;

let typed = ''





function press(num) {
       const number = document.createElement('span');
       number.innerText = num;
       number.classList = 'result';
    output.appendChild(number);
    
      if (output.children.length > 4) {
        output.style.fontSize = '50px';
    }
    

}
btn0.addEventListener('click', () => press(0))
btn1.addEventListener('click', () => press(1))
btn2.addEventListener('click', () => press(2))
btn3.addEventListener('click', () => press(3))
btn4.addEventListener('click', () => press(4))
btn5.addEventListener('click', () => press(5))
btn6.addEventListener('click', () => press(6))
btn7.addEventListener('click', () => press(7))
btn8.addEventListener('click', () => press(8))
btn9.addEventListener('click', () => press(9))
fullStop.addEventListener('click', () => press('.'))



    









