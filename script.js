const input = document.getElementById("input")
const previous = document.getElementById("previous")

let previousNum = null
let previousFunction = function(){}

const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")

clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", removeOne)

const buttons = [
document.getElementById("zero"),
document.getElementById("one"),
document.getElementById("two"),
document.getElementById("three"),
document.getElementById("four"),
document.getElementById("five"),
document.getElementById("six"),
document.getElementById("seven"),
document.getElementById("eight"),
document.getElementById("nine")
]

buttons.forEach(button => {
  button.addEventListener("click", numberButtonClicked)
})

const divideButton = document.getElementById("divide")
const multiplyButton = document.getElementById("multiply")
const subtractButton = document.getElementById("subtract")
const addButton = document.getElementById("add")

divideButton.addEventListener("click", handleDivide)
multiplyButton.addEventListener("click", handleMultiply)
subtractButton.addEventListener("click", handleSubtract)
addButton.addEventListener("click", handleAdd)

const dotButton = document.getElementById("dot")
const equalsButton = document.getElementById("equals")

dotButton.addEventListener("click", dot)
equalsButton.addEventListener("click", equals)

function clearInput() {
  input.innerText = "0"
}

function equals() {
  if (previous.innerText) previous.innerText += " " + input.innerText
}

function handleDivide() {
  previousNum = Number(input.innerText)
  if (previousNum) {
    previous.innerText = parseFloat((previousNum / Number(input.innerText)).toFixed(3))
  } else previous.innerText = input.innerText
  previous.innerText += " / "
  clearInput()
}

function handleMultiply() {
  if (previousNum == null) {
    previous.innerText = input.innerText
    previousNum = input.innerText
  }
  else {
    previousNum = previousNum * Number(input.innerText)
    previous.innerText = Number(previousNum)
  }
  previous.innerText += " x "
  clearInput()
}

function handleSubtract() {
  if (previousNum == null) {
    previousNum = Number(input.innerText)
    previous.innerText = input.innerText
  }
  else {
    previous.innerText = previousNum - Number(input.innerText)
    previousNum = Number(previousNum) - Number(input.innerText)
  }
  previous.innerText += " - "
  clearInput()
}

function handleAdd() {
  previous.innerText = previousNum + Number(input.innerText)
  previousNum = Number(previousNum) + Number(input.innerText)
  previous.innerText += " + "
  previousFunction = handleAdd
  clearInput()
}

function divide(a,b) {
  if (b === 0) return "Can't divide by zero"
  return (a / b).toFixed(3)
}

function multiply(a,b) {
  return a * b
}

function subtract(a,b) {
  return a - b
}

function add(a,b) {
  return a + b
}

function clear() {
  previous.innerText = ""
  input.innerText = "0"
  previousNum = null
}

function numberButtonClicked() {
  if (input.innerText == "0") input.innerText = ""

  input.innerText += this.innerText
} 

function removeOne() {
  input.innerText = input.innerText.slice(0, -1)
}
