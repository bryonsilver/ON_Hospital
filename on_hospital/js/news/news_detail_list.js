const NEWS_DETAIL = [
    // 공지사항
    [
        {cate_no:0, item_no:5, title:'[진료 안내] 10월 진료 일정 안내(2022년 개천절, 한글날)', date:['2022,09,16','(11:17:32)'], writer:'온그룹의료재단온종합병원', const:['10월 3일(월) 개천절은', '10월 10일(월) 한글날은', '만 진행하니 진료에 착오 없으시길 바랍니다.'],red:['휴진', '오진 진료'],img_src:'notice_19.jpg'},
        {cate_no:0, item_no:4, title:'[진료 안내] 6월 진료 일정 안내(2022년 지방선거, 현충일)', date:['2022,05,27','(19:00:32)'], writer:'온종합병원', const:'하니 진료에 착오 없으시길 바랍니다.',red:'6월 1일(수), 6월 6일(월) 2022년 지방선거, 현충일은 오전 진료만 진행',img_src:'notice_4.jpg'},
        {cate_no:0, item_no:3, title:'[휴진 안내] 어린이날 휴진 안내', date:['2022,05,27','(19:00:15)'], writer:'온종합병원', const:'은 휴진하오니 진료에 착오 없으시길 바랍니다.',red:'5월 5일(목) 어린이날',img_src:'notice_3'},
        {cate_no:0, item_no:2, title:'[휴진 안내] 설연휴 휴진 안내', date:['2022,05,27','(19:00:27)'], writer:'온종합병원', const:'는 휴진하오니 진료에 착오 없으시길 바랍니다.',red:'1월 31일(월)~2월 2일(수) 설연휴',img_src:'notice_2'},
        {cate_no:0, item_no:1, title:'[휴진 안내] 성탄절 및 신정 휴진 안내', date:['2022,05,27','(18:59:50)'], writer:'온종합병원', const:'휴진하오니 진료에 착오 없으시길 바랍니다.',red:'12월 25일(토) 성탄절, 1월 1일(토) 신정',img_src:'notice_1'},
    ],
    // 기타소식
    [
        {cate_no:1, item_no:5, title:'ON mo:m 온몸 매거진 7호가 발행되었습니다.', date:['2022.05.27','(18:53:55)'], writer:'온종합병원', const:'', img_src:'news_ext_5.jpg'},
        {cate_no:1, item_no:4, title:'KHT건강시대 17호가 발행되었습니다.', date:['2022.05.27','(18:53:34)'], writer:'온종합병원', const:'', img_src:'news_ext_4.jpg'},
        {cate_no:1, item_no:3, title:'온종합병원그룹 가족을 위한 해운대 온 리조트가 오픈하였습니다.', date:['2022.05.27','(18:53:11)'], writer:'온종합병원', const:'', img_src:'news_ext_3.jpg'},
        {cate_no:1, item_no:2, title:'대회 연기안내- 제6회 온종합병원 그룹 - 건강백일장 & 그림그리기 대회', date:['2022.05.27','(18:52:54)'], writer:'온종합병원', const:'', img_src:'news_ext_2.jpg'},
        {cate_no:1, item_no:1, title:'호스피스 자원봉사자 교육 및 실습과정 수강 신청', date:['2022.05.27','(18:52:37)'], writer:'온종합병원', const:'', img_src:'news_ext_1.jpg'},
    ],
    // 언론보도
    [
        {cate_no:2, item_no:5, title:'온종합병원"소변이`찔끔`한다면, 남성,여성 모두 요실금 의심해야"', date:['2022.11.10','(11:46:50)'], writer:'온그룹의료재단온종합병원',context:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,img_src:'media_19.jpg'},
        {cate_no:2, item_no:4, title:'부산 온종합병원-밀알복지재단 부산지부, 저소득 가정 의료지원 협약 체결', date:['2022.11.01','(11:47:57)'], writer:'온그룹의료재단온종합병원',context:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,img_src:'media_19.jpg'},
        {cate_no:2, item_no:3, title:'부산 온종합병원"10분 이상 걷기 힘들면 척추관협착증 검사 필요해" 증상 따라 질환·치료법 달라 구별 필요', date:['2022.11.01','(11:26:31)'], writer:'온그룹의료재단온종합병원',context:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,img_src:'media_19.jpg'},
        {cate_no:2, item_no:2, title:'`홀스테라피`암 환우들 치료 위한 색다른 경험', date:['2022.11.01','(11:23:35)'], writer:'온그룹의료재단온종합병원',context:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,img_src:'media_19.jpg'},
        {cate_no:2, item_no:1, title:'부산 온종합병원`수다면다원검사실`확장 개소...수면장애 환자 중점 치료', date:['2022.10.29','(09:37:28)'], writer:'온그룹의료재단온종합병원',context:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,img_src:'media_19.jpg'},
    ],
    // 채용정보
    [
        {cate_no:3, item_no:5, title:'[마감]2023년 온종합병원 신규간호사 채용 공고', date:['2022.08.24','(14:48:05)'], writer:'온종합병원', const:[''], img_src:'re_1.png'},
        {cate_no:3, item_no:4, title:'[마감]2022년 온종합병원 호스피스 전문 간호사 코디네이터 채용 공고', date:['2022.08.11','(15:11:57)'], writer:'온종합병원', const1:[' 온종합병원은 기독교이념을 바탕으로 2010년 3월 개원하였으며, 20개 진료과목 500병상 규모로 70여명의 의료진과 700여명의 직원이 근무 중인 종합병원입니다.','보건복지부 인증의료기관, 인턴수련병원, 의사연수교육기관, 포괄간호서비스 시범사업기관, 지역응급의료기관 등 짧은 기간에 내·외적으로 크게 성장해온 병원입니다.','또한 향후 800병상 규모로 증축을 예정 하고 있습니다.','부산의 중심 서면에 위치, 지하철2호선 부암역(온종합병원역)과 바로 연결되어 가장 접근성이 좋고 교통이 편리한 도심형 종합병원입니다.'],con2:['1)호스피스전문 간호사(코디네이터)','      - 호스피스 교육 이수 - 상근','      호스피스병동 간호사라는 사명의식이 있고, 마음 따뜻한 간호사 선생님 지원 부탁드립니다.'],con2:[' -경력자 우대',' -보훈대상자 및 장애인의 경우 관련법에 의하여 우대합니다.'],con3:[' 1.진료비 전액 감면혜택(온종합병원, 정근안과병원)','2.환자 소개 인센트브 지급','3.직원식당 무료 이용','4.기숙사 무료제공(3교대 근무자에 한함)','5.병동교대근무 근속자 및 친절직원 해외연수','6.전직원 여름수련회&체육대회','7.동아리활동 특별지원','8.해외의료봉사 참여(그린닥터스 주관)','9.생일선물, 경조휴가 및 경조금 지급','10.직원상조회 운영','11.온장학재단 혜택부여(예정)'],con4:['가)이력서, 자기소개서 1부(본원양식)','     ①채용절차의 공정화에 관한 법률 제11조에 따라 구직자의 채용서류는 180일간 보관되며 이후 개인정보 보호법에 따라 채용서류는 파기됩니다.','      ②채용서류 반환을 원하시는 분들은 하단 인사담당자에게 연락하셔서 채용서류 반환청구서를 작성하신 후 전자우편으로 제출 부탁드립니다.','      ③채용서류의 반환에 소요되는 비용은 원칙적으로 구인자가 부담하지만 특수취급우편물로 송달하는 경우에 드는 우편에 관한 요금 및 우편이용에 관한','        수수료는 구직자가 부담함을 알려드립니다.','      ※채용서류는 이메일로만 접수 가능합니다.(우편, 방문접수 불가)','      ※이력, 경력 등의 정보가 사실과 다를시 채용이 취소될 수 있습니다.'],con5:['   -1차 서류 합격자 면접 일정 안내','   -2차 면접 합격여부 안내'],con6:['   -사람인 접수','   -이메일 접수','    이메일 제목을 1)호스피스 전문간호사 " 호스피스 전문 간호사(코디네이터) 지원자 OOO"로 작성하여 보내주십시오.','   -이메일 주소 : onhospital@hanmail.net'],con7:['  -담당자 : 인사담당자(총무기획팀)ㅣonhospital@hanmail.net','  -전화 : 051)607-0133'],  con_title:['■병원소개', '■모집분야','■우대사항','■온종합병원만의 특별한 직원복리후생','■제출서류','■전형방법','■접수방법','■문의사항'], img_src:'re_2.png'},
        {cate_no:3, item_no:3, title:'[마감]2022년 온종합병원 호스피스 병동 간호사 채용 공고', date:['2022.06.16','(14:22:22)'], writer:'온종합병원', const:[''], img_src:'re_2.png'},
        {cate_no:3, item_no:2, title:'[공고]2022년 온종합병원 간호사, 간호조무사(병동, 처치사)채용공고', date:['2022.06.16','(14:14:07)'], writer:'온종합병원', const:[''], img_src:'re_2.png'},
        {cate_no:3, item_no:1, title:'[마감]2022년 온종합병원 간호사(QPS간호사, 교육전담간호사) 채용공고', date:['2022.05.27','(17:07:34)'], writer:'온종합병원', const:[''], img_src:'re_3.png'},
    ],
    // 오늘의 식단
    [
        {cate_no:4, item_no:2, title:'11월 14일~11월 20일', date:['2022.11.10','(11:13:45)'], writer:'온그룹의료재단온종합병원', img_src:'diet_2.jpg'},
        {cate_no:4, item_no:1, title:'11월 7일~11월13일', date:['2022.11.03','(09:28:21)'], writer:'온그룹의료재단온종합병원', img_src:'diet_1.jpg'},
    ],
    // 자주묻는질문
    [
        {cate_no:5, item_no:5, title:'보건증 재발급 방법', date:['2022.05.27','(16:56:58)'], writer:'온종합병원', const:['보건증 재발급하려면 직접 방문해야 하나요?', '인터넷으로 발급하는 방법은 없나요?']},
        {cate_no:5, item_no:4, title:'입원환자 보호자 입원실 출입시간', date:['2022.05.27','(16:56:48)'], writer:'온종합병원', const:['입원환자 보호자인데요', '입원실 출입시간 제한이 있나요?', '오늘 가려고 합니다', '답변 부탁드립니다']},
        {cate_no:5, item_no:3, title:'서류 발급을 위해 필요한 구비서류는 어디에 있나요?', date:['2022.05.27','(16:56:36)'], writer:'온종합병원', const:['상단 메뉴의 병원안내 → 진료안내 → 제증명서 발급에서 확인 가능합니다.']},
        {cate_no:5, item_no:2, title:'담당 의사 시간표는 어디서 확인하나요?', date:['2022.05.27','(16:56:17)'], writer:'온종합병원', const:['메뉴 상단에 있는 [진료과/의료진] 선택 후 해당하는 진료과 클릭하여 확인하시면 됩니다.', '문의로 적혀있는 경우는 [병원 안내] → [전화번호]에서 해당 진료과 번호 확인 가능하여 전화 문의하시면 됩니다.']},
        {cate_no:5, item_no:1, title:'온라인 예약이 되지를 않습니다. 오류인가요?', date:['2022.05.27','(16:56:05)'], writer:'온종합병원', const:['온라인 예약이 되지 않는 경우는 예약이 불가능한 진료과입니다. 해당 진료과 전화 문의 후 시간표 안내받으시고 내원하시어 원무팀 접수 후 진료 부탁드립니다.']},
    ],
]