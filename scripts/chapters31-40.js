//function displayDate(){
	//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	//var now1 = new Date();
	//var theDay = now1.getDay();
	//var today = dayNames[theDay];
	var dayOfWk = prompt("What is the day of the week?")
	dayOfWk = dayOfWk.toLowerCase();
	switch(dayOfWk) {
	case "saturday" :
		alert("Our new eyeshadow palette launches today!");
		break;
	case "sunday" :
		alert("Our new eyeshadow palette launched yesterday!");
		break;
	case "friday" :
		alert("Our new eyeshadow palette launches tomorrow!");
		break;
	default :
		alert("Our new palette launches soon!");
	}
function displayDate() {
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var now2 = new Date();
	var theMonth = now2.getMonth();
	var thisMonth = monthNames[theMonth];
	
	var now3 = new Date();
	var thisYear = now3.getFullYear();
		alert(dayOfWk + " " + thisMonth + " " + thisYear + " is today's date.");
		
	var launchDate = new Date("March 7, 2021");
	launchDate.setFullYear(2020);
		alert("Our eyeshadow palette launches on " + launchDate);

var part1 = "Time to mark ";
var part2 = "your calender!";
displayReminder(part1, part2);
function displayReminder(part1, part2) {
	alert(part1 + part2);
}


function newPrice(price, tax) {
	return price + tax;
}
	alert(newPrice(25, 1.75) + " is the price!");
	



	
	document.getElementById("demo").innerHTML = text;
}