$(document).ready(function(){
   
	// nav

	$('.h_nav_li').mouseenter(function(){

		$('.nav_pan_box').addClass('p_active');

		$('.nav_0').hover(function(){
			$('.nav_pan_box').css({height: "120px"})
			console.log('되고 잇음 1번')
		})
		$('.nav_1').hover(function(){
			$('.nav_pan_box').css({height: "120px"})
			console.log('되고 잇음 2번')
		})
		$('.nav_2').hover(function(){
			$('.nav_pan_box').css({height: "370px"})
			console.log('되고 잇음 3번')
		})
		$('.nav_3').hover(function(){
			$('.nav_pan_box').css({height: "120px"})
			console.log('되고 잇음 4번')
		})


		// li에서 몇번째꺼에 마우스 올라갔는지 감지
		console.log($(this).index());

		// n_pan_box 안에 있는 pan들중에서 그 번째꺼만 display: block으로 변경
		$('.n_pan').removeClass('n_pan_active') 
		$('.n_pan').eq($(this).index()).addClass('n_pan_active')
	});
	$('.h_nav_li, .nav_pan_box').mouseleave(function(){
		$('.nav_pan_box').css('height', 'auto')
	});


	



	
	$('.goog-te-combo option:eq(0)').replaceWith("<option value='ko'>ko</option>");

	$('.goog-te-combo option:eq(1)').replaceWith("<option value='el'>el</option>");
	$('.goog-te-combo option:eq(2)').replaceWith("<option value='nl'>nl</option>");
	$('.goog-te-combo option:eq(3)').replaceWith("<option value='da'>da</option>");
	$('.goog-te-combo option:eq(4)').replaceWith("<option value='de'>de</option>");
	$('.goog-te-combo option:eq(5)').replaceWith("<option value='ru'>ru</option>");
	$('.goog-te-combo option:eq(6)').replaceWith("<option value='ro'>ro</option>");
	$('.goog-te-combo option:eq(7)').replaceWith("<option value='mk'>mk</option>");
	$('.goog-te-combo option:eq(8)').replaceWith("<option value='ms'>ms</option>");
	$('.goog-te-combo option:eq(9)').replaceWith("<option value='mn'>mn</option>");
	$('.goog-te-combo option:eq(10)').replaceWith("<option value='vi'>vi</option>");
	$('.goog-te-combo option:eq(11)').replaceWith("<option value='bg'>bg</option>");
	$('.goog-te-combo option:eq(12)').replaceWith("<option value='sv'>sv</option>");
	$('.goog-te-combo option:eq(13)').replaceWith("<option value='es'>es</option>");
	$('.goog-te-combo option:eq(14)').replaceWith("<option value='ar'>ar</option>");
	$('.goog-te-combo option:eq(15)').replaceWith("<option value='af'>af</option>");
	$('.goog-te-combo option:eq(16)').replaceWith("<option value='sq'>sq</option>");
	$('.goog-te-combo option:eq(17)').replaceWith("<option value='et'>et</option>");
	$('.goog-te-combo option:eq(18)').replaceWith("<option value='en'>en</option>");
	$('.goog-te-combo option:eq(19)').replaceWith("<option value='uz'>uz</option>");
	$('.goog-te-combo option:eq(20)').replaceWith("<option value='uk'>uk</option>");
	$('.goog-te-combo option:eq(21)').replaceWith("<option value='it'>it</option>");
	$('.goog-te-combo option:eq(22)').replaceWith("<option value='id'>id</option>");
	$('.goog-te-combo option:eq(23)').replaceWith("<option value='ja'>ja</option>");
	$('.goog-te-combo option:eq(24)').replaceWith("<option value='zn-CN'>zn-CN</option>");
	$('.goog-te-combo option:eq(25)').replaceWith("<option value='zn-TW'>zn-TW</option>");
	$('.goog-te-combo option:eq(26)').replaceWith("<option value='cs'>cs</option>");
	$('.goog-te-combo option:eq(27)').replaceWith("<option value='hr'>hr</option>");
	$('.goog-te-combo option:eq(28)').replaceWith("<option value='th'>th</option>");
	$('.goog-te-combo option:eq(29)').replaceWith("<option value='fa'>fa</option>");
	$('.goog-te-combo option:eq(30)').replaceWith("<option value='pt'>pt</option>");
	$('.goog-te-combo option:eq(31)').replaceWith("<option value='fr'>fr</option>");
	$('.goog-te-combo option:eq(32)').replaceWith("<option value='fi'>fi</option>");
	$('.goog-te-combo option:eq(33)').replaceWith("<option value='hu'>hu</option>");
	$('.goog-te-combo option:eq(34)').replaceWith("<option value='hi'>hi</option>");


	
	

	// nav 전체보기
	$('.all_see').click(function(){
		$('.all_s_tab_box').css({display: 'block'})
		$('.black_pan').css({display: 'block'})
	})
	$('.as_tab_title').click(function(){
		$('.all_s_tab_box').css({display: 'none'})
		$('.black_pan').css({display: 'none'})
	})
	$('.black_pan').click(function(){
		$('.all_s_tab_box').css({display: 'none'})
		$('.black_pan').css({display: 'none'})
	})



	$(window).resize(function(){
		var width = window.innerWidth;
		if(width < 1200){
			$('.all_s_tab_box').css({display: 'none'})
			$('.black_pan').css({display: 'none'})
		}
	}).resize();

	//burger click시
	$('.burger_menu_box').click(function() {
		$('.burger_nav_box').toggleClass('buger_n_active')
		$('.black_pan_bur').toggleClass('bl_pan')
		$('.top_btn').toggleClass('none')
		var clicks = $(this).data('clicks');
		if (clicks) {
		   // odd clicks
		   	$('.first_line').css({transform: 'rotate(0deg)'})
			$('.last_line').css({transform: 'rotate(0deg)'})
			$('.mid_bur').css({opacity: '1'})
		} else {
		   // even clicks
			$('.first_line').css({transform: 'rotate(-45deg)'})
			$('.last_line').css({transform: 'rotate(45deg)'})
			$('.mid_bur').css({opacity: '0'})
		}
		$(this).data("clicks", !clicks);
	});
	
	$('.all_see').click(function(){
		$('.first_line2').css({transform: 'rotate(-45deg)'})
		$('.last_line2').css({transform: 'rotate(45deg)'})
		$('.mid_bur').css({opacity: '0'})
	})
	$('.as_tab_title').click(function(){
		$('.first_line2').css({transform: 'rotate(0deg)'})
		$('.last_line2').css({transform: 'rotate(0deg)'})
		$('.mid_bur').css({opacity: '1'})
	})
	$('.black_pan').click(function(){
		$('.first_line2').css({transform: 'rotate(0deg)'})
		$('.last_line2').css({transform: 'rotate(0deg)'})
		$('.mid_bur').css({opacity: '1'})
	})

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop == 0){
			//스크롤이 끝에 도달했을때 실행될 이벤트
			$('.top_btn').css({opacity: '0'})
		} else {
			//아닐때 이벤트
			$('.top_btn').css({opacity: '1'})
		}
	})

	$('.top_btn').click(function(){
		$( 'html, body' ).animate( { scrollTop : 0 },0 );
		return false;
	})


	$('.bn_li').click(function(){
		$('.bn_li').removeClass('bn_active')
		$(this).toggleClass('bn_active')
	})
	$(".bn_li ul.bn_n_ul").hide();
	$('.btn_p').click(function(){
		$('.bn_li').removeClass('bn_active')
		$(this).parents('.bn_li').toggleClass('bn_active')
		$(".bn_li").off('click').click(function(){
			$("ul",this).slideToggle();
		});
		var clicks = $(this).data('clicks');
		if (clicks) {
		   // odd clicks
		   $(this).find('.bn_p_after').removeClass('bn_p_after_d')
		} else {
		   // even clicks
		   $(this).find('.bn_p_after').addClass('bn_p_after_d')
		}
		$(this).data("clicks", !clicks);
	})


	var swiper = new Swiper(".mySwiper4", {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',

        // 분기점
        breakpoints: {
            2000: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            // when window width is >= 768px
            1025: {
            slidesPerView: 5,
            spaceBetween: 0
            },
            // when window width is >= 1024px
            767: {
            slidesPerView: 4,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            100: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }  
    });

	var swiper = new Swiper(".mySwiper5", {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',

        // 분기점
        breakpoints: {
            2000: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            // when window width is >= 768px
            1025: {
            slidesPerView: 3,
            spaceBetween: 0
            },
            // when window width is >= 1024px
            767: {
            slidesPerView: 3,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            100: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }  
    });
    $(window).resize(function(){
		var width = window.innerWidth;
		if(width < 1000){
			$('.mySwiper4')
			$('.black_pan').css({display: 'none'})
		}
	}).resize();
    
    $('.swiper').hover(function(){
        swiper.autoplay.stop()
    }, function(){
        swiper.autoplay.start()
    })

	// 병원소식이든 진료안내 등등 옆 m_left의 active 된 li에 hover 했을때  글자 색상 하양그대로로

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

	

	
})