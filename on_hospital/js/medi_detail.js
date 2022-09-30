$(document).ready(function(){
    console.log(DOCTOR[0][1].value.length)
    for(let i=0; i<DOCTOR[0][1].length; i++) {
        let list = `
                    <div class="top_box">
                        <div class="top_title_box">`
                        for(let j=0; j<QUESTION[0][i].length; j++) {
                list +=`    <h2 class="top_title">${QUESTION[0][i].item_no}</h2>
                            <div class="top_content">${QUESTION[0][i].item_no}</div>`
                        }
                list +=`</div>
                        <div class="center_banner">
                            <a href="https://www.youtube.com/channel/UCb92XBkMxNZodTCg-DnmMPw">
                                <img src="./img/medi_details/medi_in_banner.png" alt="medi_d_banner" class="medi_banner">
                            </a>
                        </div>
                    </div>
                    <div class="one_doctor_box">
                        <div>
                            <div class="content_box">
                                <div class="c_left_box">
                                    <div class="l_img_box">
                                        <img src="./img/medi_details/${QUESTION[0][i].item_no}.jpg" alt="d_${QUESTION[0][i].item_no}_img" class="l_img">
                                        <div class="doctor_name_box">
                                            <div class="doctor_name">${QUESTION[0][i].item_no}</div>
                                        </div>
                                    </div>
                                    <div class="l_more_btn">
                                        <a href="#" class="more_btn">자세히보기</a> 
                                    </div>
                                </div>
                                <div class="c_right_box">
                                    <div class="cr_top_box">
                                        <dl class="top_dl">
                                            <dt class="top_first"><b>진료과</b></dt>
                                            <dd class="top_con">${QUESTION[0][i].item_no}</dd>

                                            <dt class="top_first"><b>대표약력</b></dt>
                                            <dd class="top_con text_danger">${QUESTION[0][i].item_no}</dd>

                                            <dt class="top_first"><b>전문분야</b></dt>
                                            <dd class="top_con width">${QUESTION[0][i].item_no}</dd>
                                        </dl>
                                    </div>
                                    <div class="cr_center_box">
                                        <iframe src="${QUESTION[0][i].item_no}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="cr_bottom_box">
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
                                                    <th class="t_bg_light">오전</th>
                                                    <td>
                                                        <div><span class="text_circle ${QUESTION[0][i].item_no}"></span></div>
                                                        <div>${QUESTION[0][i].item_no}</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="t_bg_light">오후</th>
                                                    <td>
                                                        <div><span class="text_circle ${QUESTION[0][i].item_no}"></span></div>
                                                        <div>${QUESTION[0][i].item_no}</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="t_bg_light">비고</th>
                                                    <td class="text_left" colspan="6"></td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                        </div>
                    </div> `
    }
})