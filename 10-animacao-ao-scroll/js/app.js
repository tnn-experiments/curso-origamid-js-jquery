// Debounce do Lodash
debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function() {
	// Mudar tab ao click
	$('[data-group]').each(function () {
		var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';

		$allTarget.first().addClass(activeClass);
		$allClick.first().addClass(activeClass);

		$allClick.click(function (e) {
			e.preventDefault();

			var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');

			$allClick.removeClass(activeClass);
			$allTarget.removeClass(activeClass);

			$target.addClass(activeClass);
			$(this).addClass(activeClass);
		});
	});


	// Animação ao Scroll
	var $target = $('[data-anime="scroll"]');
	var animationClass = 'animate';
	var offset = $(window).height() * 3 / 4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function () {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function () {
		animeScroll();
	}, 200));
})();