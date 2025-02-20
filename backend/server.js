const express=require('express')
const app=express()
const port=5000
const users=[
    {email:"abc@gmail.com",password:"123"},
    {email:"jenova@gmail.com",password:"abc"}
]
app.use(express.json())
app.post('/login',(req,res)=>{
try{
    const {email,password}=req.body;
    if(!email){
        return res.status(500).json({message:"Email cannot be empty"})
    }
    if(!password){
        return res.status(500).json({message:"Password cannot be empty"})
    }
    const user=users.find(user=>user.email===email)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    if(user.password!==password){
        return res.status(400).json({message:"Incorrect password"})
    }
    res.json({message:"User logged in successfully",user:user})

}catch(err){
    return res.status(400).json({message:err.message});
    
}
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})