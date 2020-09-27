$(function(){
    // var pattern =/^\w{1,8}@[a-zA-Z0-9]{1,6}[.](com|com.cn)/
    // var pass = /^[a-zA-Z0-9]{6,20}/
    // console.log($("input[type='password']").val());
    
    // // 先获取注册按钮   
    // $("button").eq(0).click(function(){
    //     //  if($("input").val()==""){
    //         //  alert('请输入邮箱，密码和验证码')
    //     //  }else 
    //      if(pattern.test($("input[type='text']").eq(0).val()) && pass.test($("input[type='password']").val())){
    //          alert('邮箱输入正确')
    //     //  }else if(pass.test($("input[type='password']").val())){
    //         // alert('密码输入正确')
    //      }
    //      else{
    //          alert('格式错误')
    //      }
    // })
    // jQuery 对象 .on( 事件名 , 函数 )

    // 判断邮箱格式
    // $("button").eq(0).on('click',f1) 
    // function f1(){
    //     if($("input[type='text']").eq(0).val()==""){
    //         alert('邮箱不能为空')
    //     }else if(pattern.test($("input[type='text']").eq(0).val())){
    //         alert('邮箱输入正确')
    //     }else{
    //         alert('邮箱格式错误')
    //     }
    // }


    // 判断密码格式
    // $("button").eq(0).on('click',f2) 
    // function f2(){
    //     if($("input[type='password']").eq(0).val()==""){
    //         alert('密码不能为空')
    //     }else if(pass.test($("input[type='password']").eq(0).val())){
    //         alert('密码输入正确')
    //     }else{
    //         alert('密码格式错误')
    //     }
    // }
   
    // 点击验证码数字随机更换
    // 产生4位数字随机验证码
    // function randomCode(){
    //     var str = '0123456789';
    //     var sr1 = ""
    //     for(var i=0;i<4;i++){
    //         var a = Math.floor(Math.random()*str.length)
    //         str1+=str[a];
    //     }
    //     return str1
    // }
    // $('em').click(function(){
    //     $(this).text()=randomCode()
    // })







    $(".btn").on("click",function(){
        // console.log(123);
        
        $.ajax({
            type:"post",
            url:"http://localhost:3002/user/register",
            data:{
                uname: $("[name=uname]").val(),
                pwd: $("[name=pwd]").val(),
                code: $("[name=code]").val()
            },
            // 允许跨域
            xhrFields: {
                withCredentials: true
            },
            success:function(response){
                if (response.code) {
                    alert(response.msg)
                } else {
                    location.href = "./login.html"
                }
                
            }
        })
    
    })


    
    $("#yanzheng").click(function(){
        // console.log(this);
    // 时间戳
        $(this)[0].src=`http://localhost:3002/user/captcha/?id=${new Date().getTime()}`
        // this.src=`http://localhost:2999/svg/?id=${new Date().getTime()}`
    })






    
})