$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const cen2_v = urlParams.get('cen2_v');
    const item = urlParams.get('item');
    console.log(cen2_v)
    console.log(item)

    if (item == 0) {
        $('.pm_1').addClass('active')
    } else if (item == 1) {
        $('.pm_2').addClass('active')
    } else if (item == 2) {
        $('.pm_3').addClass('active')
    } else if (item == 3) {
        $('.pm_4').addClass('active')
    } else if (item == 4) {
        $('.pm_5').addClass('active')
    } else if (item == 5) {
        $('.pm_6').addClass('active')
    } else if (item == 6) {
        $('.pm_7').addClass('active')
    } else if (item == 7) {
        $('.pm_8').addClass('active')
    } 

    for(let i=0; i<1; i++) {
        let cent2_list = `
        <div class="m_r_content_box">
            <div class="mr_title">
                <h1 class="mr_page_title">`
                for(let j=0; j<1; j++) {
                    `<span class="title_icon"></span> ${HOSPI_TITLE[0][item].title}`
                }  
     cent2_list += `</h1>
            </div>
            <div class="mr_img">
                <div class="box_img cen2_${cen2_v}"></div>
            </div>
            <div class="mr_content">
                <div class="mr_c_box">
                    <div class="mr_c_title">${CENT_LIST[0][cen2_v].sub_title}</div>
                    <div class="mr_c_content">
                        <span>${CENT_LIST[0][cen2_v].sub_context1}</span>
                    </div>
                </div>`
                // `<div class="mr_c_box">
                //     <div class="mr_title">센터 의료진 소개</div>
                //     <div class="mr_cb_content">`
                //     for(let j=0; j<CENT_TITLE[0][cen2_v].cent_doc.length; j++) {
                //         `<div class="mr_doc_n">
                //             <a href="#">${CENT_LIST[0][cen2_v].cent_doc[j]}</a>
                //         </div>`
                //     }
        cent2_list += `</div>
                </div>
            </div>
        </div>
        
        `

        $('.m_right').append(cent2_list);
    }
})