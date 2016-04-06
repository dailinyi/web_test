var chart; 
$(function() { 
    chart = new Highcharts.Chart({ 
        chart: { 
            renderTo: 'chart_column', //图表放置的容器，关联DIV#id 
            zoomType: 'xy'   //X、Y轴均可放大 
            //因为是柱状图和曲线图共存在一个图表中，所以默认图表类型不在这里设置。 
        }, 
        title: { 
            text: '2011-2012年财经支出统计图' //图表标题 
        }, 
        subtitle: { 
            text: '数据来源：新浪财经'   //图表副标题 
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
        yAxis: [{ //设置Y轴-第一个（增幅） 
            labels: { 
                formatter: function() { //格式化标签名称 
                    return this.value + '%'; 
                }, 
                style: { 
                    color: '#89A54E' //设置标签颜色 
                } 
            }, 
            title: {text: ''}, //Y轴标题设为空 
            opposite: true  //显示在Y轴右侧，通常为false时，左边显示Y轴，下边显示X轴 
 
        }, 
        { //设置Y轴-第二个（金额） 
            gridLineWidth: 0,  //设置网格宽度为0，因为第一个Y轴默认了网格宽度为1 
            title: {text: ''},//Y轴标题设为空 
            labels: { 
                formatter: function() {//格式化标签名称 
                    return this.value + ' 万亿元'; 
                }, 
                style: { 
                    color: '#4572A7' //设置标签颜色 
                } 
            } 
 
        }], 
        tooltip: { //鼠标滑向数据区显示的提示框 
            formatter: function() {  //格式化提示框信息 
                var unit = { 
                    '金额': '亿元', 
                    '增幅': '%' 
                } [this.series.name]; 
                return '' + this.x + ': ' + this.y + ' ' + unit; 
            } 
        }, 
        legend: { //设置图例 
            layout: 'vertical', //水平排列图例 
            shadow: true,  //设置阴影 
        }, 
        series: [{  //数据列 
            name: '金额', 
            color: '#4572A7', 
            type: 'column', //类型：纵向柱状图 
            yAxis: 1, //数据列关联到Y轴，默认是0，设置为1表示关联上述第二个Y轴即金额 
            data: [5923.95, 5575.55, 5786.7, 8119.15, 5810.87, 6413.69, 6488.3, 10599.64,  
  17982, 7570, 7304.45, 8268, 10809.12, 6949.92, 8076.92, 10018.55, 8079.03, 11396.18] //金额数据 
        }, 
        { 
            name: '增幅', 
            color: '#89A54E', 
            type: 'spline', //类型：曲线图 
            data: [18.3, 9.8, 25.6, 26.8, 16.6, 35.4, 38.5, 66.9, -10.4, 27.8, 31.0, 42.9,  
            33.1, 19.6, 25.9, 18.3, 24.5,7.5] //增幅数据 
        }] 
    }); 
}); 