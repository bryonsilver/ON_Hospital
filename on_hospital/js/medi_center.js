$(document).ready(function(){
    $('#select_id').click(function(){
        $(this).css({boxShadow: '0 0 0 5px #007eeb4d'})
    })

    $('html').click(function(e) {   
        if(!$(e.target).hasClass("select_class")) {
            $('#select_id').css({boxShadow: '0 0 0 0px #007eeb4d'})
        }
    });   


    const urlParams = new URL(location.href).searchParams;
    const cen_v = urlParams.get('cen_v');
    console.log(cen_v)

    if (cen_v == 0) {
        $('.m1').addClass('active');
    } else if (cen_v == 1) {
        $('.m2').addClass('active');
    } else if (cen_v == 2) {
        $('.m3').addClass('active');
    } else if (cen_v == 3) {
        $('.m4').addClass('active');
    } else if (cen_v == 4) {
        $('.m5').addClass('active');
    } else if (cen_v == 5) {
        $('.m6').addClass('active');
    } else if (cen_v == 6) {
        $('.m7').addClass('active');
    } else if (cen_v == 7) {
        $('.m8').addClass('active');
    } else if (cen_v == 8) {
        $('.m9').addClass('active');
    } else if (cen_v == 9) {
        $('.m10').addClass('active');
    } else if (cen_v == 10) {
        $('.m11').addClass('active');
    } else if (cen_v == 11) {
        $('.m12').addClass('active');
    } else if (cen_v == 12) {
        $('.m13').addClass('active');
    } else if (cen_v == 13) {
        $('.m14').addClass('active');
    } else if (cen_v == 14) {
        $('.m15').addClass('active');
    } else if (cen_v == 15) {
        $('.m16').addClass('active');
    } else if (cen_v == 16) {
        $('.m17').addClass('active');
    } else if (cen_v == 17) {
        $('.m18').addClass('active');
    } else if (cen_v == 18) {
        $('.m19').addClass('active');
    } else if (cen_v == 19) {
        $('.m20').addClass('active');
    } else if (cen_v == 20) {
        $('.m21').addClass('active');
    } else if (cen_v == 21) {
        $('.m22').addClass('active');
    } else if (cen_v == 22) {
        $('.m23').addClass('active');
    } else if (cen_v == 23) {
        $('.m24').addClass('active');
    } else if (cen_v == 24) {
        $('.m25').addClass('active');
    } else if (cen_v == 25) {
        $('.m26').addClass('active');
    } else if (cen_v == 26) {
        $('.m27').addClass('active');
    } else if (cen_v == 27) {
        $('.m28').addClass('active');
    } 

    for(let i=0; i<1; i++) {
        let cent_list = `
        <div class="m_r_content_box">
            <div class="mr_title">
                <h1 class="mr_page_title">`
                for(let j=0; j<1; j++) {
         cent_list += `<span class="title_icon"></span> ${CENT_TITLE[0][cen_v].title}`
                }  
     cent_list += `</h1>
            </div>
            <div class="mr_img">`
            for(let j=0; j<1; j++) {
      cent_list += `<div class="box_img cen2_${LIST_N[0][cen_v].name}"></div>`
            }
cent_list += `</div>
            <div class="mr_content">
                <div class="mr_c_box">
                    <div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title}</div>
                    <div class="mr_c_content">
                        <span>${CENT_LIST[0][cen_v].sub_context1}</span>
                    </div>
                </div>`
                // `<div class="mr_c_box">
                //     <div class="mr_title">센터 의료진 소개</div>
                //     <div class="mr_cb_content">`
                //     for(let j=0; j<CENT_TITLE[0][cen_v].cent_doc.length; j++) {
                //         `<div class="mr_doc_n">
                //             <a href="#">${CENT_LIST[0][cen_v].cent_doc[j]}</a>
                //         </div>`
                //     }
        cent_list += `</div>
                </div>
            </div>
        </div>
        
        `

        $('.m_right').append(cent_list);
    }
})