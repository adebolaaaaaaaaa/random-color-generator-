function randomNum(){
	return(Math.floor(Math.random() * 16));
}
function change(){
	var all = ["A", "B", "C", "D", "E", "F", 0,1,2,3,4,5,6,7,8,9];
	var hexCode = "#" + all[randomNum()]+ all[randomNum()]+ all[randomNum()]+ all[randomNum()]+ all[randomNum()]+ all[randomNum()] ;
    document.body.style.backgroundColor = hexCode;
    document.getElementById('hexcode').innerHTML = hexCode;
	document.getElementById("rgb").innerHTML = document.body.style.backgroundColor;
	console.log(hexCode);
}
window.onload = change();