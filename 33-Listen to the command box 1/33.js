// JavaScript Document
$(document).ready(function(e) {
    $('#send').click(function(e) {
        var command =$('#move').val();
		if(command=="TUN LEF"){
			$('div').css({"width":"10px","height":"100%","right":"-30px"});
		}else if(command=="TUN RIG"){
			if(($('div').width())==10){
				if(($('div').css("right"))=="auto"){
					$('div').css({"width":"100%","height":"10px","top":"-15px","bottom":"auto","right":"auto"});
				}else{
					$('div').css({"width":"100%","height":"10px","bottom":"-15px","top":"auto","right":"auto"});
				}
			}
			if(($('div').height())==10){
				if(($('div').css("top"))=="-15px"){
					$('div').css({"width":"10px","height":"100%","right":"-30px","top":"auto","bottom":"auto"});
				}else{
					$('div').css({"width":"10px","height":"100%","top":"auto","bottom":"auto","right":"auto"});
				}
			}
		}else if(command=="TUN BAC"){
			$('div').css({"width":"10px","height":"100%","bottom":"-30px"});
		}else if(command=="GO"){
			$('div').parent().css("background-color:#F00;");
			$('div').css({"width":"10px","height":"100%","right":"-30px"});
		}else{
			alert("输入命令错误");
		}
    });
});