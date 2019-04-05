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

	$('.diet-slider').slick({
			slidesToShow: 1,
			speed: 800, //animate time
			autoplay: false,
			arrows:false,
			autoplaySpeed: 8000, //time between
			dots:false,
			centerMode: true,
			//fade: true
	});

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
