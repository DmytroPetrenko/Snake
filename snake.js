window.onload = function () {
	init()
	// doSomethingElse()
}

function Squere(width = 10, height = 10, color = "green") {
	this.width = width
	this.height = height
	this.color = color
}

function Snake(length = 3, color = "green", squere = null, element) {
	this.length = length
	this.color = color

	this.squeres = new Array()
	var squeresWrapper = this.squeres
	for (let i = 0; i < this.length; i++) {
		if (!squere) {
			this.squere = new Squere()
		} else {
			this.squere = squere
		}

		this.squere.left = 200 + i * this.squere.width
		this.squere.top = 200

		squeresWrapper[i] = this.squere
	}

	this.squeres.forEach((squere) => {
		squere.squereDoc = document.createElement("div")
		squere.style = squere.squereDoc.style
		squere.style.width = squere.width + "px"
		squere.style.height = squere.height + "px"
		squere.style.position = "absolute"
		squere.style.left = squere.left + "px"
		squere.style.top = squere.top + "px"
		squere.style.backgroundColor = this.color
		squere.style.border = "1px solid white"
		element.insertAdjacentElement("beforeend", squere.squereDoc)
	})

	var wrapper = this

	function changePosition(wrapper, event) {
		if (event.defaultPrevented) {
			return // Do nothing if the event was already processed
		}
		var squeres = wrapper.squeres
		switch (event.key) {
			case "Down": // IE/Edge specific value
			case "ArrowDown":
				squeres.forEach((squere) => {
					squere.top += squere.height
					squere.style.top = squere.top + "px"
				})
				// Do something for "down arrow" key press.
				break
			case "Up": // IE/Edge specific value
			case "ArrowUp":
				squeres.forEach((squere) => {
					squere.top += -squere.height
					squere.style.top = squere.top + "px"
				})
				// Do something for "up arrow" key press.
				break
			case "Left": // IE/Edge specific value
			case "ArrowLeft":
				squeres.forEach((squere) => {
					squere.left += -squere.width
					squere.style.left = squere.left + "px"
				})
				// Do something for "left arrow" key press.
				break
			case "Right": // IE/Edge specific value
			case "ArrowRight":
				squeres.forEach((squere) => {
					squere.left += squere.width
					squere.style.left = squere.left + "px"
				})
				// Do something for "right arrow" key press.
				break
			default:
				return // Quit when this doesn't handle the key event.
		}

		// Cancel the default action to avoid it being handled twice
		event.preventDefault()
	}

	window.addEventListener("keydown", changePosition.bind(null, wrapper), true)
}

function init() {
	var snakeJS = new Snake(4, "red", null, document.getElementById("snake"))
}
