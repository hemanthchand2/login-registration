const express= require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const AccountsModel=require('./models/accounts')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/accounts");

app.post("/login",(req,res)=>{
    const{email,password}=req.body
    AccountsModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("Account not found please check your Email and Password")
        }
    })
})

app.post('/register',(req,res)=>{
    AccountsModel.create(req.body)
    .then(accounts=>res.json(accounts))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running")
})
