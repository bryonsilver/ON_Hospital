$(document).ready(function(){
    // $('.ml_li').click(function(){
    //     $(this).toggleClass('ml_li_active')
    // })

    // if (location.pathname.indexOf('questions') != -1) {
    //     $('#targetListTag').addClass('active');
    //   }

    // $(document).on("click", ".ml_li > a", function(event){
	// 	$(this).attr("id","li_active");
	// });	

    // var left = {
    //     pageSubmitFn : function(menu){
    //          if(menu === "home"){
    //             $("#frm").attr("action", "/"); //form 의 action 값을 /로 변경
    //             $("#pageName").val("m_li");
    //         }// }else if(menu==="profile"){
    //         //     $("#frm").attr("action", "home2"); //form 의 action 값을 home2로 변경
    //         //     $("#pageName").val("profile");
    //         // }
    //         $("#frm").submit();
    //     }
    // }
    
    // $(function(){
    //     $(".ml_li").removeClass("active");
    //     var pageName = "<c:out value='${param.pageName}' />";	
    //     $("#"+pageName).addClass("active"); 	
    //     $(".ml_li").click(function(){
    //         var menu = $(this).attr("id");		
    //         left.pageSubmitFn(menu);
    //     })
    // }) 




    $('#select_id').click(function(){
        $(this).css({boxShadow: '0 0 0 5px #007eeb4d'})
    })

    $('html').click(function(e) {   
        if(!$(e.target).hasClass("select_class")) {
            $('#select_id').css({boxShadow: '0 0 0 0px #007eeb4d'})
        }
    });   
})