// Exemplo 2
$("[data-group]").each(function() {
    var $allTarget = $(this).find("[data-target]");
    var $allClick = $(this).find("[data-click]");
    var activeClass = "active";

    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function(e) {
        e.preventDefault();

        var id = $(this).data("click");
        var $target = $("[data-target='" + id + "']");

        $allClick.removeClass(activeClass); 
        $allTarget.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });
});