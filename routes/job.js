var express = require('express'); 
const job_controller = require('../controllers/job_controller'); 
var router = express.Router(); 
 
/* GET jobs */ 
router.get('/', job_controller.job_view_all_Page); 


/* GET detail job page */ 
router.get('/detail', job_controller.job_view_one_Page); 


/* GET create job page */ 
router.get('/create', job_controller.job_create_Page); 

/* GET create update page */ 
router.get('/update', job_controller.job_update_Page); 

router.get('/delete', job_controller.job_delete_Page); 

module.exports = router; 
