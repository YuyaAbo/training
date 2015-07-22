//
//	calc.js
//	Author: YuyaAbo
//

// ---------- 変数定義 ----------
var result	=  0;	// 一つ前の計算結果
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

	document.getElementById("output").innerHTML = Number(num).toLocaleString();
}

// 記号ボタンが押された際に呼ばれる
function keyBtnPush(key) {
	if (preKey == '') {
		preKey = nextKey = key;
		result = Number(num);
	} else if (num == '' || preKey == 'E') { 
		preKey = nextKey = key;
	}else {
		result = calc(nextKey, result, num);
		preKey = nextKey;
		nextKey = key;
		document.getElementById("output").innerHTML = result.toLocaleString();
	};
	num = '';

	document.getElementById("type").innerHTML = nextKey;
}

// keyに対応した四則演算を実行して結果を返す
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

	document.getElementById("output").innerHTML = '0';
	document.getElementById("type").innerHTML = '';
}

// イコール関数：連続して入力した場合はx+y=zの+yに相当する部分を使いまわす
function equal(){
	if (preKey != '' || num != '') {
		result = calc(nextKey, result, num);
		preKey = 'E';
		document.getElementById("output").innerHTML = result.toLocaleString();
	}
}