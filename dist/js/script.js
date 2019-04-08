$(document).ready(function () {

	// main slider
	$('.slider').slick({
		slidesToShow: 1,
		speed: 800, //animate time
		autoplay: false,
		arrows:false,
		autoplaySpeed: 8000, //time between
		dots:true,
		customPaging : function(slider, i) {
		 	return '<span class="dot"></span>';
		},
		//fade: true
		});
	// main slider === end

	// review slider
	$('.review-slider').slick({
		slidesToShow: 4,
		speed: 800, //animate time
		autoplay: false,
		arrows:false,
		autoplaySpeed: 8000, //time between
		dots:true,
		customPaging : function(slider, i) {
		 	return '<span class="dot"></span>';
		},
		//fade: true
		});
	// review slider === end

	// custom nav slider
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	// custom nav slider === end

	// ==== diet calc ====

	//toggle state header
	$('.diet-cond__el').click(function(){
		$('.diet-cond__el').removeClass('diet-cond__el--active');
		$(this).addClass('diet-cond__el--active');
	});
	//toggle state header=== end

	// tab programs
	$('.diet-tab__head').click(function(){
		$(this).closest('.diet-tab').find('.diet-tab__head').removeClass('diet-tab__head--active');
		$(this).addClass('diet-tab__head--active');
		var currentTab = $(this).index();
		console.log(currentTab);
		$(this).closest('.diet-tab').find('.diet-tab__cont').each(function(){
				if($(this).index()===currentTab){
					$(this).addClass('diet-tab__cont--active')
				}else{
					$(this).removeClass('diet-tab__cont--active')
				}
			})
	});
	// tab programs === end

	//calc slider
	$('.diet-slider').slick({
			slidesToShow: 1,
			speed: 800, //animate time
			autoplay: false,
			arrows:false,
			autoplaySpeed: 8000, //time between
			dots:false,
			centerMode: true,
			lazyLoad: 'ondemand',
			infinite:true
			//fade: true
	});
	//calc slider === end

	//toggle state day
	$('.diet-day__el').click(function(){
		$('.diet-day__el').removeClass('diet-day__el--active');
		$(this).addClass('diet-day__el--active');
		var current = $(this).index();
		$('.diet-container').each(function(){
			console.log($(this).index());
				if($(this).index()===current){
					$(this).addClass('diet-container--active');
				}else{
					$(this).removeClass('diet-container--active');
				}
			})
		//$('.diet-slider').eq(current).slick('reinit');
	});
	//toggle state day === end



	//clock state + nav slider day
	$('.diet-clock__el').click(function(){
		var currentClock = $(this).closest('.diet-container').find('.diet-clock__el');
		currentClock.removeClass('diet-clock__el--active');
		$(this).addClass('diet-clock__el--active');
		var current = $(this).index();
		var currentSlider = $(this).closest('.diet-container').index();

		$('.diet-slider').eq(currentSlider).slick('slickGoTo', current);
	});
	//clock state + nav slider day === end

	//change state on slider move
	$('.diet-slider').on("afterChange", function (event, slick, currentSlide, nextSlide) {
		$(this).closest('.diet-container').find('.diet-clock__el').each(function(){
				if($(this).index()===currentSlide){
					$(this).addClass('diet-clock__el--active')
				}else{
					$(this).removeClass('diet-clock__el--active')
				}
			})
	});
	//change state on slider move === end


	// tab programs === end



	// ==== diet calc  end====

	// toggle faq head
	$('.faq-tab__el').click(function(){
		$('.faq-tab__el').removeClass('faq-tab__el--active');
		$(this).addClass('faq-tab__el--active');
		var currentTab = $(this).index();
		console.log(currentTab);
		$('.faq').each(function(){
			console.log($(this).index());
				if($(this).index()===currentTab){
					$(this).addClass('faq--active')
				}else{
					$(this).removeClass('faq--active')
				}
			})
	});
	// toggle faq head === end

	// faq row toggle
	$('.faq__el').click(function(){
		$(this).toggleClass('faq__el--active');
		$(this).find('.faq__el-content').slideToggle();
	});
	// faq row toggle === end

	// init fancybox
	$('.fancybox').fancybox({
		thumbs : {
			autoStart : true
		},
		buttons : [
			'zoom',
			'close'
		]
	});
	// init fancybox === end
});
