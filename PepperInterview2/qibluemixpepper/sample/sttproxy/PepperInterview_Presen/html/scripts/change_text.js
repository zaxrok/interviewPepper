// JavaScript Document

//ChoregrapheのRaiseEventボックスの変数を以下「set〜」に設定し、差し替えるテキストを渡してください。

//ユーザー確認画面 : ID
$.subscribeToALMemoryEvent("setUserID", function (data){
	console.log("subscribeToALMemoryEvent setUserID");
	setUserID(data);
});
//ユーザー確認画面 : お名前
$.subscribeToALMemoryEvent("setUserName", function (data){
	console.log("subscribeToALMemoryEvent setUserName");
	setUserName(data);
});
//ユーザー確認画面 : 生年月日（年）
$.subscribeToALMemoryEvent("setUserBirthY", function (data){
	console.log("subscribeToALMemoryEvent setUserBirthY");
	setUserBirthY(data);
});
//ユーザー確認画面 : 生年月日（月）
$.subscribeToALMemoryEvent("setUserBirthM", function (data){
	console.log("subscribeToALMemoryEvent setUserBirthM");
	setUserBirthM(data);
});
//ユーザー確認画面 : 生年月日（日）
$.subscribeToALMemoryEvent("setUserBirthD", function (data){
	console.log("subscribeToALMemoryEvent setUserBirthD");
	setUserBirthD(data);
});

//質問画面：質問文
$.subscribeToALMemoryEvent("setQuestionTxt", function (data){
	console.log("subscribeToALMemoryEvent setQuestionTxt");
	setQuestionTxt(data);
});


//RaiseEventで受け取ったテキストを以下のIDに反映します。

function setUserID(data){
	$("#setUserID").html(data.toString());
}
function setUserName(data){
	$("#setUserName").html(data.toString());
}
function setUserBirthY(data){
	$("#setUserBirthY").html(data.toString());
}
function setUserBirthM(data){
	$("#setUserBirthM").html(data.toString());
}
function setUserBirthD(data){
	$("#setUserBirthD").html(data.toString());
}

function setQuestionTxt(data){
	$("#setQuestionTxt").html(data.toString());
}