$(document).ready(function(){
    $('.nav_ul .n_nav_ul').hide();
    $('.nav_li').mouseover(function(){
        var submenu = $(this).children('.n_nav_ul')
        submenu.slideDown();
    });
    $('.nav_li').mouseleave(function(){
        $('.n_nav_ul').hide();
    })
    
})