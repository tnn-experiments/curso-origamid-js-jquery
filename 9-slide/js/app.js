// Slide
function slider(sliderName, velocidade) {

	var sliderClass = "." + sliderName;
	var activeClass = "active";
	var rotate = setInterval(rotateSlide, velocidade);

	$(sliderClass + " > :first").addClass(activeClass);
	
	$(sliderClass).hover(function() {
		clearInterval(rotate);
	}, function(){
		rotate = setInterval(rotateSlide, velocidade);
	});

	function rotateSlide() {
		var activeSlide = $(sliderClass + " > ." + activeClass);
		var nextSlide = activeSlide.next();
	
		if (nextSlide.length == 0) {
			nextSlide = $(sliderClass + " > :first");
		}
	
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	}
	
}

slider("introducao", 2500);