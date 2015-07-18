var result	= 0;
var num		= 0;
var key		= "";
var kigou	= "";

function numBtnPush(btn){
	if(num == 0){
		num = btn;
	}else{
		num += ""+btn;
	}

	key = btn;

	console.log("num = %d", num);
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
	if (isFinite(key)) {
		result += Number(num);
		num = 0;
	};
	key = "+";

	console.log("num = %d",num);
	console.log("result = %d",result);

	//document.getElementById("output").innerHTML = result;
}

function equal(){
	if (isFinite(key)) {
		result += Number(num);
		num = 0;
		console.log("result = %d",result);
		document.getElementById("output").innerHTML = result;
	};
	key = "E";
}