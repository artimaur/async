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
app.get("/getvalue",async(req,res)=>{
    console.log(req.body);
    try{
    const [rows] = await db.query("SELECT * FROM courses");
    res.send(rows);
    }
    catch (err) { res.status(500).send({ error: err.message }); }
});

app.listen(3000, () =>{
     console.log("Server started on port 3000")});