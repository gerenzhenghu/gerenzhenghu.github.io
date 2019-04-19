$(function(){
    var stuid=getCookie("myphone");

    $.ajax({
        type: "get",
        url: "php/getShoppingCart.php",
        async: true,
        dataType: "json",
        data: {
            vipName: stuid
        },
        success: function (data) {
            if(data.length>0){
                $(".zanwu").css("display","none");
            }
        	let id;
        	let count;
        	let price;
        	let money;
            let htmlStr = "";
            let allmoney=0;
        for(let i in data){
            htmlStr+=`<tr class="Str">
                        <td class="xuan"><input type="checkbox"/></td>
                        <td class="goodsname"><img src="${data[i].goodsImg}" width="60px" height="60px">${data[i].goodsName}</td>
                        <td class="price1">${data[i].goodsPrice}</td>
                        <td class="counts">
                        	<p>
                        	<span class="jian">-</span>
                        	<span class="goodscount">${data[i].goodsCount}</span>
                        	<span class="add">+</span>
                        	<span class="Idd" style="display:none;">${data[i].goodsId}</span>
                        	</p>
                        </td>
                        <td class="xj">${data[i].goodsPrice*data[i].goodsCount}</td>
                        <td class="sc"><span>x</span></td>
                    </tr>`;
        }
        $("table").append(htmlStr);
        $(".goodscounts").html(data.length);
        $("#tid").bindCheckAll($(":checkbox").not("#tid"),$("#btnUnCheckId"));
        $(":checkbox").click(function(){
        	moneys();
            shulang();
        });
        $("#btnUnCheckId").click(function(){
            moneys();
            shulang();
        })
        function shulang(){
            let iputs=$(".xuan input");
            let c=0;
            for(let i in iputs){
                if(iputs[i].checked==true){
                    c++;
                }
            }
            $(".buy-counts").html(c);
        }
         shulang();
        function moneys(){
            let allMoney=$(".xj");
            let Allmoney=0;
            let iput=$(".xuan input");

            for(let i in iput){
                if(iput[i].checked==true){
                Allmoney+=parseInt($(allMoney[i]).text());
                }
            }
         $(".activity-money span").html(Allmoney);
        }
        
        
        // alert(stuid);
        if(stuid!=null){
            $(".welcome").html("您好！");
            $(".welcome").next().html(stuid);
        }

    $(".add").on("click", function () {
        let n = parseInt($(this).prev().html());
        $(this).prev().html(n + 1);
        $(this).prev().prev().css("color", "#333");
        id=$(this).next().html();
        count=$(this).prev().html();
        price=$(this).parent().parent().prev().html();
        money=count*price;
        ax(stuid,id,count);
        $(this).parent().parent().next().html(money);
        moneys();
    })
    //减数量
    $(".jian").on("click", function () {
        let n = parseInt($(this).next().html());
        if (n > 1) {
            $(this).next().html(n - 1);
            $(this).css("color", "#333");
        } else {
            $(this).css("color", "#cdcdcd")
        }
        id=$(this).next().next().next().html();
        count=$(this).next().html();
        price=$(this).parent().parent().prev().html();
        money=count*price;

        ax(stuid,id,count); 
        $(this).parent().parent().next().html(money);
        moneys();
    })


    $(".sc span").click(function(){
    	id=$(this).parent().prev().prev().find(".Idd").text();
    	console.log(id);
    	dele(stuid,id);
    	$(this).parent().parent().remove();
        let strGood=$(".Str");
        if(strGood.length<1){
            $(".zanwu").css("display","block");
        }
        moneys();
        shulang();
    	
    })


        }
    });
});



function ax(stuid,id,count){
	$.ajax({
        type: "get",
        url: "php/updateGoodsCount.php",
        async: true,
        data: {
            vipName: stuid,
            goodsId:id,
            goodsCount:count
        },
        success: function (data) {
        	if(data==1){
        		console.log("修改成功！");
        	}

        }
    });

}
function dele(stuid,id){
	$.ajax({
        type: "get",
        url: "php/deleteGoods.php",
        async: true,
        data: {
            vipName: stuid,
            goodsId:id
        },
        success: function (data) {
        	if(data==1){
        		console.log("删除成功！");
        	}
        }
    });
}



jQuery.fn.extend({
	bindCheckAll:function(subCheckBox,unchk){
		let $checkBoxAll = this;
		//1、给全选复选框绑定事件
		this.click(function(){
			let isChecked = this.checked;
			subCheckBox.each(function(){
				//this是jQuery中的当前DOM对象
				this.checked = isChecked;
			});
		});

		//2、给反选复选框绑定事件
		if(unchk!=undefined){
			unchk.click(function(){
				//this：jQuery对象
				subCheckBox.each(function(){
					//this是jQuery中的当前DOM对象
					this.checked = !this.checked;
				});
				changeCheckBoxAll();
			});
		}

		//3、全选框和自复选框之间的联动
		subCheckBox.click(function(){
			//定义一个表示全选框是否选中的变量
			changeCheckBoxAll();
		});

		function changeCheckBoxAll(){
			let isAllChecked = true;
			subCheckBox.each(function(){				
				if(!this.checked){
					isAllChecked = false;
				}
			});
			// $checkBoxAll.attr("checked",isAllChecked);
			$checkBoxAll[0].checked=isAllChecked?"checked":"";
		}
	}
});