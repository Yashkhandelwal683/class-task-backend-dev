// // const fs=require("fs");
// // const readStream=fs.createReadStream("./sample.txt",{
// //     encoding: "utf-8",
// //     highWaterMark: 16 * 1024 // 16KB chunk size
// // });readStream.on("data", (chunk) => {
// //     console.log("📄 Read Chunk:\n", chunk);
// // });

// // readStream.on("end", () => {
// //     console.log("✅ Finished reading file");
// // });



// // / we create a file and store a data in it using write stream
// // const fs=require("fs");
// // const writeStream=fs.createWriteStream("./output.txt",{
// //     encoding: "utf-8",
// //     highWaterMark: 16 * 1024 // 16KB chunk size
// // });
// // writeStream.write("Hello GLA University\n");
// // writeStream.write("Welcome to Node.js File System Module\n");
// // writeStream.end("This is the end of the file.\n");

// // writeStream.on("finish", () => {
// //     console.log("✅ Finished writing to file");
// // });

// // writeStream.on("error", (err) => {
// //     console.error("❌ Error writing to file:", err.message);
// // }); 

// // // using pipe to read from one file and write to another file------------=-------------------=================////
// // const {Transform}=require("stream");
// // const fs=require("fs");

// // class UpperCaseTransform extends Transform {
// //    _transform(chunk, encoding, callback) {
// //        const upperChunk = chunk.toString().toUpperCase();
// //        this.push(upperChunk);
// //        callback();
// //    }
// // };
// // fs.createReadStream("./sample.txt")
// //    .pipe(new UpperCaseTransform())
// //    .pipe(fs.createWriteStream("./output.txt"));
// // ///task 4=======/////



// // ///// file copying using stream =======================================////
// const fs=require("fs");
// const readStream=fs.createReadStream("./sample.txt");
// const writeStream=fs.createWriteStream("./output.txt");
// readStream.pipe(writeStream);


// const fspromises=require("fs").promises;

// async function copyFileAsync( ){
//     try{
//         const data=await fspromises.readFile("./sample.txt");
//         await fspromises.writeFile("./output.txt",data);
//         console.log("✅ File copied successfully using async/await");
//     } catch (error) {
//         console.error("❌ Error copying file:", error.message);
//     }
// }


// Task 3 : Directory Backup & Cleanup Utility Scenario
// Your system stores user uploads. You must:
// Backup important files
// Delete old unused files automatically
// Tasks
// Create a Node.js utility that:Scans a directoryCopies files to a backup folder with timestampDeletes files older than 7 daysLogs all operations into backup.log

// Constraints
// Use fs.stat
// Handle missing directories safely
// Use promises / async-await



const fs=require("fs");
const path=require("path");

const sourceDir="./uploads";
const backupDir="./backup";
const logFilePath="./backup.log";

if(!fs.existsSync(backupDir)){
    fs.mkdirSync(backupDir,{recursive:true});
    console.log("📁 Backup directory created");
}

function logOperation(message){
    const timestamp=new Date().toISOString();
    const logMessage=`[${timestamp}] ${message}\n`;
    fs.appendFile(logFilePath,logMessage,(err)=>{
        if(err){
            console.error("❌ Error logging operation:",err.message);
        }
    });
}

function backupAndCleanup(){
    fs.readdir(sourceDir,(err,files)=>{
        if(err){
            console.error("❌ Error reading source directory:",err.message);
            return;
        }

        files.forEach((file)=>{
            const srcPath=path.join(sourceDir,file);
            const backupPath=path.join(backupDir,`${Date.now()}_${file}`);

            fs.stat(srcPath,(err,stats)=>{
                if(err){
                    console.error("❌ Error accessing source file:",err.message);
                    return;
                }

                // Backup file
                fs.copyFile(srcPath,backupPath,(err)=>{
                    if(err){
                        console.error(`❌ Error backing up ${file}:`,err.message);
                    } else {
                        console.log(`✅ Backed up: ${file}`);
                        logOperation(`Backed up: ${file}`);
                    }
                });

                // Delete files older than 7 days
                const sevenDaysInMs=7*24*60*60*1000;
                if(Date.now()-stats.mtimeMs>sevenDaysInMs){
                    fs.unlink(srcPath,(err)=>{
                        if(err){
                            console.error(`❌ Error deleting ${file}:`,err.message);
                        } else {
                            console.log(`🗑️ Deleted old file: ${file}`);
                            logOperation(`Deleted old file: ${file}`);
                        }
                    });
                }
            });
        });
    });
}

backupAndCleanup();



