$(document).ready(function(){
    $('.rt1_box .box_input').css({
        background:'#ED5929',
        color:'#fff'
    })
    
    $('#rt1').click(function(){
        $('.rt1_box .rt_circle').css({
            border : '1px solid #2763BA'   
        })
        $('.rt1_box .rt_c_cir').css({
            display: 'inline-block'
        })
        $('.rt1_box span').css({
            color: '#2763BA'
        })
        $('.rt1_box .box_input').css({
            background:'#ED5929',
            color:'#fff'
        })
        

        // 가나다순 
        $('.rt2_box .rt_circle').css({
            border : '1px solid #ddd'   
        })
        $('.rt2_box .rt_c_cir').css({
            display: 'none'
        })
        $('.rt2_box span').css({
            color: '#000'
        })
        $('.rt2_box .box_input').css({
            background:'rgb(241 241 241)',
            color:'#4f4f4f'
        })

        $('.radio_tab_box1').css({
            opacity: '1',
            zIndex: '90'
        })
        $('.radio_tab_box2').css({
            opacity: '0',
            zIndex: '80'
        })
    })
    $('#rt2').click(function(){
        $('.rt2_box .rt_circle').css({
            border : '1px solid #2763BA'   
        })
        $('.rt2_box .rt_c_cir').css({
            display: 'inline-block'
        })
        $('.rt2_box span').css({
            color: '#2763BA'
        })
        $('.rt2_box .box_input').css({
            background:'#ED5929',
            color:'#fff'
        })



        // 가나다순 
        $('.rt1_box .rt_circle').css({
            border : '1px solid #ddd'   
        })
        $('.rt1_box .rt_c_cir').css({
            display: 'none'
        })
        $('.rt1_box span').css({
            color: '#000'
        })
        $('.rt1_box .box_input').css({
            background:'rgb(241 241 241)',
            color:'#4f4f4f'
        })


        $('.radio_tab_box2').css({
            opacity: '1',
            zIndex: '90'
        })
        $('.radio_tab_box1').css({
            opacity: '0',
            zIndex: '80'
        })
    })




})