const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20 

function increase(){
	fontSize += 4
	p.style.fontSize = fontSize + 'px'
}

function decrease(){
	if (fontSize <= 12) {
		return
	}
	fontSize -= 4
	p.style.fontSize = fontSize + 'px'
}

function changeColor() {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	p.style.color = `rgb(${r},${g},${b})`
}

sizeUp.addEventListener('click', increase)
sizeDown.addEventListener('click', decrease)
color.addEventListener('click', changeColor)