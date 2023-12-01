jQuery(document).ready(function(){

    // 메뉴
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().fadeIn(200);
    }).mouseout(function(){
        $(this).find('.submenu').stop().fadeOut(200);
    });

    // 이미지 슬라이드
    $('.imgslide a:gt(0)').hide();

    setInterval(function(){
        $('.imgslide a:first-child')
            .fadeOut()
            .next('a')
            .fadeIn()
            .end()
            .appendTo('.imgslide');
    },3000);

    // 공지사항 팝업창
    $('.notice li:first').click(function(){
        $('.modal').addClass('active');
    });

    $('.modal_btn').click(function(){
        $('.modal').removeClass('active');
    });

    // 유저 커뮤니티
    $('.community_btn').click(function(){
        $('.writing').addClass('active');
    });

    $('.writing_cancell').click(function(){
        $('.writing').removeClass('active');
    });

    $('.writing_upload').click(function (){
        const commuTitle = $('#title input').val()
        const commuBody = $('#contentTextarea').val()
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth()+1;
        const day = today.getDay()+1;
        const dayText = year + '.' + month + '.' + day;

        if(commuTitle.trim() === "" || commuBody.trim() === "") {
            alert("제목이나 내용에 적어도 한 글자 이상 작성해야 합니다!");
            return;
        }
        const commuList = $('#none').clone()
            .removeAttr('id')
            .find('.listTitle').text(commuTitle).end()
            .find('.listDay').text(dayText).end()
            .find('input').val(commuBody).end()
        $("#CommunityList").append(commuList);

        $('#title input').val("");
        $('#contentTextarea').val("");

        $('.writing').removeClass('active');
        $('.writing_success').addClass('active')
    });

    $('.writing_success_btn').click(function(){
        $('.writing_success').removeClass('active');
    });

    $("#CommunityList").on("click", "li", function() {
        const upTilte = $(this).find('.listTitle').text()
        const upBody = $(this).find('.listBody').val()

        $('.CommunityTitle').text(upTilte)
        $('.CommunityBody').text(upBody)

        $('.CommunityModal').addClass('active')
    })

    $(".CommunityModalBtn").click(function (){
        $('.CommunityModal').removeClass('active')
    })

    // 다운로드 탭메뉴
    $(function(){
        $('.downloadlist>li>a').click(function(){
            $(this).parent()
                .addClass('active')
                .siblings()
                .removeClass('active');
            return false;
        });
    });
});





















