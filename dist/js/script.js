$(document).ready(function () {

	//animate on scroll
	if($('#how').length !=0) {
		function pathPrepare($el) {
			var lineLength = $el[0].getTotalLength();
			$el.css("stroke-dasharray", lineLength);
			$el.css("stroke-dashoffset", lineLength);
		}

		var $wave = $("path#wave");
		pathPrepare($wave);
		function order() {
			$('.how-el-point--order').toggle();
		};
		function prepaer() {
			$('.how-el-point--prepear').toggleClass('how-el-point--active');
			$('.how-el--prepear').toggleClass('how-el--active');
		};

		function pack() {
			$('.how-el-point--pack').toggleClass('how-el-point--active');
			$('.how-el--pack').toggleClass('how-el--active');
		};

		function get() {
			$('.how-el-point--get').toggleClass('how-el-point--active');
			$('.how-el--get').toggleClass('how-el--active');
		};

		function end() {
			$('.how-el-point--end').toggle();
			$('.how-el--end').toggleClass('how-el--active');
		};

		var path = MorphSVGPlugin.pathDataToBezier("#wave", {align: "#heart"});
		//var tl = new TimelineMax({onUpdate:updatePercentage});
		var tl = new TimelineMax();
		var controller = new ScrollMagic.Controller();
		tl
			.add(function () {
				console.log(tl.progress())
			})
			.set("#heart", {
				transformOrigin: "center",
				xPercent: -50,
				yPercent: -50
			})
			.to("#heart", 48, {bezier: {values: path, type: "cubic"}, ease: Linear.easeNone})
			.to($wave, 48, {strokeDashoffset: 0, ease: Linear.easeNone}, 0)
			.add(order, tl.duration() *.02)
			.add(prepaer, tl.duration() / 5)
			.add(pack, tl.duration() / 2)
			.add(get, tl.duration() * .75)
			.add(end, tl.duration() * .98);


		var scene = new ScrollMagic.Scene({
			triggerElement: "#how",
			triggerHook: "onLeave",
			duration: "200%",
			//offset:'-200px'
		}).setPin("#how")
			.setTween(tl)
			.addTo(controller);
	}
	//animate on scroll

	// set progress on bar
	var progress = $('.progres-bg').data('val');
	$('.progress-val--hor').attr('width', progress + "%");
	$('.progress-val--vert').attr('height', progress + "%");
	// set progress on bar === end

	// init niceselect
	$('.select-beauty').niceSelect();
	// init niceselect === end

	// main slider
	$('.slider').slick({
		slidesToShow: 1,
		speed: 800, //animate time
		autoplay: false,
		arrows: false,
		autoplaySpeed: 8000, //time between
		dots: true,
		customPaging: function (slider, i) {
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
		arrows: false,
		autoplaySpeed: 8000, //time between
		dots: true,
		customPaging: function (slider, i) {
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

	// order slider
	$('.order-slider').slick({
		slidesToShow: 1,
		speed: 800, //animate time
		autoplay: false,
		arrows: false,
		autoplaySpeed: 8000, //time between
		dots: true,
		centerMode: true,
		centerPadding: '80px',
		responsive: [
			{
				breakpoint: 640,
				settings: {
					centerPadding: '40px',
				}
			}
		],
		customPaging: function (slider, i) {
			return '<span class="dot"></span>';
		},
		//fade: true
	});
	// order slider === end

	// custom nav slider
	$('.slider-control--right').click(function () {
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function () {
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	// custom nav slider === end

	// ==== diet calc ====

	//toggle state header
	$('.diet-cond__el').click(function () {
		$('.diet-cond__el').removeClass('diet-cond__el--active');
		$(this).addClass('diet-cond__el--active');
	});
	//toggle state header=== end

	// tab programs
	$('.diet-tab__head').click(function () {
		$(this).closest('.diet-tab').find('.diet-tab__head').removeClass('diet-tab__head--active');
		$(this).addClass('diet-tab__head--active');
		var currentTab = $(this).index();
		console.log(currentTab);
		$(this).closest('.diet-tab').find('.diet-tab__cont').each(function () {
			if ($(this).index() === currentTab) {
				$(this).addClass('diet-tab__cont--active')
			} else {
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
		arrows: false,
		autoplaySpeed: 8000, //time between
		dots: false,
		centerMode: true,
		lazyLoad: 'ondemand',
		infinite: true,
		centerPadding: '8%',

		//fade: true
	});
	//calc slider === end

	//toggle state day
	$('.diet-day__el').click(function () {
		$('.diet-day__el').removeClass('diet-day__el--active');
		$(this).addClass('diet-day__el--active');
		var current = $(this).index();
		$('.diet-container').each(function () {
			console.log($(this).index());
			if ($(this).index() === current) {
				$(this).addClass('diet-container--active');
			} else {
				$(this).removeClass('diet-container--active');
			}
		})
		//$('.diet-slider').eq(current).slick('reinit');
	});
	//toggle state day === end


	//clock state + nav slider day
	$('.diet-clock__el').click(function () {
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
		$(this).closest('.diet-container').find('.diet-clock__el').each(function () {
			if ($(this).index() === currentSlide) {
				$(this).addClass('diet-clock__el--active')
			} else {
				$(this).removeClass('diet-clock__el--active')
			}
		})
	});
	//change state on slider move === end


	// tab programs === end


	// ==== diet calc  end====

	// toggle faq head
	$('.faq-tab__el').click(function () {
		$('.faq-tab__el').removeClass('faq-tab__el--active');
		$(this).addClass('faq-tab__el--active');
		var currentTab = $(this).index();
		console.log(currentTab);
		$('.faq').each(function () {
			console.log($(this).index());
			if ($(this).index() === currentTab) {
				$(this).addClass('faq--active')
			} else {
				$(this).removeClass('faq--active')
			}
		})
	});
	// toggle faq head === end

	// akkord row toggle
	$('.akkord__el').click(function () {
		$(this).toggleClass('akkord__el--active');
		$(this).find('.akkord__el-content').slideToggle();
	});
	// akkord row toggle === end

	// init fancybox
	$('.fancybox').fancybox({
		thumbs: {
			autoStart: true
		},
		buttons: [
			'zoom',
			'close'
		]
	});
	// init fancybox === end

	//mobile menu
	//Фиксируем скрол
	$('.head-toggle--open').click(function () {
		$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
	});

	$('.head-toggle').click(function (event) {
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
		if (modalState.isModalShow == false) {
			$('body').removeClass('body-fix')
		}
	});

	//mobile menu===end



	//animate main-page on load
	if ($(".controller").length) {
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
				//position: 'fixed',
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
	$('.promocode-check').click(function () {
		if ($(".promocode-check input").prop('checked')) {
			$('.input-row--code').slideToggle();
		}
	});
	//toggle input promocode===end

	// remove indent pay
	$('.indent-pay__remove').click(function () {
		$(this).closest('.indent-row').slideUp();
	});
	// remove indent pay === end

	// toggle payout
	$('.payout__el').click(function () {
		$('.payout__el').removeClass('payout__el--active')
		$(this).addClass('payout__el--active')
	});
	// toggle payout === end

	//datepicker
	//doc http://t1m0n.name/air-datepicker/docs/index-ru.html
	var dp = $('.getdate').datepicker({
		minDate: new Date(),
		autoClose: true
	}).data('datepicker');

  $('.modal-wrap').on('scroll', function () {
  	dp.update();
  });
	//datepicker===end


	// animate placeholder
	$('.input-animate').each(function () {
		var current = $(this);
		var dataString = "<span class='input-placeholder-val'>" + current.data('input') + "</span>";
		current.parent().append(dataString);
		if ($(this).val()) {
			$(this).attr('data-empty', !this.value);
		}
	});

	$('.input-animate').on('input change load', function (e) {
		$(e.currentTarget).attr('data-empty', !e.currentTarget.value);
		if ($(this).val()) {
			$(this).attr('data-empty', !e.currentTarget.value);
		}
	});

	$('.input-placeholder-val').click(function () {
		$(this).parent().find('.input-animate').focus(); //найти Input и повесить focus
	});
	$('.input').click(function () {
		console.log($(this).val());
	});
	//animate placeholder === end

	//increment field
	$('.incr__minus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) - 1;
		count = count < 1 ? 0 : count;
		$input.html(count);
	});

	$('.incr__minus.incr--one').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) - 1;
		count = count < 2 ? 1 : count;
		$input.html(count);
	});

	$('.incr__plus').click(function () {
		var $input = $(this).parent().find('.incr__val span');
		var count = parseInt($input.html()) + 1;
		count = count > 100 ? 100 : count;
		$input.html(count);
	});
	//increment field end
});
