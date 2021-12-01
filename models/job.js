const mongoose = require("mongoose") 
const jobSchema = mongoose.Schema({ 
 job_title: {
    type: String,
    required: true
 }, 
 pay: {
    type: Number,
    validate: {
        validator: function(){
            if(this.isHourly == true){
                return this.pay > 10
            }
            else{
                return this.pay > 21000
            }
        },
        message: 'Not above Missouri minimum wage sir'
    },
    required: true
 },
 isHourly : {
    type: Boolean,
    required: true
 }

}) 

 
module.exports = mongoose.model("Job", 
jobSchema) 