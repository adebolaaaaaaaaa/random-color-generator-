function randomNum(){
	hex = Math.floor(Math.random() * 12);
}
function change(){
	var all = ["A", "B", "C", "D", "E", "F", 0,1,2,3,4,5,6,7,8,9];
	var hexCode = "#" + all[randomNum(), hex]+ all[randomNum(), hex]+ all[randomNum(), hex]+ all[randomNum(), hex]+ all[randomNum(), hex]+ all[randomNum(), hex] ;
    document.body.style.backgroundColor = hexCode;
    document.getElementById('hexcode').innerHTML = hexCode;
	console.log(hexCode);
}
window.onload = change();