$(function(){
	// Hamburger toggle
	$('.hamburger').on('click', () => {
		$('.hamburger-menu').toggleClass("active");
		$('.icons').toggleClass("active")
	});

	// Accordion
	$('.accordion-item').find('span').on('click', function() {
		$(this).parent().toggleClass('active');
	})
	
	// Fixed header on scroll
	var lastScrollTop = 0;

	window.addEventListener("scroll", function(){
		var st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > 150 && st < 400) {
			$('nav').addClass('pre-scroll');
		}
		else if (st > 400){
			console.log(st)
			$('nav').addClass('scrolled');
			$('nav').removeClass('pre-scroll');
		} else {
			$('nav').removeClass('scrolled');
			$('nav').removeClass('pre-scroll');
		}
		lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	}, false);
});