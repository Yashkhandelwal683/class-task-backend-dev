const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const port = 7777;

// // Fake DB
const credentials = [];


// // // ✅ REGISTER
// // app.post("/auth/register", async (req, res) => {

// //     const { email, password } = req.body;

// //     // validation
// //     if (!email || !password) {
// //         return res.status(400).send("Email and Password required");
// //     }

// //     // check existing user
// //     const existingUser = credentials.find(
// //         (user) => user.email === email
// //     );

// //     if (existingUser) {
// //         return res.status(400).send("User already exists");
// //     }

// //     // hash password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     credentials.push({
// //         email,
// //         password: hashedPassword
// //     });

// //     res.status(201).send("Registration Successful");
// // });


// // // ✅ LOGIN
// // app.post("/auth/login", async (req, res) => {

// //     const { email, password } = req.body;

// //     const user = credentials.find(
// //         (u) => u.email === email
// //     );

// //     if (!user) {
// //         return res.status(401).send("Invalid Credentials");
// //     }

// //     // compare password
// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch) {
// //         return res.status(401).send("Invalid Credentials");
// //     }

// //     res.send({
// //         message: "Login Successful",
// //         user: email
// //     });
// // });
// // password must be uppercase , lowercase, number and special character and minimum 8 characters
// const passwordValidation = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(password);
// }
// app.post("/auth/register", async (req, res) => {
    
//     const { email, password } = req.body;
//     // validation
//     if (!email || !password) {
//         return res.status(400).send("Email and Password required");
//     }
    
//     if (!passwordValidation(password)) {
//         return res.status(400).send("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character");
//     }
//     // check existing user
//     const existingUser = credentials.find(
//         (user) => user.email === email
//     );
    
//     if (existingUser) {
//         return res.status(400).send("User already exists");
//     }
    
//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     credentials.push({
//         email,
//         password: hashedPassword
//     });
    
//     res.status(201).send("Registration Successful");
// });
app.post("/auth/register", async (req, res) => {

try {

    const { email, password } = req.body || {};

    if (!email || !password) {
        console.log("Registration Failed ❌ Missing fields");
        return res.status(400).json({
            success:false,
            message:"Email and Password required"
        });
    }

    if (!passwordValidation(password)) {

        console.log("Weak Password Attempt ❌");

        return res.status(400).json({
            success:false,
            message:"Password must contain uppercase, lowercase, number and special character"
        });
    }

    const existingUser = credentials.find(
        user => user.email === email
    );

    if (existingUser) {

        console.log("User already exists ❌");

        return res.status(400).json({
            success:false,
            message:"User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    credentials.push({
        email,
        password: hashedPassword
    });

    console.log("✅ Registration Successful for:", email);

    res.status(201).json({
        success:true,
        message:"Registration Successful"
    });

} catch(error){

    console.log("SERVER ERROR:", error);

    res.status(500).json({
        success:false,
        message:"Internal Server Error"
    });
}

});
