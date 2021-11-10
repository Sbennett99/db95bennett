var express = require('express'); 
const job_controlers= require('../controllers/job_controller'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', job_controlers.job_view_all_Page ); 

module.exports = router; 
