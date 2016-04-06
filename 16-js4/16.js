// JavaScript Document
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 $(document).ready(function(e) {
	 var aqiData = [];
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
			aqiData.push([city,value]);//存入数组
			//$('#aqi-table').empty();//清空
			console.log($("#aqi-table").html().trim());
			if ($("#aqi-table").html().trim() == "") {
				var th="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
				$('#aqi-table').append(th);
			};
			
			// for(i=0;i<aqiData.length;i++){
				var tr='<tr><td>'+city+'</td><td>'+value+'</td><td><button>删除</button></td></tr>';
				$('#aqi-table').append(tr);
			// };
		};

		// var data = "{"+city+":"+value+","+city+"1:"+value+"1}";
var data1 = {"北京": 90,"上海": 40};
console.log(data1);
var data = JSON.stringify(data1); 
		var b = eval("("+data+")");
		
		$.each(b,function(k,v){
			alert(k +":"+ v);
		})

		
	});
	$('#aqi-table tr td button').live('click',function(){//删除
		$(this).parent().parent().remove();

		// var prevtd=$(this).parent().prev("td").text();//取删除的一行
		// for(i=0;i<aqiData.length;i++){
		// 	if(aqiData[i][1]==prevtd){
		// 		for(j=i;j<aqiData.length;j++){
		// 			aqiData[j]=aqiData[j+1];
		// 		};
		// 		aqiData.length-=1;//数组长度-1
		// 		$('#aqi-table').empty();
		// 		var th="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
		//         $('#aqi-table').append(th);
		// 		for(k=0;k<aqiData.length;k++){
		// 			var tr='<tr><td>'+aqiData[k][0]+'</td><td>'+aqiData[k][1]+'</td><td><button>删除</button></td></tr>';
		// 			$('#aqi-table').append(tr);
		// 		};
		// 	};
		// };
	});
    
});


