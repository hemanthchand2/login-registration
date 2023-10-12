const mongoose=require('mongoose')


const AccountsSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const AccountsModel=mongoose.model("accounts",AccountsSchema)
module.exports=AccountsModel