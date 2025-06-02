import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{type:String,required:true},
     email:{type:String,required:true,unique:true},
     password:{type:String,required:true},
     resume:{type:Object, default:null },
     appliedJobs:{type:Array,default:[]},
     phone:{type:String, default:null},
     address:{type:String, default:null},
     country:{type:String, default:null},
     state:{type:String, default:null},
     district:{type:String, default:null},
     
     
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user",userSchema)
export default userModel;