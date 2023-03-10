$(function(){

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

	function activateTestimonialSlide1() {
		$('#dot-1-testimonial').addClass('active');
		$('#dot-2-testimonial').removeClass('active');
		$('#dot-3-testimonial').removeClass('active');
		$('#slide-1-testimonial').addClass('active');
		$('#slide-2-testimonial').removeClass('active');
		$('#slide-3-testimonial').removeClass('active');
	}
	function activateTestimonialSlide2() {
		$('#dot-2-testimonial').addClass('active');
		$('#dot-1-testimonial').removeClass('active');
		$('#dot-3-testimonial').removeClass('active');
		$('#slide-2-testimonial').addClass('active');
		$('#slide-1-testimonial').removeClass('active');
		$('#slide-3-testimonial').removeClass('active');
	}
	function activateTestimonialSlide3() {
		$('#dot-3-testimonial').addClass('active');
		$('#dot-1-testimonial').removeClass('active');
		$('#dot-2-testimonial').removeClass('active');
		$('#slide-3-testimonial').addClass('active');
		$('#slide-1-testimonial').removeClass('active');
		$('#slide-2-testimonial').removeClass('active');
	}
	
	// Slider nav controls
	$('#dot-1').on('click', () => {
		activateSlide1();
		clearInterval(interval);
		interval = setInterval(nextSlide, 6000);
	});
	$('#dot-2').on('click', () => {
		activateSlide2();
		clearInterval(interval);
		interval = setInterval(nextSlide, 6000);
	});
	$('#dot-3').on('click', () => {
		activateSlide3();
		clearInterval(interval);
		interval = setInterval(nextSlide, 6000);
	});

	$('#dot-1-testimonial').on('click', () => {
		activateTestimonialSlide1();
		clearInterval(intervalTestimonial);
		intervalTestimonial = setInterval(nextSlideTestimonial, 6000);
	});
	$('#dot-2-testimonial').on('click', () => {
		activateTestimonialSlide2();
		clearInterval(intervalTestimonial);
		intervalTestimonial = setInterval(nextSlideTestimonial, 6000);
	});
	$('#dot-3-testimonial').on('click', () => {
		activateTestimonialSlide3();
		clearInterval(intervalTestimonial);
		intervalTestimonial = setInterval(nextSlideTestimonial, 6000);
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

	const nextSlideTestimonial = (direction) => {
		let slide1state = $('#slide-1-testimonial').hasClass('active');
		let slide2state = $('#slide-2-testimonial').hasClass('active');
		let slide3state = $('#slide-3-testimonial').hasClass('active');

		if (!direction) {
			if (slide1state) {
				activateTestimonialSlide2()
			} else if (slide2state) {
				activateTestimonialSlide3()
			} else if (slide3state) {
				activateTestimonialSlide1()
			}
		} else {
			if (slide1state) {
				activateTestimonialSlide3()
			} else if (slide2state) {
				activateTestimonialSlide1()
			} else if (slide3state) {
				activateTestimonialSlide2()
			}
		}
	}

	// Timers
	var interval = setInterval(nextSlide, 6000);
	var intervalTestimonial = setInterval(nextSlideTestimonial, 6000);

	// Hero slider swipe
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
			clearInterval(interval);
			interval = setInterval(nextSlide, 6000);
		}
	
		if (touchendX > touchstartX) {
			nextSlide('left');
			clearInterval(interval);
			interval = setInterval(nextSlide, 6000);
		}
	
	}

	// Testimonial slider swipe
	let carouselTestimonial = document.getElementsByClassName('testimonials')[0];

	carouselTestimonial.addEventListener('touchstart', function (event) {
		touchstartX = event.changedTouches[0].screenX;
		touchstartY = event.changedTouches[0].screenY;
	}, false);
	
	carouselTestimonial.addEventListener('touchend', function (event) {
		touchendX = event.changedTouches[0].screenX;
		touchendY = event.changedTouches[0].screenY;
		handleGestureTestimonial();
	}, false);
	
	function handleGestureTestimonial() {
		if (touchendX < touchstartX) {
			nextSlideTestimonial();
			clearInterval(intervalTestimonial);
			intervalTestimonial = setInterval(nextSlideTestimonial, 6000);
		}
	
		if (touchendX > touchstartX) {
			nextSlideTestimonial('left');
			clearInterval(intervalTestimonial);
			intervalTestimonial = setInterval(nextSlideTestimonial, 6000);
		}
	
	}
});