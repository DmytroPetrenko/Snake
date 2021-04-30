window.onload = function () {
	init()
	// doSomethingElse()
}

function Squere(width = 10, height = 10, color = "green") {
	this.width = width
	this.height = height
	this.color = color
}

function Snake(length = 3, color = "green", squere = null) {
	this.length = length
	this.color = color

	if (!squere) {
		this.squere = new Squere()
	} else {
		this.squere = squere
	}

	this.width = this.squere.width * this.length
	this.height = this.squere.height

  this.move = window.addEventListener(
		"keydown",
		function (event) {
			if (event.defaultPrevented) {
				return // Do nothing if the event was already processed
			}

			switch (event.key) {
				case "Down": // IE/Edge specific value
				case "ArrowDown":
					
					// Do something for "down arrow" key press.
					break
				case "Up": // IE/Edge specific value
				case "ArrowUp":
					// Do something for "up arrow" key press.
					break
				case "Left": // IE/Edge specific value
				case "ArrowLeft":
					// Do something for "left arrow" key press.
					break
				case "Right": // IE/Edge specific value
				case "ArrowRight":
					// Do something for "right arrow" key press.
					break
				case "Enter":
					// Do something for "enter" or "return" key press.
					break
				case "Esc": // IE/Edge specific value
				case "Escape":
					// Do something for "esc" key press.
					break
				default:
					return // Quit when this doesn't handle the key event.
			}

			// Cancel the default action to avoid it being handled twice
			event.preventDefault()
		},
		true,
	)
}

function init() {
	var snakeJS = new Snake()
	var snake = document.getElementById("snake")
	snake.style.width = snakeJS.width + "px"
	snake.style.height = snakeJS.height + "px"
	snake.style.backgroundColor = snakeJS.color
}

