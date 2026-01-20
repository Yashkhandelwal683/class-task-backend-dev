// Scenario
// You are working as a backend intern. Your manager asks you to build a command-line File Manager that can perform basic file operations.
// Tasks
// Create a Node.js program that supports the following commands:
// Read a file
// Write content to a file
// Append logs to a file
// Copy a file
// Delete a file
// List files inside a directory
//  Constraints
// Use asynchronous fs methods
// Handle errors properly (ENOENT, EACCES)
// Use process.argv for input


const fs=require("fs");
const path=require("path");
const command=process.argv[2];
switch(command){
    case"read":{
        const filePath=process.argv[3];
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                console.error("error",err.message);

            }
            else{
                console.log(data);

            }
        });
        break;
    }
    case"write":{
        const filePath=process.argv[3];
        const content=process.argv[4];
        fs.writeFile(filePath,content,"utf-8",(err)=>{
            if(err){
                console.error("error",err.message);
            }
            else{
                console.log("write ");

            }
        });
        break;
    }
    case'append':{
        const filePath=process.argv[3];
        const log=process.argv[4];
        fs.appendFile(filePath,log,"utf-8",(err)=>{
            if(err){
                console.error("error",err.message);
            }
            else{
                console.log("append ");
            }
        });
        break;
    } 
    case"copy":{
        const sourcePath=process.argv[3];
        const destPath=process.argv[4];
        fs.copyFile(sourcePath,destPath,(err)=>{
            if(err){
                console.error("error",err.message);
            }
            else{
                console.log("copy ");
            }
        });
        break;

    }
    case"delete":{
        const filePath=process.argv[3];
        fs.unlink(filePath,(err)=>{
            if(err){
                console.error("error",err.message);
            }
            else{
                console.log("delete ");
            }
        });
        break;
    }
    case"list":{
        const dirPath=process.argv[3];
        fs.readdir(dirPath,(err,files)=>{
            if(err){
                console.error("error",err.message);
            }
            else{
                console.log("files:",files);
            }
        });
        break;
    }
    default:{
        console.log("invalid command");
    }
}