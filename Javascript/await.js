async function myDisplay(){
    let myPromise=new Promise(function(resolve){
        resolve("Hello");
    });
    document.getElementById("demo").innerHTML=await myPromise;
}