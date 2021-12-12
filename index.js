function china () {
	document.getElementById("title").innerHTML="林泓旭的网站";
	document.getElementById("aone").innerHTML="出发";
	document.getElementById("button").innerHTML="<button onclick='English()'>English</button>";
}
function English () {
	document.getElementById("title").innerHTML="linhongxu's website";
	document.getElementById("aone").innerHTML="GO";
	document.getElementById("button").innerHTML="<button onclick='china()'>中文</button>";
}