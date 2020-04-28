function checkForPopBlocker() {
	var testPop = window.open("","","width=100,height=100");
	if (testPop === null || typeof(testPop) === "undefined") {
		alert("Please disable your popup blocker.");
	}
	testPop.close();
}
function checkMakeupBrand() {
	var targetField = document.getElementById("makeupBrand");
	if (targetField.value.length === 0) {
		alert("Please enter your favorite makeup brand!");
		targetField.focus();
		targetField.style.background = "#86cb92";
		return false;
	}
	else {
		alert("Good choice!");
	}
	targetField.style.background = "white";
}
function checkForSelection() {
	if (document.getElementById("brands").selectedIndex === 0) {
		alert("Please select a brand.");
		return false;
	}
	else {
		alert("Good choice!");
	}
}
function validateRadios() {
	var radios = document.getElementsByName("r1");
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return true;
		}
	}
	alert("Please check one.");
	return false;
}
function validateZIP() {
	var numChars = document.getElementById("zip").value.length;
	if (numChars < 5) {
		alert("Please enter a 5-digit code.");
		return false;
	}
}
function validateEmail() {
	var eEntered = document.getElementById("email").value;
	if (eEntered.indexOf(" ") !== -1) {4
		alert("No spaces allowed in address.");
		return false;
	}
}
function tryCatch() {
	try {
		var greeting = "Hello world!";
		aler(greeting);
	}
	catch(err) {
		alert(err);
	}
}
function checkPassword() {
	try {
		var pass = document.getElementById("fl").value;
		if (pass.length < 8) {
			throw "Please enter at least 8 characters.";
		}
		if (pass.indexOf(" ") !== -1) {
			throw "No spaces in the password,";
		}
		var numberSomewhere = false;
		for (var i = 0; i < pass.length; i++) {
			if (isNaN(pass(i, i+1)) === false) {
				numberSomewhere = true;
				break;
			}
		}
		if (numberSomewhere === false) {
			throw "Include at least 1 number.";
		}
	}
	catch(err) {
		alert(err);
	}
}