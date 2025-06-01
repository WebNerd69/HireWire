import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
     companyName:{type:String,required:true},
     jobTitle:{type:String,required:true},
     jobDescription:{type:String,required:true},
     jobLocation:{type:String,required:true},
     jobType:{type:String,required:true},
     jobSalary:{type:String,required:true},
     jobCategory:{type:String,required:true},
     jobTags:{type:Array,required:true},
     jobCreatedAt:{type:Date,default:Date.now},
     jobUpdatedAt:{type:Date,default:Date.now},
     applicants:{type:Array,default:[]},
     author:{type:String,required:true}
     
})
const jobModel = mongoose.model.jobs || mongoose.model("jobs",jobSchema)
export default jobModel;