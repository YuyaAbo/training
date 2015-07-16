var result	= 0;
var num		= "0";
var key		= "";
var kigou	= "";

function numBtnPush(btn){
	if(num == "0"){
		num = btn;
	}else{
		num += ""+btn;
	}
	console.log(num);

	document.getElementById("output").innerHTML = num;
}

function allClear(){
	key = "";
	result = 0;
	num = "0";

	console.log("Clear");
	document.getElementById("output").innerHTML = num;
}

function add(){
	key = "+";
	result += num;
	num = 0;

	console.log(num);
	document.getElementById("output").innerHTML = result;
}