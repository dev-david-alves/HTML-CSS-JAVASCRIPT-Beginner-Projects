var box = document.getElementById("box");
var css_copy_input = document.getElementById("css-copy-input");
var card_box = document.getElementById("card-box");

var tl = 10;
var tr = 10;

var rt = 10;
var rb = 10;

var bl = 10;
var br = 10;

var lt = 10;
var lb = 10;

var css_copy = "10% 10% 10% 10% / 10% 10% 10% 10%";

const changeBorder = (e, id) => {
  switch(id) {
  	case "tl":
  		tl = e;
  		break;
  	case "tr":
  		tr = e;
  		break;

  	case "rt":
  		rt = e;
  		break;
  	case "rb":
  		rb = e;
  		break;

  	case "bl":
  		bl = e;
  		break;
  	case "br":
  		br = e;
  		break;

  	case "lt":
  		lt = e;
  		break;
  	case "lb":
  		lb = e;
  		break;
  	default:
  		tl = 0;
  		tr = 0;
  		rt = 0;
  		rb = 0;
  		bl = 0;
  		br = 0;
  		lt = 0;
  		lb = 0;
  }

  css_copy = tl + "% " + tr + "% " + br + "% " + bl + "% / " + lt + "% " + rt + "% " + rb + "% " + lb + "%";
  box.style.borderRadius = css_copy;
  css_copy_input.value = css_copy;
}

const copyCss = () => {
	let copy = "border-radius: " + css_copy_input.value + ";";
	navigator.clipboard.writeText(copy);

	card_box.style.display = "flex";
	setTimeout(() => {
		card_box.style.display = "none";
	}, 1000);
}