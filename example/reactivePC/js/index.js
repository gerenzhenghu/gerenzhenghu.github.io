$(".show").click(function(){
    $(".section-left").toggleClass("aa");
    $(".section-right").toggleClass("cc");
    if(parseInt($(".section-left").css("width"))==250){
        $(".section-left").addClass("section-left1");
        $(".sidebar .title").addClass("title1");
        $(".heading").addClass("heading1");;
        $("li a").addClass("a1");
        $("li a span").addClass("span1");
        $(".section-right").css("width", "calc(100% - 90px)");
    }else{
        $(".section-left").removeClass("section-left1");
        $(".sidebar .title").removeClass("title1");
        $(".heading").removeClass("heading1");;
        $("li a").removeClass("a1");
        $("li a span").removeClass("span1");
        $(".section-right").css("width", "calc(100% - 250px)");
    }
})


