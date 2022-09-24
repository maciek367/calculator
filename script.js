const resultDiv = document.getElementById("result-text")

const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")

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
const dotButton = document.getElementById("dot")
const equalsButton = document.getElementById("equals")

deleteButton.addEventListener("click", removeOne)

function numberButtonClicked() {
  resultDiv.innerText += this.innerText
} 

function removeOne() {
  let text = resultDiv.innerText

  if (text == "0") return

  resultDiv.innerText = text.slice(0, -1)
}

function showResult(result) {
  resultDiv.innerText = result
}