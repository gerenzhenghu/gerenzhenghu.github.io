$(".mater input").focus("click",function(){
    $(this).addClass("input-active");
    $(this).next().addClass("label-active");
})
$(".mater input").blur("click",function(){
    $(this).removeClass("input-active");
    $(this).next().removeClass("label-active");
})