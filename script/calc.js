var result	= 0;	// 一つ前の計算結果
var num		= '';	// 一つ前の計算記号
var preKey	= '';	// 直前に入力された記号
var nextKey	= '';	// 次の計算のための記号

function numBtnPush(btn){
	if (num == '') {
		num = btn;
	} else {
		num += ''+btn;
	}

	//key = btn;

	console.log("num = %d", num);
	document.getElementById("result").innerHTML = num;
}

function allClear(){
	key = '';
	result = 0;
	num = 0;

	console.log("Clear");
	document.getElementById("result").innerHTML = num;
}

function calc(key, result, num) {
	switch (key) {
		case '+':
			return result += Number(num);
			break;
		case '-':
			return result -= Number(num);
			break;
		case '*':
			return result *= Number(num);
			break;
		case '/':
			return result /= Number(num);
			break;
		default:
			return 0;
			break;
	}
}

// 記号ボタンが押された際の関数
function keyBtnPush(key) {
	if (preKey == '') {
		preKey = nextKey = key;
		result = Number(num);
		num = '';
	} else {
		preKey = nextKey;
		result = calc(preKey, result, num);
		num = '';
		nextKey = key;
		console.log("result = %d", result);
		document.getElementById("result").innerHTML = result;
	};

	console.log("(num,result) = (%d,%d)\n(preKey,nextKey) = (%s,%s)", num, result, preKey, nextKey);

	document.getElementById("type").innerHTML = nextKey;
}

// 足し算
function add(){
	if (preKey == '') {
		preKey = nextKey = '+';
		result = Number(num);
		num = '';
	} else {
		preKey = nextKey;
		result = calc(preKey, result, num);
		num = '';
		nextKey = '+';
		console.log("result = %d", result);
		document.getElementById("result").innerHTML = result;
	};

	console.log("(num,result) = (%d,%d)\n(preKey,nextKey) = (%s,%s)", num, result, preKey, nextKey);

	document.getElementById("type").innerHTML = nextKey;
}

// 引き算
function sub(){
	if (preKey == '') {
		preKey = nextKey = '-';
		result = Number(num);
		num = '';
	} else {
		preKey = nextKey;
		result = calc(preKey, result, num);
		num = '';
		nextKey = '-';
		console.log("result = %d", result);
		document.getElementById("result").innerHTML = result;
	};

	console.log("(num,result) = (%d,%d)\n(preKey,nextKey) = (%s,%s)", num, result, preKey, nextKey);

	document.getElementById("type").innerHTML = nextKey;
}

// イコール
function equal(){
	if (isFinite(key)) {
		result += Number(num);
		num = 0;
		key = "";
		console.log("result = %d",result);
		document.getElementById("result").innerHTML = result;
	};
	key = "E";
}