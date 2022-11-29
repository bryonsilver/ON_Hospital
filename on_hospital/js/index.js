$(document).ready(function(){

    // 메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, 
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',
        effect : 'fade',
 
    });
    // 온병원 그룹
    var swiper = new Swiper(".mySwiper3", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, 
        pagination: {
            el: '.swiper-pagination',
        },
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',
 
    });
    
    // 병원장 TV
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2.5,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        centeredSlides: true, 
        speed: 500, // duration
        // direction: 'vertical',

        breakpoints: {
            2000: {
                slidesPerView: 2.2,
                spaceBetween: 0
            },
            // when window width is >= 768px
            1025: {
            slidesPerView: 2.2,
            spaceBetween: 0
            },
            // when window width is >= 1024px
            767: {
            slidesPerView: 1.2,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 1.2,
                spaceBetween: 0
            },
            100: {
                slidesPerView: 1.2,
                spaceBetween: 0
            }
        }  ,
        allowTouchMove: true, // 드래그로 움직임
    
    });

    
    
    $('.swiper').hover(function(){
        swiper.autoplay.stop()
    }, function(){
        swiper.autoplay.start()
    })
    $(window).scroll(  
        function(){  
            let box_o_top = $('.semi_black_box').offset().top;
            let s_top = $(window).scrollTop();
            //스크롤의 위치가 상단에서 450보다 크면  
            if($(window).scrollTop() > box_o_top){  
            /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */  
                $('semi_box').css({});  
                //위의 if문에 대한 조건 만족시 fix라는 class를 부여함  
            } 
        }  
    ); 

    $('.btn_semi').click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
		return false;
    })

    $('.h_nav_li').click(function(){

        var clicks = $(this).data('clicks');
		if (clicks) {
		   // odd clicks
           $('.nav_pan_box').css({height:'0px'})
           $('.window_black').css({display:'none'})
		} else {
		   // even clicks
           $('.nav_pan_box').css({height:'300px'})
           $('.window_black').css({display:'block'})
		}
		$(this).data("clicks", !clicks);

    })

    $('.nav_0').click(function(){
        var clicks1 = $(this).data('clicks');
        if (clicks1) {
             // odd clicks
            $('.n_pan_0').css({opacity:'1', height: '300px', zIndex:'999'})
            $('.n_pan_1').css({opacity:'0', height: '0px'})
            $('.n_pan_2').css({opacity:'0', height: '0px'})
            $('.n_pan_3').css({opacity:'0', height: '0px'})
        }
        else {
            // even clicks
            $('.n_pan_0').css({opacity:'0', height: '0px'})
            $('.n_pan_1').css({opacity:'0', height: '0px'})
            $('.n_pan_2').css({opacity:'0', height: '0px'})
            $('.n_pan_3').css({opacity:'0', height: '0px'})
        }
        $(this).data("clicks1", !clicks1);
           
    })
    $('.nav_1').click(function(){
        var clicks2 = $(this).data('clicks');
        if (clicks2) {
            // odd clicks
            $('.n_pan_1').css({opacity:'1', height: '300px', zIndex:'999'})
            $('.n_pan_0').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_2').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_3').css({opacity:'0', height: '0px', zIndex:'1'})

        } else {
            // even clicks
            $('.n_pan_1').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_0').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_2').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_3').css({opacity:'0', height: '0px', zIndex:'1'})
        }
        $(this).data("clicks2", !clicks2);
    })
    $('.nav_2').click(function(){
        var clicks3 = $(this).data('clicks');
        if (clicks3) {
            // odd clicks
            $('.n_pan_2').css({opacity:'1', height: '300px', zIndex:'999'})
            $('.n_pan_1').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_0').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_3').css({opacity:'0', height: '0px', zIndex:'1'})
        } else {
            // even clicks
            $('.n_pan_2').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_1').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_0').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_3').css({opacity:'0', height: '0px', zIndex:'1'})
        }
        $(this).data("clicks3", !clicks3);
   })
    $('.nav_3').click(function(){
        var clicks4 = $(this).data('clicks');
        if (clicks4) {
            // odd clicks
            $('.n_pan_3').css({opacity:'1', height: '300px', zIndex:'999'})
            $('.n_pan_1').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_2').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_0').css({opacity:'0', height: '0px', zIndex:'1'})
        } else {
            // even clicks
            $('.n_pan_3').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_1').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_2').css({opacity:'0', height: '0px', zIndex:'1'})
            $('.n_pan_0').css({opacity:'0', height: '0px', zIndex:'1'})
        }
        $(this).data("clicks4", !clicks4);
    })

    // $('.goog-te-combo option:eq(0)').replaceWith("<option value='ko'>KO</option>");
    $('.goog-te-combo') .children("[value='ko']").replaceWith("<option value='ko'>KO</option>");


})