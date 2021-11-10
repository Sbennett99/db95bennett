const mongoose = require("mongoose") 
const jobSchema = mongoose.Schema({ 
 job_title: String, 
 pay: Number, 
 isHourly : Boolean
}) 
 
module.exports = mongoose.model("Job", 
jobSchema) 