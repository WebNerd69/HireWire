import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{type:String,required:true},
     middleName:{type:String},
     lastName:{type:String},
     email:{type:String,required:true,unique:true},
     password:{type:String,required:true},
     resume:{type:Object},
     appliedJobs:{type:Array},
     phone:{type:String},
     address:{type:String},
     country:{type:String},
     state:{type:String},
     district:{type:String},
     
     
},{minimize:false , strict:false})

const userModel = mongoose.models.users || mongoose.model("users",userSchema)
export default userModel;