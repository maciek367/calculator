const input = document.getElementById("input")
const previous = document.getElementById("previous")

let previousNum = null
let equalsBlocked = false

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
  if (previousNum == null || equalsBlocked) return

  let result = 0
  let operator = previous.innerText.split(" ")[1]
  // ex. "36 + "   =>   ["36","+"]
  //                     take  ^

  previous.innerText += " " + input.innerText + " = "
  switch(operator) {
    case "+":
      result = previousNum + Number(input.innerText)
      break
    case "-":
      result = previousNum - Number(input.innerText)
      break
    case "x":
      result = previousNum * Number(input.innerText)
      break
    case "/":
      result = (previousNum / Number(input.innerText)).toFixed(3)
      break
  }
  previousNum = null
  equalsBlocked = true
  input.innerText = result
}

function handleDivide() {
  if (previousNum != null) { 
    previousNum = parseFloat((previousNum / Number(input.innerText == "0" ? "1" : input.innerText)).toFixed(3))
    previous.innerText = previousNum
  }
  else {
    previousNumDoesntExist()
  }
  equalsBlocked = false
  previous.innerText += " / "
  clearInput()
}

function handleMultiply() {
  if (previousNum != null) {
    previousNum = previousNum * Number(input.innerText == "0" ? "1" : input.innerText)
    previous.innerText = previousNum
  }
  else {
    previousNumDoesntExist()
  }
  equalsBlocked = false
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
  equalsBlocked = false
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
  equalsBlocked = false
  previous.innerText += " + "
  clearInput()
}

function clear() {
  previous.innerText = ""
  input.innerText = "0"
  previousNum = null
  equalsBlocked = false
}

function numberButtonClicked() {
  if (input.innerText == "0") input.innerText = ""

  input.innerText += this.innerText
} 

function removeOne() {
  input.innerText = input.innerText.slice(0, -1)
}