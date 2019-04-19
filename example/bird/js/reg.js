$(".phone1 input").blur(function(){
	let reg=/^1[3-9]\d{9}$/;
	if($(".phone1 input").val()==""){
		$(".phone1 input").css("border","1px solid #ff8a81");
		$(".phone1 span").html("请输入手机号");
	}else if(reg.test($(".phone1 input").val())){
		$(".phone1 input").css("border","0");
		$(".phone1 span").html("");
		let xhr=new XMLHttpRequest();
			xhr.open("get","php/regphone.php?myphone="+$(".phone1 input").val(),true);
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					if(xhr.responseText==0){

						$(".phone1 span").html("该手机号已被注册！");
					}else{
						$(".phone1 span").html("该手机号可以使用！");
					}
				}
			}
			xhr.send();	
	}else{
		$(".phone1 input").css("border","1px solid #ff8a81");
		$(".phone1 span").html("手机号输入错误！");
	}

});
$(".phone2 p").click(function(){
	let str="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		let yzmStr="";
		for(let i=0;i<4;i++){
			var index=parseInt(Math.random()*str.length);
			yzmStr+=str[index];
		}
		$(".phone2 p").html(yzmStr);
});
$(".phone2 input").blur(function(){
	if($(".phone2 input").val().toLowerCase()!=($(".phone2 p").html()).toLowerCase()){
			$(".phone2 span").html("验证码输入错误！");
		}else{
			$(".phone2 span").html("");
		}
});

$(".phone3 input").blur(function(){
		let reg=/^[\w\S]{6,12}$/;
			if(reg.test($(".phone3 input").val())){
				$('.phone3 span').html("√");
			}else{
				$('.phone3 span').html("× 密码6-20位数字、字母、字符组合");
		}

	});
$(".phone4 input").blur(function(){
	if($(".phone4 input").val()==$(".phone3 input").val()){
		$('.phone4 span').html("");
	}else{
		$('.phone4 span').html("× 两次输入密码不一致！");
	}

});
// $(".phone6 .reg-phon").click(function(){
// 		if($(".phone2 .yzm").val()==""){
// 			$(".phone2 span").html("验证码输入错误！");
// 		}else if($(".phone2 input").val()==""){
// 			$('.phone2 span').html("请再次输入密码！");
// 		}else{
// 			let xhr=new XMLHttpRequest();
// 			xhr.open("get","php/reg.php?myphone="+$(".phone1 input").val()+"&passw="+$(".phone3 input").val(),true);
// 			xhr.onreadystatechange=function(){
// 				if(xhr.readyState==4&&xhr.status==200){
// 					if(xhr.responseText==1){
// 						alert("注册成功");
// 						location.href="login.html";
// 					}else if(xhr.responseText==0){
// 						alert("注册失败");
						
// 					}else if(xhr.responseText==2){
// 						alert("该用户已注册");	
// 					}else if(xhr.responseText==3){
// 						alert("请输入用户名或密码！");
// 					}	
// 				}
// 			}
// 			xhr.send();	
// 		}
// 	});	