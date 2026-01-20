// const fs=require("fs");
// const readStream=fs.createReadStream("./sample.txt",{
//     encoding: "utf-8",
//     highWaterMark: 16 * 1024 // 16KB chunk size
// });readStream.on("data", (chunk) => {
//     console.log("📄 Read Chunk:\n", chunk);
// });

// readStream.on("end", () => {
//     console.log("✅ Finished reading file");
// });



// / we create a file and store a data in it using write stream
// const fs=require("fs");
// const writeStream=fs.createWriteStream("./output.txt",{
//     encoding: "utf-8",
//     highWaterMark: 16 * 1024 // 16KB chunk size
// });
// writeStream.write("Hello GLA University\n");
// writeStream.write("Welcome to Node.js File System Module\n");
// writeStream.end("This is the end of the file.\n");

// writeStream.on("finish", () => {
//     console.log("✅ Finished writing to file");
// });

// writeStream.on("error", (err) => {
//     console.error("❌ Error writing to file:", err.message);
// }); 

// // using pipe to read from one file and write to another file------------=-------------------=================////
// const {Transform}=require("stream");
// const fs=require("fs");

// class UpperCaseTransform extends Transform {
//    _transform(chunk, encoding, callback) {
//        const upperChunk = chunk.toString().toUpperCase();
//        this.push(upperChunk);
//        callback();
//    }
// };
// fs.createReadStream("./sample.txt")
//    .pipe(new UpperCaseTransform())
//    .pipe(fs.createWriteStream("./output.txt"));
// ///task 4=======/////



// ///// file copying using stream =======================================////
const fs=require("fs");
const readStream=fs.createReadStream("./sample.txt");
const writeStream=fs.createWriteStream("./output.txt");
readStream.pipe(writeStream);



