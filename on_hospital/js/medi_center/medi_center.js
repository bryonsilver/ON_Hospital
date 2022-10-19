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
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(cen_v)

    if (cen_v == 0) {
        $('#selec0').prop("selected", true);
        $('.m1').addClass('active');
        $('.spe_cen_1').addClass('nav_active')
    } else if (cen_v == 1) {
        $('#selec1').prop("selected", true);
        $('.m2').addClass('active');
        $('.spe_cen_2').addClass('nav_active')
    } else if (cen_v == 2) {
        $('#selec2').prop("selected", true);
        $('.m3').addClass('active');
        $('.spe_cen_3').addClass('nav_active')
    } else if (cen_v == 3) {
        $('#selec3').prop("selected", true);
        $('.m4').addClass('active');
        $('.spe_cen_4').addClass('nav_active')
    } else if (cen_v == 4) {
        $('#selec4').prop("selected", true);
        $('.m5').addClass('active');
        $('.spe_cen_5').addClass('nav_active')
    } else if (cen_v == 5) {
        $('#selec5').prop("selected", true);
        $('.m6').addClass('active');
        $('.spe_cen_6').addClass('nav_active')
    } else if (cen_v == 6) {
        $('#selec6').prop("selected", true);
        $('.m7').addClass('active');
        $('.spe_cen_7').addClass('nav_active')
    } else if (cen_v == 7) {
        $('#selec7').prop("selected", true);
        $('.m8').addClass('active');
        $('.spe_cen_8').addClass('nav_active')
    } else if (cen_v == 8) {
        $('#selec8').prop("selected", true);
        $('.m9').addClass('active');
        $('.spe_cen_9').addClass('nav_active')
    } else if (cen_v == 9) {
        $('#selec9').prop("selected", true);
        $('.m10').addClass('active');
        $('.spe_cen_10').addClass('nav_active')
    } else if (cen_v == 10) {
        $('#selec10').prop("selected", true);
        $('.m11').addClass('active');
        $('.spe_cen_11').addClass('nav_active')
    } else if (cen_v == 11) {
        $('#selec11').prop("selected", true);
        $('.m12').addClass('active');
        $('.spe_cen_12').addClass('nav_active')
    } else if (cen_v == 12) {
        $('#selec12').prop("selected", true);
        $('.m13').addClass('active');
        $('.spe_cen_13').addClass('nav_active')
    } else if (cen_v == 13) {
        $('#selec13').prop("selected", true);
        $('.m14').addClass('active');
        $('.spe_cen_14').addClass('nav_active')
    } else if (cen_v == 14) {
        $('#selec14').prop("selected", true);
        $('.m15').addClass('active');
        $('.spe_cen_15').addClass('nav_active')
    } else if (cen_v == 15) {
        $('#selec15').prop("selected", true);
        $('.m16').addClass('active');
        $('.spe_cen_16').addClass('nav_active')
    } else if (cen_v == 16) {
        $('#selec16').prop("selected", true);
        $('.m17').addClass('active');
        $('.spe_cen_17').addClass('nav_active')
    } else if (cen_v == 17) {
        $('#selec17').prop("selected", true);
        $('.m18').addClass('active');
        $('.spe_cen_18').addClass('nav_active')
    } else if (cen_v == 18) {
        $('#selec18').prop("selected", true);
        $('.m19').addClass('active');
        $('.spe_cen_19').addClass('nav_active')
    } else if (cen_v == 19) {
        $('#selec19').prop("selected", true);
        $('.m20').addClass('active');
        $('.spe_cen_20').addClass('nav_active')
    } else if (cen_v == 20) {
        $('#selec20').prop("selected", true);
        $('.m21').addClass('active');
        $('.spe_cen_21').addClass('nav_active')
    } else if (cen_v == 21) {
        $('#selec21').prop("selected", true);
        $('.m22').addClass('active');
        $('.spe_cen_22').addClass('nav_active')
    } else if (cen_v == 22) {
        $('#selec22').prop("selected", true);
        $('.m23').addClass('active');
        $('.spe_cen_23').addClass('nav_active')
    } else if (cen_v == 23) {
        $('#selec23').prop("selected", true);
        $('.m24').addClass('active');
        $('.spe_cen_24').addClass('nav_active')
    } else if (cen_v == 24) {
        $('#selec24').prop("selected", true);
        $('.m25').addClass('active');
        $('.spe_cen_25').addClass('nav_active')
    } else if (cen_v == 25) {
        $('#selec25').prop("selected", true);
        $('.m26').addClass('active');
        $('.spe_cen_26').addClass('nav_active')
    } else if (cen_v == 26) {
        $('#selec26').prop("selected", true);
        $('.m27').addClass('active');
        $('.spe_cen_27').addClass('nav_active')
    } else if (cen_v == 27) {
        $('#selec27').prop("selected", true);
        $('.m28').addClass('active');
        $('.spe_cen_28').addClass('nav_active')
    } else if (cen_v == 28) {
        $('#selec28').prop("selected", true);
        $('.m29').addClass('active');
        $('.spe_cen_29').addClass('nav_active')
    } 

    for(let i=0; i<1; i++) {
        let cent_list = `
        <div class="m_r_content_box">
            <div class="mr_title">
                <h1 class="title_box">`
                for(let j=0; j<1; j++) {
         cent_list += `<div class="img_box"><img src="./img/common/title_icon2.png" alt="title_icon" class="title_icon"></div> 
                        ${CENT_TITLE[0][cen_v].title}`
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