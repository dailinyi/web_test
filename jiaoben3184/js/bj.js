

/*********************
   设备类型
*********************/

var isWebkit = /Webkit/i.test(navigator.userAgent),
	isChrome = /Chrome/i.test(navigator.userAgent),
	isMobile = !!("ontouchstart" in window),
	isAndroid = /Android/i.test(navigator.userAgent),
	isIE = document.documentMode;

/******************
	重定向
******************/

if (isMobile && isAndroid && !isChrome) {
	alert("虽然 Velocity.js 可在所有的手机浏览器上使用, 但本3D实例只在IOS和安卓系统上的谷歌浏览器运行，确定后返回站长素材首页");
	window.location = "http://sc.chinaz.com";
}

/***************
	Helpers
***************/

/* 取得两个整数间的随机数 */
function r (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 重写essing的默认类型. */
$.Velocity.defaults.easing = "easeInOutsine";

/*******************
	创建圆点
*******************/

/* Differentiate dot counts based on roughly-guestimated device and browser capabilities. 
	基于设备和浏览器创建不同的圆点
*/ 
var dotsCount,
	dotsHtml = "",
	$count = $("#count"),
	$dots;

if (window.location.hash) {
	dotsCount = window.location.hash.slice(1);
} else {
	dotsCount = isMobile ? (isAndroid ? 40 : 60) : (isChrome ? 175 : 125);
}

for (var i = 0; i < dotsCount; i++) {
	dotsHtml += "<div class='dot'></div>";
}

$dots = $(dotsHtml);

$count.html(dotsCount);

/*************
	Setup
*************/

var $container = $("#container"),
	$browserWidthNotice = $("#browserWidthNotice"),
	$welcome = $("#welcome");

var screenWidth = window.screen.availWidth,
	screenHeight = window.screen.availHeight,
	chromeHeight = screenHeight - (document.documentElement.clientHeight || screenHeight);

var translateZMin = -725,
	translateZMax = 600;

var containerAnimationMap = {
		perspective: [ 215, 50 ],
		opacity: [ 0.90, 0.55 ]
	};

/* IE10+ produce odd glitching issues when you rotateZ on a parent element subjected to 3D transforms. 
	当在一个父级元素使用3D变型旋转Z轴时IE10+会出现莫名的错误
*/
if (!isIE) {
	containerAnimationMap.rotateZ = [ 5, 0 ];
}

/* Ensure the user is full-screened; this demo's translations are relative to screen width, not window width. 
	确保用户使用的是全屏；本实例变形相对于整个屏幕，而不是窗口；
*/
if ((document.documentElement.clientWidth / screenWidth) < 0.80) {
	$browserWidthNotice.show();
}

/*****************
	Animation
*****************/

/* Fade out the welcome message. 
	淡淡显示欢迎信息
*/
$welcome.velocity({ opacity: [ 0, 0.65 ] }, { display: "none", delay: 3500, duration: 1100 });

/* Animate the dots' container.
	动画出现圆点的容器
 */
$container
	.css("perspective-origin", screenWidth/2 + "px " + ((screenHeight * 0.45) - chromeHeight) + "px")
	.velocity(containerAnimationMap, { duration: 800, loop: 1, delay: 3250 });

/* Special visual enhancement for WebKit browsers, which are faster at box-shadow manipulation. 
	特别改善webkit浏览器的视觉效果，因为阴影得到更快的控制
*/
if (isWebkit) {
	$dots.css("boxShadow", "0px 0px 4px 0px #4bc2f1");
}

/* Animate the dots. 
	圆点动画
*/
$dots
	.velocity({ 
		translateX: [ 
			function() { return "+=" + r(-screenWidth/2.5, screenWidth/2.5) },
			function() { return r(0, screenWidth) }
		],
		translateY: [
			function() { return "+=" + r(-screenHeight/2.75, screenHeight/2.75) },
			function() { return r(0, screenHeight) }
		],
		translateZ: [
			function() { return "+=" + r(translateZMin, translateZMax) },
			function() { return r(translateZMin, translateZMax) }
		],
		opacity: [ 
			function() { return Math.random() },
			function() { return Math.random() + 0.1 }
		]
	}, { duration: 6000 })
	.velocity("reverse", { easing: "easeOutQuad" })
	.velocity({ opacity: 0 }, { duration: 2000, complete: function() { 
		$welcome
			.html("<a href='http://sc.chinaz.com/jiaoben/'>返回站长素材首页.</a>")
			.velocity({ opacity: 0.75 }, { duration: 3500, display: "block" })
			.find("*").add($welcome).css("pointer-events", "auto");
		}
	})
	.appendTo($container);