/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

var quality=[];
var time=[];
function aa(){
	if($('input:checked').val()=="day"){
		$.each(aqiSourceData,function(key,value){
			if(key==$('option:selected').val()){
				var i=0;
				$.each(value,function(k,v){
					time[i]=k;
					quality[i]=v;
					i++;
				});
				bb();
				//console.log(value);
			}
		});
	}else if($('input:checked').val()=="week"){
		//alert('aaa');
		$('#aqi-chart-wrap').empty();
	}else if($('input:checked').val()=="month"){
		//alert('bbb');
		$('#aqi-chart-wrap').empty();
	};
};


var chart; 
function bb(){
	chart = new Highcharts.Chart({ 
        chart: { 
            renderTo: 'aqi-chart-wrap', //图表放置的容器，关联DIV#id 
            //zoomType: 'column' ,
			defaultSeriesType: 'column'   //X、Y轴均可放大 
            //因为是柱状图和曲线图共存在一个图表中，所以默认图表类型不在这里设置。 
        }, 
        title: { 
            text: '城市空气质量统计图' //图表标题 
        }, 
        subtitle: { 
            text: '2016'   //图表副标题 
        }, 
        credits: { 
            enabled: false   //不显示LOGO 
        }, 
        xAxis: [{ //X轴标签 
            categories:time, 
            labels: { 
                rotation: -45,  //逆时针旋转45°，标签名称太长。 
                align: 'right'  //设置右对齐 
            } 
        }], 
        yAxis: [{ //设置Y轴-第二个（金额） 
            //gridLineWidth: 0,  //设置网格宽度为0，因为第一个Y轴默认了网格宽度为1 
            title: {text: '空气质量'},//Y轴标题设为空 
            labels: { 
                style: { 
                    color: '#4572A7' //设置标签颜色 
                } 
            } 
 
        }], 
        tooltip: { //鼠标滑向数据区显示的提示框 
            formatter: function() {  //格式化提示框信息 
                [this.series.name]; 
                return '' + this.x + ': ' + this.y; 
            } 
        }, 
        legend: { //设置图例 
            layout: 'vertical', //水平排列图例 
            shadow: true,  //设置阴影 
        }, 
        series: [{  //数据列 
            name: '空气质量', 
            color: '#4572A7', 
            yAxis: 0, //数据列关联到Y轴，默认是0，设置为1表示关联上述第二个Y轴即金额 
            data: quality //金额数据 
        }] 
    }); 
};


$(function() { 
	$.each(aqiSourceData,function(key,value){
		var option="<option value='"+key+"'>"+key+"</option>";
		$('#city-select').append(option);
	});
	aa();
	$("input").change(function() {
		aa();
	});
}); 

