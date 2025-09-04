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
app.use((err,req,res,next)=>{
        console.error(err.stack);
        res.status(500).json({error:"something went wrong"});
        });
app.get("/try",async(req,res)=>{
    //console.log(req);
    try{
        let result=await db.query("select * from corses");
        res.json(result);
    }
    catch(error){
      res.status(500).json({error:"database error",details:"error.message"});
    }  
    })
app.listen(3000, () =>{
     console.log("Server started on port 3000")});