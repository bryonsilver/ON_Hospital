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

    let cen_sub_context = CENT_LIST[0][cen_v].sub_context1
    let cen_sub_context2 = CENT_LIST[0][cen_v].sub_context2
    let cen_sub_context3 = CENT_LIST[0][cen_v].sub_context3
    let cen_sub_context4 = CENT_LIST[0][cen_v].sub_context4
    let cen_sub_context5 = CENT_LIST[0][cen_v].sub_context5
    for(let i=0; i<1; i++) {
        let cent_list = ``
        if (cen_v == 25) {
cent_list += `<div class="m_r_content_box c_25">`
        } else {
            cent_list += `<div class="m_r_content_box">`
        }
cent_list += `<div class="mr_title">
                <h1 class="title_box">`
                for(let j=0; j<1; j++) {
         cent_list += `<div class="img_box"><img src="./img/common/title_icon2.png" alt="title_icon" class="title_icon"></div> 
                        ${CENT_TITLE[0][cen_v].title}`
                }  
     cent_list += `</h1>
            </div>
            <div class="mr_img">`
                for(let j=0; j<1; j++) {
        cent_list += `<div class="box_img cen2_${LIST_N[0][cen_v].item_no}"></div>`
                }
cent_list += `</div>`
                if (cen_v == 4) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div class="top_text_box  c_4">
                                            <div>${CENT_LIST[0][cen_v].bold_top[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[1]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[2]}</div>
                                        </div>
                                        <div class="top_small_text">${CENT_LIST[0][cen_v].small_top[0]}</div>
                                    </span>
                                    `
                } else if (cen_v == 7) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                        </div>
                                    </span>
                                    `
                } else if (cen_v == 9) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <div class="text_4 top_text">
                                                <span class="bolder">${CENT_LIST[0][cen_v].top_text[0]}</span>
                                                ${CENT_LIST[0][cen_v].top_text[1]}
                                            </div>
                                            <div class="text_4 top_text">
                                                <span class="bolder">${CENT_LIST[0][cen_v].top_text[2]}</span>
                                            </div>
                                        </div>
                                    </span>
                                    `
                } else if (cen_v == 10) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <img src="./img/medi_center/11_.png" alt="">
                                        </div>
                                    </span>
                                    `
                }
                else if (cen_v == 14) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <img src="./img/medi_center/emergency.png" alt="">
                                        </div>
                                    </span>
                                    `
                }
                else if (cen_v == 16) {
                    cent_list += `  <div>
                                        <div class="top_gray_text">
                                            ${CENT_LIST[0][cen_v].top_text[0]}
                                        </div>
                                    </div>
                                    `
                }
                else if (cen_v == 23) {
                    cent_list += `
                                    <span class="cent_box c_23_top">
                                        <div class="top_text_box">
                                            <div>${CENT_LIST[0][cen_v].bold_top[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[1]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[2]}</div>
                                        </div>
                                    </span>
                                    `
                }
                else if (cen_v == 25) {
                    cent_list += `  <div>
                                        <div class="top_gray_text c_25_top">
                                            ${CENT_LIST[0][cen_v].sub_context1[0]}
                                            ${CENT_LIST[0][cen_v].sub_context1[1]}
                                        </div>
                                    </div>
                                    `
                }
                else if (cen_v == 27) {
                    cent_list += `  <div>
                                        <div class="top_gray_text c_25_top">
                                            ${CENT_LIST[0][cen_v].top_small}
                                        </div>
                                    </div>
                                    `
                }
cent_list+= `<div class="mr_content">`
                if (cen_v == 25) {
                    cent_list+=  `<div class="mr_c_box c_25">`
                } else if (cen_v == 23 || cen_v == 21 || cen_v == 18 || cen_v == 4 || cen_v ==7) {
                    cent_list+=  `<div class="mr_c_box c_23">`
                } 
                else {
                    cent_list+=  `<div class="mr_c_box ">`
                }


                if (cen_v == 11 || cen_v == 20 || cen_v == 21) {
                    cent_list += `<div class="mr_c_title"></div>`
                } else {
                    cent_list += `<div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title[0]}</div>`
                }
            
        cent_list +=  `<div class="mr_c_content">`
                       if(cen_v == 24){
                            for(let j=0; j<cen_sub_context.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context1[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context2.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context2[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context3.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context3[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context4.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context4[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context5.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context5[j]}</span>`
                            }
                       } 
                       else if (cen_v == 12) {
                cent_list += `<div class="mr_c_content cent_13">
                                <span class="cent_box">
                                    <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context1[3]}</div>
                                </span>
                                <span class="cent_box">
                                    <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                </span>
                                <span class="cent_box">
                                    <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                </span>
                                `
                    } else if (cen_v == 3) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context4[2]}</div>
                                        </span>
                                        `
                    }  else if (cen_v == 0) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 1) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box margin_bottom_0">
                                            <div class="img_box image_box"><img src="./img/medi_center/${CENT_LIST[0][cen_v].img_src[0]}" alt="${CENT_LIST[0][cen_v].img_src[0]}"></div>
                                            <div class="cent_1_text margin_top_30">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            <div class="cent_1_text">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            <div class="cent_1_text margin_bottom_15">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="img_box image_box"><img src="./img/medi_center/${CENT_LIST[0][cen_v].img_src[1]}" alt="${CENT_LIST[0][cen_v].img_src[1]}"></div>
                                            <table class="table_line">
                                                <tbody>
                                                    <tr>
                                                        <th class="bold table_th">${CENT_LIST[0][cen_v].table_th[0]}</th>
                                                        <td class="table_td">${CENT_LIST[0][cen_v].table_td[0]}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="bold table_th">${CENT_LIST[0][cen_v].table_th[1]}</th>
                                                        <td class="table_td">${CENT_LIST[0][cen_v].table_td[1]}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="bold table_th">${CENT_LIST[0][cen_v].table_th[2]}</th>
                                                        <td class="table_td">${CENT_LIST[0][cen_v].table_td[2]}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </span>
                                        <span class="cent_box">
                                            <div class="flex_box">
                                                <div class="f_left_box">
                                                    <div class="bold text_box">${CENT_LIST[0][cen_v].num_bold[0]}<span class="small">${CENT_LIST[0][cen_v].num_bold[1]}</span></div>
                                                    <div class="num_box">
                                                        <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].num[0]}</span>
                                                    </div>
                                                </div>
                                                <div class="f_right_box">
                                                    <div class="bold text_box">${CENT_LIST[0][cen_v].num_bold[2]}<span class="small">${CENT_LIST[0][cen_v].num_bold[1]}</span></div>
                                                    <div class="num_box">
                                                        <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].num[1]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 2) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 4) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div class="top_text_box">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 5) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[3]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[4]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 6) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                            <div class="num_box">
                                                <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                <span>${CENT_LIST[0][cen_v].small_phone[0]}</span>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 7) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="table_text">
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[0]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[0]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[1]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[1]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[2]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[2]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[3]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[3]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[4]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[4]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[5]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[5]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[6]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[6]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[7]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[7]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[8]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[8]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th">${CENT_LIST[0][cen_v].table_th[9]}</div>
                                                        <div class="td">${CENT_LIST[0][cen_v].table_td[9]}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 8) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context5[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context6[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context7[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context8[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context9[0]}</div>\
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 9) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                            </div>
                                        </span>
                                        <div class="line"></div>
                                        `
                    }
                    else if (cen_v == 11) {
                        cent_list += `  <div class="flex_box_11">
                                            <div class="f_text_box2">
                                                <div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title[0]}</div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                                </div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[2]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[3]}</div>
                                                </div>
                                            </div>
                                            <div class="f_img_box">
                                                <img src="./img/medi_center/12_.jpg" alt="">
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 13) {
                        cent_list += `  <div class="flex_box_11">
                                            <div class="f_text_box2">
                                                <div class="c_title">${CENT_LIST[0][cen_v].middle_text[0]}</div>
                                                <div class="line"></div>
                                                <div class="circle_box">
                                                    <div class="circle_box">
                                                        <div class="circle_s_box"><span>${CENT_LIST[0][cen_v].circle_text[0]}</span></div>
                                                        <svg class="svg-inline--fa fa-arrow-right fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                                        <div class="circle_s_box"><span>${CENT_LIST[0][cen_v].circle_text[1]}</span></div>
                                                        <svg class="svg-inline--fa fa-arrow-right fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                                        <div class="circle_s_box"><span>${CENT_LIST[0][cen_v].circle_text[2]}</span></div>
                                                    </div>
                                                </div>
                                                <div class="blue_big">${CENT_LIST[0][cen_v].blue_text}</div>
                                                <div class="line"></div>
                                                <div class="chk_box">
                                                    <div class="chk_text">
                                                        <span><svg class="svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><svg class="svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><svg class="svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                    </div>
                                                </div>
                                                <div class="c_title">${CENT_LIST[0][cen_v].middle_text[1]}</div>
                                                <div class="s_box">${CENT_LIST[0][cen_v].sub_context1[0]}</div>

                                                <div class="num_box">
                                                    <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                    <span>${CENT_LIST[0][cen_v].sub_context1[1]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 15) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <div class="chk_box_2">
                                                    <div class="chk_text">
                                                        <span><svg class="svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><svg class="svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><svg class="svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                    </div>
                                                </div>
                                                <div class="line"></div>
                                                <span class="cent_box">
                                                    <div class="flex_box_2 padding_0">
                                                        <div class="f_left_box">
                                                            <div class="bold text_box">${CENT_LIST[0][cen_v].phone_num[0]}<span class="small">${CENT_LIST[0][cen_v].phone_num[1]}</span></div>
                                                            <div class="num_box">
                                                                <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                                <span>${CENT_LIST[0][cen_v].phone_text[0]}</span>
                                                            </div>
                                                        </div>
                                                        <div class="f_right_box">
                                                            <div class="bold text_box">${CENT_LIST[0][cen_v].phone_num[2]}<span class="small">${CENT_LIST[0][cen_v].phone_num[3]}</span></div>
                                                            <div class="num_box">
                                                                <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                                <span>${CENT_LIST[0][cen_v].phone_text[1]}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                                <div class="line"></div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 16) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <ul>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[0]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[1]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[2]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[3]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[4]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[5]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[6]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[7]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[8]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[9]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[10]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[11]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[12]}</li>
                                                </ul>
                                            </div>
                                            <div class="chk_box_3">
                                                <div class="chk_t">
                                                    <span><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span>
                                                    <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                </div>
                                                <div class="chk_t">
                                                    <span><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span>
                                                    <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                </div>
                                                <div class="chk_t">
                                                    <span><svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span>
                                                    <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        `
                    }
                     else if (cen_v == 17) {
                        cent_list+= `<div class="m_flex_box">
                                        <div class="row mb-5">
                                            <div class="col-lg-12">
                                                <div class="top">
                                                    <div class="mb-4 mb-lg-0"><img src="./img/guide/funeral.jpg" class="mx-auto d-block rounded-circle" style="width: 150px;height: 150px;" alt=""></div>
                                                    <div class="cont ml-lg-4">
                                                        <h3 class="mb-3 color1 title2"><b>온종합병원 장례식장은</b></h3>
                                                        <div class="mb-3">
                                                            지하철역 (2호선 부암역)과 바로 연결되어 최고의 교통요지에 위치하고 있으며 직접 조리한 최고급 양질의 음식제공 등 최고의 장례서비스를 제공합니다.
                                                        </div>
                                                        <h5 class="color1">
                                                            <span class="mr-4">24시 전화상담</span> 
                                                            <svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg>
                                                            <i class="fas fa-phone-square text-primary"></i>&nbsp; 051) 607-0111,0591
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-lg-12">
                                                <div class="section1">					
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <h5 class="mb-3 pl-5 color1"> 온종합병원에서 <b>직영으로 운영</b>합니다.</h5>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <h5 class="mb-3 pl-5 color1"> 부산시내 최저 사용료로<br><b>시 장례식장보다 저렴</b>합니다.</h5>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <h5 class="mb-3 mb-lg-0 pl-5 color1"> 정직한 운영으로 공식비용 외 <br><b>추가부담이 전혀 없습니다.</b></h5>
                                                        </div>
                                                        <div class="col-lg-6">							
                                                            <h5 class="mb-3 mb-lg-0 pl-5 color1"> 수육(국내산 냉장 돈육)은 주문 시 <br><b>조리사가 직접 삶아서</b> 드립니다.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-lg-12">
                                                <h4 class="line-left">빈소안내</h4>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-lg-6 mb-4">
                                                <img src="./img/guide/map1.jpg" class="img-fluid mx-auto d-block" alt="">
                                            </div>
                                            <div class="col-lg-6">
                                                <img src="./img/guide/map2.jpg" class="img-fluid mx-auto d-block" alt="">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-lg-12">
                                                <h4 class="line-left">찾아오시는 길</h4>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-lg-12">
                                                <div class="section1">
                                                    <h5 class="mb-4">■ 부산광역시 부산진구 당감 2동 966번지</h5>
                                                    <h5 class="mb-4">■ 지하철 2호선 > 부암역 > 6번 출구와 연결</h5>
                                                    <div class="row mb-4">
                                                        <div class="col-lg-2">
                                                            <h5 class="mb-3">■ 버스</h5>
                                                        </div>
                                                        <div class="col-lg-10">
                                                            <h6>- 당감입구 정류장</h6>
                                                            <div class="mb-3">17, 23, 129-1, 138-1, 141, 160, 167, 169-1, 141(심야)</div>
                                                            <h6>- 부암역 정류장</h6>
                                                            31, 33, 62, 67, 68, 77, 85, 87, 110-1, 108, 133, 138, 1004(심야)
                                                        </div>
                                                    </div>					
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-lg-12">
                                                <h4 class="line-left marTop">시설안내</h4>
                                            </div>
                                        </div>
                                        <div class="row no-gutters mb-5 border">
                                            <div class="box">
                                                <div class="col-6 col-lg-2 p-4 bg-color1">
                                                    <h5 class="mb-0 text-white">VIP실</h5>
                                                </div>
                                                <div class="col-6 col-lg-2 p-4 line_box border_t"><h5 class="mb-0">1실</h5></div>
                                            </div>
                                            <div class="box">
                                                <div class="col-6 col-lg-2 p-4 bg-color1 text-white">
                                                    <h5 class="mb-0 text-white">특실</h5>
                                                </div>
                                                <div class="col-6 col-lg-2 p-4 line_box"><h5 class="mb-0">2실</h5></div>
                                            </div>
                                            <div class="box">
                                                <div class="col-6 col-lg-2 p-4 bg-color1 text-white">
                                                    <h5 class="mb-0 text-white">일반실</h5>
                                                </div>
                                                <div class="col-6 col-lg-2 p-4 line_box border_b"><h5 class="mb-0">5실</h5></div>
                                            </div>
                                        </div>
                                        <div class="row no-gutters mb-5">
                                            <div class="col-lg">
                                                <img src="./img/guide/room1.jpg" class="img-fluid mx-auto d-block" alt="">
                                            </div>
                                            <div class="col-lg">
                                                <img src="./img/guide/room2.jpg" class="img-fluid mx-auto d-block" alt="">
                                            </div>
                                            <div class="col-lg-3">
                                                <img src="./img/guide/room3.jpg" class="img-fluid mx-auto d-block" alt="">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <div class="col-lg-12">
                                                <h3 class="color1 font-myeongjo text-center" style="line-height: 1.6;">고인의 일생을 가장 아름답게 기억할 수 있는 편안한 장례식장으로 항상 숭고하고 엄숙한 마음으로 유가족께 정성을 다하겠습니다.</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg flower">
                                                <img src="./img/guide/flower.png" class="img-fluid mx-auto d-block" alt="">
                                            </div>
                                        </div>
                                    </div>`
                     }
                     else if (cen_v == 18) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 19) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18">
                                                        <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    </div>
                                                </span>
                                                <div class="line"></div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 20) {
                        cent_list += `  <div class="flex_20">
                                            <div class="f_text_box2_20">
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v].sub_title[0]}</div>
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v].sub_title[1]}</div>
                                                <div class="chk_box_20">
                                                    <div class="chk_20">
                                                        <span><svg class="svg-inline--fa fa-check-square fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].check_box[0]}</span>
                                                    </div>
                                                    <div class="chk_20">
                                                        <span><svg class="svg_20 svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].check_box[1]}</span>
                                                    </div>
                                                    <div class="chk_20">
                                                        <span><svg class="svg_20 svg-inline--fa fa-check-square fa-w-14 fa-lg text-primary" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                        <span>${CENT_LIST[0][cen_v].check_box[2]}</span>
                                                    </div>
                                                </div>
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v].sub_title[2]}</div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                </div>
                                                <div class="chk_num_box">
                                                    <div class="margin_bottom_30">특징</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v].special[0]}</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v].special[1]}</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v].special[2]}</div>
                                                </div>
                                            </div>
                                            <div class="f_img_box_20">
                                                <img src="./img/medi_center/21_.jpg" alt="">
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 21) {
                        cent_list += `  <div class="flex_21">
                                            <div class="f_text_box2_21">
                                                <div class="mr_c_title title_21">${CENT_LIST[0][cen_v].sub_title[0]}</div>
                                                <div class="mr_c_title title_21">${CENT_LIST[0][cen_v].sub_title[1]}</div>
                                                <div class="mr_c_title title_21">${CENT_LIST[0][cen_v].sub_title[2]}</div>
                                            </div>
                                        </div>
                                        <div class="circle_box">
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[0]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[0]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[1]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[1]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[2]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[2]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[3]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[3]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[4]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[4]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[5]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[5]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[6]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[6]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[7]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[7]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[8]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[8]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_21">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_21">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 22) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].small_top[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].small_top[1]}</div>
                                            </div>
                                        </span>
                                        
                                        `
                    }
                    else if (cen_v == 23) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div class="top_text_box">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 26) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[2]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[2]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 27) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <ul class="mr_ul2">
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[0]}</li>
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[1]}</li>
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[2]}</li>
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[3]}</li>
                                        </ul>
                                        `
                    }
                    else if (cen_v == 28) {
                        cent_list += `<div class="mr_c_content cent_13 ">
                                        <div>
                                            <span class="border_box">${CENT_LIST[0][cen_v].circle_border}</span>
                                        </div>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                            </div>
                                        </span>

                                        <div class="circle_box">
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[0]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[1]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[2]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        `
                    }


          cent_list += `</div>`
                            if (cen_v == 20 || cen_v == 21 || cen_v == 28) {
                                cent_list += `<div class="mr_c_title"></div>`
                            } else {
                                cent_list +=  `<div class="mr_c_title margin2 margin${CENT_LIST[0][cen_v].item_no}">${CENT_LIST[0][cen_v].sub_title[1]}</div>`
                            }
                    if (cen_v == 5) {
                    cent_list += `<div class="mr_c_content cent_24">`
                                    for(let j=0; j<cen_sub_context2.length; j++) {
                            cent_list +=`<span><div class="small_circle"></div>${CENT_LIST[0][cen_v].sub_context2[j]}</span>`
                        }
                    } else if (cen_v == 24) {
                    cent_list += `<div class="mr_c_content cent_24">
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[0]}</span>
                                        <div class="margin con">
                                            <div>${CENT_LIST[0][cen_v].pro_context1[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].pro_context1[1]}</div>
                                        </div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[1]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context2}</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[2]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context3}</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[3]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context4}</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[4]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context5}</div>
                                    </div>
                                    <div class="line"></div>
                                
                                `
                    } else if (cen_v == 12) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <div>${CENT_LIST[0][cen_v].sub_context4[0]}</div>`
                    } else if (cen_v == 3) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <div>${CENT_LIST[0][cen_v].sub_context5[0]}</div>
                                <div>${CENT_LIST[0][cen_v].sub_context5[1]}</div>`
                    }
                    else if (cen_v == 2) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <div>${CENT_LIST[0][cen_v].text}</div>
                                <ul class="mr_ul">
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[0]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[1]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[2]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[3]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[4]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[5]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[6]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[7]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[8]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[9]}</li>
                                </ul>
                                `
                    }
                    else if (cen_v == 4) {
                        cent_list += `<div class="mr_c_content cent_13">
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[2]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context5[0]}</span>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[3]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context6[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context6[1]}</div>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context7[0]}</span>
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context7[1]}</span>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context8[0]}</span>
                                            </div>
                                `
                    }
                    else if (cen_v == 6)  {
                        cent_list += `<div class="mr_c_content cent_13">
                                            <div class="margin_bottom_30">
                                                <div>
                                                    <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                                </div>
                                                <div class="num_box">
                                                    <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                    <span>${CENT_LIST[0][cen_v].small_phone[1]}</span>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[2]}</div>
                                            <div class="margin_bottom_30">
                                                <div>
                                                    <div class="black_bold">${CENT_LIST[0][cen_v].black_bold[0]}</div>
                                                    <div class="black_bold">${CENT_LIST[0][cen_v].black_bold[1]}</div>
                                                    <div class="small_2">${CENT_LIST[0][cen_v].sub_context1[3]}</div>
                                                </div>
                                                <div class="num_box">
                                                    <span><svg class="svg-inline--fa fa-phone-square fa-w-14 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"></path></svg></span>
                                                    <span>${CENT_LIST[0][cen_v].small_phone[2]}</span>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="margin_bottom_30 plus_margin_30">
                                                <div>
                                                    <div class="chk_box">
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[3]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[4]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[5]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
            `
                    }
                    else if (cen_v == 9) {
                        cent_list += `
                                    <div class="margin_bottom_30">
                                    <div class="margin_bottom_40">
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[4]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[5]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[6]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[7]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[8]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[9]}</div>
                                    </div>
                                    
                                    <div class="line"></div>
                                    <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[2]}</div>
                                    <div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[10]}</div>
                                        <div class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context1[11]}</div>
                                        <div class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context1[12]}</div>
                                    </div>
                                    <div class="margin_top_30">
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[13]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[14]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[15]}</div>
                                    </div>
                                    
                                        `
                    }
                    else if (cen_v == 19) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18">
                                                        <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                                    </div>
                                                </span>
                                                <div class="line"></div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 22) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <ul class="mr_ul">
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[0]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[1]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[2]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[3]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[4]}</li>
                                </ul>
                                `
                    }
                    else if (cen_v == 23) {
                        cent_list += `<div class="mr_c_content cent_13">
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[2]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[3]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[2]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[4]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context5[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context5[1]}</div>
                                                <span class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context5[2]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context5[3]}</div>
                                            </div>
                                `
                    }
                    else if (cen_v == 25) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18">
                                                        <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context2[2]}</div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 26) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="bolder color c_26_">
                                                        <div>${CENT_LIST[0][cen_v].bold}</div>
                                                    </div>
                                                    <div class="text_18 c_26">
                                                        <div>${CENT_LIST[0][cen_v].sub_context5[0]}</div>
                                                        <div class="c_26_pad"> <a href="#" target="_black">${CENT_LIST[0][cen_v].sub_context5[1]}</a></div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 27) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[0]}</span>${CENT_LIST[0][cen_v].main_title[0]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[1]}</span>${CENT_LIST[0][cen_v].main_title[1]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[2]}</span>${CENT_LIST[0][cen_v].main_title[2]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[3]}</span>${CENT_LIST[0][cen_v].main_title[3]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
    cent_list +=  `</div>
                </div>`
// cent_list += `</div>
//             <div class="mr_content">
//                 <div class="mr_c_box">
//                     <div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title}</div>
//                     <div class="mr_c_content">
//                         <span>${CENT_LIST[0][cen_v].sub_context1}</span>
//                     </div>
//                 </div>`
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

    if (cen_v == 0 || cen_v ==1 || cen_v == 2 || cen_v == 8 || cen_v == 10 || cen_v == 11 || cen_v == 13 || cen_v == 14 || cen_v == 20 || cen_v == 17 || cen_v == 26 || cen_v == 28) {
        $('.mr_img').css({display:'none'})
        $('.mr_c_box').css({paddingTop:'0',})
        $('.m_r_content_box').css({gap:'0'})
    } else if (cen_v == 3 || cen_v == 4) {
        $('.mr_img').css({display:'block'})
    }

})