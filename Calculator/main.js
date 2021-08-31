var view = document.getElementById("calc-view");
var top_view = document.getElementById("calc-top");

// Variables

var operation = "";
var symbols = ["/", "*", "+", ",", ".", "-"];
var historic = [];
var flag = false;

const putDigit = (e) => {
	if(flag) {
		if(!symbols.includes(e)) {
			view.value = "";
			operation = "";
		}
		
		flag = false;
	}

	if(view.value != "Result Limit Exceeded!") {
		operation = view.value.replaceAll('x', '*').replaceAll(",", ".");
	}

	if(operation.length == 1 && operation.substr(0) == "0" && e == "0") e = "";
	if((e == "," || e == ".") && !findSymbol()) e = "";
	
	var ch = operation.charAt(operation.length - 1);

	if(operation.length < 16) {
		if(!(operation.length == 0 && 
		(symbols.slice(0, 4).includes(e))) && 
		!(symbols.includes(ch) && symbols.includes(e)
		&& !(e == "-" && ch != "-" && ch != "+" && ch != "." && ch != ","))) {
			if(!symbols.includes(e) && e != "" && 
			operation.length == 1 && 
			operation.charAt(0) == "0") {
				operation = "";
				view.value = "";
			}
			operation += e;
			view.value = operation.replaceAll('*', 'x').replaceAll(".", ",");
		}
	}
}

const compare = (e) => {
	if(historic.length >= 5) historic.shift();
	
	if(symbols.includes(operation.substr(operation.length - 1))) {
		operation = operation.substr(0, operation.length - 1);
	}
	
	if(operation.length > 0) {
		var aux = operation;
		operation = eval(operation).toString();

		if(!isInt(operation)) {
			operation = parseFloat(operation);
			operation = operation.toFixed(2);
		}

		if((operation.charAt(0) == "-" && operation.length <= 8) || operation.length <= 8) {
			if(eval(historic[historic.length - 1]) != eval(operation)) {
				historic.push(aux);
				drawHistoric();
			}

			view.value = operation.replaceAll(".", ",");
			flag = true;
		} else {
			operation = "";
			view.value = "Result Limit Exceeded!";
		}
	}
}

const drawHistoric = () => {
	top_view.innerHTML = "";
	historic.forEach(element => {

		var element_op = element.replaceAll('*', 'x').replaceAll(".", ",");

		if(!isInt(eval(element))) {
			element = eval(element);
			element = parseFloat(element);
			element = element.toFixed(2);
		} else {
			element = eval(element).toString();
		}

		top_view.innerHTML += '<div class="view-row">' +
								'<div class="operation-col">' +
									'<span>' + element_op + '</span>' +
								'</div>' +
								'<div class="equal-col">' +
									'<span>=</span>' +
								'</div>' +
								'<div class="result-col">' +
									'<span>' + element.replaceAll(".", ",") + '</span>' +
								'</div>' +
							'</div>';
	});
}

const clean = () => {
	var new_operation = operation.substr(0, operation.length - 1);

	if(new_operation.length == 0) {
		if(historic.length == 0) {
			operation = "";
			view.value = "";
			top_view.innerHTML = "";
		} else {
			operation = historic.pop();
			view.value = operation.replaceAll('*', 'x').replaceAll(".", ",");
			drawHistoric();
		}
	} else {
		operation = new_operation;
		view.value = operation.replaceAll('*', 'x').replaceAll(".", ",");
	}
}

const cleanAll = () => {
	historic = [];
	view.value = "";
	operation = "";
	top_view.innerHTML = "";
}

const invertSign = () => {
	if(historic.length >= 5) {
		historic.shift();
	}

	if(operation.length > 0 && view.value != "0" && view.value != "0,") {
		if(symbols.includes(operation.substr(operation.length - 1))) {
			operation = operation.substr(0, operation.length - 1);
		}

		historic.push(operation);
		drawHistoric();

		if(!isInt(eval(operation) * -1)) {
			operation = eval(operation) * -1;
			operation = parseFloat(operation);
			operation = operation.toFixed(2);
		} else {
			operation = (eval(operation) * -1).toString();
		}
	
		view.value = operation.replaceAll(".", ",");
		flag = true;
	}
}

const isInt = (n) => n % 1 === 0;

const findSymbol = () => {
	for(var i = operation.length - 1; i >= 0; i--) {
		var ch = operation.charAt(i);
		if(ch == "," || ch == ".") return false;
		if(["/", "*", "+", "-"].includes(ch)) return true;
	}

	return true;
}