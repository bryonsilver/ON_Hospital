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
		}
	}).resize();
	
})