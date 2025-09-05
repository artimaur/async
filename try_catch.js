const mysql = require("mysql2/promise");
const express = require("express");
//const { Request } = require("undici-types");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",      
  database: "school_db" 
});

app.get("/try",async(req,res)=>{
    //console.log(req);
    try{
        let result=await db.query("select * from corses");
        res.json(result);
    }
    catch(error){
      res.status(500).json({error:"database error",details:error.message});
    }  
    })


//centrelized error 
const asynchandler=(fn)=>(req,res,next)=>{
  Promise.resolve(fn(req,res,next))
  .catch(next);
};
app.get("/central",asynchandler(async(req,res)=>{
  console.log("in ghcgfc")
throw new Error ("manual error test");
  const rows=await db.query("select * from students");

  res.json(rows);
})
);


///custom error 
class AppError extends Error{
  constructor (message,statusCode){
    super(message);
    this.statusCode=statusCode;
  }
}
app.get("/custom",(req,res,next)=>{
//  console.log(req);
  return next(new AppError("resource not found",404));
})

app.use((err,req,res,next)=>{
        console.error("hgcfchcfhfc",err.message);
        res.status(500).json({error:"something went wrong"});
        });

        
app.listen(3000, () =>{
     console.log("Server started on port 3000")});