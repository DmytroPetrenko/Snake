window.onload = function () {
	init()
	// doSomethingElse()
}

function Squere(width = 10, height = 10, color = "green") {
	this.width = width
	this.height = height
	this.color = color
	this.left = 200
	this.top = 200
}

function Snake(length = 3, color = "green", squere = null, element) {
	this.length = length
	this.color = color
	this.direction = null

	this.squeres = new Array()
	var squeresCopy = new Array()
	var squeresWrapper = this.squeres

	this.move = function (speed = 1) {
		if (wrapper) {
			setInterval(function () {
				if (wrapper.direction) {
					squeresCopy = squeresWrapper
					switch (wrapper.direction) {
						case "left":
							squeresWrapper[0].left += -squeresWrapper[0].width
							squeresWrapper[0].style.left = squeresWrapper[0].left + "px"
							break
						case "right":
							squeresWrapper[0].left += squeresWrapper[0].width
							squeresWrapper[0].style.left = squeresWrapper[0].left + "px"
							break
						case "up":
							squeresWrapper[0].top += -squeresWrapper[0].height
							squeresWrapper[0].style.top = squeresWrapper[0].top + "px"
							break
						case "down":
							squeresWrapper[0].top += squeresWrapper[0].height
							squeresWrapper[0].style.top = squeresWrapper[0].top + "px"
							break
						default:
							break
					}
					for (let i = 1; i < squeresWrapper.length; i++) {
						const element = squeresWrapper[i]
						squeresWrapper[i] = squeresCopy[i - 1]
					}
				}
			}, 1000 * speed)
		}
	}

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

		switch (event.key) {
			case "Down": // IE/Edge specific value
			case "ArrowDown":
				wrapper.direction = "down"
				// Do something for "down arrow" key press.
				break
			case "Up": // IE/Edge specific value
			case "ArrowUp":
				wrapper.direction = "up"
				// Do something for "up arrow" key press.
				break
			case "Left": // IE/Edge specific value
			case "ArrowLeft":
				wrapper.direction = "left"
				// Do something for "left arrow" key press.
				break
			case "Right": // IE/Edge specific value
			case "ArrowRight":
				wrapper.direction = "right"
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
	snakeJS.move()
}
