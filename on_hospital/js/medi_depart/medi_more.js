$(document).ready(function(){
    $('.mv_li').click(function(){
        $('.mv_li').removeClass('active')
        $(this).addClass('active')
    })

    $('#home_tab').click(function(){
        $('.pan1').addClass('block')
        $('.pan2').removeClass('block')
        $('.pan3').removeClass('block')
    })
    $('#profile_tab').click(function(){
        $('.pan1').removeClass('block')
        $('.pan1').addClass('none')
        $('.pan2').addClass('block')
        $('.pan3').removeClass('block')
    })
    $('#contact_tab').click(function(){
        $('.pan1').removeClass('block')
        $('.pan1').addClass('none')
        $('.pan2').removeClass('block')
        $('.pan3').addClass('block')
    })


    const urlParams = new URL(location.href).searchParams;
    const cate = urlParams.get('cate');
    console.log('cate',cate)
    const item = urlParams.get('item');
    console.log('item',item)

    var item_n = item-1;
    console.log('item_n', item_n)


    for(let i=0; i<1; i++) {
        let list = `
                            <div>
                                <div class="content_box">
                                    <div class="c_left_box">
                                        <div class="l_img_box">
                                            <img src="./img/medi_details/${DOCTOR[cate][item_n].img_src}.jpg" alt="d_${DOCTOR[cate][item_n].img_src}_img" class="l_img">
                                            <div class="doctor_name_box">
                                                <div class="doctor_name">${DOCTOR[cate][item_n].name}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="c_right_box">
                                        <div class="cr_top_box">
                                            <dl class="top_dl">
                                                <div class="cr_dd">
                                                    <dt class="top_first"><b>진료과</b></dt>
                                                    <dd class="top_con">${DOCTOR[cate][item_n].medi_con}</dd>

                                                    <dt class="top_first"><b>대표약력</b></dt>
                                                    <dd class="top_con text_danger">${DOCTOR[cate][item_n].medi_his_con}</dd>
                                                </div>

                                                <div class="cr_dd2">
                                                    <dt class="top_first"><b>전문분야</b></dt>
                                                    <dd class="top_con width">${DOCTOR[cate][item_n].one_speci_con}</dd>
                                                </div>
                                            </dl>
                                        </div>`
                                        if(DOCTOR[cate][item_n].ifram_src != null) {
                                        list += `<div class="cr_center_box">
                                                    <iframe src="${DOCTOR[cate][item_n].ifram_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>`
                                        } 
                                        else {
                                        list += `<div class="cr_center_box"></div>`
                                        }
                                list += `<div class="cr_bottom_box">
                                            <div class="cr_bot">
                                                <table class="bottom_table">
                                                    <thead class="t_bg_light">
                                                        <th></th>
                                                        <th>월</th>
                                                        <th>화</th>
                                                        <th>수</th>
                                                        <th>목</th>
                                                        <th>금</th>
                                                        <th>토</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th class="t_bg_light">오전</th>`
                                                        for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[cate][item_n].morn_color[j]}"></span></div>
                                                                <div>${DOCTOR[cate][item_n].morn_schedule[j]}</div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">오후</th>`
                                                        for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[cate][item_n].afte_color[j]}"></span></div>
                                                                <div>${DOCTOR[cate][item_n].afte_schedule[j]}</div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">비고</th>`
                                                            if(DOCTOR[cate][item_n].note != null) {
                                                            list +=`<td class="text_left" colspan="6">${DOCTOR[cate][item_n].note}</td>`
                                                            } else{
                                                            list +=`<td class="text_left" colspan="6"></td>`
                                                            }
                                                list +=`</tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="text_ex_box">
                                                <span>
                                                    <div class="circle cir_primary"></div>
                                                    <span class="text_primary">진료</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_danger"></div>
                                                    <span class="text_danger">수술/검사</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_success"></div>
                                                    <span class="text_success">문의</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;


        $('.one_doctor_box').append(list);
        console.log(10)
    }

    for(let i=0; i<1; i++) {
        let list = `
                    <div class="container">
                        <ul class="mv_ul">
                            <li class="mv_li active"><a href="#home" id="home_tab" class="mv_link">약력</a></li>
                            <li class="mv_li"><a href="#profile" id="profile_tab" class="mv_link">학회활동</a></li>
                            <li class="mv_li"><a href="#contact" id="contact_tab" class="mv_link">전문분야</a></li>
                        </ul>
                        <div class="mv_content_box">
                            <div class="tab_pan pan1">
                                <span>- 한양대학교 의과대학 졸업</span>
                                <span>- 연세대학교 의과대학 의학박사</span>
                                <span>- 서울아산병원 전임의</span>
                                <span>- 미국 피츠버그대학병원 연수의</span>
                                <span>- 미국 메이요병원 연수의</span>
                                <span>- 서울아산병원 간담도췌외과 교수</span>
                                <span>- 외과전문의고시출제위원</span>
                                <span>- 마르퀴즈후즈후 세계인명사전 등재</span>
                                <span>- 서울아산병원 이메디팀 담당교수</span>
                                <span>- 서울아산병원 국제진료센터 외국인진료 담당교수</span>
                                <span>- 서울아산병원 간담도췌장외과 과장</span>
                                <span>- 누적외과수술 1만례 달성</span>
                            </div>
                            <div class="tab_pan pan2">
                                <span>- SCI급 국제학술지 147편 저자 및 공저자</span>
                                <span>- 외과술기교과서 공저자</span>
                                <span>- NECROX 신약개발/공동개발자(LG생명과학)</span>
                            </div>
                            <div class="tab_pan pan3">
                                <span>- 간담도췌장외과</span>
                                <span>- 외과영역 중 가장 어려운 분야인 간, 담도계, 쓸개, 췌장 및 비장등의 장기에 발생하는 질환을 치료</span>
                            </div>
                        </div>
                    </div>`;


        // $('.more_view_box').append(list);
        console.log('more_view_box')
    }


})