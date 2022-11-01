$(document).ready(function(){

const urlParams = new URL(location.href).searchParams;
const selec = urlParams.get('selec');
console.log('selec',selec)
const value = urlParams.get('value');
console.log(value)


 var $el = $('#quick');
    var $window = $(window);
    var top = 80; //header 높이
    
     
    
    $window.bind("scroll resize", function() {
        var offset = $("body #container:first-child").offset;
        var visibleRight = offset.left + 990;	
        var gap = $window.height() - $el.height() ;
        var visibleFoot = 234 - ($(window).scrollTop() + $(window).height());
        var scrollTop = $window.scrollTop();

        console.log(scrollTop+"/"+top);
        
       

        
        if (scrollTop > top) {
            $el.css({
                top: (scrollTop -top + 80) + "px",
                bottom: "auto"
            });
        } else if (visibleFoot > gap) {
            $el.css({
                top: "auto",
                bottom: visibleFoot + "px"
            });
        } else {
            $el.css({
                top:30,
                bottom: "auto"
            });
        }
    }).scroll();



    for(let i=0; i<DOCTOR[value].length; i++) {
        let list = `
                        <div>
                            <div class="content_box">
                                <div class="c_left_box">
                                    <div class="l_img_box">
                                        <img src="./img/medi_details/${DOCTOR[value][i].img_src}.jpg" alt="d_${DOCTOR[value][i].img_src}_img" class="l_img">
                                        <div class="doctor_name_box">
                                            <div class="doctor_name">${DOCTOR[value][i].name}</div>
                                        </div>
                                    </div>
                                    <div class="l_more_btn">
                                        <a href="./medi_more.html" class="more_btn">자세히보기</a> 
                                    </div>
                                </div>
                                <div class="c_right_box">
                                    <div class="cr_top_box">
                                        <dl class="top_dl">
                                            <div class="cr_dd">
                                                <dt class="top_first"><b>진료과</b><dd class="top_con">${DOCTOR[value][i].medi_con}</dd></dt>
                                                <dt class="top_first"><b>대표약력</b><dd class="top_con text_danger">${DOCTOR[value][i].medi_his_con}</dd></dt>
                                            </div>
                                            <div class="cr_dd2">
                                                <dt class="top_first"><b>전문분야</b></dt>
                                                <dd class="top_con width">${DOCTOR[value][i].one_speci_con}</dd>
                                            </div>
                                            
                                        </dl>
                                    </div>`
                                    if(DOCTOR[value][i].ifram_src != null) {
                                    list += `<div class="cr_center_box">
                                                <iframe src="${DOCTOR[value][i].ifram_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                                    for(let j=0; j<DOCTOR[value][i].morn_schedule.length; j++) {
                                                    list +=`<td>
                                                            <div><span class="text_circle ${DOCTOR[value][i].morn_color[j]}"></span></div>
                                                            <div>${DOCTOR[value][i].morn_schedule[j]}</div>`
                                                    }
                                                list +=`</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="t_bg_light">오후</th>`
                                                    for(let j=0; j<DOCTOR[value][i].morn_schedule.length; j++) {
                                                    list +=`<td>
                                                            <div><span class="text_circle ${DOCTOR[value][i].afte_color[j]}"></span></div>
                                                            <div>${DOCTOR[value][i].afte_schedule[j]}</div>`
                                                    }
                                                list +=`</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="t_bg_light">비고</th>`
                                                        if(DOCTOR[value][i].note != null) {
                                                        list +=`<td class="text_left" colspan="6">${DOCTOR[value][i].note}</td>`
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
                        </div> `

        $('.one_doctor_box').append(list);
        console.log(10)
    }

    //<iframe src="${DOCTOR[0][i].ifram_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    for(let i=0; i<1; i++) {
        let list2 =`    <h2 class="top_title">${DOC_TITLE[0][value].title}</h2>
                        <div class="top_content">${DOC_TITLE[0][value].content}</div>`
        $('.top_title_box').append(list2);                    
    }
})