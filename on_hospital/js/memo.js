
    for(let i=0; i<CENT_LIST[0].length; i++) {
        let cent_list = `
        <div class="m_r_content_box">
            <div class="mr_title">
                <h1 class="mr_page_title">`
                for(let j=0; j<CENT_TITLE[0][i].length; j++) {
                    `<span class="title_icon"></span> ${CENT_TITLE[0][i].title}`
                }  
     cent_list += `</h1>
            </div>
            <div class="mr_img">
                <div class="box_img"></div>
            </div>
            <div class="mr_content">
                <div class="mr_c_box">
                    <div class="mr_c_title">${CENT_LIST[0][i].sub_title}</div>
                    <div class="mr_c_content">
                        <span>${CENT_LIST[0][i].sub_context1[1]}</span>
                        <span>${CENT_LIST[0][i].sub_context1[2]}</span>
                    </div>
                </div>
                <div class="mr_c_box">
                    <div class="mr_c_title">${CENT_LIST[0][i].sub_title}</div>
                    <div class="mr_c_content">
                        <span>${CENT_LIST[0][i].sub_context2[1]}</span>
                        <span>${CENT_LIST[0][i].sub_context2[2]}</span>
                    </div>
                </div>
                <div class="mr_c_box">
                    <div class="mr_c_title">${CENT_LIST[0][i].sub_title}</div>
                    <div class="mr_c_content">
                        <span>${CENT_LIST[0][i].sub_context3[1]}</span>
                    </div>
                </div>
                <div class="mr_c_box">
                    <div class="mr_title">센터 의료진 소개</div>
                    <div class="mr_cb_content">`
                    for(let j=0; j<CENT_TITLE[0][i].cent_doc.length; j++) {
                        `<div class="mr_doc_n">
                            <a href="#">${CENT_LIST[0][i].cent_doc[j]}</a>
                        </div>`
                    }
        cent_list += `</div>
                </div>
            </div>
        </div>
        
        `

        $('.m_right').append(cent_list);
    }