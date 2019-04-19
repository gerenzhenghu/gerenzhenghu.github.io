$(".phone1 input").blur(function(){
	let reg=/^1[3-9]\d{9}$/;
	if($(".phone1 input").val()==""){
		$(".phone1 input").css("border","1px solid #ff8a81");
		$(".phone1").next().html("请输入手机号");
	}else if(reg.test($(".phone1 input").val())){
		$(".phone1 input").css("border","0");
		$(".phone1").next().html("");
	}else{
		$(".phone1 input").css("border","1px solid #ff8a81");
		$(".phone1").next().html("手机号输入错误！");
	}
});
	$(".phone3 input").blur(function(){
		var reg=/^[\w\S]{6,12}$/;
			if(reg.test($(".phone3 input").val())){
				$(".phone3").next().html("√");
			}else{
				$(".phone3").next().html("× 密码6-20位数字、字母、字符组合");
		}

	});
	$(".regBtn").click(function(){
			$.get("php/login.php",{myphone:$(".phone1 input").val(),passw:$(".phone3 input").val()},function(data){
				if(data==1){
					saveCookie("myphone",$(".phone1 input").val(),7);
					alert("登录成功！");
					location.href="index.html";
				}else if(data==0){
					alert("登录失败！");
				}else{
					alert(data);
				}
			});
	});
//保存cookie
//参数：
//键
//值
//有效期（单位是：天）
//返回值：无

function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+'='+escape(value)+';expires='+d.toGMTString();
}