// JavaScript Document// set and cache variables
		var w, container, carousel, item, radius, itemLength, rY, ticker, fps; 
		var mouseX = 0;
		var mouseY = 0;
		var mouseZ = 0;
		var addX = 0;
		
		
		// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
		// no need to create my own :)
		var fps_counter = {
			
			tick: function () 
			{
				// this has to clone the array every tick so that
				// separate instances won't share state 
				this.times = this.times.concat(+new Date());
				var seconds, times = this.times;
        
				if (times.length > this.span + 1) 
				{
					times.shift(); // ditch the oldest time
					seconds = (times[times.length - 1] - times[0]) / 1000;
					return Math.round(this.span / seconds);
				} 
				else return null;
			},
 
			times: [],
			span: 20
		};
		var counter = Object.create(fps_counter);
		
		
		
		//$(document).ready( init )
		
		$(document).ready(function(e) {
            init();
        });
				
		function init()
		{
			w = $(window);
			container = $( '#contentContainer' );//父div
			carousel = $( '#carouselContainer' );//section
			item = $( '.carouselItem' );//figure
			itemLength = $( '.carouselItem' ).length;
			fps = $('#fps');
			rY = 360 / itemLength;
			radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
			
			// set container 3d props
			TweenMax.set(container, {perspective:376})//元素距离视图的距离
			TweenMax.set(carousel, {z:-(radius)})
			
			// create carousel item props
			
			for ( var i = 0; i < itemLength; i++ )
			{
				var $item = item.eq(i);
				var $block = $item.find('.carouselItemInner');//div
				
        //thanks @chrisgannon!        
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});//初始化显示位置
				//旋转角度 3d 基点位置
				animateIn( $item, $block )//飞出来的显示方法						
			}
			
			// set mouse x and y props and looper ticker
			//document.getElementById("button").addEventListener("click", onMouseMove, false );
			window.addEventListener('touchmove', function(event) {
     // 如果这个元素的位置内只有一个手指的话
			 if (event.targetTouches.length == 1) {
	　　　　		event.preventDefault();// 阻止浏览器默认事件，重要 
				var touch = event.targetTouches[0];
				mouseX = -(-(window.innerWidth * .5) + touch.pageX) * .0025;
				mouseY = -(-(window.innerHeight * .5) + touch.pageY ) * .01;
				mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + touch.pageY ) - 200);
			}}, false);
			ticker = setInterval( looper, 1000/60 );
			//在指定周期内不断调用函数			
		}
		
		function animateIn( $item, $block )
		{
			var $nrX = 360 * getRandomInt(2);
			var $nrY = 360 * getRandomInt(2);
				
			var $nx = -(2000) + getRandomInt( 4000 )
			var $ny = -(2000) + getRandomInt( 4000 )
			var $nz = -4000 +  getRandomInt( 4000 )
				
			var $s = 1.5 + (getRandomInt( 10 ) * .1)
			var $d = 1 - (getRandomInt( 8 ) * .1)
			
			TweenMax.set( $item, { autoAlpha:1, delay:$d } )//定位排列好,等动画结束定位回来	
			TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )//初始化飞出来的位置
			TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )//旋转飞出来的动画效果
			TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )//旋转飞出来的动画效果
		}
		
		function onMouseMove(event)
		{
			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
			mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;
			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
		}
		
		
		// loops and sets the carousel 3d properties
		function looper()
		{
			addX += mouseX
			TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
			TweenMax.set( carousel, {z:mouseZ } )
			fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )	//控制旋转速度
		}
		
		function getRandomInt( $n )
		{
			return Math.floor((Math.random()*$n)+1);	
		}