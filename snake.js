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

	if (!squere) {
		this.squere = new Squere()
	} else {
		this.squere = squere
	}

	this.width = this.squere.width * this.length
	this.height = this.squere.height
	this.left = 200
	this.top = 200
	var wrapper = this

	elStyle = element.style
	elStyle.width = this.width + "px"
	elStyle.height = this.height + "px"
	elStyle.backgroundColor = this.color
	elStyle.position = "absolute"
	elStyle.left = this.left + "px"
	elStyle.top = this.top + "px"

	function changePosition(wrapper, event) {
		if (event.defaultPrevented) {
			return // Do nothing if the event was already processed
		}

		switch (event.key) {
			case "Down": // IE/Edge specific value
			case "ArrowDown":
				wrapper.top += wrapper.squere.height
				elStyle.top = wrapper.top + "px"
				// Do something for "down arrow" key press.
				break
			case "Up": // IE/Edge specific value
			case "ArrowUp":
				wrapper.top += -wrapper.squere.height
				elStyle.top = wrapper.top + "px"
				// Do something for "up arrow" key press.
				break
			case "Left": // IE/Edge specific value
			case "ArrowLeft":
				wrapper.left += -wrapper.squere.width
				elStyle.left = wrapper.left + "px"
				// Do something for "left arrow" key press.
				break
			case "Right": // IE/Edge specific value
			case "ArrowRight":
				wrapper.left += wrapper.squere.width
				elStyle.left = wrapper.left + "px"
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
