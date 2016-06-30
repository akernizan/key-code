var wrapper = document.getElementById('wrapper');
var keyCodeTxt = document.getElementById('key__code__text');
var symbolTxt = document.getElementById('symbol__text');

var backspace = 8
var tab = 9
var enter = 13
var shift = 16
var ctrl = 17
var alt = 18
var pause = 19
var caps = 20
var escape = 27
var pageUp = 33
var pageDown = 34
var end = 35
var home = 36
var leftArrow = 37
var upArrow = 38
var downArrow = 40
var insert = 45
var deleteBtn = 46
var zero = 48
var one = 49
var two = 50
var three = 51
var four = 52
var five = 53
var six = 54
var seven = 55
var eight = 56
var nine = 57
var A = 65
var B = 66
var C = 67
var D = 68
var E = 69
var F = 70
var G = 71
var H = 72
var I = 73
var J = 74
var K = 75
var L = 76
var M = 77
var N = 78
var O = 79
var P = 80
var Q = 81
var R = 82
var S = 83
var T = 84
var U = 85
var V = 86
var W = 87
var X = 88
var Y = 89
var Z = 90
var leftWindow = 91
var rightWindow = 92
var select = 93
var numPad0 = 96
var numPad1 = 97
var numPad2 = 98
var numPad3 = 99
var numPad4 = 100
var numPad5 = 101
var numPad6 = 102
var numPad7 = 103
var numPad8 = 104
var numPad9 = 105
var multiply = 106
var add = 107
var subtract = 109
var decimalPoint = 110
var divide = 111
var f1 = 112
var f2 = 113
var f3 = 114
var f4 = 115
var f5 = 116
var f6 = 117
var f7 = 118
var f8 = 119
var f9 = 120
var f10 = 121
var f11 = 122
var f12 = 123
var numLock = 144
var scrollLock = 145
var semiColon = 186
var equalSign = 187
var comma = 188
var dash = 189
var period = 190
var forwardSlash = 191
var graveAccent = 192
var openBracket = 219
var backSlah = 220
var closeBracket = 221
var singleQuote = 222


function getKeyCode(event) {

}

