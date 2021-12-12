var b=0

self.setInterval("ifsforcolor()",100);
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
	
}
