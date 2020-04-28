function expandText() {
	var expandedParagraph = "Eye shadow is a pigmented powder or cream used to accentuate the eye area, normally on, above, and under the eyelids. Many colors may be used at once and blended together to create different effects using a blending brush. This is conventionally applied with a range of eyeshadow brushes, though it isn't uncommon for alternative methods of application to be used such as fingers. However, it is important to have clean fingers because oils from your skin can result in breakouts.";
	document.getElementById("newText").innerHTML = expandedParagraph;
}
function makeInvisible() {
	document.getElementById("eyeshadowImage").className = "hidden";
}
function swapPic() {
	var pic = document.getElementById("before");
	pic.src = "images/eyeshadowafter.jpg";
}
function makeBig() {
	document.getElementById("p1").style.fontSize = "2em";
	document.getElementById("p1").style.color = "#86cb92";
}
function displayProduct1() {
	var newProduct1 = document.getElementsByTagName("p");
	alert(newProduct1[2].innerHTML);
}
function displayProduct2() {
	var x = document.getElementById("products");
	var newProduct2 = x.getElementsByTagName("p");
	alert(newProduct2[2].innerHTML);
}
function displayProduct3() {
	var y = document.getElementById("products");
	var newProduct3 = y.childNodes[7];
	//alert(newProduct3.length);
	alert(newProduct3.innerText);
}