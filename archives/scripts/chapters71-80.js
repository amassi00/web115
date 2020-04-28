function Brand(eyeshadow, lipstick, blush, foundation) {
	this.favoriteEyeshadow = eyeshadow;
	this.favoriteLipstick = lipstick;
	this.favoriteBlush = blush;
	this.eyeshadow = function() {
    return this.favoriteEyeshadow
	};
	 
}
Brand.prototype.foundation = "Too Faced";
var myFavorite = new Brand("ColourPop", "Fenty Beauty", "Jeffree Star", "TooFaced");
document.getElementById("p1").innerHTML = "My favorite lipstick brand is " + myFavorite.favoriteLipstick + ".";
document.getElementById("p2").innerHTML = "My favorite eyeshadow brand is " + myFavorite.eyeshadow() + ".";
document.getElementById("p3").innerHTML = "My favorite foundation brand is " + myFavorite.foundation + "."; 
function brandList() {
  var brands = {brand1:"Huda Beauty", brand2:"Urban Decay", brand3:"Anastasia"}; 
  
  var text = "";
  var x;
  for (x in brands) {
    text += brands[x] + " ";
  }
  document.getElementById("p4").innerHTML = text;
}
document.getElementById("p5").innerHTML = 
"The full URL of this page is:<br>" + window.location.href;

function loadToc() {
  window.location.assign("http://students.cpcc.edu/~amassi00/web115/toc.html")
}
function goBack() {
  window.history.back()
}
function openWindow() {  
  var newWindow = window.open("", "myWindow", "width=500,height=300");
  newWindow.document.write("<p>This is a new window</p>");
}
