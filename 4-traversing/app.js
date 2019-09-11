// Exemplo 1
$("a").each(function() {
    $(this).click(function(e) {
        e.preventDefault();
        $(this).css("background", "blue");
    });
});

// Exemplo 2 - closest acessa o elemento pai mais próximo 
// $("h2").click(function() {
//     $(this).closest("div").css("background", "blue");
// });

// Exemplo 3 - parent acessa o elemento pai 
// $("h2").click(function() {
//     $(this).parent().css("background", "blue");
//     $(this).parent().parent().css("background", "blue");
// });

// Exemplo 4 - parents acessa todos os elementos pai 
// $("h2").click(function() {
//     $(this).parents().css("background", "blue");
// });

// Exemplo 5 - find 
// $("div").click(function() {
//     $(this).find("p").css("background", "blue");
// });

// Exemplo 6 - eq() seleciona o elemento pelo index dele
// $("a").eq(0).css("background", "blue");
