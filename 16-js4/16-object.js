// JavaScript Document
//这种方法的缺点是城市不能添加重复的城市 
 $(document).ready(function(e) {
	 var person = new Object();  //可以写成 var person = {};
	 $('#add-btn').live('click',function(e) {//添加
       	var city=$.trim($('#aqi-city-input').val());//前后去空格
		var value=$.trim($('#aqi-value-input').val());
		person[city]=value;//不能添加重复的城市
		console.log(person);
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
			$('#aqi-table').empty();
			var th="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
			$('#aqi-table').append(th);
			$.each(person,function(k,v){
			var tr='<tr><td>'+k+'</td><td>'+v+'</td><td><button>删除</button></td></tr>';
				$('#aqi-table').append(tr);
			});
		};
		
	});
	$('#aqi-table tr td button').live('click',function(){//删除
		var prevtd=$(this).parent().parent().find('td').eq(0).text();
		delete person[prevtd];
		$('#aqi-table').empty();
		var th="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
		$('#aqi-table').append(th);
		$.each(person,function(k,v){
			var tr='<tr><td>'+k+'</td><td>'+v+'</td><td><button>删除</button></td></tr>';
			$('#aqi-table').append(tr);
		});
	}); 
});


