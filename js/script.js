$(document).ready(function(){
    $(".about").click(function(){
        $(".about > .hidden").toggle();
    });
    $(".about").click(function(){
        $("p").addClass('hidden');
    });
});