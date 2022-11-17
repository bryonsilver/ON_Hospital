$(document).ready(function(){

    const urlParams = new URL(location.href).searchParams;
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    const num = urlParams.get('num');
    console.log(num)

    if (num == 0) {
         $('#selec0').prop("selected", true);
        $('.notice').addClass('active')
        $('.n_news_1').addClass('nav_active')
        $('.m_right').css({paddingBottom:'150px'})
    } else if (num == 1) {
         $('#selec1').prop("selected", true);
        $('.ect').addClass('active')
        $('.n_news_2').addClass('nav_active')
        $('.m_right').css({paddingBottom:'200px'})
    } else if (num == 2) {
         $('#selec2').prop("selected", true);
        $('.media').addClass('active')
        $('.n_news_3').addClass('nav_active')
    } else if (num == 3) {
         $('#selec3').prop("selected", true);
        $('.recruitment').addClass('active')
        $('.n_news_4').addClass('nav_active')
    } else if (num == 4) {
         $('#selec4').prop("selected", true);
        $('.diet').addClass('active')
        $('.n_news_5').addClass('nav_active')
        $('.m_right').css({paddingBottom:'150px'})
    } else if (num == 5) {
         $('#selec5').prop("selected", true);
        $('.question').addClass('active')
        $('.n_news_6').addClass('nav_active')
    }

    for(let i=0; i<1; i++) {
        let list2 = `
                <p>${NEWS_TITLE[0][num].title}</p>
        `
        $('.title_box').append(list2);
    }

    for(let i=0; i<NEWS_LIST[num].length; i++) {
        let list = `
                    <tbody>
                        <tr>
                            <td class="d_none t_td">${NEWS_LIST[num][i].num}</td>
                            <td class="t_td">
                                <a href="./news_detail.html?num=${num}&de_num=${NEWS_LIST[num][i].item_no}" class="color">${NEWS_LIST[num][i].title}</a>
                                <span class="label_icon"></span>
                            </td>
                            <td class="d_none t_td t_centerv">
                                <a href="#" class="member_1" title="${NEWS_LIST[num][i].writer}">${NEWS_LIST[num][i].writer}</a>
                            </td>
                            <td class="t_td right">${NEWS_LIST[num][i].date}</td>
                            <td class="d_none t_td t_center">15497</td>
                        </tr>
                        
                    </tbody>`
        $('.table').append(list);
    }
})