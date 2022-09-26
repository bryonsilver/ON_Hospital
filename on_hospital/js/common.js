$(document).ready(function(){
   
	// nav
	$('.nav_ul .n_nav_ul').hide();
    $('.nav_li').mouseover(function(){
        var submenu = $(this).children('.n_nav_ul')
        submenu.slideDown();
    });
    $('.nav_li').mouseleave(function(){
        $('.n_nav_ul').hide();
    })

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
			$('.burger_span').css({transform: 'rotate(0deg)'})
		} else {
		   // even clicks
			$('.first_line').css({transform: 'rotate(-90deg)'})
			$('.last_line').css({transform: 'rotate(-90deg)'})
			$('.burger_span').css({transform: 'rotate(45deg)'})
		}
		$(this).data("clicks", !clicks);
	});
	
	$('.all_see').click(function(){
		$('.first_line2').css({transform: 'rotate(-90deg)'})
		$('.last_line2').css({transform: 'rotate(-90deg)'})
		$('.line_box_as').css({transform: 'rotate(45deg)'})
	})
	$('.as_tab_title').click(function(){
		$('.first_line2').css({transform: 'rotate(0deg)'})
		$('.last_line2').css({transform: 'rotate(0deg)'})
		$('.line_box_as').css({transform: 'rotate(0deg)'})
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
		$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
		return false;
	})


	$('.bn_li').click(function(){
		$('.bn_li').removeClass('bn_active')
		$(this).toggleClass('bn_active')
	})
	$(".bn_li ul.bn_n_ul").hide();
	$('.bn_plus_btn').click(function(){
		$('.bn_li').removeClass('bn_active')
		$(this).parents('.bn_li').toggleClass('bn_active')
		$(".bn_li").off('click').click(function(){
			$("ul",this).slideToggle();
		});
		var clicks = $(this).data('clicks');
		if (clicks) {
		   // odd clicks
		   $('.bn_p_after').removeClass('bn_p_after_d')
		} else {
		   // even clicks
		   $('.bn_p_after').addClass('bn_p_after_d')
		}
		$(this).data("clicks", !clicks);
	})
	
})