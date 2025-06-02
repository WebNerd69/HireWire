import mongoose from "mongoose";
const jobApplicationSchema = new mongoose.Schema({
     jobId:{type:String,required:true},
     userId:{type:String,required:true},
     userName:{type:String,required:true},
     userResume:{type:Object,required:true},
     createdAt:{type:Date,default:Date.now},
     updatedAt:{type:Date,default:Date.now},
     status:{type:String,default:"Applied"}
     
},{minimize:false})

const jobApplicationModel = mongoose.models.jobApplications || mongoose.model("jobApplications",jobApplicationSchema)
export default jobApplicationModel;