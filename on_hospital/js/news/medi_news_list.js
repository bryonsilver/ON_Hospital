const NEWS_LIST = [

    //공지사항
    [
        {cate_no:0, item_no:1, num:5, title:'[진료 안내] 10월 진료 일정 안내(2022년 개천절, 한글날)', writer: '온그룹의료재단온종합병원', date:'2022.09.16',},
        {cate_no:0, item_no:2, num:4, title:'[진료 안내] 6월 진료 일정 안내(2022년 지방선거, 현충일)', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:0, item_no:3, num:3, title:'[휴진 안내] 어린이날 휴진 안내', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:0, item_no:4, num:2, title:'[휴진 안내] 설연휴 휴진 안내', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:0, item_no:5, num:1, title:'[휴진 안내] 성탄절 및 신정 휴진 안내', writer: '온종합병원', date:'2022.05.27',},
    ],
    //기타소식
    [
        {cate_no:1, item_no:1, num:5, title:'ON mo:m 온몸 매거진 7호가 발행되었습니다.', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:1, item_no:2, num:4, title:'KHT건강시대 17호가 발행되었습니다.', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:1, item_no:3, num:3, title:'온종합병원그룹 가족을 위한 해운대 온 리조트가 오픈하였습니다.', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:1, item_no:4, num:2, title:'대회 연기안내- 제6회 온종합병원 그룹 - 건강백일장 & 그림그리기 대회', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:1, item_no:5, num:1, title:'호스피스 자원봉사자 교육 및 실습과정 수강 신청', writer: '온종합병원', date:'2022.05.27',},
    ],
    //언론보도
    [
        {cate_no:2, item_no:1, num:5, title:'온종합병원"소변이`찔끔`한다면, 남성,여성 모두 요실금 의심해야"', writer: '온그룹의료재단온종합병원', date:'2022.11.10',},
        {cate_no:2, item_no:2, num:4, title:'부산 온종합병원-밀알복지재단 부산지부, 저소득 가정 의료지원 협약 체결', writer: '온그룹의료재단온종합병원', date:'2022.11.01',},
        {cate_no:2, item_no:3, num:3, title:'부산 온종합병원"10분 이상 걷기 힘들면 척추관협착증 검사 필요해" 증상 따라 질환·치료법 달라 구별 필요', writer: '온그룹의료재단온종합병원', date:'2022.11.01',},
        {cate_no:2, item_no:4, num:2, title:'`홀스테라피`암 환우들 치료 위한 색다른 경험', writer: '온그룹의료재단온종합병원', date:'2022.11.01',},
        {cate_no:2, item_no:5, num:1, title:'부산 온종합병원`수다면다원검사실`확장 개소...수면장애 환자 중점 치료', writer: '온그룹의료재단온종합병원', date:'2022.10.29',},
    ],
    //채용정보
    [
        {cate_no:3, item_no:1, num:5, title:'[마감]2023년 온종합병원 신규간호사 채용 공고', writer: '온종합병원', date:'2022.08.24',},
        {cate_no:3, item_no:2, num:4, title:'[마감]2022년 온종합병원 호스피스 전문 간호사 코디네이터 채용 공고', writer: '온종합병원', date:'2022.08.11',},
        {cate_no:3, item_no:3, num:3, title:'[마감]2022년 온종합병원 호스피스 병동 간호사 채용 공고', writer: '온종합병원', date:'2022.06.16',},
        {cate_no:3, item_no:4, num:2, title:'[공고]2022년 온종합병원 간호사, 간호조무사(병동, 처치사)채용공고', writer: '온종합병원', date:'2022.06.16',},
        {cate_no:3, item_no:5, num:1, title:'[마감]2022년 온종합병원 간호사(QPS간호사, 교육전담간호사) 채용공고', writer: '온종합병원', date:'2022.05.27',},
    ],
    //오늘의 식단
    [
        {cate_no:4, item_no:1, num:2, title:'11월 14일~11월 20일', writer: '온그룹의료재단온종합병원', date:'2022.11.10',},
        {cate_no:4, item_no:2, num:1, title:'11월 7일~11월13일', writer: '온그룹의료재단온종합병원', date:'2022.11.03',},
    ],
    //자주묻는질문
    [
        {cate_no:5, item_no:1, num:5, title:'보건증 재발급 방법', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:5, item_no:2, num:4, title:'입원환자 보호자 입원실 출입시간', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:5, item_no:3, num:3, title:'서류 발급을 위해 필요한 구비서류는 어디에 있나요?', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:5, item_no:4, num:2, title:'담당 의사 시간표는 어디서 확인하나요?', writer: '온종합병원', date:'2022.05.27',},
        {cate_no:5, item_no:5, num:1, title:'온라인 예약이 되지를 않습니다. 오류인가요?', writer: '온종합병원', date:'2022.05.27',},
    ],
]

const NEWS_TITLE = [
    [
        {cate_no:0, item_no:1, title:'공지사항'},
        {cate_no:0, item_no:2, title:'기타소식'},
        {cate_no:0, item_no:3, title:'언론보도'},
        {cate_no:0, item_no:4, title:'채용정보'},
        {cate_no:0, item_no:5, title:'오늘의 식단'},
        {cate_no:0, item_no:6, title:'자주묻는질문'},
    ]
]