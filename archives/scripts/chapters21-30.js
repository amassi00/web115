	var x = prompt("What is your eye color?");
	alert(x.toUpperCase());
	var y = x.length;
	var seg = x.slice(1, y - 1);
	alert(seg + " is your eye color without the first and last letter!");
	var eyeColor = prompt("How many letters are in your eye color?");
	var numberOfLetters = parseFloat(eyeColor) + 2;
	var newNum = 5;
	var newerNum = newNum + 5;
	alert(newerNum + numberOfLetters);
	
function displayBrand(){
			var text = "My favorite makeup brand is Too Faced.";
			text = text.replace("makeup", "cosmetic");
			var newChar = text.indexOf("Too Faced");
				if (newChar !== -1) {
					text = text.slice(0, newChar) + "Anastasia" + text.slice(newChar + 9);
				}
			var randomNumber = Math.random();
				alert(randomNumber);
			var newNumber = Math.round(randomNumber);
				alert("The new rounded number is " + newNumber);
			
					
			document.getElementById("demo").innerHTML = text;
		}

