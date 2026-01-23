// // Scenario
// // You are working as a backend intern. Your manager asks you to build a command-line File Manager that can perform basic file operations.
// // Tasks
// // Create a Node.js program that supports the following commands:
// // Read a file
// // Write content to a file
// // Append logs to a file
// // Copy a file
// // Delete a file
// // List files inside a directory
// //  Constraints
// // Use asynchronous fs methods
// // Handle errors properly (ENOENT, EACCES)
// // Use process.argv for input


const fs=require("fs");
const path=require("path");
const command=process.argv[2];

function handleError(err){
    if(err.code==="ENOENT"){
        console.error("error");
        return;
    }
    else if(err.code==="EACCES"){
        console.error("permission denied");
        return;
    }
    else{
        console.error("error",err.message);
    }
}


//asuynchronous fs methods




// switch(command){
//     case"read":{
//         const filePath=process.argv[3];
//         fs.readFile(filePath,"utf-8",(err,data)=>{
//             if(err){
//                 handleError(err);
//             }
//             else{
//                 console.log(data);

//             }
//         });
//         break;
//     }
//     case"write":{
//         const filePath=process.argv[3];
//         const content=process.argv[4];
//         fs.writeFile(filePath,content,"utf-8",(err)=>{
//             if(err){
//                 handleError(err);
//             }
//             else{
//                 console.log("write ");

//             }
//         });
//         break;
//     }
//     case'append':{
//         const filePath=process.argv[3];
//         const log=process.argv[4];
//         fs.appendFile(filePath,log,"utf-8",(err)=>{
//             if(err){
//                 handleError(err);
//             }
//             else{
//                 console.log("append ");
//             }
//         });
//         break;
//     } 
//     case"copy":{
//         const sourcePath=process.argv[3];
//         const destPath=process.argv[4];
//         fs.copyFile(sourcePath,destPath,(err)=>{
//             if(err){
//                 handleError(err);
//             }
//             else{
//                 console.log("copy ");
//             }
//         });
//         break;

//     }
//     case"delete":{
//         const filePath=process.argv[3];
//         fs.unlink(filePath,(err)=>{
//             if(err){
//                 handleError(err);
//             }
//             else{
//                 console.log("delete ");
//             }
//         });
//         break;
//     }
//     case"list":{
//         const dirPath=process.argv[3];
//         fs.readdir(dirPath,(err,files)=>{
//             if(err){
//                 handleError(err);
//             }
//             else{
//                 console.log("files:",files);
//             }
//         });
//         break;
//     }
//     default:{
//         console.log("invalid command");
//     }
// }








// // const fs = require("fs");

// // const command = process.argv[2];

// // function handleError(err) {
// //     if (err.code === "ENOENT") {
// //         console.error("Error: File or directory not found");
// //     } else if (err.code === "EACCES") {
// //         console.error("Error: Permission denied");
// //     } else {
// //         console.error("Error:", err.message);
// //     }
// // }

// // switch (command) {

// //     case "read": {
// //         const filePath = process.argv[3];

// //         fs.readFile(filePath, "utf-8", (err, data) => {
// //             if (err) return handleError(err);
// //             console.log(data);
// //         });
// //         break;
// //     }

// //     case "write": {
// //         const filePath = process.argv[3];
// //         const content = process.argv.slice(4).join(" ");

// //         fs.writeFile(filePath, content, "utf-8", (err) => {
// //             if (err) return handleError(err);
// //             console.log("File written successfully");
// //         });
// //         break;
// //     }

// //     case "append": {
// //         const filePath = process.argv[3];
// //         const log = process.argv.slice(4).join(" ");

// //         fs.appendFile(filePath, log + "\n", "utf-8", (err) => {
// //             if (err) return handleError(err);
// //             console.log("Content appended successfully");
// //         });
// //         break;
// //     }

// //     case "copy": {
// //         const sourcePath = process.argv[3];
// //         const destPath = process.argv[4];

// //         fs.copyFile(sourcePath, destPath, (err) => {
// //             if (err) return handleError(err);
// //             console.log("File copied successfully");
// //         });
// //         break;
// //     }

// //     case "delete": {
// //         const filePath = process.argv[3];

// //         fs.unlink(filePath, (err) => {
// //             if (err) return handleError(err);
// //             console.log("File deleted successfully");
// //         });
// //         break;
// //     }

// //     case "list": {
// //         const dirPath = process.argv[3];

// //         fs.readdir(dirPath, (err, files) => {
// //             if (err) return handleError(err);
// //             console.log("Files:");
// //             files.forEach(file => console.log(file));
// //         });
// //         break;
// //     }

// //     default:
// //         console.log(`
// // Invalid command ❌

// // Usage:
// //  node fileManager.js read <file>
// //  node fileManager.js write <file> <content>
// //  node fileManager.js append <file> <content>
// //  node fileManager.js copy <source> <destination>
// //  node fileManager.js delete <file>
// //  node fileManager.js list <directory>
// // `);
// // }
