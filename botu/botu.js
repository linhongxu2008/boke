var a=0
function botu(){

if(a==2){
	a=0
}
else{
++a	
}
if(a==0){
	document.getElementById('one').style.display="block";
	document.getElementById('two').style.display="none";
	document.getElementById('three').style.display="none";

}
if(a==1){
	document.getElementById('two').style.display="block";
	document.getElementById('one').style.display="none";
	document.getElementById('three').style.display="none";

}
if(a==2){
	document.getElementById('two').style.display="none";
	document.getElementById('one').style.display="none";
	document.getElementById('three').style.display="block";

}
}
