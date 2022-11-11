$(document).ready(function(){

	const urlParams = new URL(location.href).searchParams;
	const selec = urlParams.get('selec');
	console.log('selec',selec)

    $(window).resize(function(){
        // var alert_ck= false;
		var width = window.innerWidth;
		if(width < 1150){
			$('.danger').css({opacity:'1'})
            alert('모바일에서는 보기 어려움으로 모니터화면으로 봐주시기 바랍니다.')
            // alert_ck= ture; 
			// ture false 하면 햄버거 메뉴까지 안먹히게 됨... 방법 모색....
		}
	}).resize();


	// if($('.carousel_txt').length) {
   //     console.log(1)
              
   //     $(window).on('scroll', function() {
   //         if ($(window).scrollTop() >= 500) {
   //             $('#quick').attr('style', 'top:130px !important');
   //         } else {
    //            $('#quick').attr('style', 'top:837px !important');
    //        }
    //    })
   //  } else {console.log('false')}
})