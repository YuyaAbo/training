//
//	calc.js
//	Author: YuyaAbo
//

// ---------- 変数定義 ----------
var result	= 0;	// 一つ前の計算結果
var num		= '';	// 現在保持している数字
var preKey	= '';	// 直前に入力された記号
var nextKey	= '';	// 次の計算のための記号

// ---------- 関数定義 ----------

// 数字ボタンが押された際に呼ばれる
function numBtnPush(btn){
	if (num == '') {
		num = btn;
	} else {
		num += ''+btn;
	}

	document.getElementById("result").innerHTML = num;
}

// 記号ボタンが押された際に呼ばれる
function keyBtnPush(key) {
	if (preKey == '') {
		preKey = nextKey = key;
		result = Number(num);
	} else {
		preKey = nextKey;
		result = calc(preKey, result, num);
		nextKey = key;
		document.getElementById("result").innerHTML = result;
	};

	num = '';
	console.log("(num,result) = (%d,%d)\n(preKey,nextKey) = (%s,%s)", num, result, preKey, nextKey);

	document.getElementById("type").innerHTML = nextKey;
}

// keyに対応した計算を実行して結果を返す
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

// 全ての変数と表示内容をクリア
function allClear(){
	result	= 0;
	num 	= '';
	preKey 	= '';
	nextKey = '';

	document.getElementById("result").innerHTML = '0';
	document.getElementById("type").innerHTML = '';
}

// イコール（未実装）
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