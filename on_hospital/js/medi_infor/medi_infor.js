$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(num)

    if (num == 0) {
         $('#selec0').prop("selected", true);
        $('.pm_1').addClass('active')
        $('.medi_infor_1').addClass('nav_active')
    } else if (num == 1) {
         $('#selec1').prop("selected", true);
        $('.pm_2').addClass('active')
        $('.medi_infor_2').addClass('nav_active')
    } else if (num == 2) {
         $('#selec2').prop("selected", true);
        $('.pm_3').addClass('active')
        $('.medi_infor_3').addClass('nav_active')
    } else if (num == 3) {
         $('#selec3').prop("selected", true);
        $('.pm_4').addClass('active')
        $('.medi_infor_4').addClass('nav_active')
    }

    let data = INFOR_LIST[0];
    for(let i=0; i<1; i++){
        let infor_list = `
                            <div class="mr_title">
                                <h1 class="title_box">
                                    <div class="img_box"><img src="./img/common/title_icon2.png" alt="title_icon" class="title_icon"></div>
                                    <span>${data[num].title}</span>
                                </h1>
                            </div>

                            <div class="mr_content">
                                <div class="mr_c_title">${data[num].sub_title}</div>

                                <div class="mr_c_img"></div>
                                <div class="mr_c_first_content">
                                    <p>${data[num].content_name}</p>`
                                    for(let j=0; j<data[num].content.length; j++) {
                         infor_list += `<p>
                                            ${data[num].content[j]}
                                        </p>`
                                    }
                       infor_list += `</div>
                            </div>
                            `
        $('.m_content_box').append(infor_list)
    }
})