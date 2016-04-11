// JavaScript Document
$(document).ready(function(e) {
    $('#send').click(function(e) {
        var command =$('#move').val();
		if(command=="TUN LEF"){
			if(($('div').width())==10&&($('div').css("right"))=="auto"){
				$('div').css({"width":"100%","height":"10px","bottom":"-15px","top":"auto","right":"auto"});
			}
			else if(($('div').width())==10&&($('div').css("right"))=="-30px"){
				$('div').css({"width":"100%","height":"10px","top":"-15px","bottom":"auto","right":"auto"});
			}
			else if(($('div').height())==10&&($('div').css("top"))=="-15px"){
				$('div').css({"width":"10px","height":"100%","right":"auto","top":"auto","bottom":"auto"});
			}else{
				$('div').css({"width":"10px","height":"100%","top":"auto","bottom":"auto","right":"-30px"});
			}
		}else if(command=="TUN RIG"){
			if(($('div').width())==10&&($('div').css("right"))=="auto"){
				$('div').css({"width":"100%","height":"10px","top":"-15px","bottom":"auto","right":"auto"});
			}
			else if(($('div').width())==10&&($('div').css("right"))=="-30px"){
				$('div').css({"width":"100%","height":"10px","bottom":"-15px","top":"auto","right":"auto"});
			}
			else if(($('div').height())==10&&($('div').css("top"))=="-15px"){
				$('div').css({"width":"10px","height":"100%","right":"-30px","top":"auto","bottom":"auto"});
			}else{
				$('div').css({"width":"10px","height":"100%","top":"auto","bottom":"auto","right":"auto"});
			}
		}else if(command=="TUN BAC"){
			if(($('div').width())==10&&($('div').css("right"))=="auto"){
				$('div').css({"width":"10px","height":"100%","top":"auto","bottom":"auto","right":"-30px"});
			}
			else if(($('div').width())==10&&($('div').css("right"))=="-30px"){
				$('div').css({"width":"10px","height":"100%","bottom":"auto","top":"auto","right":"auto"});
			}
			else if(($('div').height())==10&&($('div').css("top"))=="-15px"){
				$('div').css({"width":"100%","height":"10px","right":"auto","top":"auto","bottom":"-15px"});
			}else{
				$('div').css({"width":"100%","height":"10px","top":"-15px","bottom":"auto","right":"auto"});
			}
		}else if(command=="GO"){
			alert($('div').parent().parent().first().text());
			alert($('div').parent().next().html());
			$('div').parent().next().css("background-color:#F00;");
		}else{
			alert("输入命令错误");
		}
    });
});