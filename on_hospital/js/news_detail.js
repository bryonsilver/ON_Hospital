$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    console.log(num)

    for(let i=0; i<1; i++) {
         let list = `
                        <div class="mr_title_box">
                            <div class="mr_t_title">
                                ${NEWS_DETAIL[num][0].title}
                            </div>
                            <div class="mr_t_date">
                                <div class="date_box">
                                    <div class="date">
                                        <span>${NEWS_DETAIL[num][0].date[0]}</span>
                                        <span>${NEWS_DETAIL[num][0].date[1]}</span>
                                    </div>
                                    <div class="read_num">506</div>
                                </div>
                                <div class="writer">
                                    <a href="./news_detail.html" class="member_1">${NEWS_DETAIL[num][0].writer}</a>
                                </div>
                            </div>
                        </div>`

                        if(num == 0 ) {
                    list += `<div class="mr_coment_box">
                                <div class="mr_main_comment">
                                    <p><img src="./img/news/${NEWS_DETAIL[num][0].img_src}" alt="${NEWS_DETAIL[num][0].img_src}" class="news_de_img"></p>
                                    <p><span class="border_left"></span>${NEWS_DETAIL[num][0].const[0]}<span class="danger bottom_line">${NEWS_DETAIL[num][0].danger}</span>, 10월 10일(월) 한글날은 <span class="danger bottom_line">오전 진료</span>만 진행하니 진료에 착오 없으시길 바랍니다.</p>
                                    <p><span class="border_left"></span>  단, <span class="danger">온종합병원 응급의료센터는 365일 24시간 언제든 이용 가능합니다.</span></p>
                                    <p>[※ 응급실: 051) 607-0119]</p>
                                </div>`
                        } else if (num == 1 ) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/22_09_16.jpg" alt="22_09_16.jpg" class="news_de_img"></p>
                                            <p><span class="border_left"></span> 10월 3일(월) 개천절은 <span class="danger bottom_line">휴진</span>, 10월 10일(월) 한글날은 <span class="danger bottom_line">오전 진료</span>만 진행하니 진료에 착오 없으시길 바랍니다.</p>
                                            <p><span class="border_left"></span>  단, <span class="danger">온종합병원 응급의료센터는 365일 24시간 언제든 이용 가능합니다.</span></p>
                                            <p>[※ 응급실: 051) 607-0119]</p>
                                        </div>`
                        } else if (num == 2 ) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/22_09_16.jpg" alt="22_09_16.jpg" class="news_de_img"></p>
                                            <p><span class="border_left"></span> 10월 3일(월) 개천절은 <span class="danger bottom_line">휴진</span>, 10월 10일(월) 한글날은 <span class="danger bottom_line">오전 진료</span>만 진행하니 진료에 착오 없으시길 바랍니다.</p>
                                            <p><span class="border_left"></span>  단, <span class="danger">온종합병원 응급의료센터는 365일 24시간 언제든 이용 가능합니다.</span></p>
                                            <p>[※ 응급실: 051) 607-0119]</p>
                                        </div>`
                        } else if (num == 3 ) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/22_09_16.jpg" alt="22_09_16.jpg" class="news_de_img"></p>
                                            <p><span class="border_left"></span> 10월 3일(월) 개천절은 <span class="danger bottom_line">휴진</span>, 10월 10일(월) 한글날은 <span class="danger bottom_line">오전 진료</span>만 진행하니 진료에 착오 없으시길 바랍니다.</p>
                                            <p><span class="border_left"></span>  단, <span class="danger">온종합병원 응급의료센터는 365일 24시간 언제든 이용 가능합니다.</span></p>
                                            <p>[※ 응급실: 051) 607-0119]</p>
                                        </div>`
                        } else if (num == 4 ) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/22_09_16.jpg" alt="22_09_16.jpg" class="news_de_img"></p>
                                            <p><span class="border_left"></span> 10월 3일(월) 개천절은 <span class="danger bottom_line">휴진</span>, 10월 10일(월) 한글날은 <span class="danger bottom_line">오전 진료</span>만 진행하니 진료에 착오 없으시길 바랍니다.</p>
                                            <p><span class="border_left"></span>  단, <span class="danger">온종합병원 응급의료센터는 365일 24시간 언제든 이용 가능합니다.</span></p>
                                            <p>[※ 응급실: 051) 607-0119]</p>
                                        </div>`
                        } else if (num == 5 ) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/22_09_16.jpg" alt="22_09_16.jpg" class="news_de_img"></p>
                                            <p><span class="border_left"></span> 10월 3일(월) 개천절은 <span class="danger bottom_line">휴진</span>, 10월 10일(월) 한글날은 <span class="danger bottom_line">오전 진료</span>만 진행하니 진료에 착오 없으시길 바랍니다.</p>
                                            <p><span class="border_left"></span>  단, <span class="danger">온종합병원 응급의료센터는 365일 24시간 언제든 이용 가능합니다.</span></p>
                                            <p>[※ 응급실: 051) 607-0119]</p>
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
                                    <a href="./news.html" class="news_de_list news_btn">목록</a>
                                </div>
                            </div>
                        </div>`
        // $('.table').append(list);
    }
})