/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

let num1 = 0;
let num2 = 0;
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
}

const updateNumbers = (event) => {
  console.log(event.target.textContent)
// if i have the number(textContent) -> how do i update the state?
// check status  of what operator is
if(!num1) {
  num1 = event.target.textContent
} else {
  num1 += event.target.textContent
} 
// num1 is filled when no operator but num2 is filled out when operator is 
// num2 will have same if statement
updateResult()
}
// i dont understand what this if statement is doing ^^

const updateOperators = (event) => {
  console.log(event.target.textContent)

}
// set variable oper to event.target.textConent
// refrence the operator
const updateEquals = (event) => {
  if (operator === '+')  {
    output = (num1+num2)
}
if (operator === '-')  {
    output = (num1-num2)
}
if (operator === '*')  {
    output = (num1*num2)  
}
if (operator === '/')  {
    output = (num1/num2)   
}    
/* 
if (operator === 'C') {
  output = function clr() { */
  console.log(event.target.textContent)
  render()
  updateOperators()
}


numberBtnEls.forEach((numberBtnEl) =>  {
 numberBtnEl.addEventListener('click', updateNumbers)
})
// iterate over all operators
// assign - listener (updateOperator)
// update the operator variable with the textContent

operatorBtnEls.forEach((operatorBtnEl) => {
  operatorBtnEl.addEventListener('click', updateOperators)
// my iteration over operators
})

equalBtnEl.addEventListener('click', updateEquals);


render()
