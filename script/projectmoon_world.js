jQuery(document).ready(function(){

    $(function(){
        $('.world_explanat>li>a').click(function(){
            $(this).parent()
                .addClass('active')
                .siblings()
                .removeClass('active');
            return false;
        });
    });
});