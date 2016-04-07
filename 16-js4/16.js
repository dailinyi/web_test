// JavaScript Document
//这种方法最简单,但是不能存储起来,至少显示是对的
 
 $(document).ready(function(e) {
	 $('#add-btn').live('click',function(e) {//添加
       	var city=$.trim($('#aqi-city-input').val());//前后去空格
		var value=$.trim($('#aqi-value-input').val());
		var zyw=/^[a-zA-Z\u4e00-\u9fa5]+$/;//判断是不是中英文
		var ex = /^\d+$/;
		if(city==""){
			alert('输入不能为空');
		}else if(value==""){
			alert('输入不能为空');
		}else if(!zyw.test(city)){
			alert('城市名必须为中英文字符');
		//}else if(isNaN(value)){
		//	alert("空气质量指数必须为整数");//判断是不是数字
		}else if(!ex.test(value)) {
			alert("空气质量指数必须为整数");//判断是不是整数
		}else{
			if ($("#aqi-table").html().trim() == "") {//判断是否已经有标题了
				var th="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
				$('#aqi-table').append(th);
			};	
		var tr='<tr><td>'+city+'</td><td>'+value+'</td><td><button>删除</button></td></tr>';
		$('#aqi-table').append(tr);
		};
	});
	$('#aqi-table tr td button').live('click',function(){//删除
		$(this).parent().parent().remove();
	});
    
});


