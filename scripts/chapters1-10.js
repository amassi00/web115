    var qty = 0;
	var x = prompt("What color are your eyes?");
	  if (x === "brown") {
	    alert("Brown eyes are enhanced by blue eyeshadow.");
		qty = prompt("How many blue eyeshadows would you like to order?");
      }
	  else if (x === "blue") {
	    alert("Blue eyes are enhanced by dark brown, purple and pink eyeshadow.");
		qty = prompt("How many purple and pink eyeshadows would you like to order?");
	  }
	  else if (x === "green") {
	    alert("Green eyes are enhanced by brown and gold eyeshadow.");
		qty = prompt("How many brown and gold eyeshadows would you like to order?");
	  }
	  else {
	    alert("Brown eyeshadow makes all eye colors pop!");
		qty = prompt("How many brown eyeshadows would you like to order?");
	  }
	  alert("Thank you for ordering " + qty + "!");
      alert("Next time think about ordering " + ++qty + "!");