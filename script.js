const input = document.getElementById("input")
const previous = document.getElementById("previous")

let previousNum = null

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

function previousNumDoesntExist() {
  previous.innerText = input.innerText
  previousNum = Number(input.innerText)
}

function equals() {
  if (!previousNum) return
  let operator = previous.innerText[previous.innerText.length - 1]
  previous.innerText += " " + input.innerText + " = "
  switch(operator) {
    case "+":
      input.innerText = Number(previousNum) + Number(input.innerText)
      break
    case "-":
      input.innerText = Number(previousNum) - Number(input.innerText)
      break
    case "*":
      input.innerText = Number(previousNum) * Number(input.innerText)
      break
    case "/":
      input.innerText = Number(previousNum) / Number(input.innerText)
      break
    default: 
    
  }
}

function handleDivide() {
  if (previousNum != null) { 
    previousNum = parseFloat((previousNum / Number(input.innerText == "0" ? "1" : input.innerText)).toFixed(3))
    previous.innerText = previousNum
  }
  else {
    previousNumDoesntExist()
  }
  previous.innerText += " / "
  clearInput()
}

function handleMultiply() {
  if (previousNum != null) {
    console.log(previousNum)
    previousNum = previousNum * Number(input.innerText == "0" ? "1" : input.innerText)
    previous.innerText = previousNum
  }
  else {
    previousNumDoesntExist()
  }
  previous.innerText += " x "
  clearInput()
}

function handleSubtract() {
  if (previousNum != null) {
    previous.innerText = previousNum - Number(input.innerText)
    previousNum = previousNum - Number(input.innerText)
  }
  else {
    previousNumDoesntExist()
  }
  previous.innerText += " - "
  clearInput()
}

function handleAdd() {
  if (previousNum != null) {
    previous.innerText = previousNum + Number(input.innerText)
    previousNum = previousNum + Number(input.innerText) 
  }
  else {
    previousNumDoesntExist()
  }
  previous.innerText += " + "
  clearInput()
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
