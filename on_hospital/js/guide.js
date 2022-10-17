$(document).ready(function(){

    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    console.log(num)

    if (num == 0) {
        $('.pm_1').addClass('active')
        $('.hos_infor_1').addClass('nav_active')
    } else if (num == 1) {
        $('.pm_2').addClass('active')
        $('.hos_infor_2').addClass('nav_active')
    } else if (num == 2) {
        $('.pm_3').addClass('active')
        $('.hos_infor_3').addClass('nav_active')
    } else if (num == 3) {
        $('.pm_4').addClass('active')
        $('.hos_infor_4').addClass('nav_active')
    } else if (num == 4) {
        $('.pm_5').addClass('active')
        $('.hos_infor_5').addClass('nav_active')
    } else if (num == 5) {
        $('.pm_6').addClass('active')
        $('.hos_infor_6').addClass('nav_active')
    } else if (num == 6) {
        $('.pm_7').addClass('active')
        $('.hos_infor_7').addClass('nav_active')
    } else if (num == 7) {
        $('.pm_8').addClass('active')
        $('.hos_infor_8').addClass('nav_active')
    } else if (num == 8) {
        $('.pm_9').addClass('active')
        $('.hos_infor_9').addClass('nav_active')
    } else if (num == 9) {
        $('.pm_10').addClass('active')
        $('.hos_infor_10').addClass('nav_active')
    } 


    let data = GUIDE_LIST[0];
    for(let i=0; i<1; i++) {
        let guide_list = `
                        <div class="title">
                            <span class="title_icon"></span>
                            <h1>${data[num].title}</h1>
                        </div>`
                        if (num == 0) {
          guide_list +=  `<div class="mf_first_box">
                            <div class="mf_f_title_box">
                                <h4>${data[num].sub_title}</h4>
                                <span class="line"></span>
                            </div>`
                            for (let j=0; j<data[num].context.length; j++) {
                     guide_list +=  `<div class="mf_f_s">${data[num].context}</div>`
                            }
                  guide_list += `</div>
                        <div class="mf_second_box">
                            <div class="mf_s_text_box">
                                <div class="doc_first doc_con">
                                    <h5>${data[num].cont_name[0]}</h5>
                                    <span class="line"></span>
                                    <span class="text">${data[num].context[2]}</span>
                                </div>
                                <div class="doc_second doc_con">
                                    <h5>${data[num].cont_name[1]}</h5>
                                    <span class="line"></span>
                                    <span class="text">${data[num].context[3]}</span>
                                </div>
                                <div class="doc_third doc_con">
                                    <h5>${data[num].cont_name[2]}</h5>
                                    <span class="line"></span>
                                    <span class="text">${data[num].context[2]}</span>
                                </div>

                            </div>`
                            for (let j=0; j<data[num].cont_name.length; j++) {
                     guide_list += ` <div class="mf_s_img_1_box mf_s_img_box">
                                <img src="./img/guide/${data[num].img_src[j]}" alt="${data[num].img_src[j]}">
                                <h5 class="text_center">${data[num].cont_name[j]}</h5>
                                <div class="text_center">온종합병원장</div>
                            </div>`
                            }
                  guide_list += `</div>`
                        } else {
                    guide_list +=  `<div class="mf_first_box">
                            <div class="mf_f_title_box">
                                <h4>${data[num].sub_title}</h4>
                                <span class="line"></span>
                            </div>`
                            for (let j=0; j<data[num].context.length; j++) {
                  guide_list +=  ` <div class="mf_f_s">${data[num].context}</div>`
                            }
                            
               guide_list += `</div>`
                        
                        }

            $('.m_flex_box').append(guide_list)
                        
    }

})