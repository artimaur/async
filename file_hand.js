const fs=require('fs-extra');
const path=require("path");
const fileName='test.txt';
const filepath=path.join(__dirname,fileName);
console.log(__dirname);
const writefile=fs.writeFileSync(filepath,"this is the initial data",'utf-8');
console.log(writefile);


//const readfile=fs.readFileSync(filepath,"utf-8");
//console.log(readfile);
//console.log(appendata);

//const deletefile=fs.unlinkSync(filepath);
//console.log(deletefile);


newfilename="updatefile.txt";
const newfilepath=path.join(__dirname,newfilename);
const renamefile=fs.renameSync(filepath,newfilepath);
console.log(newfilepath);
