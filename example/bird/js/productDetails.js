function getCookie(key){
	var str = unescape(document.cookie);//username=jzm; userpass=1236667
	//1、分割成数组（; ）
	var  arr = str.split('; ');//['username=jzm','userpass=1236667']

	//2、从数组查找key=;
	for(var i in arr){
		if(arr[i].indexOf(key+'=')==0){
			return arr[i].split('=')[1];
		}
	}
	return null;
}
function showWelcom(){
		let stuid=getCookie("myphone");
		// alert(stuid);
		if(stuid!=null){
			$(".welcome").html("您好！");
			$(".welcome").next().html(stuid);
		}
	}
$(function(){
		showWelcom();
});



$(function(){
		// let liDoms = $(".minImg").children();
		// for(let i=0;i<liDoms.length;i++){
		// $(liDoms[i]).mouseover(function(){
		// 	// let bgImg = getStyle(this,"backgroundImage");
		// 	// $("#bigBox").style.backgroundImage = bgImg;
		// 	// $("#showBox").style.backgroundImage = bgImg;
		// 	$(".bigImg").children(0).attr("src",$(this).children(0).attr("src"));
			
		// 	});
		// }
	//获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    //接收URL中的参数goodsId
    var id = getUrlParam('goodsId');
    console.log('id:' + id);

    $.ajax({
        type: "get",
		url: "php/getGoodsInfo.php",
        async: true,
        dataType: "json",
        data: {
            goodsId: id,
        },
        success: function (data) {
			console.log(data);
			$("#bBox").css("backgroundImage","url("+data.goodsImg+")");
			$("#sBox").css("backgroundImage","url("+data.goodsImg+")");
			$("#imgList li:nth-child(1)").css("backgroundImage","url("+data.goodsImg+")");
			$("#imgList li:nth-child(2)").css("backgroundImage","url("+data.beiyong1+")");
			$("#imgList li:nth-child(3)").css("backgroundImage","url("+data.beiyong6+")");
			$("#imgList li:nth-child(4)").css("backgroundImage","url("+data.beiyong7+")");
			$(".xq_top>h1").html(data.goodsName+"-"+data.pinming);
			$(".xq_pic_right_tlt").html(data.goodsName);
			$("#Price").html(data.goodsPrice);
			$("#shouchusl").html(data.goodsCount);
			$("#pinglun").html(data.goodsDesc);
			$("#pingming").html(data.beiyong2);
			$("#caizhi").html(data.beiyong3);
			// $("#shoucun").html(data.handscun);
			$("#zhuzuan").html(data.beiyong4);
        }
    });
    let stuid=getCookie("myphone");
    if(stuid==null){
    	alert("请登录！");
    	location.href="login.html";
    }else{
	    $("#buybtn").click(function(){
			console.log('id:' + id);
			$.ajax({
			type:"get",
			url:"php/addShoppingCart.php",
			data: {
				vipName:$(".welcome").next().html(),
				goodsId: id,
				goodsCount:1
	        },
			async:true,
			success: function(xhr){
				if(xhr==1){
				alert("加入到购物车");
				window.location.href = "goodsCart.html";
				}else{
				alert("购物车已存在此商品");
				};
			}
		});
		})
}
	

});

