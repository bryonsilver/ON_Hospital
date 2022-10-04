$(document).ready(function(){
console.log(1)
    for(let i=0; i<DOCTOR[0].length; i++) {
console.log(DOCTOR[0].length)
        let list = `
                        <div>
                            <div class="content_box">
                                <div class="c_left_box">
                                    <div class="l_img_box">
                                        <img src="./img/medi_details/${DOCTOR[0][i].img_src}.jpg" alt="d_${DOCTOR[0][i].img_src}_img" class="l_img">
                                        <div class="doctor_name_box">
                                            <div class="doctor_name">${DOCTOR[0][i].name}</div>
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
                                            <dd class="top_con">${DOCTOR[0][i].medi_con}</dd>

                                            <dt class="top_first"><b>대표약력</b></dt>
                                            <dd class="top_con text_danger">${DOCTOR[0][i].medi_his_con}</dd>

                                            <dt class="top_first"><b>전문분야</b></dt>
                                            <dd class="top_con width">${DOCTOR[0][i].one_speci_con}</dd>
                                        </dl>
                                    </div>
                                    <div class="cr_center_box"></div>
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
                                                        <div><span class="text_circle ${DOCTOR[0][i].morn_color}"></span></div>
                                                        <div>${DOCTOR[0][i].morn_schedule}</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="t_bg_light">오후</th>
                                                    <td>
                                                        <div><span class="text_circle ${DOCTOR[0][i].afte_color}"></span></div>
                                                        <div>${DOCTOR[0][i].afte_schedule}</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="t_bg_light">비고</th>
                                                    <td class="text_left" colspan="6">${DOCTOR[0][i].note}</td>
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
                        </div> `

        $('.one_doctor_box').append(list);
        console.log(10)
    }

    //<iframe src="${DOCTOR[0][i].ifram_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
})