$(document).ready(function(){

    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(num)

    if (num == 0) {
         $('#selec0').prop("selected", true);
        $('.pm_1').addClass('active')
        $('.hos_infor_1').addClass('nav_active')
    } else if (num == 1) {
         $('#selec1').prop("selected", true);
        $('.pm_2').addClass('active')
        $('.hos_infor_2').addClass('nav_active')
    } else if (num == 2) {
         $('#selec2').prop("selected", true);
        $('.pm_3').addClass('active')
        $('.hos_infor_3').addClass('nav_active')
    } else if (num == 3) {
         $('#selec3').prop("selected", true);
        $('.pm_4').addClass('active')
        $('.hos_infor_4').addClass('nav_active')
    } else if (num == 4) {
         $('#selec4').prop("selected", true);
        $('.pm_5').addClass('active')
        $('.hos_infor_5').addClass('nav_active')
    } else if (num == 5) {
         $('#selec5').prop("selected", true);
        $('.pm_6').addClass('active')
        $('.hos_infor_6').addClass('nav_active')
    } else if (num == 6) {
         $('#selec6').prop("selected", true);
        $('.pm_7').addClass('active')
        $('.hos_infor_7').addClass('nav_active')
    } else if (num == 7) {
         $('#selec7').prop("selected", true);
        $('.pm_8').addClass('active')
        $('.hos_infor_8').addClass('nav_active')
    } else if (num == 8) {
         $('#selec8').prop("selected", true);
        $('.pm_9').addClass('active')
        $('.hos_infor_9').addClass('nav_active')
    } else if (num == 9) {
         $('#selec9').prop("selected", true);
        $('.pm_10').addClass('active')
        $('.hos_infor_10').addClass('nav_active')
    } 


    let data = GUIDE_LIST[0];
    for(let i=0; i<1; i++) {
        let guide_list = `
                        <h1 class="title_box">
                            <div class="img_box"><img src="./img/common/title_icon2.png" alt="title_icon" class="title_icon"></div>
                            <span>${data[num].title}</span>
                        </h1>`
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

            // $('.m_flex_box').append(guide_list)
                        
    }

})