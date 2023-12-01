jQuery(document).ready(function (){
    const $LOBCharacter = {
        mal:{
            Dept:"상층 지휘팀",
            Name:"말쿠트",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/말쿠트.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/지휘팀.png",
            Over:"지휘팀은 가장 처음부터 개방하는 부서 이므로 게임 시작과 동시에 만날 수 있는 세피라이다."
        },

        hod:{
            Dept:"상층 교육팀",
            Name:"호드",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/호드.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/교육팀.png",
            Over:"호드는 직원들에게 친절하게 대해주고 싶어하는 성격으로 상담 캠패인을 자주 진행한다,"
        },

        yes:{
            Dept:"상층 정보팀",
            Name:"예소드",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/예소드.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/정보팀.png",
            Over:"엄격하고 냉정한 성격이다. 피부가 노출되는것을 싫어해 온 몸을 못으로 감싸고 있다."
        },

        net:{
            Dept:"상층 안전팀",
            Name:"네짜흐",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/네짜흐.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/안전팀.png",
            Over:"매사 귀찮아하는 표정에 나태하고 무기력하며 그 성격에 반영하듯 옷도 대충입고있다. 회사를 싫어해서 그렇지 마음만 먹으면 일을 굉장히 잘한다고 한다."
        },

        tip:{
            Dept:"중층 중앙부서",
            Name:"티페리트",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/티페리트.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/중앙부서.png",
            Over:"장발과 단발 두명으로 이루어져있으며 단발은 푸른눈, 장발은 녹색눈에 머리에 리본을 달고 있다."
        },

        che:{
            Dept:"중층 복지팀",
            Name:"헤세드",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/헤세드.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/복지팀.png",
            Over:"실수를 해도 화를 내지 않아서 직원들에게 인기가 좋지만, 정작 본인은 어차피 곧 죽을 직원들에게 깐깐하게 굴어봤자 뭐가 좋겠냐고 말하면서 처지에 관해서는 거의 포기한 상태다."
        },

        geb:{
            Dept:"중층 징계팀",
            Name:"게부라",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/게부라.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/징계팀.png",
            Over:"호전적인 성격을 가지고 있으며 입이 거칠고 환상체들을 한없이 혐오하며 겁이 많은 사람을 싫어한다."
        },

        hok:{
            Dept:"하층 기록팀",
            Name:"호크마",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/호크마.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/기록팀.png",
            Over:"발끝까지 내려오는 옷을 입고 한 손에는 회중시계를 들고있다, 외모처럼 나이든 듯한 말투를 사용한다"
        },

        bin:{
            Dept:"하층 추출팀",
            Name:"비나",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/비나.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/추출팀.png",
            Over:"매우 어둡고 공허한 인상으로 고풍스러운 말투를 사용한다"
        },

        ket:{
            Dept:"하층 설계팀",
            Name:"A",
            CharImg:"images/character/Lobotomy_Corporation/CharacterImg/아인.png",
            BackImg:"images/character/Lobotomy_Corporation/BackImg/설계팀.png",
            Over:"진짜 A 본인은 아니며 설계팀에 나타나는 세피라들은 모두 A의 가능성일 뿐이다."
        }
    };

    const $LORCharacter = {
        mal:{
            Floor:"역사의 층",
            Name:"말쿠트",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/말쿠트.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/역사의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/말쿠트Icon.png",
        },

        yes:{
            Floor:"기술과학의 층",
            Name:"예소드",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/예소드.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/기술과학의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/예소드Icon.png"
        },

        hod:{
            Floor:"문학의 층",
            Name:"호드",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/호드.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/문학의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/호드Icon.png"
        },

        net:{
            Floor:"예술의 층",
            Name:"네짜흐",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/네짜흐.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/예술의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/네짜흐Icon.png"
        },

        tip:{
            Floor:"자연과학의 층",
            Name:"티페리트",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/티페리트.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/자연과학의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/티페리트Icon.png"
        },

        geb:{
            Floor:"언어의 층",
            Name:"게부라",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/게부라.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/언어의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/게부라Icon.png"
        },

        che:{
            Floor:"사회과학의 층",
            Name:"헤세드",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/헤세드.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/사회과학의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/헤세드Icon.png"
        },

        bin:{
            Floor:"철학의 층",
            Name:"비나",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/비나.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/철학의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/비나Icon.png"
        },

        hok:{
            Floor:"종교의 층",
            Name:"호크마",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/호크마.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/종교의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/호크마Icon.png"
        },

        ket:{
            Floor:"총류의 층",
            Name:"롤랑",
            CharImg:"images/character/Library_Of_Ruina/CharacterImg/롤랑.png",
            BackImg:"images/character/Library_Of_Ruina/BackImg/총류의_층.png",
            IconImg:"images/character/Library_Of_Ruina/Iconimg/케테르Icon.png"
        }
    };

    const $LCBCharacter = {
        yis: {
            Number:"1",
            Name:"이상",
            CharImg:"images/character/Limbus_Company/CharacterImg/이상.png"
        },

        fau: {
            Number:"2",
            Name:"파우스트",
            CharImg:"images/character/Limbus_Company/CharacterImg/파우스트.png"
        },

        don: {
            Number:"3",
            Name:"돈키호테",
            CharImg:"images/character/Limbus_Company/CharacterImg/돈키호테.png"
        },

        ryo: {
            Number:"4",
            Name:"료슈",
            CharImg:"images/character/Limbus_Company/CharacterImg/료슈.png"
        },

        meu: {
            Number:"5",
            Name:"뫼르소",
            CharImg:"images/character/Limbus_Company/CharacterImg/뫼르소.png"
        },

        hon: {
            Number:"6",
            Name:"홍루",
            CharImg:"images/character/Limbus_Company/CharacterImg/홍루.png"
        },

        hea: {
            Number:"7",
            Name:"히스클리프",
            CharImg:"images/character/Limbus_Company/CharacterImg/히스클리프.png"
        },

        ish: {
            Number:"8",
            Name:"이스마엘",
            CharImg:"images/character/Limbus_Company/CharacterImg/이스마엘.png"
        },

        rod: {
            Number:"9",
            Name:"로쟈",
            CharImg:"images/character/Limbus_Company/CharacterImg/로쟈.png"
        },

        sin: {
            Number:"11",
            Name:"싱클레어",
            CharImg:"images/character/Limbus_Company/CharacterImg/싱클레어.png"
        },

        out: {
            Number:"12",
            Name:"오티스",
            CharImg:"images/character/Limbus_Company/CharacterImg/오티스.png"
        },

        gre: {
            Number:"13",
            Name:"그레고르",
            CharImg:"images/character/Limbus_Company/CharacterImg/그레고르.png"
        }
    };

    const $LOBc = $('#LOBCharacterInfo');
    const $LORc = $('#LORCharacterInfo');
    const $LCBc = $('#LCBCharacterInfo');

    $('#gameList>li>a').click(function(){
        $(this).parent()
            .addClass('active')
            .siblings()
            .removeClass('active');

    $LOBc.removeClass('active')
    $LORc.removeClass('active')
    $LCBc.removeClass('active')

    return false;
    });

    $("#department").on("click", "a", function () {
        let upLOBCharacter = $(this)
            .find(".LOBCharacter")
            .val();
        const CharImg = $LOBCharacter[upLOBCharacter].CharImg;
        const BackImg = $LOBCharacter[upLOBCharacter].BackImg;
        const Name = $LOBCharacter[upLOBCharacter].Name;
        const Dept = $LOBCharacter[upLOBCharacter].Dept;
        const Info = $LOBCharacter[upLOBCharacter].Over;

        $('#LOBCharImg').attr('src', CharImg);
        $('#LOBBackImg').attr('src', BackImg);
        $('#LOBCharacterName').text(Name);
        $('#LOBDept').text(Dept);
        $('#LOBOver').text(Info);
    });

    $("#floor").on("click", "a", function (){
        let upLORCharacter = $(this)
            .find(".LORCharacter")
            .val();

        const CharImg = $LORCharacter[upLORCharacter].CharImg;
        const BackImg = $LORCharacter[upLORCharacter].BackImg;
        const IconImg = $LORCharacter[upLORCharacter].IconImg;
        const Name = $LORCharacter[upLORCharacter].Name;
        const Floor = $LORCharacter[upLORCharacter].Floor;

        $('#LORCharImg').attr('src', CharImg);
        $('#LORBackImg').attr('src', BackImg);
        $('#LORIconImg').attr('src', IconImg);
        $('#LORCharacterName').text(Name);
        $('#LORFloor').text(Floor);
    });

    $("#prisoner").on("click", "a", function (){
        let upLCBCharacter = $(this)
            .find(".LCBCharacter")
            .val();

        const CharImg = $LCBCharacter[upLCBCharacter].CharImg;
        const Number = $LCBCharacter[upLCBCharacter].Number;
        const Name = $LCBCharacter[upLCBCharacter].Name;

        $('#LCBCharImg').attr('src', CharImg);
        $('#LCBNumber').text(Number);
        $('#LCBCharacterName').text(Name);
    });


    $('.LOBInfoBtn').click(function(){
        $LOBc.addClass('active ');
    });

    $('.LORInfoBtn').click(function(){
        $LORc.addClass('active ');
    });

    $('.LCBInfoBtn').click(function(){
        $LCBc.addClass('active ');
    });

    $('.infoClose').click(function (){
        $LOBc.removeClass('active')
        $LORc.removeClass('active')
        $LCBc.removeClass('active')
    })

});