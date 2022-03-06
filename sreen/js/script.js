$(document).ready(function() {
    $(window).scroll(function() {
        var scrollY = ($(window).scrollTop() / ($(document).height() - $(window).height()) * 100).toFixed(3);
        $(".bar").css({"width" : scrollY + "%"});
    });

    $('#gnb>li').hover(function() {
        $('.submenu, #mBack',this).stop().slideDown();
    }, function() {
        $('.submenu, #mBack',this).stop().slideUp();
    });

    var idx = 0;
    setInterval(function() {
        $('#slide .image').eq(idx).fadeOut();
        idx >= 3 ? idx = 0 : idx++;
        $('#slide .image').eq(idx).fadeIn();
    }, 1500);

    let query=document.querySelector('.query');
    let search_bt=document.querySelector('.search_bt');

    search_bt.onclick=function(){
        let url='https:/www.google.com/search?q='+query.value;
        window.open(url);
    }
});