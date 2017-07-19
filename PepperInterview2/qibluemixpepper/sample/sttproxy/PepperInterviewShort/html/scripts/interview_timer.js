//------------------------
//タイマーカウント用
var sw;
//タイマー表示の画像
var timerImage = {};
	timerImage[1]="images/timer/60.png";
	timerImage[2]="images/timer/59.png";
	timerImage[3]="images/timer/58.png";
	timerImage[4]="images/timer/57.png";
	timerImage[5]="images/timer/56.png";
	timerImage[6]="images/timer/55.png";
	timerImage[7]="images/timer/54.png";
	timerImage[8]="images/timer/53.png";
	timerImage[9]="images/timer/52.png";
	timerImage[10]="images/timer/51.png";
	timerImage[11]="images/timer/50.png";
	timerImage[12]="images/timer/49.png";
	timerImage[13]="images/timer/48.png";
	timerImage[14]="images/timer/47.png";
	timerImage[15]="images/timer/46.png";
	timerImage[16]="images/timer/45.png";
	timerImage[17]="images/timer/44.png";
	timerImage[18]="images/timer/43.png";
	timerImage[19]="images/timer/42.png";
	timerImage[20]="images/timer/41.png";
	timerImage[21]="images/timer/40.png";
	timerImage[22]="images/timer/39.png";
	timerImage[23]="images/timer/38.png";
	timerImage[24]="images/timer/37.png";
	timerImage[25]="images/timer/36.png";
	timerImage[26]="images/timer/35.png";
	timerImage[27]="images/timer/34.png";
	timerImage[28]="images/timer/33.png";
	timerImage[29]="images/timer/32.png";
	timerImage[30]="images/timer/31.png";
	timerImage[31]="images/timer/30.png";
	timerImage[32]="images/timer/29.png";
	timerImage[33]="images/timer/28.png";
	timerImage[34]="images/timer/27.png";
	timerImage[35]="images/timer/26.png";
	timerImage[36]="images/timer/25.png";
	timerImage[37]="images/timer/24.png";
	timerImage[38]="images/timer/23.png";
	timerImage[39]="images/timer/22.png";
	timerImage[40]="images/timer/21.png";
	timerImage[41]="images/timer/20.png";
	timerImage[42]="images/timer/19.png";
	timerImage[43]="images/timer/18.png";
	timerImage[44]="images/timer/17.png";
	timerImage[45]="images/timer/16.png";
	timerImage[46]="images/timer/15.png";
	timerImage[47]="images/timer/14.png";
	timerImage[48]="images/timer/13.png";
	timerImage[49]="images/timer/12.png";
	timerImage[50]="images/timer/11.png";
	timerImage[51]="images/timer/10.png";
	timerImage[52]="images/timer/09.png";
	timerImage[53]="images/timer/08.png";
	timerImage[54]="images/timer/07.png";
	timerImage[55]="images/timer/06.png";
	timerImage[56]="images/timer/05.png";
	timerImage[57]="images/timer/04.png";
	timerImage[58]="images/timer/03.png";
	timerImage[59]="images/timer/02.png";
	timerImage[60]="images/timer/01.png";
	timerImage[61]="images/timer/00.png";

//タイマー
var timer;

var slideImageName = "";

// サブスクライブするメモリーイベント
	$.subscribeToALMemoryEvent("setTimer", function (data) {
		console.log("subscribeToALMemoryEvent setTimer");
		setTimer(data);
	});

	$.subscribeToALMemoryEvent("startTimer", function (data) {
		console.log("subscribeToALMemoryEvent startTimer");
		startTimer(data);
	});

	$.subscribeToALMemoryEvent("timerCount", function (data) {
		console.log("subscribeToALMemoryEvent stopTimer");
		timerCount();
	});

	$.subscribeToALMemoryEvent("stopTimer", function (data) {
		console.log("subscribeToALMemoryEvent stopTimer");
		stopTimer(data);
	});


function setTimer(data){
	clearTimeout(timer);
	document.count.src=timerImage[1];
}

function startTimer(data){
	sw=1;
	setTimeout("timerCount()",500);
}

function timerCount(){
	timer = setTimeout("timerCount()",1000);
	document.count.src=timerImage[sw];
	sw=sw+1;
	if(sw > 61){
		sw=61;
	}
	
	$.raiseALMemoryEvent("event/medtronic/quiz/currentTime", sw);
}

function stopTimer(data){
	clearTimeout(timer);
}
