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

$(document).scroll(function () {
	animeScroll();
});