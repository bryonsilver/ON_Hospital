$(document).ready(function(){
    console.log(DOCTOR[0][1].value.length)
    for(let i=0; i<DOCTOR[0][1].length; i++) {
        let list = `
                    <div class="top_box">
                        <div class="top_title_box">
                            <h2 class="top_title">외과</h2>
                            <div class="top_content">주로 수술로 기형 ·외상 ·염증 ·종양(腫瘍) 등을 진료하며, 상부위장관, 간담도계, 대장항문학, 갑상선 및 기타두경부외과, 유방외과, 소아외과 등 각 영역별 진료를 시행합니다. 온 종합병원 외과는 최신 의료 장비를 갖추고 가장 안전하고 확실한 외과 질환의 치료를 시행하고 있습니다.</div>
                        </div>
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
                                        <img src="./img/medi_details/surgrey2.jpg" alt="d_surgrey2_img" class="l_img">
                                        <div class="doctor_name_box">
                                            <div class="doctor_name">박광진 의무원장</div>
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
                                            <dd class="top_con">간담췌외과</dd>

                                            <dt class="top_first"><b>대표약력</b></dt>
                                            <dd class="top_con text_danger">서울아산병원 간·담·췌외과 주임교수</dd>

                                            <dt class="top_first"><b>전문분야</b></dt>
                                            <dd class="top_con width">간담도췌장암수술/담낭질환/복강경수술(단일통로 복강경 담낭절제술)/간이식</dd>
                                        </dl>
                                    </div>
                                    <div class="cr_center_box">
                                        <iframe src="https://www.youtube.com/embed/FxGwggzensQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                                        <div><span class="text_circle cir_danger"></span></div>
                                                        <div>수술/검사</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_primary"></span></div>
                                                        <div>진료</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_danger"></span></div>
                                                        <div>수술/검사</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_primary"></span></div>
                                                        <div>진료</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_danger"></span></div>
                                                        <div>수술/검사</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_success"></span></div>
                                                        <div>문의</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="t_bg_light">오후</th>
                                                    <td>
                                                        <div><span class="text_circle cir_danger"></span></div>
                                                        <div>수술/검사</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_primary"></span></div>
                                                        <div>진료</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_danger"></span></div>
                                                        <div>수술/검사</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_primary"></span></div>
                                                        <div>진료</div>
                                                    </td>
                                                    <td>
                                                        <div><span class="text_circle cir_danger"></span></div>
                                                        <div>수술/검사</div>
                                                    </td>
                                                    <td></td>
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