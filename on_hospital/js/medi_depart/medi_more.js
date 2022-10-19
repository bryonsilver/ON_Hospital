$(document).ready(function(){
    $('.mv_li').click(function(){
        $('.mv_li').removeClass('active')
        $(this).addClass('active')
    })

    $('#home_tab').click(function(){
        $('.pan1').addClass('block')
        $('.pan2').removeClass('block')
        $('.pan3').removeClass('block')
    })
    $('#profile_tab').click(function(){
        $('.pan1').removeClass('block')
        $('.pan1').addClass('none')
        $('.pan2').addClass('block')
        $('.pan3').removeClass('block')
    })
    $('#contact_tab').click(function(){
        $('.pan1').removeClass('block')
        $('.pan1').addClass('none')
        $('.pan2').removeClass('block')
        $('.pan3').addClass('block')
    })

})