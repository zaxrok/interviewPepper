$.subscribeToALMemoryEvent("interviewAnimation", function (data) {
	console.log("subscribeToALMemoryEvent interviewAnimation");
	interviewAnimation(data);
});

$(function () {
    APNG.ifNeeded().then(function() {
        var images = document.querySelectorAll(".apng-image");
        for (var i = 0; i < images.length; i++) APNG.animateImage(images[i]);
    });
});

function interviewAnimation(data){
	var selectorName = ""
	if(data == 0){
	$(".welcome")	.delay(1000)		.animate({opacity:1},	800);
	$(".solitary")	.delay(1000)		.animate({opacity:1},	800);
	$(".qr_guide")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_read")	.delay(0)			.animate({opacity:0},	800);
	$(".user_info")	.delay(0)			.animate({opacity:0},	800);
	$(".W05")		.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	$(".pause_area").delay(800)			.animate({opacity:0},	0);
	}
	else if(data == 99){
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".solitary")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_guide")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_read")	.delay(0)			.animate({opacity:0},	800);
	$(".user_info")	.delay(0)			.animate({opacity:0},	800);
	$(".W05")		.delay(0)			.animate({opacity:0},	800);	
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);
	$(".T02")		.delay(0)			.animate({opacity:0},	800);
	$(".T03")		.delay(0)			.animate({opacity:0},	800);
	$(".T_format")	.delay(0)			.animate({opacity:0},	800);
	$(".t05")		.delay(0)			.animate({opacity:0},	800);
	$(".t06")		.delay(0)			.animate({opacity:0},	800);
	$(".t07")		.delay(0)			.animate({opacity:0},	800);
	$(".t08")		.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	$(".start")		.delay(0)			.animate({opacity:0},	800);
	$(".status")	.delay(0)			.animate({opacity:0},	800);
	$(".pause")		.delay(0)			.animate({opacity:0},	800);
	$(".question")	.delay(0)			.animate({opacity:0},	800);
	$(".circle")	.delay(0)			.animate({opacity:0},	800);
	$(".speech")	.delay(0)			.animate({opacity:0},	800);
	$(".close")		.delay(0)			.animate({opacity:0},	800);
	$(".pause_area").delay(800)			.animate({opacity:0},	0);
	}	
		
	else if(data == 1){	
	$(".welcome")	.delay(0)			.animate({opacity:1},	800);
	$(".solitary")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_guide")	.delay(1500)		.animate({opacity:1},	800);
	$(".qr_read")	.delay(0)			.animate({opacity:0},	800);
	$(".user_info")	.delay(0)			.animate({opacity:0},	800);
	$(".W05")		.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 2){	
	$(".welcome")	.delay(0)			.animate({opacity:1},	800);
	$(".solitary")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_guide")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_read")	.delay(1500)		.animate({opacity:1},	800);
	$(".user_info")	.delay(0)			.animate({opacity:0},	800);
	$(".W05")		.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 3){	
	$(".welcome")	.delay(0)			.animate({opacity:1},	800);
	$(".solitary")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_guide")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_read")	.delay(0)			.animate({opacity:0},	800);
	$(".user_info")	.delay(1500)		.animate({opacity:1},	800);
	$(".W05")		.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	$(".user_info .btn1").delay(0).animate({opacity:1},300);
	$(".user_info .btn2").delay(0).animate({opacity:1},300);
	}	
	else if(data == 4){	
	$(".welcome")	.delay(0)			.animate({opacity:1},	800);
	$(".solitary")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_guide")	.delay(0)			.animate({opacity:0},	800);
	$(".qr_read")	.delay(0)			.animate({opacity:0},	800);
	$(".user_info")	.delay(0)			.animate({opacity:0},	800);
	$(".W05")		.delay(1500)		.animate({opacity:1},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 5){	
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(1500)		.animate({opacity:1},	800);		
	$(".T02")		.delay(1500)		.animate({opacity:1},	800);
	$(".T03")		.delay(0)			.animate({opacity:0},	800);
	$(".T_format")	.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 6){	
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:1},	800);		
	$(".T02")		.delay(0)			.animate({opacity:0},	800);
	$(".T03")		.delay(1500)		.animate({opacity:1},	800);
	$(".T_format")	.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 7){	
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:1},	800);		
	$(".T02")		.delay(0)			.animate({opacity:0},	800);
	$(".T03")		.delay(0)			.animate({opacity:0},	800);
	$(".T_format")	.delay(1500)		.animate({opacity:1},	800);
	$(".t05")		.delay(1500)		.animate({opacity:1},	800);
	$(".t06")		.delay(0)			.animate({opacity:0},	800);
	$(".t07")		.delay(0)			.animate({opacity:0},	800);
	$(".t08")		.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 8){	
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:1},	800);		
	$(".T02")		.delay(0)			.animate({opacity:0},	800);
	$(".T03")		.delay(0)			.animate({opacity:0},	800);
	$(".T_format")	.delay(0)			.animate({opacity:1},	800);
	$(".t05")		.delay(0)			.animate({opacity:0},	800);
	$(".t06")		.delay(1500)		.animate({opacity:1},	800);
	$(".t07")		.delay(0)			.animate({opacity:0},	800);
	$(".t08")		.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 9){	
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:1},	800);		
	$(".T02")		.delay(0)			.animate({opacity:0},	800);
	$(".T03")		.delay(0)			.animate({opacity:0},	800);
	$(".T_format")	.delay(0)			.animate({opacity:1},	800);
	$(".t05")		.delay(0)			.animate({opacity:0},	800);
	$(".t06")		.delay(0)			.animate({opacity:0},	800);
	$(".t07")		.delay(1500)		.animate({opacity:1},	800);
	$(".t08")		.delay(0)			.animate({opacity:0},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 10){	
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:1},	800);		
	$(".T02")		.delay(0)			.animate({opacity:0},	800);
	$(".T03")		.delay(0)			.animate({opacity:0},	800);
	$(".T_format")	.delay(0)			.animate({opacity:1},	800);
	$(".t05")		.delay(0)			.animate({opacity:0},	800);
	$(".t06")		.delay(0)			.animate({opacity:0},	800);
	$(".t07")		.delay(0)			.animate({opacity:0},	800);
	$(".t08")		.delay(1500)		.animate({opacity:1},	800);
	$(".interview")	.delay(0)			.animate({opacity:0},	800);
	}	
	else if(data == 11){	
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);		
	$(".interview")	.delay(1500)		.animate({opacity:1},	800);
	$(".start")		.delay(1500)		.animate({opacity:1},	800);
	$(".status")	.delay(0)			.animate({opacity:0},	800);
	$(".pause")		.delay(0)			.animate({opacity:0},	800);
	$(".question")	.delay(0)			.animate({opacity:0},	800);
	$(".circle")	.delay(0)			.animate({opacity:0},	800);
	$(".speech")	.delay(0)			.animate({opacity:0},	800);
	$(".close")		.delay(0)			.animate({opacity:0},	800);
	$(".pause_area").delay(0)			.animate({opacity:0},	800);
	$(".start .btn1").delay(0).animate({opacity:1},300);
	$(".start .btn2").delay(0).animate({opacity:1},300);
	}
	else if(data == 12){
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);		
	$(".interview")	.delay(0)			.animate({opacity:1},	800);
	$(".start")		.delay(0)			.animate({opacity:0},	800);
	$(".status")	.delay(1500)		.animate({opacity:1},	800);
	$(".pause")		.delay(1500)		.animate({opacity:1},	800);
	$(".question")	.delay(1500)		.animate({opacity:1},	800);
	$(".circle")	.delay(800)			.animate({opacity:0.15},800);
	$(".speech")	.delay(0)			.animate({opacity:0},	800);
	$(".close")		.delay(0)			.animate({opacity:0},	300);
	$(".pause_area").delay(0)			.animate({opacity:0},300);
	$(".pause_btn").delay(0).animate({opacity:1},300);
	}
	else if(data == 13){
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);		
	$(".interview")	.delay(0)			.animate({opacity:1},	800);
	$(".start")		.delay(0)			.animate({opacity:0},	800);
	$(".status")	.delay(0)			.animate({opacity:1},	800);
	$(".pause")		.delay(0)			.animate({opacity:1},	800);
	$(".question")	.delay(0)			.animate({opacity:0},	800);
	$(".circle")	.delay(1500)		.animate({opacity:1},	800);
	$(".speech")	.delay(1500)		.animate({opacity:1},	800);
	$(".close")		.delay(0)			.animate({opacity:0},	800);
	$(".pause_area").delay(0)			.animate({opacity:0},	300);
	$(".speech .btn1").delay(0).animate({opacity:1},300);
	$(".speech .btn2").delay(0).animate({opacity:1},300);
	$(".pause_btn").delay(0).animate({opacity:1},300);
	}
	else if(data == 14){
	$(".welcome")	.delay(0)			.animate({opacity:0},	800);
	$(".tutorial")	.delay(0)			.animate({opacity:0},	800);		
	$(".interview")	.delay(0)			.animate({opacity:1},	800);
	$(".start")		.delay(0)			.animate({opacity:0},	300);
	$(".status")	.delay(0)			.animate({opacity:1},	300);
	$(".pause")		.delay(0)			.animate({opacity:0},	800);
	$(".question")	.delay(0)			.animate({opacity:0},	300);
	$(".circle")	.delay(0)			.animate({opacity:0},	800);
	$(".speech")	.delay(0)			.animate({opacity:0},	800);
	$(".close")		.delay(2000)		.animate({opacity:1},	800);
	$(".close .btn1").delay(0).animate({opacity:1},300);
	$(".pause_area").delay(0).animate({opacity:0},300);
	}

	else if(data == 301){
	$(".user_info .btn1").delay(0).animate({opacity:0.3},0);
	}else if(data == 302){
	$(".user_info .btn2").delay(0).animate({opacity:0.3},0);
	}
	else if(data == 1101){
	$(".start .btn1").delay(0).animate({opacity:0.3},0);
	}else if(data == 1102){
	$(".start .btn2").delay(0).animate({opacity:0.3},0);
	}	
	else if(data == 1301){
	$(".speech .btn1").delay(0).animate({opacity:0.3},0);
	}else if(data == 1302){
	$(".speech .btn2").delay(0).animate({opacity:0.3},0);
	}
	else if(data == 1401){
	$(".close .btn1").delay(0).animate({opacity:0.3},0);
	}
	else if(data == 900){
	$(".pause_btn").delay(0).animate({opacity:0.3},0);
	}
	else if(data == 91){
	$(".pause_area .btn1").delay(0).animate({opacity:1},0);	
	$(".pause_area .btn2").delay(0).animate({opacity:1},0);
	$(".pause_area .btn3").delay(0).animate({opacity:1},0);
	$(".pause_area").delay(0).animate({opacity:1},800);
	$(".pause_btn").delay(200).animate({opacity:1},600);
	}
	else if(data == 90){
	$(".pause_area").delay(0).animate({opacity:0},800);
	$(".pause_btn").delay(0).animate({opacity:1},0);
	}
	else if(data == 901){
	$(".pause_area .btn1").delay(0).animate({opacity:0.3},0);	
	}
	else if(data == 902){
	$(".pause_area .btn2").delay(0).animate({opacity:0.3},0);	
	}
	else if(data == 903){
	$(".pause_area .btn3").delay(0).animate({opacity:0.3},0);	
	}
}
