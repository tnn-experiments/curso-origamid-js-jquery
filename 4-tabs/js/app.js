$(".tab-menu a").click(function(e) {
    e.preventDefault();
    var itemId = $(this).attr("href");
    
    $(".tab-menu a").removeClass("active");
    $(".item").removeClass("active");
    $(this).addClass("active");
    $(itemId).addClass("active");
});