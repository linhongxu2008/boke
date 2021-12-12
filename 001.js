var b=0

self.setInterval("ifsforcolor()",100);
self.setInterval("ifsformain()",100);
function ifsforcolor() {
	if (b==1) {
		var a = document.getElementById("buttonneed");
		
			a.style.backgroundImage= "linear-gradient(rgba(0,0,0,0.2),rgba(255, 255, 255, 0.3))";
		}
	 else{
		var a = document.getElementById("buttonneed");
		
		a.style.backgroundColor= "rgba(0,0,0,0.0)";
	}
}
function button () {
	b=1
}
function ifsformain () {
	if (b==1) {
		document.getElementById("main").innerHTML="<iframe id='mainin' src='001渐变色.html'/>"
	} else{
		document.getElementById("main").innerHTML="<a id='aone' href='index.html'>返回</a>"
	}
}
