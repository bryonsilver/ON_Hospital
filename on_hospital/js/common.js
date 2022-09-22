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
	$('.burger_menu_box').click(function(){
		$('.first_line').css({transform: 'rotate(-90deg)'})
		$('.last_line').css({transform: 'rotate(-90deg)'})
	})
	$('.burger_menu_box').click(function() {
		var clicks = $(this).data('clicks');
		if (clicks) {
		   // odd clicks
		   	$('.first_line').css({transform: 'rotate(-90deg)'})
			$('.last_line').css({transform: 'rotate(-90deg)'})
		} else {
		   // even clicks
		   	$('.first_line').css({transform: 'rotate(0deg)'})
			$('.last_line').css({transform: 'rotate(0deg)'})
		}
		$(this).data("clicks", !clicks);
	  });
})