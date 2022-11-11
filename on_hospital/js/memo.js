<div class="mr_c_box">
                    <div class="mr_title">센터 의료진 소개</div>
                    <div class="mr_cb_content">`
                    for(let j=0; j<CENT_TITLE[0][cen_v].cent_doc[i].length; j++) {
                        `<div class="mr_doc_n">
                            <a href="#">${CENT_LIST[0][cen_v].cent_doc[j]}</a>
                        </div>`
                    }
        cent_list += `</div>
                </div>



<img src="./img/medi_center/${CENT_LIST[0][cen_v].img_src}" alt="mr_b_img" class="mr_b_img">

`
            for(let j=0; j<1; j++) {
                `<div class="box_img ${LIST_N[0][cen_v].name}"></div>`
            }
cent_list += `
                