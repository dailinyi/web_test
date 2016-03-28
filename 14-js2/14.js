// JavaScript Document
$(document).ready(function(e) {
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];
for(i=0;i<aqiData.length;i++)
{
	if(aqiData[i][1]>60)
	{
		var data=aqiData[i];
		$('ul').append("<li>"+aqiData[i]+"</li>");
	}
};
$('ul').append(data);
$.each(aqiData,function(index,value)
{alert(value[1]);});
});