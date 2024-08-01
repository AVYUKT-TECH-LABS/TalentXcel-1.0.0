(function ($) {

	"use strict";

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("shadow");
			// $(".home-header-area").removeClass("home-header")
		} else {
			$("header").removeClass("shadow");
			// $(".home-header-area").addClass("home-header")
		}
	})

	const hash = window.location.hash.substring(1);
	if (!hash.length > 0) {
		new WOW().init();
	} else {
		//remove classes
		const elements = document.getElementsByClassName("wow");
		while (elements.length > 0) {
			elements[0].classList.remove("wow");
		}
	}

	$('.owl-banner').owlCarousel({
		center: true,
		items: 1,
		loop: true,
		autoplay: true,
		animateIn: 'fadeIn',
		animateOut: "fadeOut",
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		// nav: true,
		// dots: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		margin: 30,
		responsive: {
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.collapse').slideToggle(200).toggleClass('show')
		});
	}

	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$('.dropdown').hover(function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
	}, function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
	});

})(window.jQuery);