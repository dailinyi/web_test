// JavaScript Document
$(document).ready(function(e) {
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 120],
  ["西安", 100]
];
/*for(i=0;i<aqiData.length;i++)
{
	if(aqiData[i][1]>60)
	{
		$('ul').append("<li>"+aqiData[i]+"</li>");
	}
};*/

aqiData=$.grep(aqiData, function(index,value){
  return aqiData[value][1] > 60;
});//筛选符合条件的数组，返回数组
aqiData=aqiData.sort(function(a,b){
	return a[1]-b[1];
});//排序，按照正序排序
for(i=0;i<aqiData.length;i++){
	$('ul').append("<li>"+aqiData[i]+"</li>");
};//逐行显示
});