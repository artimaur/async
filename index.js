const my_promise=new Promise((resolve,reject)=>{
    console.log("promise pending:=>promise is started");
    setTimeout(()=>{
        let findData=true;
        if(findData){
            resolve("promise fullfilled");
        }
        else{
            reject("promise rejected");
        }
    },2000);
})
    .then((result) => { 
    console.log("THEN:", result);  
   // console.log("its our result");
})
 .catch((error) => { 
    console.log("CATCH:", error); 
});
