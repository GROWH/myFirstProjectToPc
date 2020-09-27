function myAjax({
    type="get",
    url,
    data={}
}){

    return new Promise((resolve,reject)=>{
        $.ajax({
            type,
            url,
            data,
            success(res){
                resolve(res);
                
            }

        })
    })
}
