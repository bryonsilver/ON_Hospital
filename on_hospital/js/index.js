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
        slidesPerView: 2.5,
        pagination: {
            el: ".swiper-pagination",
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
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
            slidesPerView: 1.5,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 0
            },
            100: {
                slidesPerView: 1.5,
                spaceBetween: 0
            }
        }  ,
 
    });
    
    // 병원장 TV
    var swiper = new Swiper(".mySwiper2", {
       
        slidesPerView: 2.5,
        pagination: {
            el: ".swiper-pagination",
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
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
            slidesPerView: 1.5,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 0
            },
            100: {
                slidesPerView: 1.5,
                spaceBetween: 0
            }
        }  ,
    
    });


    // var swiper = new Swiper(".mySwiper4", {
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     }, 
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     },
    //     loop: true,
    //     autoplay: {
    //         delay: 3000, // 몇 밀리초마다 새로 들어올지
    //     },
    //     speed: 500, // duration
    //     // direction: 'vertical',
    //     effect : 'fade',
    //     slidesPerView: 5,
    //     breakpoints: {
    //         2000: {
    //             slidesPerView: 5,
    //             spaceBetween: 0
    //         },
    //         // when window width is >= 768px
    //         1025: {
    //         slidesPerView: 4,
    //         spaceBetween: 0
    //         },
    //         // when window width is >= 1024px
    //         767: {
    //         slidesPerView: 4,
    //         spaceBetween: 0
    //         },
    //         400: {
    //             slidesPerView: 2,
    //             spaceBetween: 0
    //         },
    //         100: {
    //             slidesPerView: 2,
    //             spaceBetween: 0
    //         }
    //     }  ,
 
    // });

    

    
    
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





    $('.ham_box').click(function(){
        $('.bur_pan_box').css({display:'block'})
        $('body').css({overflow:'hidden'})

        // $('.first_l').css({transform:'rotate(-50deg) translateX(-5px)', transformOrigin :'right'})
        // $('.second_l').css({opacity:'0'})
        // $('.third_l').css({transform:'rotate(50deg) translateX(-4px)', transformOrigin :'right'})
    })
    $('.x_text').click(function(){
        $('.bur_pan_box').css({display:'none'})
        $('body').css({overflow:'auto'})

        // $('.first_l').css({transform:'rotate(0deg) translateX(0px)', transformOrigin :'right'})
        // $('.second_l').css({opacity:'1'})
        // $('.third_l').css({transform:'rotate(0deg) translateX(0px)', transformOrigin :'right'})
    })

    $('.indi').click(function(){
        $(this).index(function(){
            $('.comma').css({backgroundColor:'rgb(37, 37, 37)'})
            $('.indi').css({color:'rgb(37, 37, 37)'})
        }) 
    })


    // var mHtml = $("html");
    // var page = 1;


    // mHtml.animate({scrollTop : 0},10);

    // $(window).on("wheel", function(e) {
    //     if(mHtml.is(":animated")) return;
    //     if(e.originalEvent.deltaY > 0) {
    //         if(page == 6) return;
    //         page++;
    //     } else if(e.originalEvent.deltaY < 0) {
    //         if(page == 1) return;
    //         page--;
    //     }
    //     var posTop =(page-1) * $(window).height();
    //     mHtml.animate({scrollTop : posTop});
    // })


    $('#s1').mouseover(function(){
        $('.s1').css({zIndex:'999999',opacity:'1'})
    })
    $('#s1').mouseout(function(){
        $('.s1').css({zIndex:'8',opacity:'0'})
    })



    $(".indi_1").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0}, 500);
    });


    
 

})