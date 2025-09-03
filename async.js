async function myfun(){
    try{
        console.log("fetch data is starting here...");
        const data =new Promise((resolve,reject)=>{
            setTimeout(()=>{
            let success=true;
            if(success){
                resolve("find data sucessfull!");
            }
            else{
                reject("ERROR:data is not find");
            }
            },5000);
 })
         const result =await data;
         console.log(result);
}
catch {
    console.log(error);
}
    console.log("process complete");     

       
    }
myfun();