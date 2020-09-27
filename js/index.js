

let init = ()=>{
    resou()
    requestHot()
    popularityRequest()
    lunbotu()
    fenlei()
    peishi()
    paihangbang()
    xianshi()
}

// 猜你喜欢
let requestHot = ()=>{
    $.ajax({
        type:"get",
        url:"http://localhost:3002/api/like",
        success(res){
            let{result:{data}}=res
            let html = template("xihua",{data})
            $("#xihuan").html(html)   
        }
    })
}
// 人气好货
let popularityRequest =async()=>{
 let {result} = await myAjax({
     url:"http://localhost:3002/api/popularity"
 })
//  console.log(result.data);
 
 let html = template("haohuo",result)
//  console.log(html);
 
 $("#popularity").html(html)
}

// 轮播图
// 渲染
let lunbotu = async()=>{
    let {result}=await myAjax({
        url:"http://localhost:3002/api/banner"
    })
    // console.log(result);
    
    let html = template("lunbotu",result)
    // console.log(html);
    
    $("#lunbo").html(html)
    $(".lunbotu>ul>li").eq(0).addClass()



// 点击span变换图片和样式
var cd = $(".lunbotu>ul>li").length
var n =0
$(".circle>span").click(function(){
    var index = $(this).index()
    $(this).addClass("orange").siblings().removeClass("orange")
    $(".lunbotu>ul>li").eq(index).fadeIn(500).siblings().fadeOut(500)
     n= index;
})
// 图片自动轮播
var timer =setInterval(autoNext,3000);
function autoNext(){
    n++;
    if(n==cd){
        n=0;
    }
    $(".circle>span").eq(n).addClass("orange").siblings().removeClass("orange")
    $(".lunbotu>ul>li").eq(n).fadeIn(500).siblings().fadeOut(500)
}

// 鼠标移入lunbotu轮播停止
$(".banner2").mouseover(function(){
    clearInterval(timer)
    $(".jingling1").show()
    $(".jingling2").show()
})
// 鼠标移出lunbotu轮播停止
$(".banner2").mouseout(function(){
    timer =setInterval(autoNext,3000);
    $(".jingling1").hide()
    $(".jingling2").hide()
})
// 左按钮
$(".jingling1").click(function(){
    n--
    if(n<0){
        n=cd-1
    }
    $(".circle>span").eq(n).addClass("orange").siblings().removeClass("orange")
    $(".lunbotu>ul>li").eq(n).fadeIn(500).siblings().fadeOut(500)
})
// 右按钮
$(".jingling2").click(function(){
    n++
    if(n==cd){
        n=0;
    }
    $(".circle>span").eq(n).addClass("orange").siblings().removeClass("orange")
    $(".lunbotu>ul>li").eq(n).fadeIn(500).siblings().fadeOut(500)
})




}



// 全部商品分类的一级分类
let fenlei = async()=>{
    let {result} = await myAjax({
        url:"http://www.ujiuye.tech:3000/api/category/first"
    })  
    let html = template("fenlei",result)
    $("#yiji").html(html)



        // 全部商品分类移入显示二级菜单
    $(".banner1 .li1").mouseover(function(){
        $("#yiji").addClass("show")
    })
    $(".banner1 .li1").mouseout(function(){
        $("#yiji").removeClass("show")
    })
}

// 底部其他版块（八个）
let peishi = async()=>{
    let {result}= await myAjax({
        url:"http://localhost:3002/api/home"
    })
    // console.log(result);
    let html = template("xiangqing3",result)
    $(".bigcon").html(html)
}


// 限时抢购
    let xianshi = async()=>{
        let{result} =await myAjax({
            url:"http://localhost:3002/api/flash"   
        })
        // console.log(result);
        // console.log(result.data);
        
        let data = result.data
        // console.log(data);
      
        let x = (Object.values(data[0]))
        let a = (Object.values(x[0]))
        let tm =x[1]
 
        let y = (Object.values(data[1]))
        let b = (Object.values(y[0]))
        let ti =y[1]

        let result1 = [{aa:a,te:tm,p:"正在疯抢"},{aa:b,te:ti,p:"即将开抢"}]
        // console.log(result1);
        // 时间渲染
        let html1 =template("xian_shi1",{result1})
        $(".hot1_topRight").html(html1)
        $(".qiehuan").eq(0).addClass("j")
        
        // 内容渲染
       let html =template("xian_shi",{result1})
        $(".hot1_bottommmmm").html(html)
        $(".hot1_bottom").eq(0).addClass("bottom1")



        $(".qiehuan").click(function(){
            let index =$(this).index()
            $(this).addClass("j").siblings().removeClass("j")
            $(".hot1_bottom").eq(index).show().siblings().hide()
        })


        setInterval(show,1000)
        function show(){
            let now = new Date();
            let target = new Date();

            let tar = Number($(".qiehuan").eq(1).text().substring(0,2))
            
            target.setHours(tar);
            target.setMinutes(00);
            target.setSeconds(00);

            let miao = add(parseInt((target - now)/1000))
            // console.log(miao);
            let hour = add(parseInt(miao/3600))
            let mis = add(parseInt(miao%3600/60))
            let sec = add(parseInt(miao%60))

           $(".hot1_topLeft>.s2").eq(0).text(hour);
           $(".hot1_topLeft>.s2").eq(1).text(mis);
           $(".hot1_topLeft>.s2").eq(2).text(sec);
  
        }

        function add(value){
            return value<10?'0'+value:value
        }







}


//排行榜
let paihangbang = async()=>{
    let {result} = await myAjax({
        url:"http://localhost:3002/api/ranking"
    })  
    //  console.log(result);
    let htmla= template("paihang1",result)
    let htmlb= template("paihang2",result)


    $(".leftBottom1").html(htmla)
    $(".leftBottom2").html(htmlb)
    $(".leftBottom1>ul>li").eq(0).addClass("bg")

    // 实现选项卡效果
    $(".leftBottom1>ul>li").click(function(){
        let index = $(this).index()
        $(this).addClass("bg").siblings().removeClass("bg")
        $(".leftBottom2>ul").eq(index).show().siblings().hide()
    })
    
}

// 热门搜索关键词
let resou = async()=>{
    let {result} = await myAjax({
        url:"http://localhost:3002/api/hot"
    })
    let html = template("rsgjc",result)
    $(".reci").html(html)

    $(".reci span").last().remove()

}



init()




// 右下角回到顶部
$(window).scroll(function(){
    var top = $(window).scrollTop()
    if(top>=2000){
        $("#back").fadeIn(1000)
    }else{
        $("#back").fadeOut(1000)
    }
    
   })
$("#back").click(function(){
    $("html").animate({
        "scrollTop":0
    },2000,"linear")
})
