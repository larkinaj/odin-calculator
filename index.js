let firstNum = '0';
let secondNum = '';
let currOperator = '';
let calculateSecondNum = false;

const add = (a,b) => {
  return a+b
}

const subtract = (a,b) => {
  return a-b
}

const multiply = (a,b) => {
  return a*b
}

const divide = (a,b) => {
  return a/b
}

const operate = (operator, num1, num2) => {
  if (operator === '+') {
    return add(num1, num2)
  }
  if (operator === '-') {
    return subtract(num1, num2)
  }
  if (operator === '*') {
    return multiply(num1, num2)
  }
  if (operator === '/') {
    return divide(num1, num2)
  }
}

const numberButtons = document.querySelectorAll('.number-button')
const operatorButtons = document.querySelectorAll('.operator-button')
let firstNumView = document.querySelector('#first-num')
let operatorView = document.querySelector('#operator')
let secondNumView = document.querySelector('#second-num')
const clearButton = document.querySelector('#clear-button')
const equalButton = document.querySelector('#equal-button')
let resultsView = document.querySelector('#results-viewport')

equalButton.addEventListener('click', (event) => {
  if (secondNum !== '') {
    let result = operate(currOperator, Number(firstNum), Number(secondNum))
    firstNumView.innerText = firstNum
    operatorView.innerText = currOperator
    secondNumView.innerText = secondNum + ' ='
    resultsView.innerText = result
  }
})

clearButton.addEventListener('click', (event) => {
  firstNum = '0'
  secondNum = ''
  currOperator = ''
  calculateSecondNum = false;
  firstNumView.innerText = firstNum;
  operatorView.innerText = currOperator;
  secondNumView.innerText = secondNum;
  resultsView.innerText = firstNum;
})

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', (event) => {
    if (calculateSecondNum === true) {
      secondNum += numberButtons[i].innerText
      secondNumView.innerText = secondNum
      resultsView.innerText = secondNum
    }
    if (firstNum === '0' && calculateSecondNum === false) {
      firstNum = ''
    }
    if (calculateSecondNum === false) {
      firstNum += numberButtons[i].innerText
      firstNumView.innerText = firstNum
      resultsView.innerText = firstNum
    }
  })
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', (event) => {
    if (firstNum !== '' && secondNum !== '' && currOperator !== '') {
      firstNum = operate(currOperator, Number(firstNum), Number(secondNum))
      currOperator = operatorButtons[i].innerText
      console.log(currOperator)
      secondNum = '';
      secondNumView.innerText = secondNum;
      resultsView.innerText = firstNum;
    }
    currOperator = operatorButtons[i].innerText
    calculateSecondNum = true;
    firstNumView.innerText = firstNum
    operatorView.innerText = currOperator
    console.log('currOperator: ', currOperator)
  })
}