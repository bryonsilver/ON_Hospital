$(document).ready(function(){

    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    console.log(num)

    if (num == 0) {
        $('.notice').addClass('active')
    } else if (num == 1) {
        $('.ect').addClass('active')
    } else if (num == 2) {
        $('.media').addClass('active')
    } else if (num == 3) {
        $('.recruitment').addClass('active')
    } else if (num == 4) {
        $('.diet').addClass('active')
    } else if (num == 5) {
        $('.question').addClass('active')
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
                                <a href="./news_detail.html" class="color">${NEWS_LIST[num][i].title}</a>
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