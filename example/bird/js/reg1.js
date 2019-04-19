$(".phone6 .reg-phon").click(function(){
	let reg=/^1[3-9]\d{9}$/;
	let reg1=/^[\w\S]{6,12}$/;
	if(reg.test($(".phone1 input").val())==false){
		$(".phone1 input").css("border","1px solid #ff8a81");
		$(".phone1 span").html("手机号输入错误！");
	}else if($(".phone2 input").val().toLowerCase()!=($(".phone2 p").html()).toLowerCase()){
			$(".phone2 span").html("验证码输入错误！");
		}else if(reg1.test($(".phone3 input").val())==false){
				$('.phone3 span').html("× 两次输入密码不一致！");
			}else
	 if($(".phone2 .yzm").val()==""){
			$(".phone2 span").html("验证码输入错误！");
		}else if($(".phone2 input").val()==""){
			$('.phone2 span').html("请再次输入密码！");
		}else{
			let xhr=new XMLHttpRequest();
			xhr.open("get","php/reg.php?myphone="+$(".phone1 input").val()+"&passw="+$(".phone3 input").val(),true);
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					if(xhr.responseText==1){
						alert("注册成功");
						location.href="login.html";
					}else if(xhr.responseText==0){
						alert("注册失败");
						
					}else if(xhr.responseText==2){
						alert("该用户已注册");	
					}else if(xhr.responseText==3){
						alert("请输入用户名或密码！");
					}	
				}
			}
			xhr.send();	
		}
	});	