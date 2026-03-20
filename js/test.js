const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
let action = null

plus.onclick = function () {
	action = '+'
}

minus.onclick = function () {
	action = '-'
}

divide.onclick = function () {
	action = '/'
}
multiply.onclick = function () {
	action = '*'
}

function greenOrRed(answer) {
	if (answer > 0) {
		result.style.color = 'green'
	} else if (answer == 0) {
		result.style.color = 'black'
	} else {
		result.style.color = 'red'
	}
}

function number(ipt1, ipt2, action1) {
	const num1 = Number(ipt1.value)
	const num2 = Number(ipt2.value)

	if (action1 == '+') {
		return num1 + num2
	} else if (action == '-') {
		return num1 - num2
	} else if (action == '/') {
		return num1 / num2
	} else {
		return num1 * num2
	}
}

submit.onclick = function () {
	result.textContent = number(input1, input2, action)
	greenOrRed(Number(result.textContent))
}
