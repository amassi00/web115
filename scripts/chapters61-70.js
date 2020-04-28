function getNodeType() {
	var x = document.getElementById("div1").nodeType;
	document.getElementById("demo4").innerHTML = x;
}
function getLastChild() {
	var firstEl = document.getElementById("div1");
	var secondEl = firstEl.lastChild.nodeName;
	document.getElementById("demo1").innerHTML = secondEl;
}
function getNodeLength() {
	var div = document.getElementById("div1");
	var nodelist = div.getElementsByTagName("p");
	document.getElementById("demo2").innerHTML = nodelist.length;
}
function getIdAttribute() {
	var y = document.getElementById("div1").getAttribute("id");
	document.getElementById("demo3").innerHTML = y;
}
function addNode() {
	var x = document.createElement("p");
	var y = document.createTextNode("Foundation");
	x.appendChild(y);
	var z = document.getElementById("div1");
	z.appendChild(x);
}
function addNodeBefore() {
var w = document.createElement("p");
var x = document.createTextNode("Concealer");
w.appendChild(x);

var y = document.getElementById("div1");
var z= document.getElementById("p1");
y.insertBefore(w,z);
}
function removeNode() {
	var x = document.getElementById("div1");
	var y = document.getElementById("p2");
	x.removeChild(y);
}