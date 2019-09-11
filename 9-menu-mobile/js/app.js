// tab
$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

// scroll
$(".menu-nav a[href^='#']").click(function(e) {
	e.preventDefault();

	var id = $(this).attr("href");
	var menuHeight = $(".menu").innerHeight();
	var targetOffset = $(id).offset().top;

	$("html, body").animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

// scroll to top
$(".logo").click(function(e){
	e.preventDefault();

	$("html, body").animate({
		scrollTop: 0
	}, 500);
});

// section link ativo
$("section").each(function(){
	var height = $(this).height();
	var offsetTop = $(this).offset().top;
	var menuHeight = $(".menu").innerHeight();
	var id = $(this).attr("id");
	var $itemMenu = $("a[href='#" + id + "']");

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();

		if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass("active");
		} else {
			$itemMenu.removeClass("active");
		}
	});
});

// Menu mobile
$(".mobile-btn").click(function() {
	$(this).toggleClass("active");
	$(".mobile-menu").toggleClass("active");
});