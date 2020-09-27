
let init = ()=>{
    firstRequest()
    initEvent()
    shopwindow()
}


// 一级，二级，三级分类开始
let initEvent=()=>{
    $("#first").on("click","li",firstClick);
    $("#second").on("click","li",secondClick);
    $("#third").on("click","li",thirdClick)
}

let firstRequest = async ()=>{   
    let {result} = await myAjax({url:"http://localhost:3002/api/first"});
    let data = result.data
    // console.log(data);
    let html = template("firstTemp",{data,activeIndex: 0})  
    $("#first").html(html)
    let first_id = data[0].first_id;
    secondRequest(first_id)

}


let secondRequest = async (first_id)=>{
    let {result} = await myAjax({ url: "http://localhost:3002/api/second", data: { first_id}});
    let data = result.data
    let html = template("secondTemp",{data,activeIndex:0});
    $("#second").html(html)
    let second_id = data[0].second_id;
    thirdRequest(second_id)
  }

  let thirdRequest = async (second_id)=>{
    let {result} = await myAjax({ url: "http://localhost:3002/api/third", data: { second_id}});
    let data = result.data
    let html = template("thirdTemp", { data,activeIndex:0 });
    $("#third").html(html)
    let third_id = data[0].thired_id
    goodList(third_id)
  }

  let goodList = async (third_id)=>{
    let {result} = await myAjax({ url: "http://localhost:3002/api/goodslist", data: { third_id } });
    let data = result.data
    // console.log(data);

    let html = template("goodsListTemp",{data});
    $("#goodsList").html(html)
  }
  
  let firstClick = function(){
     $(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
     let first_id = $(this).data("id");
     secondRequest(first_id)
  }

  let secondClick = function(){
    $(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
    let second_id = $(this).data("id");
    thirdRequest(second_id)
  }
  
  let thirdClick = function(){
    $(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
    let third_id = $(this).data("id");
    goodList(third_id)
  }




//商品橱窗之商品推荐  
let shopwindow =async ()=>{
    let {result} = await myAjax({url:"http://localhost:3002/api/shopwindow"})
    // console.log(result);
    let html = template("shopwindowTemp",result)
    $("#shopwindow").html(html)
}

init()