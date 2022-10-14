$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    const de_num = urlParams.get('de_num');
    console.log(num)
    console.log(de_num)

    if (num == 0) {
        $('.nav_1').addClass('active')
    } else if (num == 1) {
        $('.nav_2').addClass('active')
    } else if (num == 2) {
        $('.nav_3').addClass('active')
    } else if (num == 3) {
        $('.nav_4').addClass('active')
    } else if (num == 4) {
        $('.nav_5').addClass('active')
    } else if (num == 5) {
        $('.nav_6').addClass('active')
    }

    let d_num = de_num -1
    let data = NEWS_DETAIL[num];
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
                                    <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                    <p>공지사항 test</p>
                                    <p>[※ 응급실: 051) 607-0119]</p>
                                </div>`
                        } else {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p>${data[d_num].title} test</p>
                                        </div>`
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