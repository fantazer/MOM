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
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
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
			infinite:true,
			centerPadding: '8%',

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

	// akkord row toggle
	$('.akkord__el').click(function(){
		$(this).toggleClass('akkord__el--active');
		$(this).find('.akkord__el-content').slideToggle();
	});
	// akkord row toggle === end

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

	//mobile menu
	//Фиксируем скрол
	$('.head-toggle--open').click(function(){
		$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
	});

	$('.head-toggle').click(function(event){
		event.stopPropagation();
		$(this).toggleClass('head-toggle--open');
		$('.slide-menu').toggleClass('slide-menu--open');
		$('body').toggleClass('body-fix')
	});

	$('.slide-menu').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
			$('.head-wrap').removeClass('head--up');
			$('.head-toggle').removeClass('head-toggle--open');
			$('.slide-menu').removeClass('slide-menu--open');
			console.log(modalState.isModalShow);
			if(modalState.isModalShow == false){
				$('body').removeClass('body-fix')
		}
	});

	//mobile menu===end


	//animate main-page on load
	if($(".controller").length) {
		var tl = new TimelineMax();
		tl.fromTo('.page-head', 1.5, {y: -200, opacity: 0}, {y: 0, opacity: 1}).staggerFromTo('.controller__el', 1, {x: -20, opacity: 0}, {x: 0, opacity: 1, ease: Sine.easeOut}, 0.5).staggerFromTo('.controller__logo', .8, {x: 20, opacity: 0}, {x: 0, opacity: 1, ease: Sine.easeOut}, 0.3);
	}
	//animate main-page on load === end


	//closeModal() - закрыть окна
	//initModal('data-name-attr') - Открыть нужное окно
	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	$('.modal-content').click(function (event) {
		event.stopPropagation();
	});

	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflow: 'hidden',
				position: 'fixed',
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%'
			});
		}
		modalState.isModalShow = true;
	};
	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').removeClass('modal__show');
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();
		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-layer , .modal-close').click(function () {
		closeModal();
	});
	//modals===end

	//toggle input promocode
	$('.promocode-check').click(function(){
		if($(".promocode-check input").prop('checked')){
			$('.input-row--code').slideToggle();
		}
	});
	//toggle input promocode===end

	// remove indent pay
	$('.indent-pay__remove').click(function(){
		$(this).closest('.indent-row').slideUp();
	});
	// remove indent pay === end
});
