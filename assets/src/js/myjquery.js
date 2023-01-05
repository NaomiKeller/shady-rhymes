$(function(){
	// Hamburger toggle
	$('.hamburger').on('click', () => {
		$('.hamburger-menu').toggleClass("active");
		$('.icons').toggleClass("active")
	});

	// Slide activation
	function activateSlide1() {
		$('#dot-1').addClass('active');
		$('#dot-2').removeClass('active');
		$('#dot-3').removeClass('active');
		$('#slide-1').addClass('active');
		$('#slide-2').removeClass('active');
		$('#slide-3').removeClass('active');
	}
	function activateSlide2() {
		$('#dot-2').addClass('active');
		$('#dot-1').removeClass('active');
		$('#dot-3').removeClass('active');
		$('#slide-2').addClass('active');
		$('#slide-1').removeClass('active');
		$('#slide-3').removeClass('active');
	}
	function activateSlide3() {
		$('#dot-3').addClass('active');
		$('#dot-1').removeClass('active');
		$('#dot-2').removeClass('active');
		$('#slide-3').addClass('active');
		$('#slide-1').removeClass('active');
		$('#slide-2').removeClass('active');
	}
	
	// Slider nav controls
	$('#dot-1').on('click', () => {
		activateSlide1();
	});
	$('#dot-2').on('click', () => {
		activateSlide2();
	});
	$('#dot-3').on('click', () => {
		activateSlide3();
	});

	// Get next or previous slide
	const nextSlide = (direction) => {
		let slide1state = $('#slide-1').hasClass('active');
		let slide2state = $('#slide-2').hasClass('active');
		let slide3state = $('#slide-3').hasClass('active');

		if (!direction) {
			if (slide1state) {
				activateSlide2()
			} else if (slide2state) {
				activateSlide3()
			} else if (slide3state) {
				activateSlide1()
			}
		} else {
			if (slide1state) {
				activateSlide3()
			} else if (slide2state) {
				activateSlide1()
			} else if (slide3state) {
				activateSlide2()
			}
		}
	}

	// Slider timer
	setInterval(function(e) {
		nextSlide();
	}, 6000);

	// Slider swipe
	let carousel = document.getElementsByClassName('hero')[0];

	carousel.addEventListener('touchstart', function (event) {
		touchstartX = event.changedTouches[0].screenX;
		touchstartY = event.changedTouches[0].screenY;
	}, false);
	
	carousel.addEventListener('touchend', function (event) {
		touchendX = event.changedTouches[0].screenX;
		touchendY = event.changedTouches[0].screenY;
		handleGesture();
	}, false);
	
	function handleGesture() {
		if (touchendX < touchstartX) {
			nextSlide();
		}
	
		if (touchendX > touchstartX) {
			nextSlide('left');
		}
	
	}

	// Accordion
	$('.accordion-item').find('span').on('click', function() {
		$(this).parent().toggleClass('active');
	})
});