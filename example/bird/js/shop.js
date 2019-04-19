$(function(){
	$.get("php/getGoodsList.php", function(data){
		console.log("Data Loaded: " + data);
  		let htmlStr = "";
  		for(let i in data){
  			htmlStr+=`<div class="page-bg">
					<a href="productDetails.html?goodsId=${data[i].goodsId}" class="page-img-bg"><img class="page-imgs" src="${data[i].goodsImg}" alt=""></a>
					<a href="productDetails.html?goodsId=${data[i].goodsId}" class="page_text_1"><span>${data[i].goodsName}</span>
					</a>
					<div class="page_text_2">
						<span>￥</span>
						<span>${data[i].goodsPrice}</span>
					</div>
					<div class="page_text_3">
						<p>售出<span>${data[i].goodsCount}</span></p>
						<p>评论<span>${data[i].goodsDesc}</span></p>
					</div>
				</div>`;
				// var imgs1=data[i].goodsImg;
				// var imgs=data[i].beiyong1;
				
  		}
  		$(".page-list").html(htmlStr);
  		var l=$(".page-bg");
  		var v=$(".page-imgs");
  		for(let i=0;i<l.length;i++){
  			$(l[i]).hover(
			function(){
				$(v[i]).attr("src",data[i].beiyong1);
					},
			function(){
				$(v[i]).attr("src",data[i].goodsImg);
					}
			)
  		}
  		
	},"json");
});



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
