const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)

console.log('Hello world!')

const variable = 250
console.log(variable)
variable = 251
console.log(variable)