document.addEventListener('keydown', function (event) {
	if (event.which == backspace) {
		event.preventDefault();
		keyCodeTxt.innerHTML = backspace;
		symbolTxt.innerHTML = 'backspace'
	}

	if (event.which == tab) {
		event.preventDefault();
		keyCodeTxt.innerHTML = tab;
		symbolTxt.innerHTML = 'tab'
	}
	if (event.which == enter) {
		event.preventDefault();
		keyCodeTxt.innerHTML = enter;
		symbolTxt.innerHTML = 'enter'
	}

	if (event.which == shift) {
		event.preventDefault();
		keyCodeTxt.innerHTML = shift;
		symbolTxt.innerHTML = 'shift'
	}
	if (event.which == ctrl) {
		event.preventDefault();
		keyCodeTxt.innerHTML = ctrl;
		symbolTxt.innerHTML = 'ctrl'
	}

	if (event.which == alt) {
		event.preventDefault();
		keyCodeTxt.innerHTML = alt;
		symbolTxt.innerHTML = 'alt'
	}
	if (event.which == pause) {
		event.preventDefault();
		keyCodeTxt.innerHTML = pause;
		symbolTxt.innerHTML = 'pause'
	}

	if (event.which == caps) {
		event.preventDefault();
		keyCodeTxt.innerHTML = caps;
		symbolTxt.innerHTML = 'caps'
	}
	if (event.which == escape) {
		event.preventDefault();
		keyCodeTxt.innerHTML = escape;
		symbolTxt.innerHTML = 'escape'
	}

	if (event.which == pageUp) {
		event.preventDefault();
		keyCodeTxt.innerHTML = pageUp;
		symbolTxt.innerHTML = 'page up'
	}
	if (event.which == pageDown) {
		event.preventDefault();
		keyCodeTxt.innerHTML = pageDown;
		symbolTxt.innerHTML = 'page down'
	}

	if (event.which == end) {
		event.preventDefault();
		keyCodeTxt.innerHTML = end;
		symbolTxt.innerHTML = 'end'
	}
	if (event.which == home) {
		event.preventDefault();
		keyCodeTxt.innerHTML = home;
		symbolTxt.innerHTML = 'home'
	}

	if (event.which == leftWindow) {
		event.preventDefault();
		keyCodeTxt.innerHTML = leftWindow;
		symbolTxt.innerHTML = 'left window'
	}
	if (event.which == rightWindow) {
		event.preventDefault();
		keyCodeTxt.innerHTML = rightWindow;
		symbolTxt.innerHTML = 'right window'
	}

	if (event.which == downArrow) {
		event.preventDefault();
		keyCodeTxt.innerHTML = downArrow;
		symbolTxt.innerHTML = 'down arrow'
	}

	if (event.which == insert) {
		event.preventDefault();
		keyCodeTxt.innerHTML = insert;
		symbolTxt.innerHTML = 'insert'
	}

	if (event.which == deleteBtn) {
		event.preventDefault();
		keyCodeTxt.innerHTML = deleteBtn;
		symbolTxt.innerHTML = 'delete'
	}
	if (event.which == zero) {
		event.preventDefault();
		keyCodeTxt.innerHTML = zero;
		symbolTxt.innerHTML = 'zero'
	}

	if (event.which == one) {
		event.preventDefault();
		keyCodeTxt.innerHTML = one;
		symbolTxt.innerHTML = 'one'
	}
	if (event.which == two) {
		event.preventDefault();
		keyCodeTxt.innerHTML = two;
		symbolTxt.innerHTML = 'two'
	}

	if (event.which == three) {
		event.preventDefault();
		keyCodeTxt.innerHTML = three;
		symbolTxt.innerHTML = 'three'
	}
	if (event.which == four) {
		event.preventDefault();
		keyCodeTxt.innerHTML = four;
		symbolTxt.innerHTML = 'four'
	}

	if (event.which == five) {
		event.preventDefault();
		keyCodeTxt.innerHTML = five;
		symbolTxt.innerHTML = 'five'
	}
	if (event.which == six) {
		event.preventDefault();
		keyCodeTxt.innerHTML = six;
		symbolTxt.innerHTML = 'six'
	}

	if (event.which == seven) {
		event.preventDefault();
		keyCodeTxt.innerHTML = seven;
		symbolTxt.innerHTML = 'seven'
	}
	if (event.which == eight) {
		event.preventDefault();
		keyCodeTxt.innerHTML = eight;
		symbolTxt.innerHTML = 'eight'
	}

	if (event.which == nine) {
		event.preventDefault();
		keyCodeTxt.innerHTML = nine;
		symbolTxt.innerHTML = 'nine'
	}
	if (event.which == A) {
		event.preventDefault();
		keyCodeTxt.innerHTML = A;
		symbolTxt.innerHTML = 'A'
	}

	if (event.which == B) {
		event.preventDefault();
		keyCodeTxt.innerHTML = B;
		symbolTxt.innerHTML = 'B'
	}
	if (event.which == C) {
		event.preventDefault();
		keyCodeTxt.innerHTML = C;
		symbolTxt.innerHTML = 'C'
	}

	if (event.which == D) {
		event.preventDefault();
		keyCodeTxt.innerHTML = D;
		symbolTxt.innerHTML = 'D'
	}

	//space

	if (event.which == E) {
		event.preventDefault();
		keyCodeTxt.innerHTML = E;
		symbolTxt.innerHTML = 'E'
	}

	if (event.which == F) {
		event.preventDefault();
		keyCodeTxt.innerHTML = F;
		symbolTxt.innerHTML = 'F'
	}
	if (event.which == G) {
		event.preventDefault();
		keyCodeTxt.innerHTML = G;
		symbolTxt.innerHTML = 'G'
	}

	if (event.which == H) {
		event.preventDefault();
		keyCodeTxt.innerHTML = H;
		symbolTxt.innerHTML = 'H'
	}
	if (event.which == I) {
		event.preventDefault();
		keyCodeTxt.innerHTML = I;
		symbolTxt.innerHTML = 'I'
	}

	if (event.which == J) {
		event.preventDefault();
		keyCodeTxt.innerHTML = J;
		symbolTxt.innerHTML = 'J'
	}
	if (event.which == K) {
		event.preventDefault();
		keyCodeTxt.innerHTML = K;
		symbolTxt.innerHTML = 'K'
	}

	if (event.which == L) {
		event.preventDefault();
		keyCodeTxt.innerHTML = L;
		symbolTxt.innerHTML = 'L'
	}
	if (event.which == M) {
		event.preventDefault();
		keyCodeTxt.innerHTML = M;
		symbolTxt.innerHTML = 'M'
	}

	if (event.which == N) {
		event.preventDefault();
		keyCodeTxt.innerHTML = N;
		symbolTxt.innerHTML = 'N'
	}
	if (event.which == O) {
		event.preventDefault();
		keyCodeTxt.innerHTML = O;
		symbolTxt.innerHTML = 'O'
	}

	if (event.which == P) {
		event.preventDefault();
		keyCodeTxt.innerHTML = P;
		symbolTxt.innerHTML = 'P'
	}
	if (event.which == Q) {
		event.preventDefault();
		keyCodeTxt.innerHTML = Q;
		symbolTxt.innerHTML = 'Q'
	}

	if (event.which == R) {
		event.preventDefault();
		keyCodeTxt.innerHTML = R;
		symbolTxt.innerHTML = 'R'
	}
	if (event.which == S) {
		event.preventDefault();
		keyCodeTxt.innerHTML = S;
		symbolTxt.innerHTML = 'S'
	}

	if (event.which == T) {
		event.preventDefault();
		keyCodeTxt.innerHTML = T;
		symbolTxt.innerHTML = 'T'
	}

	if (event.which == U) {
		event.preventDefault();
		keyCodeTxt.innerHTML = U;
		symbolTxt.innerHTML = 'U'
	}

	if (event.which == V) {
		event.preventDefault();
		keyCodeTxt.innerHTML = V;
		symbolTxt.innerHTML = 'V'
	}
	if (event.which == W) {
		event.preventDefault();
		keyCodeTxt.innerHTML = W;
		symbolTxt.innerHTML = 'W'
	}

	if (event.which == X) {
		event.preventDefault();
		keyCodeTxt.innerHTML = X;
		symbolTxt.innerHTML = 'X'
	}
	if (event.which == Y) {
		event.preventDefault();
		keyCodeTxt.innerHTML = Y;
		symbolTxt.innerHTML = 'Y'
	}

	if (event.which == Z) {
		event.preventDefault();
		keyCodeTxt.innerHTML = Z;
		symbolTxt.innerHTML = 'Z'
	}
	if (event.which == leftWindow) {
		event.preventDefault();
		keyCodeTxt.innerHTML = leftWindow;
		symbolTxt.innerHTML = 'left window'
	}

	if (event.which == rightWindow) {
		event.preventDefault();
		keyCodeTxt.innerHTML = rightWindow;
		symbolTxt.innerHTML = 'right window'
	}
	if (event.which == select) {
		event.preventDefault();
		keyCodeTxt.innerHTML = select;
		symbolTxt.innerHTML = 'select'
	}

	if (event.which == numPad0) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad0;
		symbolTxt.innerHTML = '0'
	}
	if (event.which == numPad1) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad1;
		symbolTxt.innerHTML = '1'
	}

	if (event.which == numPad2) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad2;
		symbolTxt.innerHTML = '2'
	}
	if (event.which == numPad3) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad3;
		symbolTxt.innerHTML = '3'
	}

	if (event.which == numPad4) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad4;
		symbolTxt.innerHTML = '4'
	}
	if (event.which == numPad5) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad5;
		symbolTxt.innerHTML = '5'
	}

	if (event.which == numPad6) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad6;
		symbolTxt.innerHTML = '6'
	}


	//SPACE

	if (event.which == numPad8) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad8;
		symbolTxt.innerHTML = '8'
	}
	if (event.which == numPad9) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numPad9;
		symbolTxt.innerHTML = '9'
	}

	if (event.which == multiply) {
		event.preventDefault();
		keyCodeTxt.innerHTML = multiply;
		symbolTxt.innerHTML = '*'
	}
	if (event.which == add) {
		event.preventDefault();
		keyCodeTxt.innerHTML = add;
		symbolTxt.innerHTML = '+'
	}

	if (event.which == subtract) {
		event.preventDefault();
		keyCodeTxt.innerHTML = subtract;
		symbolTxt.innerHTML = '-'
	}
	if (event.which == decimalPoint) {
		event.preventDefault();
		keyCodeTxt.innerHTML = decimalPoint;
		symbolTxt.innerHTML = '.'
	}

	if (event.which == divide) {
		event.preventDefault();
		keyCodeTxt.innerHTML = divide;
		symbolTxt.innerHTML = '/ divide'
	}


	if (event.which == f1) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f1;
		symbolTxt.innerHTML = 'f1'
	}
	if (event.which == f2) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f2;
		symbolTxt.innerHTML = 'f2'
	}

	if (event.which == f3) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f3;
		symbolTxt.innerHTML = 'f3'
	}
	if (event.which == f4) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f4;
		symbolTxt.innerHTML = 'f4'
	}

	if (event.which == f5) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f5;
		symbolTxt.innerHTML = 'f5'
	}
	if (event.which == f6) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f6;
		symbolTxt.innerHTML = 'f6'
	}

	if (event.which == f7) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f7;
		symbolTxt.innerHTML = 'f7'
	}
	if (event.which == f8) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f8;
		symbolTxt.innerHTML = 'f8'
	}

	if (event.which == f9) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f9;
		symbolTxt.innerHTML = 'f9'
	}
	if (event.which == f10) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f10;
		symbolTxt.innerHTML = 'f10'
	}

	if (event.which == f11) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f11;
		symbolTxt.innerHTML = 'f11'
	}
	if (event.which == f12) {
		event.preventDefault();
		keyCodeTxt.innerHTML = f12;
		symbolTxt.innerHTML = 'f12'
	}




	if (event.which == numLock) {
		event.preventDefault();
		keyCodeTxt.innerHTML = numLock;
		symbolTxt.innerHTML = 'num lock'
	}
	if (event.which == scrollLock) {
		event.preventDefault();
		keyCodeTxt.innerHTML = scrollLock;
		symbolTxt.innerHTML = 'scroll lock'
	}

	if (event.which == semiColon) {
		event.preventDefault();
		keyCodeTxt.innerHTML = semiColon;
		symbolTxt.innerHTML = ';'
	}
	if (event.which == equalSign) {
		event.preventDefault();
		keyCodeTxt.innerHTML = equalSign;
		symbolTxt.innerHTML = '='
	}

	if (event.which == comma) {
		event.preventDefault();
		keyCodeTxt.innerHTML = comma;
		symbolTxt.innerHTML = ','
	}
	if (event.which == dash) {
		event.preventDefault();
		keyCodeTxt.innerHTML = dash;
		symbolTxt.innerHTML = '- dash'
	}

	if (event.which == period) {
		event.preventDefault();
		keyCodeTxt.innerHTML = period;
		symbolTxt.innerHTML = '. period'
	}
	if (event.which == forwardSlash) {
		event.preventDefault();
		keyCodeTxt.innerHTML = forwardSlash;
		symbolTxt.innerHTML = '/'
	}

	if (event.which == graveAccent) {
		event.preventDefault();
		keyCodeTxt.innerHTML = graveAccent;
		symbolTxt.innerHTML = '`'
	}
	if (event.which == openBracket) {
		event.preventDefault();
		keyCodeTxt.innerHTML = openBracket;
		symbolTxt.innerHTML = '['
	}

	if (event.which == backSlah) {
		event.preventDefault();
		keyCodeTxt.innerHTML = backSlah;
		symbolTxt.innerHTML = "back slash"
	}
	if (event.which == closeBracket) {
		event.preventDefault();
		keyCodeTxt.innerHTML = closeBracket;
		symbolTxt.innerHTML = ']'
	}

	if (event.which == singleQuote) {
		event.preventDefault();
		keyCodeTxt.innerHTML = singleQuote;
		symbolTxt.innerHTML = "''"
	}

})