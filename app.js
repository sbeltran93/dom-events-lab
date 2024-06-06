/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

const numberBtnEls = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEl = document.querySelector('.equals')
const displayEl = document.querySelector('.display')

const render = () => {
  // render is updating the textContent of display
  // i believe this is the iterator to make display work
  displayEl.textContent = result
}

const updateResult = () => {
  result = num1
render()
};

const updateNumbers = (event) => {
  // console.log(event.target.textContent)

if(num1 && operator) {
// console.log('updating num2', event.target.textContent)

  num2 += event.target.textContent;
  result = num2
} 
else {
  num1 += event.target.textContent;
  result = num1
 }
//  console.log(num1, num2)
 render()
}

// i dont understand what this if statement is doing ^^

const resetCalc = () => {
  num1 = '';
  num2 = '';
  operator = '';
  result = 0;
}

const updateOperators = (event) => {
  operator = event.target.textContent
  if (operator === 'C'){
    num1 = "";
    num2 = "";
    operator = "";
    result = 0;
    render()
  }
};
// set variable oper to event.target.textConent
// refrence the operator
const updateEquals = (event) => {
  if (operator === '+')  {
    result = (Number(num1)+Number(num2))
}
if (operator === '-')  {
    result = (Number(num1)-Number(num2))
}
if (operator === '*')  {
    result = (Number(num1)*Number(num2)) 
}
if (operator === '/')  {
    result = (Number(num1)/Number(num2))   
}    
/* (Number(num1)+Number(num2))^
if (operator === 'C') {
  output = function clr() { */
  // console.log(event.target.textContent)
  render()
}

const handleCalcuate = () => {
  console.log(`${num1} ${operator} ${num2}`)
  if(operator === '+'){
    updateResult(Number(num1)+Number(num2))
  }
}

numberBtnEls.forEach((numberBtnEl) =>  {
 numberBtnEl.addEventListener('click', updateNumbers);
})
// iterate over all operators
// assign - listener (updateOperator)
// update the operator variable with the textContent

operatorBtnEls.forEach((operatorBtnEl) => {
  operatorBtnEl.addEventListener('click', updateOperators);
// my iteration over operators
})

equalBtnEl.addEventListener('click', updateEquals);
// resetCalc.addEventListener('click', updateResult);

render()
