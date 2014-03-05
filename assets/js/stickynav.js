$(document).ready(function(){
	var $window = $(window),
	$stickyEl = $('#nav'),
	elTop = $stickyEl.offset().top;
	$toTop = $('.to-top')
	
	//Sticks Nav to Top of page when scrolled past.
	$window.scroll(function() {
		$stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
	});
	
	//Adds Site Name to left of Nav when stuck
	//Displays Back to Top link when Nav is stuck
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= elTop) {
			$(".name").addClass("name-show");
			$toTop.addClass("to-top-s");
		}
		else {
			$(".name").removeClass("name-show");
			$toTop.removeClass("to-top-s");
		}
	}); 
	
	//Back to Top Animation and Button Fade out
	$(function(){
		$toTop.click(function(){
			$("html, body").animate({scrollTop:0},"slow")
			$toTop.fadeOut("slow");
		});
	});
	
});