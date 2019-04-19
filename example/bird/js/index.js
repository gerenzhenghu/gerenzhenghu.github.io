$(function(){
	$("#goods_boxa a").css("display","none");
	$("#goods_boxb a").css("display","none");
	$("#goods_right a").css("display","none");
	$("#goods_list li").css("color","white");
	//只显示第一个图片
	$("#goods_boxa a:eq(0)").css("display","block");
	$("#goods_boxb a:eq(0)").css("display","block");
	$("#goods_right a:eq(0)").css("display","block");
	$("#goods_list li:eq(0)").css("color","black");


	$("#goods_list li").hover(function(){//当鼠标经过文字
	//隐藏全部的图片
	$("#goods_boxa a").css("display","none");
	$("#goods_boxb a").css("display","none");
	$("#goods_right a").css("display","none");
	$("#goods_list li").css("color","white");

	$("#goods_boxa a:eq("+$(this).index()+")").css("display","block");
	$("#goods_boxb a:eq("+$(this).index()+")").css("display","block");
	$("#goods_right a:eq("+$(this).index()+")").css("display","block");
	$("#goods_list li:eq("+$(this).index()+")").css("color","black");
	//数字对应的图片显示
	});

	let ord=0;
	let arr=$(".foucs").children();
	setInterval(function(){
		 let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $(".foucs").children();
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},1000);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},1000);
	},2000);
});





let mTimer;//定义定时器
let index = 0;//记录当前图片的序号，从0开始
	
//1、自动变换图片，同时变豆豆
function autoplay() {
	mTimer = setInterval(function(){
		//1、改变数据
		let outIndex = index;//出的图片序号
		index=index+1;
		//2、判断边界
		if(index>1){
			index=0;
		}
		//3、改变外观
		showimg(index,outIndex);
	},4000);
}

function stopplay() {
	window.clearInterval(mTimer);
}

function goimg(transIndex) {
	//1、改变数据（改变当前图片的序号）
	let outIndex = index;
	index = transIndex;

	//3、改变外观
	showimg(index,outIndex);
}

function showimg(inIndex,outIndex) {
	if(inIndex==outIndex){
		return;
	}
	//3.1 改变图片的z-index
	let imgs = $(".sect_right > img");
	imgs[inIndex].style.left="578px";
	//滑入滑出（需要知道入的序号，出的序号）
	// moveObj02(imgs[outIndex],"left",-400,1000);
	// moveObj02(imgs[inIndex],"left",0,1000);
	slideInOut(imgs[outIndex],imgs[inIndex],"left",-578,578,500);
	
	//3.2 改变豆豆的颜色
	let lis = $("#sect_btn").children();
	for(let i=0;i<lis.length;i++){
		lis[i].style.backgroundColor = "gray";
	}
	lis[inIndex].style.backgroundColor = "white";

}

$(function(){
	//1、自动变换图片，同时变豆豆
	autoplay();
	//2、鼠标放上停止自动变换
	$(".sect_right").mouseover(function () {
		stopplay();
	});
	//3、鼠标离开，继续自动变换
	$(".sect_right").mouseout(function () {
		autoplay();
	});

	//4、点击豆豆跳到指定的图片
	let lis = $("#sect_btn").children();
	for(let i=0;i<lis.length;i++){
		$(lis[i]).hover(function () {
			//跳到指定序号的图片
			goimg(i);
		});
	}

let Timer;//定义定时器
let ind = 0;//记录当前图片的序号，从0开始
	
//1、自动变换图片，同时变豆豆
function auto() {
	Timer = setInterval(function(){
		//1、改变数据
		let out = ind;//出的图片序号
		ind=ind+1;
		//2、判断边界
		if(ind>3){
			ind=0;
		}
		//3、改变外观
		show(ind,out);
	},4000);
}

function stop() {
	window.clearInterval(Timer);
}

function go(trans) {
	//1、改变数据（改变当前图片的序号）
	let out = ind;
	ind = trans;

	//3、改变外观
	show(ind,out);
}

function show(inIn,outIn) {
	if(inIn==outIn){
		return;
	}
	//3.1 改变图片的z-index
	let imgs = $(".dizhi_pic_img > img");
	imgs[inIn].style.left="700px";
	//滑入滑出（需要知道入的序号，出的序号）
	// moveObj02(imgs[outIndex],"left",-400,1000);
	// moveObj02(imgs[inIndex],"left",0,1000);
	slideInOut(imgs[outIn],imgs[inIn],"left",-700,700,500);
	
	//3.2 改变豆豆的颜色
	let lists = $("#dizhi_pic_img_btn").children();
	for(let i=0;i<lists.length;i++){
		lists[i].style.backgroundColor = "gray";
	}
	lists[inIn].style.backgroundColor = "white";

}

//最后一个轮播图（体验中心）
	auto();
	//2、鼠标放上停止自动变换
	$(".dizhi_pic_img").mouseover(function () {
		stop();
	});
	//3、鼠标离开，继续自动变换
	$(".dizhi_pic_img").mouseout(function () {
		auto();
	});

	//4、点击豆豆跳到指定的图片
	let lists = $("#dizhi_pic_img_btn").children();
	for(let i=0;i<lists.length;i++){
		$(lists[i]).hover(function () {
			//跳到指定序号的图片
			go(i);
		});
	}

 	$(window).scroll(function(){
	var num=document.documentElement.scrollTop || document.body.scrollTop;
	//var num = $("html,body").scrollTop();
	if(num>800){
		$("#totop").css("display","block");
	}else{
		$("#totop").css("display","none");
	}
})
 	$("#totop").click(function(){
 		$("html,body").animate({
         scrollTop:0
     	}, 200);
 	});
});	


$(function(){
	$(".dizhi_nav > span").mouseenter(function(){
		//给当前划过的span添加class名
		$(this).addClass("a_on");
		//删除其他兄弟的class名
		$(this).siblings().removeClass("a_on");
		let index=$(this).index();
		$(".dizhi_list2 >div").eq(index).addClass("dizhi_list2_a");
		$(".dizhi_list2 >div").eq(index).siblings().removeClass("dizhi_list2_a");
		$(".dizhi_pic_list >div").eq(index).addClass("pic_map");
		$(".dizhi_pic_list >div").eq(index).siblings().removeClass("pic_map");

	})
})

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
