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



let chk = true;
        $('.box').on('wheel DOMMouseScroll', function(){ 
            event.stopPropagation(); 

            if(chk) {
                chk = false;
                setTimeout(function(){
                    chk = true;
                }, 0)
                /*
                    확산방지 - 클릭이나 자식에서 이벤트를 동작시켰을때 우리는 해당 요소의 이벤트만 동작했다고 생각하겠지만 웹페이지 내부에서는 요소를 감싸고 있는 부모들도 동작했다 라고 생각한다(버블업) 
                    그래서 이벤트를 실행했을때 해당 요소꺼만 실행시키려고 할때 사용한다.
                */
            
                let w_dir = event.wheelDelta;

                // 휠 내림 => -120 // 다음에 갈거 있냐?
                if(w_dir < 0 && $(this).next().length > 0) {
                    console.log($(this).index(),w_dir,"휠 내림")
                    $('html, body').stop().animate({
                        // scrollTop: $('.box').eq($(this).index()+1).offset().top
                        scrollTop: $(this).next().offset().top
                    }, 300) 
                }
                // 휠 올림 => 120
                else if(w_dir > 0 && $(this).prev().length > 0) {  
                    console.log($(this).index(),w_dir,"휠 올림")

                    $('html, body').stop().animate({
                        // scrollTop: $('.box').eq($(this).index()-1).offset().top
                        scrollTop: $(this).prev().offset().top
                    }, 300) 
                }
            }
        })



    // #s1
	$('#s1').mouseenter(function(){
        $('.s1').css({zIndex:'9999',opacity: '1'})
        $('.shorts_box').css({zIndex:'9'})
    })
    $('#s1').mouseleave(function(){
        $('.s1').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'999'})
    })

    // #s2
    $('#s2').mouseenter(function(){
        $('.s2').css({zIndex:'9999',opacity: '1'})
        $('.shorts_box').css({zIndex:'9'})
    })
    $('#s2').mouseleave(function(){
        $('.s2').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'999'})
    })

    // #s3
    $('#s3').mouseenter(function(){
        $('.s3').css({zIndex:'9999',opacity: '1'})
        $('.shorts_box').css({zIndex:'9'})
    })
    $('#s3').mouseleave(function(){
        $('.s3').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'999'})
    })

    // #s4
    $('#s5').mouseenter(function(){
        $('.s5').css({zIndex:'9999',opacity: '1'})
        $('.shorts_box').css({zIndex:'9'})
    })
    $('#s5').mouseleave(function(){
        $('.s5').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'999'})
    })

    // #s5
    $('#s6').mouseenter(function(){
        $('.s6').css({zIndex:'9999',opacity: '1'})
        $('.shorts_box').css({zIndex:'9'})
    })
    $('#s6').mouseleave(function(){
        $('.s6').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'999'})
    })


    var swiper = new Swiper(".mySwiper5", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',
        pagination : { // 페이징 설정
            el : '.swiper-pagination',
            clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        },
        navigation : { // 네비게이션 설정
            nextEl : '.swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
        },

    });


    $('.indi_1').click(function(){
        $('.c_1').css({backgroundColor:'rgb(37, 37, 37)'})
        $('.indi_1').css({color:'rgb(37, 37, 37)'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
    })
    
    $('.indi_2').click(function(){
        $('.c_2').css({backgroundColor:'rgb(37, 37, 37)'})
        $('.indi_2').css({color:'rgb(37, 37, 37)'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
    })
    
    $('.indi_3').click(function(){
        $('.c_3').css({backgroundColor:'rgb(37, 37, 37)'})
        $('.indi_3').css({color:'rgb(37, 37, 37)'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
    })
    
    $('.indi_4').click(function(){
        $('.c_4').css({backgroundColor:'rgb(37, 37, 37)'})
        $('.indi_4').css({color:'rgb(37, 37, 37)'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
    })
    
    $('.indi_5').click(function(){
        $('.c_5').css({backgroundColor:'rgb(37, 37, 37)'})
        $('.indi_5').css({color:'rgb(37, 37, 37)'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})
    })
 

    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 
    });

    
 

})