const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
let action = null

plus.onclick = function () {
	action = '+'
}

minus.onclick = function () {
	action = '-'
}

submit.onclick = function () {
	if (action == '+') {
		result.textContent = Number(input1.value) + Number(input2.value)
	} else {
		result.textContent = Number(input1.value) - Number(input2.value)
	}
}
