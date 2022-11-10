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
                                            <p>${data[d_num].img_src}</p>
                                            <div class="mr_con_box">
                                                <div class="mr_t_box">${data[d_num].con_title}</div>
                                                <div class="mr_c_box">${data[d_num].con_title}</div>
                                            </div>
                                        </div>`
                        } else if (num == 3) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                        </div>`
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