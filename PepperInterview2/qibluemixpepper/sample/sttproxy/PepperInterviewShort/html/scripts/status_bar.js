// JavaScript Document

//ChoregrapheのRaiseEventボックスの変数を「setStatusBar」に設定し、現在の進捗率の数字を渡してください。
//渡す数字はパーセンテージにしてください。
//50%を表したいときは、50を関数に渡すと、スタータスバーが画面全体の50%の長さになります。
$.subscribeToALMemoryEvent("setStatusBar", function (data){
	console.log("subscribeToALMemoryEvent setStatusBar");
	setStatusBar(data);
});

function setStatusBar(data){
	
	//class="status"の横幅を取得
	var cursor_status = $(".status");
	status_width = cursor_status.width(); 
	
	//statusの幅の○○%は、何pxになるのか計算
	bar_width = status_width * data/100
	//バーの長さを変更
	$(".bar").animate({width: bar_width}, 500, "easeOutQuad");
}