$(document).ready(function(){

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
    
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1.3,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',
    
    });

    var swiper = new Swiper(".mySwiper4", {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',
        
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

})