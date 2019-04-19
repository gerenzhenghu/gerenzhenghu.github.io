var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // effect : 'flip',
        autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })




$(".every").scroll(function(){
    // var num=document.documentElement.scrollTop || document.body.scrollTop;
    var num = $(".every").scrollTop();
    if(num>800){
        $(".jt").css("display","block");
    }else{
        $(".jt").css("display","none");
    }
})
$(".jt").click(function(){
    $(".every").animate({
        scrollTop:0
    }, 200);
});
