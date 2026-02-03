const expresss=require('express');
const app=expresss();
const port=3000;
app.use(expresss.json());
const credentials={ }
app.post('/auth/register', async(req,res)=>{
    const data =req.body;
    const {username,password}=data;
    if(!username || !password){
        return res.status(400).send("Username and password are required");
    }
    if(credentials[username]){
        return res.status(409).send("Username already exists");
    }
    if(password.length<6){
        return res.status(400).send("Password must be at least 6 characters long");
    }
    password=await bcrypt.hash(password,10);
    if(!/[A-Z]/.test(password)){
        return res.status(400).send("Password must contain at least one uppercase letter");
    }
    if(!/[0-9]/.test(password)){
        return res.status(400).send("Password must contain at least one number");
    }   
    credentials[username]=password;
    return res.status(201).send("User registered successfully");
});
app.post('/auth/login', async(req,res)=>{
    const data=req.body;
    const {username,password}=data;
    if(!username || !password){
        return res.status(400).send("Username and password are required");
    }
    const storedPassword=credentials[username];
    if(!storedPassword || storedPassword!==password){
        return res.status(401).send("Invalid username or password");
    }
    return res.status(200).send("Login successful");
});

app.post('/auth/check-password', async(req,res)=>{
    const data=req.body;
    const {username,password}=data;
    if(!username || !password){
        return res.status(400).send("Username and password are required");
    }
    const storedPassword=credentials[username];
    if(!storedPassword){
        return res.status(404).send("User not found");
    }
    if(storedPassword===password){
        return res.status(200).send("Password is correct");
    }else{
        return res.status(401).send("Password is incorrect");
    }
});
app.listen(port,()=>{
    console.log(`Server listening on port https://localhost:${port}`);
    console.log("server started");

});
