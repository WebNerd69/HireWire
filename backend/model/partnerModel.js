import mongoose from "mongoose"

const partnerSchema = new mongoose.Schema({
     name:{type:String,required:true},
     email:{type:String,required:true,unique:true},
     password:{type:String,required:true},
     companyName:{type:String,required:true},
     
},{minimize:false})

const partnerModel = mongoose.model.partner || mongoose.model("partner",partnerSchema)
export default partnerModel;
