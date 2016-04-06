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


var chart; 
$(function() { 
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
            categories: ['2010年3月', '2010年4月', '2010年5月', '2010年6月', '2010年7月', 
       '2010年8月', '2010年10月', '2010年11月', '2010年12月', '2011年3月', '2011年4月', '2011年5月', 
       '2011年6月', '2011年7月', '2011年8月', '2011年9月', '2011年10月', '2011年11月'], 
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
            data: [5923.95, 5575.55, 5786.7, 8119.15, 5810.87, 6413.69, 6488.3, 10599.64,  
  17982, 7570, 7304.45, 8268, 10809.12, 6949.92, 8076.92, 10018.55, 8079.03, 11396.18] //金额数据 
        }] 
    }); 
}); 
// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项

  // 给select设置事件，当选项发生变化时调用函数citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();