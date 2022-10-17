$(document).ready(function(){
    $(window).resize(function(){
        var ck_click = false;
		var width = window.innerWidth;
		if(width < 1150){
			$('.danger').css({opacity:'1'})
            alert('모바일에서는 보기 어려움으로 모니터화면으로 봐주시기 바랍니다.')
            ck_click = ture;
		}
	}).resize();
})