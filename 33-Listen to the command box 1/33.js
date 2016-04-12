// JavaScript Document
$(document).ready(function(e) {
	var aa=0;
    $('#send').click(function(e) {
        var command =$('#move').val();
		if(command=="TUN LEF"){
			aa-=90;
			$('.div1').css({"rotate":aa});
		}else if(command=="TUN RIG"){
			aa+=90;
			$('.div1').css({"rotate":aa});
		}else if(command=="TUN BAC"){
			aa+=180;
			$('.div1').css({"rotate":aa});
		}else if(command=="GO"){
			var hang = $('.div1').parents("tr").prevAll().length;   
			var lie = $('.div1').parent().prevAll().length;   
			hang = Number(hang);//字符串变为数字   
			lie = Number(lie); 
			var html='<div class="div1" style="transform: rotate('+aa+'deg)"><div class="div2"></div></div>';
			var ro=(($('.div1').css('rotate'))/90)%4;
			if(ro==0&&lie<11&&lie>1){
				$("table tr").eq(hang).find("td").eq(lie-1).append(html);
				$("table tr").eq(hang).find("td").eq(lie).empty(); 
			}else if((ro==1||ro==-3)&&hang>1&&hang<11){
				$("table tr").eq(hang-1).find("td").eq(lie).append(html)
				$("table tr").eq(hang).find("td").eq(lie).empty(); 
			}else if((ro==-1||ro==3)&&hang>0&&hang<10){
				$("table tr").eq(hang+1).find("td").eq(lie).append(html);
				$("table tr").eq(hang).find("td").eq(lie).empty(); 
			}else if((ro==-2||ro==2)&&lie<10&&lie>0){
				$("table tr").eq(hang).find("td").eq(lie+1).append(html);
				$("table tr").eq(hang).find("td").eq(lie).empty(); 
			}
			
		}else{
			alert("输入命令错误");
		}
    });
});