function change(){
	var letter = ["a", "b", "c", "d", "e", "f"];
	var num1 = Math.floor(Math.random() * 10);
	var num2 = Math.floor(Math.random() * 10);
	var num3 = Math.floor(Math.random() * 10);
	var num4 = Math.floor(Math.random() * 10);
	var num5 = Math.floor(Math.random() * 10);
	var num6 = Math.floor(Math.random() * 10);
	var all = [letter[0], letter[1], letter[2], letter[3], letter[4], letter[5], num1,num2,num3,num4,num5,num6];
	var hex1 = Math.floor(Math.random() * 12);
	var hex2 = Math.floor(Math.random() * 12);
	var hex3 = Math.floor(Math.random() * 12);
	var hex4 = Math.floor(Math.random() * 12);
	var hex5 = Math.floor(Math.random() * 12);
	var hex6 = Math.floor(Math.random() * 12);
	var hexCode = "#" + all[hex1]+ all[hex2]+ all[hex3]+ all[hex4]+ all[hex5]+ all[hex6] ;
    document.body.style.backgroundColor = hexCode;
    document.getElementById('hexcode').innerHTML = hexCode;
	console.log(hexCode);
}
window.onload = change();
