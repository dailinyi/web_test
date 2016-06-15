// Cloud Float...
var $main = $cloud = mainwidth = null;
var offset1 = 450;
var offset2 = 0;
var offset=100;
var offset3=160;

var offsetbg = 0;

$(document).ready(
	function () {
		$main = $("#mainBody");
		$body = $("body");
		$cloud1 = $("#cloud1");
		$cloud2 = $("#cloud2");
		mainwidth = $main.outerWidth();  
		$('body').height($(window).height());
    	$('body').width($(window).width());
		$('.zppic').height($(window).width()/2);
    	$('.zppic').width($(window).width()/2);
	}
);

/// 飘动
setInterval(function flutter() {
	if (offset1 >= mainwidth) {
		offset1 =  -580;
	}

	if (offset2 >= mainwidth) {
		 offset2 =  -580;
	}
	if (offset <= -480) {
		 offset =  100;
	}
	offset1 += 1.1;
	offset2 += 1;
	offset -= 0.5;
	offset3 -= 0.5;
	$cloud1.css("background-position", offset1 + "px 5%")
	
	$cloud2.css("background-position", offset2 + "px 20%")
	$('.zppic:eq(0)').css({"left":offset+"%","transform":"rotate(20deg)"});
	$('.zppic:eq(1)').css({"left":(offset+60)+"%","transform":"rotate(340deg)"});
	$('.zppic:eq(2)').css({"left":(offset+120)+"%","transform":"rotate(20deg)"});
	$('.zppic:eq(3)').css({"left":(offset+180)+"%","transform":"rotate(340deg)"});
	$('.zppic:eq(4)').css({"left":(offset+240)+"%","transform":"rotate(20deg)"});
	$('.zppic:eq(5)').css({"left":(offset+300)+"%","transform":"rotate(340deg)"});
	$('.zppic:eq(6)').css({"left":(offset+360)+"%","transform":"rotate(20deg)"});
}, 50);


