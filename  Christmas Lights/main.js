let root = document.documentElement;
var circle = document.getElementsByClassName("circle");
var intensity_speed = document.getElementById("intensity_speed");
var intensity_smooth = document.getElementById("intensity_smooth");
var turn_btn = document.getElementById("turn");

var turnedOn = false;
var num_circles = circle.length;

const turn = () => {
	if(!turnedOn) {
		for(var i = 0; i < num_circles; i++) {
			circle[i].removeAttribute("style");
			circle[i].style.opacity = 1;
			circle[i].style.animationPlayState = "running";
		}

		turn_btn.classList.remove("off");
	} else {
		for (var i = 0; i < num_circles; i++) {
			circle[i].style.animation = "none";
			circle[i].style.opacity = 0.5;
		}

		turn_btn.classList.add("off");
	}
	
	turnedOn = !turnedOn;
}

const setInterval = () => {
	let value = intensity_speed.value;

	if(value > 0 && value <= 10) {
		for(var i = 0; i < num_circles; i++) {
			circle[i].style.animationDuration = value + "s";
		}
		
		for(var i = 1; i < num_circles; i += 2) {
			circle[i].style.animationDelay = value + "s";
		}
	}
}

const setIntensity = () => {
	let value = intensity_smooth.value;

	if(value > 0 && value <= 10) {
		root.style.setProperty("--intensity", value + "px");
	}
}

const setColor = (id, color) => {
	root.style.setProperty(id, color);
}

const setWidth = (id, width) => {
	let color_input = document.getElementById("--color-" + id);
	id = id - 1;
	if(width >= 50 && width <= 150) {
		color_input.style.width = width + "px";
		color_input.style.height = width + "px";
		circle[id].style.width = width + "px";
		circle[id].style.height = width + "px";
	}
}