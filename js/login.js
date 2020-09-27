// console.log($("#yanzheng")[0].src);

// $("#yanzheng").click(function(){
//     let a = 0
//     a++
//    let before =  $(this)[0].getAttribute('src').concat("?id="+a)
// //    console.log(before);
   
//    let after = $(this)[0].setAttribute('src',before)
// //    console.log(after);  
// })




$("#yanzheng").click(function(){
    // console.log(this);
// 时间戳
    $(this)[0].src=`http://localhost:3002/user/captcha/?id=${new Date().getTime()}`
    // this.src=`http://localhost:2999/svg/?id=${new Date().getTime()}`
})

$(".btn").on("click",function(){
    let uname = $("[name=uname]").val();
    let pwd = $("[name=pwd]").val();
    let code = $("[name=code]").val()
    $.ajax({
        type:"post",
        url:"http://localhost:3002/user/login",
        data:{
            uname,
            pwd,
            code
        },
        xhrFields: {    //跨域携带session
            withCredentials: true
        },
        success:function(response){
            if (response.code) {
                alert(response.msg)
            } else {
                location.href = "./index.html"
            }
            
        }
    })
    
    
})