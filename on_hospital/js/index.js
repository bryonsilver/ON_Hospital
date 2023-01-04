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




    // side_indi의 X 버튼 클릭시 왼쪽 바깥으로 이동 , > 버튼 클릭시 원래대로 이동
    $('.x_btn').click(function(){
        $('.side_indi').css('left', '-10%')
        $('.arrow_btn').css('opacity', '1')
    })
    $('.arrow_btn').click(function(){
        $('.side_indi').css('left', '50px')
        $('.arrow_btn').css('opacity', '0')
    })





    // notice 병원소식에서 공지사항이든 기타소식 이든 클릭시 가운데에 내용 보이게


    $('#nc_t_1').css('display', 'block')

    $('#nc_t_2').css('display', 'none')
    $('#nc_t_3').css('display', 'none')
    $('#nc_t_4').css('display', 'none')
    $('#nc_t_5').css('display', 'none')
    $('#nc_t_6').css('display', 'none')
    
    $('.n_1').click(function(){
        console.log("1번 공지사항 클릭했수")
        // 클릭시 가운데 내용 나옴
        $('#no_1').css('opacity', '1')

        $('#no_2').css('opacity', '0')
        $('#no_3').css('opacity', '0')
        $('#no_4').css('opacity', '0')
        $('#no_5').css('opacity', '0')
        $('#no_6').css('opacity', '0')


        // 클릭시 가운데 타이틀 나옴

        $('#nc_t_1').css('display', 'block')

        $('#nc_t_2').css('display', 'none')
        $('#nc_t_3').css('display', 'none')
        $('#nc_t_4').css('display', 'none')
        $('#nc_t_5').css('display', 'none')
        $('#nc_t_6').css('display', 'none')


        // 클릭시 색상 변경

        $('.color_n_1').css('background', '#ff7b00')

        $('.color_n_2').css('background', '#dddddd')
        $('.color_n_3').css('background', '#dddddd')
        $('.color_n_4').css('background', '#dddddd')
        $('.color_n_5').css('background', '#dddddd')
        $('.color_n_6').css('background', '#dddddd')

        $('.color_n_1 .nc_t').css('border-bottom-color', '#ff7b00')

        $('.color_n_2 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_3 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_4 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_5 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_6 .nc_t').css('border-bottom-color', '#dddddd')

        $('.color_n_1 .nc_b').css('border-top-color', '#ff7b00')

        $('.color_n_2 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_3 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_4 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_5 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_6 .nc_b').css('border-top-color', '#dddddd')

        $('.color_n_1 .n_img_hover').css('display', 'block')
        $('.color_n_1 .notice_img').css('display', 'none')
        $('.color_n_1 .n_name_box').css('color', '#fff')

        $('.color_n_2 .n_img_hover').css('display', 'none')
        $('.color_n_3 .n_img_hover').css('display', 'none')
        $('.color_n_4 .n_img_hover').css('display', 'none')
        $('.color_n_5 .n_img_hover').css('display', 'none')
        $('.color_n_6 .n_img_hover').css('display', 'none')

        $('.color_n_2 .notice_img').css('display', 'block')
        $('.color_n_3 .notice_img').css('display', 'block')
        $('.color_n_4 .notice_img').css('display', 'block')
        $('.color_n_5 .notice_img').css('display', 'block')
        $('.color_n_6 .notice_img').css('display', 'block')

        $('.color_n_2 .n_name_box').css('color', '#333')
        $('.color_n_3 .n_name_box').css('color', '#333')
        $('.color_n_4 .n_name_box').css('color', '#333')
        $('.color_n_5 .n_name_box').css('color', '#333')
        $('.color_n_6 .n_name_box').css('color', '#333')
        
        


    })
    $('.n_2').click(function(){
        console.log("2번 기타소식 클릭했수")
                // 클릭시 가운데 내용 나옴
        $('#no_2').css('opacity', '1')

        $('#no_1').css('opacity', '0')
        $('#no_3').css('opacity', '0')
        $('#no_4').css('opacity', '0')
        $('#no_5').css('opacity', '0')
        $('#no_6').css('opacity', '0')

        // 클릭시 가운데 타이틀 나옴
        $('#nc_t_2').css('display', 'block')

        $('#nc_t_1').css('display', 'none')
        $('#nc_t_3').css('display', 'none')
        $('#nc_t_4').css('display', 'none')
        $('#nc_t_5').css('display', 'none')
        $('#nc_t_6').css('display', 'none')

// 클릭시 색상 변경
        $('.color_n_2').css('background', '#ff7b00')

        $('.color_n_1').css('background', '#dddddd')
        $('.color_n_3').css('background', '#dddddd')
        $('.color_n_4').css('background', '#dddddd')
        $('.color_n_5').css('background', '#dddddd')
        $('.color_n_6').css('background', '#dddddd')

// //////////////////////////////////
        $('.color_n_2 .nc_t').css('border-bottom-color', '#ff7b00')

        $('.color_n_1 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_3 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_4 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_5 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_6 .nc_t').css('border-bottom-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_2 .nc_b').css('border-top-color', '#ff7b00')

        $('.color_n_1 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_3 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_4 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_5 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_6 .nc_b').css('border-top-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_2 .n_img_hover').css('display', 'block')
        $('.color_n_2 .notice_img').css('display', 'none')
        $('.color_n_2 .n_name_box').css('color', '#fff')

        $('.color_n_1 .n_img_hover').css('display', 'none')
        $('.color_n_3 .n_img_hover').css('display', 'none')
        $('.color_n_4 .n_img_hover').css('display', 'none')
        $('.color_n_5 .n_img_hover').css('display', 'none')
        $('.color_n_6 .n_img_hover').css('display', 'none')

        $('.color_n_1 .notice_img').css('display', 'block')
        $('.color_n_3 .notice_img').css('display', 'block')
        $('.color_n_4 .notice_img').css('display', 'block')
        $('.color_n_5 .notice_img').css('display', 'block')
        $('.color_n_6 .notice_img').css('display', 'block')

        $('.color_n_1 .n_name_box').css('color', '#333')
        $('.color_n_3 .n_name_box').css('color', '#333')
        $('.color_n_4 .n_name_box').css('color', '#333')
        $('.color_n_5 .n_name_box').css('color', '#333')
        $('.color_n_6 .n_name_box').css('color', '#333')
    })
    $('.n_3').click(function(){
        console.log("3번 질문 클릭했수")
        $('#no_6').css('opacity', '1')

        $('#no_1').css('opacity', '0')
        $('#no_3').css('opacity', '0')
        $('#no_4').css('opacity', '0')
        $('#no_5').css('opacity', '0')
        $('#no_2').css('opacity', '0')

        $('#nc_t_6').css('display', 'block')

        $('#nc_t_2').css('display', 'none')
        $('#nc_t_1').css('display', 'none')
        $('#nc_t_4').css('display', 'none')
        $('#nc_t_5').css('display', 'none')
        $('#nc_t_3').css('display', 'none')

        // 클릭시 색상 변경
        $('.color_n_6').css('background', '#ff7b00')

        $('.color_n_1').css('background', '#dddddd')
        $('.color_n_3').css('background', '#dddddd')
        $('.color_n_4').css('background', '#dddddd')
        $('.color_n_5').css('background', '#dddddd')
        $('.color_n_2').css('background', '#dddddd')
        
// //////////////////////////////////
        $('.color_n_6 .nc_t').css('border-bottom-color', '#ff7b00')

        $('.color_n_1 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_3 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_4 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_5 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_2 .nc_t').css('border-bottom-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_6 .nc_b').css('border-top-color', '#ff7b00')

        $('.color_n_1 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_3 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_4 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_5 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_2 .nc_b').css('border-top-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_6 .n_img_hover').css('display', 'block')
        $('.color_n_6 .notice_img').css('display', 'none')
        $('.color_n_6 .n_name_box').css('color', '#fff')

        $('.color_n_1 .n_img_hover').css('display', 'none')
        $('.color_n_3 .n_img_hover').css('display', 'none')
        $('.color_n_4 .n_img_hover').css('display', 'none')
        $('.color_n_5 .n_img_hover').css('display', 'none')
        $('.color_n_2 .n_img_hover').css('display', 'none')

        $('.color_n_1 .notice_img').css('display', 'block')
        $('.color_n_3 .notice_img').css('display', 'block')
        $('.color_n_4 .notice_img').css('display', 'block')
        $('.color_n_5 .notice_img').css('display', 'block')
        $('.color_n_2 .notice_img').css('display', 'block')

        $('.color_n_1 .n_name_box').css('color', '#333')
        $('.color_n_3 .n_name_box').css('color', '#333')
        $('.color_n_4 .n_name_box').css('color', '#333')
        $('.color_n_5 .n_name_box').css('color', '#333')
        $('.color_n_2 .n_name_box').css('color', '#333')
    })
    $('.n_7').click(function(){
        console.log("4번 채용 클릭했수")
        $('#no_4').css('opacity', '1')

        $('#no_1').css('opacity', '0')
        $('#no_3').css('opacity', '0')
        $('#no_2').css('opacity', '0')
        $('#no_5').css('opacity', '0')
        $('#no_6').css('opacity', '0')

        $('#nc_t_4').css('display', 'block')

        $('#nc_t_2').css('display', 'none')
        $('#nc_t_3').css('display', 'none')
        $('#nc_t_1').css('display', 'none')
        $('#nc_t_5').css('display', 'none')
        $('#nc_t_6').css('display', 'none')

        // 클릭시 색상 변경
        $('.color_n_4').css('background', '#ff7b00')

        $('.color_n_1').css('background', '#dddddd')
        $('.color_n_3').css('background', '#dddddd')
        $('.color_n_6').css('background', '#dddddd')
        $('.color_n_5').css('background', '#dddddd')
        $('.color_n_2').css('background', '#dddddd')

        // //////////////////////////////////
        $('.color_n_4 .nc_t').css('border-bottom-color', '#ff7b00')

        $('.color_n_1 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_3 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_2 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_5 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_6 .nc_t').css('border-bottom-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_4 .nc_b').css('border-top-color', '#ff7b00')

        $('.color_n_1 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_3 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_2 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_5 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_6 .nc_b').css('border-top-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_4 .n_img_hover').css('display', 'block')
        $('.color_n_4 .notice_img').css('display', 'none')
        $('.color_n_4 .n_name_box').css('color', '#fff')

        $('.color_n_1 .n_img_hover').css('display', 'none')
        $('.color_n_3 .n_img_hover').css('display', 'none')
        $('.color_n_2 .n_img_hover').css('display', 'none')
        $('.color_n_5 .n_img_hover').css('display', 'none')
        $('.color_n_6 .n_img_hover').css('display', 'none')

        $('.color_n_1 .notice_img').css('display', 'block')
        $('.color_n_3 .notice_img').css('display', 'block')
        $('.color_n_2 .notice_img').css('display', 'block')
        $('.color_n_5 .notice_img').css('display', 'block')
        $('.color_n_6 .notice_img').css('display', 'block')

        $('.color_n_1 .n_name_box').css('color', '#333')
        $('.color_n_3 .n_name_box').css('color', '#333')
        $('.color_n_2 .n_name_box').css('color', '#333')
        $('.color_n_5 .n_name_box').css('color', '#333')
        $('.color_n_6 .n_name_box').css('color', '#333')
    })
    $('.n_5').click(function(){
        console.log("5번 식단 클릭했수")
        $('#no_5').css('opacity', '1')

        $('#no_1').css('opacity', '0')
        $('#no_3').css('opacity', '0')
        $('#no_2').css('opacity', '0')
        $('#no_4').css('opacity', '0')
        $('#no_6').css('opacity', '0')

        $('#nc_t_5').css('display', 'block')

        $('#nc_t_2').css('display', 'none')
        $('#nc_t_3').css('display', 'none')
        $('#nc_t_4').css('display', 'none')
        $('#nc_t_1').css('display', 'none')
        $('#nc_t_6').css('display', 'none')

        // 클릭시 색상 변경
        $('.color_n_5').css('background', '#ff7b00')

        $('.color_n_1').css('background', '#dddddd')
        $('.color_n_3').css('background', '#dddddd')
        $('.color_n_6').css('background', '#dddddd')
        $('.color_n_4').css('background', '#dddddd')
        $('.color_n_2').css('background', '#dddddd')

        // //////////////////////////////////
        $('.color_n_5 .nc_t').css('border-bottom-color', '#ff7b00')

        $('.color_n_1 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_3 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_4 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_2 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_6 .nc_t').css('border-bottom-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_5 .nc_b').css('border-top-color', '#ff7b00')

        $('.color_n_1 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_3 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_4 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_2 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_6 .nc_b').css('border-top-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_5 .n_img_hover').css('display', 'block')
        $('.color_n_5 .notice_img').css('display', 'none')
        $('.color_n_5 .n_name_box').css('color', '#fff')

        $('.color_n_1 .n_img_hover').css('display', 'none')
        $('.color_n_3 .n_img_hover').css('display', 'none')
        $('.color_n_4 .n_img_hover').css('display', 'none')
        $('.color_n_2 .n_img_hover').css('display', 'none')
        $('.color_n_6 .n_img_hover').css('display', 'none')

        $('.color_n_1 .notice_img').css('display', 'block')
        $('.color_n_3 .notice_img').css('display', 'block')
        $('.color_n_4 .notice_img').css('display', 'block')
        $('.color_n_2 .notice_img').css('display', 'block')
        $('.color_n_6 .notice_img').css('display', 'block')

        $('.color_n_1 .n_name_box').css('color', '#333')
        $('.color_n_3 .n_name_box').css('color', '#333')
        $('.color_n_4 .n_name_box').css('color', '#333')
        $('.color_n_2 .n_name_box').css('color', '#333')
        $('.color_n_6 .n_name_box').css('color', '#333')
    })
    $('.n_6').click(function(){
        console.log("6번 언론보도 클릭했수")
        $('#no_3').css('opacity', '1')

        $('#no_1').css('opacity', '0')
        $('#no_2').css('opacity', '0')
        $('#no_4').css('opacity', '0')
        $('#no_5').css('opacity', '0')
        $('#no_6').css('opacity', '0')

        $('#nc_t_3').css('display', 'block')

        $('#nc_t_2').css('display', 'none')
        $('#nc_t_6').css('display', 'none')
        $('#nc_t_4').css('display', 'none')
        $('#nc_t_5').css('display', 'none')
        $('#nc_t_1').css('display', 'none')

        // 클릭시 색상 변경
        $('.color_n_3').css('background', '#ff7b00')

        $('.color_n_1').css('background', '#dddddd')
        $('.color_n_4').css('background', '#dddddd')
        $('.color_n_6').css('background', '#dddddd')
        $('.color_n_5').css('background', '#dddddd')
        $('.color_n_2').css('background', '#dddddd')

        // //////////////////////////////////
        $('.color_n_3 .nc_t').css('border-bottom-color', '#ff7b00')

        $('.color_n_1 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_2 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_4 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_5 .nc_t').css('border-bottom-color', '#dddddd')
        $('.color_n_6 .nc_t').css('border-bottom-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_3 .nc_b').css('border-top-color', '#ff7b00')

        $('.color_n_1 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_2 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_4 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_5 .nc_b').css('border-top-color', '#dddddd')
        $('.color_n_6 .nc_b').css('border-top-color', '#dddddd')

// //////////////////////////////////
        $('.color_n_3 .n_img_hover').css('display', 'block')
        $('.color_n_3 .notice_img').css('display', 'none')
        $('.color_n_3 .n_name_box').css('color', '#fff')

        $('.color_n_1 .n_img_hover').css('display', 'none')
        $('.color_n_2 .n_img_hover').css('display', 'none')
        $('.color_n_4 .n_img_hover').css('display', 'none')
        $('.color_n_5 .n_img_hover').css('display', 'none')
        $('.color_n_6 .n_img_hover').css('display', 'none')

        $('.color_n_1 .notice_img').css('display', 'block')
        $('.color_n_2 .notice_img').css('display', 'block')
        $('.color_n_4 .notice_img').css('display', 'block')
        $('.color_n_5 .notice_img').css('display', 'block')
        $('.color_n_6 .notice_img').css('display', 'block')

        $('.color_n_1 .n_name_box').css('color', '#333')
        $('.color_n_2 .n_name_box').css('color', '#333')
        $('.color_n_4 .n_name_box').css('color', '#333')
        $('.color_n_5 .n_name_box').css('color', '#333')
        $('.color_n_6 .n_name_box').css('color', '#333')
    })
    $('.n_1').trigger('click'); 





    
    
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll == 0) {
            $(".indi_1").trigger('click');
        }
        else if (scroll == 518){
            $(".indi_2").trigger('click');
        }
        else if (scroll == 1505){
            $(".indi_3").trigger('click');
        }
        else if (scroll == 2442){
            $(".indi_4").trigger('click');
        }
        else if (scroll == 3379){
            $(".indi_5").trigger('click');
        }
        else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".indi_5").trigger('click');
        }
    })
  })



    // #s1
	$('#s1').mouseenter(function(){
        $('.s1').css({zIndex:'99999',opacity: '1', top:'5px'})
        $('.shorts_box').css({zIndex:'9999'})
    })
    $('#s1').mouseleave(function(){
        $('.s1').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'99'})
    })

    // #s2
    $('#s2').mouseenter(function(){
        $('.s2').css({zIndex:'99999',opacity: '1', top:'5px'})
        $('.shorts_box').css({zIndex:'9999'})
    })
    $('#s2').mouseleave(function(){
        $('.s2').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'99'})
    })

    // #s3
    $('#s3').mouseenter(function(){
        $('.s3').css({zIndex:'99999',opacity: '1', top:'5px'})
        $('.shorts_box').css({zIndex:'9999'})
    })
    $('#s3').mouseleave(function(){
        $('.s3').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'99'})
    })

    // #s4
    $('#s5').mouseenter(function(){
        $('.s5').css({zIndex:'99999',opacity: '1', top:'5px'})
        $('.shorts_box').css({zIndex:'9999'})
    })
    $('#s5').mouseleave(function(){
        $('.s5').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'99'})
    })

    // #s5
    $('#s6').mouseenter(function(){
        $('.s6').css({zIndex:'99999',opacity: '1', top:'5px'})
        $('.shorts_box').css({zIndex:'9999'})
    })
    $('#s6').mouseleave(function(){
        $('.s6').css({zIndex:'-8',opacity:'0'})
        $('.shorts_box').css({zIndex:'99'})
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


    $('.comma_line').css({borderColor:'transparent'})
    $('.c_line_1').css({borderColor:'#ff7c00'})
    $('.indi_1').click(function(){
        $('.c_1').css({backgroundColor:'#ff7c00'})
        $('.indi_1').css({color:'#ff7c00'})
        $('.c_line_1').css({borderColor:'#ff7c00'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})
        $('.c_line_2').css({borderColor:'transparent'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})
        $('.c_line_3').css({borderColor:'transparent'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})
        $('.c_line_4').css({borderColor:'transparent'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
        $('.c_line_5').css({borderColor:'transparent'})
    })
    
    $('.indi_2').click(function(){
        $('.c_2').css({backgroundColor:'#ff7c00'})
        $('.indi_2').css({color:'#ff7c00'})
        $('.c_line_2').css({borderColor:'#ff7c00'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})
        $('.c_line_1').css({borderColor:'transparent'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})
        $('.c_line_3').css({borderColor:'transparent'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})
        $('.c_line_4').css({borderColor:'transparent'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
        $('.c_line_5').css({borderColor:'transparent'})
    })
    
    $('.indi_3').click(function(){
        $('.c_3').css({backgroundColor:'#ff7c00'})
        $('.indi_3').css({color:'#ff7c00'})
        $('.c_line_3').css({borderColor:'#ff7c00'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})
        $('.c_line_2').css({borderColor:'transparent'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})
        $('.c_line_1').css({borderColor:'transparent'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})
        $('.c_line_4').css({borderColor:'transparent'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
        $('.c_line_5').css({borderColor:'transparent'})
    })
    
    $('.indi_4').click(function(){
        $('.c_4').css({backgroundColor:'#ff7c00'})
        $('.indi_4').css({color:'#ff7c00'})
        $('.c_line_4').css({borderColor:'#ff7c00'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})
        $('.c_line_2').css({borderColor:'transparent'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})
        $('.c_line_3').css({borderColor:'transparent'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})
        $('.c_line_1').css({borderColor:'transparent'})

        $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_5').css({color:'rgb(163, 163, 163)'})
        $('.c_line_5').css({borderColor:'transparent'})
    })
    
    $('.indi_5').click(function(){
        $('.c_5').css({backgroundColor:'#ff7c00'})
        $('.indi_5').css({color:'#ff7c00'})
        $('.c_line_5').css({borderColor:'#ff7c00'})

        $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_2').css({color:'rgb(163, 163, 163)'})
        $('.c_line_2').css({borderColor:'transparent'})

        $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_3').css({color:'rgb(163, 163, 163)'})
        $('.c_line_3').css({borderColor:'transparent'})

        $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_4').css({color:'rgb(163, 163, 163)'})
        $('.c_line_4').css({borderColor:'transparent'})

        $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
        $('.indi_1').css({color:'rgb(163, 163, 163)'})
        $('.c_line_1').css({borderColor:'transparent'})
    })
 


    $('.indi_1').click(function(){
        $('html').animate({scrollTop : 0}, 100);
    })




    var header_top = $('.header').offset().top - 100;
    var news_box_top = $('.news_box').offset().top - 100;
    var on_news_s_top = $('.on_news_s').offset().top - 100;
    var swiper_box3_top = $('.swiper_box3').offset().top - 100;
    var semi_black_box_top = $('.semi_black_box').offset().top - 100;


    let h_o_bot = header_top + $('.header').outerHeight();
    let n_o_bot = news_box_top + $('.news_box').outerHeight();
    let on_n_o_bot = on_news_s_top + $('.on_news_s').outerHeight();
    let sw3_o_bot = swiper_box3_top + $('.swiper_box3').outerHeight();
    let semi_o_bot = semi_black_box_top + $('.semi_black_box').outerHeight();

    $(window).scroll(function(){
        let s_top = $(this).scrollTop();

        if(header_top <= s_top && s_top < h_o_bot) {
            console.log("header이다")

            $('.c_1').css({backgroundColor:'#ff7c00'})
            $('.indi_1').css({color:'#ff7c00'})
            $('.c_line_1').css({borderColor:'#ff7c00'})
    
            $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_2').css({color:'rgb(163, 163, 163)'})
            $('.c_line_2').css({borderColor:'transparent'})
    
            $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_3').css({color:'rgb(163, 163, 163)'})
            $('.c_line_3').css({borderColor:'transparent'})
    
            $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_4').css({color:'rgb(163, 163, 163)'})
            $('.c_line_4').css({borderColor:'transparent'})
    
            $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_5').css({color:'rgb(163, 163, 163)'})
            $('.c_line_5').css({borderColor:'transparent'})
        }
        else if(news_box_top <= s_top && s_top < n_o_bot) {
            console.log("news_box 이다")

            $('.c_2').css({backgroundColor:'#ff7c00'})
            $('.indi_2').css({color:'#ff7c00'})
            $('.c_line_2').css({borderColor:'#ff7c00'})
    
            $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_1').css({color:'rgb(163, 163, 163)'})
            $('.c_line_1').css({borderColor:'transparent'})
    
            $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_3').css({color:'rgb(163, 163, 163)'})
            $('.c_line_3').css({borderColor:'transparent'})
    
            $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_4').css({color:'rgb(163, 163, 163)'})
            $('.c_line_4').css({borderColor:'transparent'})
    
            $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_5').css({color:'rgb(163, 163, 163)'})
            $('.c_line_5').css({borderColor:'transparent'})
        }
        else if(on_news_s_top <= s_top && s_top < on_n_o_bot) {
            console.log("on_news 이다")
            
            $('.c_3').css({backgroundColor:'#ff7c00'})
            $('.indi_3').css({color:'#ff7c00'})
            $('.c_line_3').css({borderColor:'#ff7c00'})

            $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_2').css({color:'rgb(163, 163, 163)'})
            $('.c_line_2').css({borderColor:'transparent'})

            $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_1').css({color:'rgb(163, 163, 163)'})
            $('.c_line_1').css({borderColor:'transparent'})

            $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_4').css({color:'rgb(163, 163, 163)'})
            $('.c_line_4').css({borderColor:'transparent'})

            $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_5').css({color:'rgb(163, 163, 163)'})
            $('.c_line_5').css({borderColor:'transparent'})
        } 
        else if(swiper_box3_top <= s_top && s_top < sw3_o_bot) {
            console.log("swiper_3 이다")

            $('.c_4').css({backgroundColor:'#ff7c00'})
            $('.indi_4').css({color:'#ff7c00'})
            $('.c_line_4').css({borderColor:'#ff7c00'})
    
            $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_2').css({color:'rgb(163, 163, 163)'})
            $('.c_line_2').css({borderColor:'transparent'})
    
            $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_3').css({color:'rgb(163, 163, 163)'})
            $('.c_line_3').css({borderColor:'transparent'})
    
            $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_1').css({color:'rgb(163, 163, 163)'})
            $('.c_line_1').css({borderColor:'transparent'})
    
            $('.c_5').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_5').css({color:'rgb(163, 163, 163)'})
            $('.c_line_5').css({borderColor:'transparent'})
        }
        else if(semi_black_box_top <= s_top && s_top < semi_o_bot) {
            console.log("semi_black 이다")

            $('.c_5').css({backgroundColor:'#ff7c00'})
            $('.indi_5').css({color:'#ff7c00'})
            $('.c_line_5').css({borderColor:'#ff7c00'})
    
            $('.c_2').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_2').css({color:'rgb(163, 163, 163)'})
            $('.c_line_2').css({borderColor:'transparent'})
    
            $('.c_3').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_3').css({color:'rgb(163, 163, 163)'})
            $('.c_line_3').css({borderColor:'transparent'})
    
            $('.c_4').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_4').css({color:'rgb(163, 163, 163)'})
            $('.c_line_4').css({borderColor:'transparent'})
    
            $('.c_1').css({backgroundColor:'rgb(163, 163, 163)'})
            $('.indi_1').css({color:'rgb(163, 163, 163)'})
            $('.c_line_1').css({borderColor:'transparent'})
        }
    });






})