const myPromise=new Promise(function (myResolve,myReject){
    setTimeout(function(){
        myResolve("I LOVE YOU !!!");
    },3000);
});