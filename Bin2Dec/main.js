// Getting the binary input

var bin2dec = document.getElementById('bin2dec');
var bin2dec_result = document.getElementById('bin2dec_result');

// Check if can convert to binary

const check_bin2dec = (e) => {
	let result = e;
	let can_convert = false;

	if(result.length > 0) {
		for(let i = 0; i < result.length; i++) {
			if(!isNaN(result.charAt(i))) {
				if(result.charAt(i) == 0 || result.charAt(i) == 1) {
					can_convert = true;
				} else {
					can_convert = false;
					bin2dec_result.style.color = "#ed0000";
					bin2dec_result.value = "Error, You must enter only 0 or 1.";
					break;
				}
			} else {
				can_convert = false;
				bin2dec_result.style.color = "#ed0000";
				bin2dec_result.value = "Error, You must enter a numeric value.";
				break;
			}
		}
	} else {
		bin2dec_result.style.color = "#ffffff";
		bin2dec_result.value = "";
	 	can_convert = false;
	}

	if(can_convert) {
		let sum_result = convert_bin2dec(result);
		bin2dec_result.style.color = "#ffffff";
		bin2dec_result.value = sum_result;
	}
}

// Converting to binary

const convert_bin2dec = (result) => {
	let sum = 0;
	let e = 0;

	for(let i = result.length - 1; i >= 0; i--) {
		if(result.charAt(i) == 1) {
			sum = sum + Math.pow(2, e);
		}
		e = e + 1;
	}

	return sum;
}

// ----------------------------------------------------------------

// Getting the decimal input

var dec2bin = document.getElementById('dec2bin');
var dec2bin_result = document.getElementById('dec2bin_result');

// Check if can convert to decimal

const check_dec2bin = (e) => {
	let result = e;
	let can_convert = false;

	if(result.length > 0) {
		for(let i = 0; i < result.length; i++) {
			if(!isNaN(result.charAt(i))) {
				can_convert = true;
			} else {
				can_convert = false;
				dec2bin_result.style.color = "#ed0000";
				dec2bin_result.value = "Error, You must enter a numeric value.";
				break;
			}
		}
	} else {
		dec2bin_result.style.color = "#ffffff";
		dec2bin_result.value = "";
		can_convert = false;
	}

	if(can_convert) {
		let sum_result = convert_dec2bin(result);
		dec2bin_result.style.color = "#ffffff";
		dec2bin_result.value = sum_result;
	}
}

// Converting to decimal

const convert_dec2bin = (result) => {
	let current = result;
	let val = "";
	let remainder = 0;

	while(current != 0) {
		val += current % 2;
		remainder = current % 2;
		current = (current - remainder) / 2;
	}

	val = val.split("").reverse().join("");

	return val;
}
