// JavaScript Document
$(document).ready(function(e) {
	var aArray = [];//定义一个数组
	//var num=$('#source li b').text();
	//var city=$('#source li').text();
	$('#source li').each(function(){
		var num=$(this).text().split('：');
		
		aArray.push(num);
    });
	console.log(aArray);
	
	aArray=aArray.sort(function(a,b){
		return a[1]-b[1];
	});//排序，按照正序排序
	var keyArr = ['一','二','三','四','五','六','七'];
    $('#sort-btn').click(function(e) {
		$('#resort').empty();
        for(i=0;i<aArray.length;i++){
			$('#resort').append('<li>第' + keyArr[i] + '名：' +aArray[i][0] + "：" +aArray[i][1]+"</li>");
			//$('#resort').append("<li>第{0}名：{1}：<b>{2}</b></li>".format(keyArr[i],aArray[i][0],aArray[i][1]));
		};//逐行显示
    });
	
	String.prototype.format=function(){
	if(arguments.length==0) return this;
	for(var s=this, i=0; i<arguments.length; i++)
	　 s=s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
	return s;
	};
	
	
});