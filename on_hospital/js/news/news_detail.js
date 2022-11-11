$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    const de_num = urlParams.get('de_num');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(num)
    console.log(de_num)

    if (num == 0) {
         $('#selec0').prop("selected", true);
        $('.nav_1').addClass('active')
    } else if (num == 1) {
         $('#selec1').prop("selected", true);
        $('.nav_2').addClass('active')
    } else if (num == 2) {
         $('#selec2').prop("selected", true);
        $('.nav_3').addClass('active')
        // $('.mr_main_comment').css({margin:'0 !important', padding: '0 !important'})
    } else if (num == 3) {
         $('#selec3').prop("selected", true);
        $('.nav_4').addClass('active')
    } else if (num == 4) {
         $('#selec4').prop("selected", true);
        $('.nav_5').addClass('active')
    } else if (num == 5) {
         $('#selec5').prop("selected", true);
        $('.nav_6').addClass('active')
    }

    
    let d_num = de_num -1
    let data = NEWS_DETAIL[num];
    let dn5_const = data[d_num].const
    let dn2_const = data[d_num].top_bold
    let dn2_center_con = data[d_num].center_con
    let dn_con_4 = data[d_num].con4
    for(let i=0; i<1; i++) {
         let list = `
                        <div class="mr_title_box">
                            <div class="mr_t_title">
                                ${data[d_num].title}
                            </div>
                            <div class="mr_t_date">
                                <div class="date_box">
                                    <div class="date">
                                        <span>${data[d_num].date[0]}</span>
                                        <span>${data[d_num].date[1]}</span>
                                    </div>
                                    <div class="read_num">506</div>
                                </div>
                                <div class="writer">
                                    <a href="#" class="member_1">${data[d_num].writer}</a>
                                </div>
                            </div>
                        </div>`

                        if(num == 0 ) {
                    list += `<div class="mr_coment_box">
                                <div class="mr_main_comment">
                                    <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>`
                                    if(de_num == 1) {
                                        list += `
                                        <p>${data[d_num].const[0]}<span class="red_text">${data[d_num].red[0]}</span>${data[d_num].const[1]}<span class="red_text">${data[d_num].red[1]}</span>${data[d_num].const[2]}</p>
                                        `
                                    } else if (de_num == 2 || de_num == 3 || de_num == 4 || de_num == 5) {
                                        list += `<p><span class="red_text2">${data[d_num].red}</span>${data[d_num].const}</p>`
                                    }
                            list += `
                                        <p>단,<span class="red_text2">온종합병원 응급의료센터는 365일 24시간 언제든 이용 가능합니다.</span></p>
                                        <p>[※ 응급실: 051) 607-0119]</p>
                                </div>`
                        } else if (num == 1) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                        </div>`
                        } else if (num == 2) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p class="top_small">${data[d_num].top_small}</p>`
                                            if(de_num != 1) {
                                                for(let j=0; j<dn2_const.length; j++) {
                                                list += `<p class="top_bold">${data[d_num].top_bold[j]}</p>`
                                                }
                                            } else if (de_num == 1) {
                                                list += `<p class="top_bold">안됨</p>`
                                            }
                                    list += `<p class="top_content">${data[d_num].top_content}</p>
                                            <p class="img_p"><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                            <p class="img_text">${data[d_num].img_text}</p>`
                                            for(let j=0; j<dn2_center_con.length; j++) {
                                                list += `<p class="center_con">${data[d_num].center_con[j]}</p>`
                                            }
                                    list +=  `<div class="sources_box">
                                            <div>${data[d_num].editor}</div>
                                            <div>${data[d_num].sources}</div>
                                        </div>
                                    </div>`
                        } else if (num == 3) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            `
                                            if (de_num == 1) {
                                     list +=  `<p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>`
                                            } else if(de_num != 5) {
                                    list += `<p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p> 
                                            <div class="box_1 box">
                                                <p class="blue_bold_t">${data[d_num].con_title[0]}</p>`
                                                for(let j=0; j<3;j++) {
                                         list +=  `<p>${data[d_num].con1[j]}</p>`
                                                }
                                    list+= ` </div>
                                            <div class="box_2 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[1]}</p>`
                                                for(let j=0; j<data[d_num].con2.length;j++) {
                                                    if (de_num == 1 == 3) {
                                                        list +=  `<p>${data[d_num].con2[j]}</p>`
                                                    } 
                                                    else if (de_num == 4) {
                                                        list +=  `<p class="bold">${data[d_num].con2[j]}</p>`
                                                    }
                                                } 
                                                if (de_num == 2) {
                                                    list +=  `<p class="bold">${data[d_num].con2[0]}</p>
                                                            <p class="left3">${data[d_num].con2[1]}</p>
                                                            <p class="left4">${data[d_num].con2[2]}</p>
                                                    `
                                                } 
                                    list+= `</div>
                                            <div class="box_3 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[2]}</p>
                                                <p class="bold">${data[d_num].con3[0]}</p>
                                                <p>${data[d_num].con3[1]}</p>
                                            </div>
                                            <div class="box_4 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[3]}</p>`
                                                for(let j=0; j<dn_con_4.length; j++) {
                                            list +=`<p>${data[d_num].con4[j]}</p>`
                                                }
                                     list+=  `</div>
                                            <div class="box_5 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[4]}</p>`
                                                if (de_num != 4) {
                                                    list+=    `<p>${data[d_num].con5[0]}</p>
                                                    <p class="small_left">${data[d_num].con5[1]}</p>
                                                    <p class="small_left">${data[d_num].con5[2]}</p>
                                                    <p class="small_left">${data[d_num].con5[3]}</p>
                                                    <p class="small_left">${data[d_num].con5[4]}</p>
                                                    <p class="small_left">${data[d_num].con5[5]}</p>`
                                                } else if (de_num == 4) [
                                                    list+=   `<p>${data[d_num].con5[0]}</p>
                                                    <p class="small">${data[d_num].con5[1]}</p>
                                                    <p class="small">${data[d_num].con5[2]}</p>
                                                    <p class="small">${data[d_num].con5[3]}</p>
                                                    <p class="small_under">${data[d_num].con5[4]}</p>
                                                    <p class="small_under">${data[d_num].con5[5]}</p>`
                                                ]
                                                
                                                list+=  `</div>

                                            <div class="box_6 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[5]}</p>
                                                <p>${data[d_num].con6[0]}</p>
                                                <p>${data[d_num].con6[1]}</p>
                                            </div>

                                            <div class="box_7 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[6]}</p>`
                                            if (de_num != 4) {
                                        list += `<p>${data[d_num].con7[0]}</p>
                                                <p>${data[d_num].con7[1]}</p>
                                                <p>${data[d_num].con7[2]}</p>
                                                <p>${data[d_num].con7[3]}</p>`
                                            } else if (de_num == 4) {
                                        list +=  `<p>${data[d_num].con7[0]}</p>
                                                <p>${data[d_num].con7[1]}</p>
                                                <p class="left2">${data[d_num].con7[2]}</p>
                                                <p class="left">${data[d_num].con7[3]}</p>
                                                <p class="left">${data[d_num].con7[4]}</p>
                                                <p class="left">${data[d_num].con7[5]}</p>
                                                <p class="left">${data[d_num].con7[6]}</p>
                                                <p class="left">${data[d_num].con7[7]}</p>
                                                <p class="left">${data[d_num].con7[8]} <span  class="bold">${data[d_num].con7[9]}</span></p>`
                                            }
                                   list += `</div>
                                            <div class="box_8 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[7]}</p>
                                                <p>${data[d_num].con8[0]}</p>
                                                <p>${data[d_num].con8[1]}</p>
                                            </div>
                                                
                                            `
                                            } else if (de_num == 5) {
                                    list += `<p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                            <span class="bold2">${data[d_num].img_text}</span>
                                            <div class="box_1 box">
                                                <p class="orange_bold_t">${data[d_num].con_title[0]}</p>`
                                                for(let j=0; j<3;j++) {
                                         list +=  `<p>${data[d_num].con1[j]}</p>`
                                                }
                                    list+= ` </div>
                                            <div class="box_2 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[1]}</p>
                                                <p class="bold">${data[d_num].con2[0]}</p>
                                                <p class="bold">${data[d_num].con2[1]}</p>
                                                <p class="bold">${data[d_num].con2[2]}</p>
                                                <p>${data[d_num].con2[3]}</p>
                                                <p>${data[d_num].con2[4]}</p>
                                            </div>
                                            <div class="box_3 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[2]}</p>
                                                <p>${data[d_num].con3}</p>
                                            </div>
                                            <div class="box_4"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[3]}</p>`
                                                for(let j=0; j<10; j++) {
                                            list +=`<p class="n_bold">${data[d_num].con4[j]}</p>`
                                                }
                                        list +=`</div>
                                            <div class="box_5 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[4]}</p>
                                                <p>${data[d_num].con5[0]}</p>
                                                <p class="small">${data[d_num].con5[1]}</p>
                                                <p class="small">${data[d_num].con5[2]}</p>
                                                <p class="small">${data[d_num].con5[3]}</p>
                                                <p class="small_under">${data[d_num].con5[4]}</p>
                                                <p class="small_under">${data[d_num].con5[5]}</p>
                                            </div>

                                            <div class="box_6 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[5]}</p>
                                                <p>${data[d_num].con6[0]}</p>
                                                <p class="left5">${data[d_num].con6[1]}</p>
                                                <p class="left5">${data[d_num].con6[2]}</p>
                                                <p>${data[d_num].con6[3]} <span  class="bold">${data[d_num].con6[4]}</span></p>
                                            </div>
                                            <div class="box_7 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[6]}</p>
                                                <p>${data[d_num].con7[0]}</p>
                                                <p>${data[d_num].con7[1]}</p>
                                            </div>
                                            `
                                            }
                        } else if (num == 4) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                        </div>`
                        } else if (num == 5) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">`
                                            for (let j=0; j<dn5_const.length; j++) {
                                         list += `<p class="question">${data[d_num].const[j]}</p>`
                                            }
                                list += `</div>`
                        }
            list += `   <div class="turn_table_box">
                                <div class="pr_ne_box">
                                    <div class="prev">
                                        <a href="./news_detail.html" class="news_de_prev news_btn">◀ PREV</a>
                                    </div>
                                    <div class="next">
                                        <a href="./news_detail.html" class="news_de_next news_btn">NEXT ▶</a>
                                    </div>
                                </div>
                                <div class="list_return">
                                    <a href="./news.html?num=${num}" class="news_de_list news_btn">목록</a>
                                </div>
                            </div>
                        </div>`
         $('.m_right').append(list);
    }
})