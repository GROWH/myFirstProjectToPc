$(function(){
// console.log($("#in1"));

// 全选按钮
// var tag = true
$("#in1").click(function(){
    $("table :checkbox").prop('checked',true)
})



$("#in2").click(function(){  
    $("table :checkbox").prop('checked',true)
})

// console.log($(".s6 span"));
// 点击删除按钮，删除当前行
$(".s6 span").click(function(){
    console.log( $("table tr"));
    $(this).parent().parent().remove()
})



})