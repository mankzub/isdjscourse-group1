$(document).ready(function() {
    $('.answer').hide();
    $('.content span').toggle(function(){
    $(this).next('.answer').fadeIn(1000);
    },
    function(){
        $(this).next('.answer').fadeOut(1000);
    });
    });