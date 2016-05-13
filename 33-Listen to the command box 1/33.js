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
			var hang = $('.div1').parents("tr").prevAll().length; //取表格行 
			var lie = $('.div1').parent().prevAll().length;   //取表格列
			hang = Number(hang);//字符串变为数字   
			lie = Number(lie); 
			var html='<div class="div1" style="transform: rotate('+aa+'deg)"><div class="div2"></div></div>';
			//移动的div,带上rotate 不然移动后上方小块会还原
			var ro=(($('.div1').css('rotate'))/90)%4;//旋转角度取余数,0是左,-1和3是下,1和-3是上,-2和2是右
			if(ro==0&&lie<11&&lie>1){
				$("table tr").eq(hang).find("td").eq(lie-1).append(html);//移动
				$("table tr").eq(hang).find("td").eq(lie).empty(); //清空原来td的div
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