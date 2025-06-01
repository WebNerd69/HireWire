import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{type:String,required:true},
     email:{type:String,required:true,unique:true},
     password:{type:String,required:true},
     resume:{type:Object },
     appliedJobs:{type:Array,default:[]},
     phone:{type:String},
     address:{type:String},
     country:{type:String},
     state:{type:String},
     district:{type:String},
     
     
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user",userSchema)
export default userModel;