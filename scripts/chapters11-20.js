function displayBrand() {
	var makeup = ["Wet n' Wild", "Neutrogena", "Urban Decay", "Charlotte Tillbury"];
	makeup.push("ColourPop");
	makeup.splice(1, 1, "Clinique");
	var text = "";
	var i;
	for (i = 0; i < makeup.length; i++) {
		text += makeup[i] + "<br>";
	}
document.getElementById("demo").innerHTML = text;
}
var makeupBrands = ["Wet n' wild", "Neutrogena", "Urban Decay", "Charlotte Tillbury"];
var x = prompt("How many dollars did you want to spend on lipstick?");
	if (x <= 3) {
		alert(makeupBrands[0] + " is an affordable brand for you!");
	}
	else if (x > 3 && x <= 9) {
			alert(makeupBrands[1] + " is an affordable brand for you!");
	}
	else if (x > 9 && x <= 15) {
			alert(makeupBrands[2] + " is a good brand for you!");
	}
	else if (x > 15 && x <= 22) {
			alert(makeupBrands[3] + " is a good brand for you!");
	}
	else {
			alert("That's a little too much for lipstick.");
	}



			
		

