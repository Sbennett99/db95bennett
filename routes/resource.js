
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api_controller'); 
var job_controller = require('../controllers/job_controller'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// Job ROUTES /// 
 
// POST request for creating a Job.  
router.post('/resource/jobs', job_controller.job_create_post); 
 
// DELETE request to delete Job. 
router.delete('/resource/jobs/:id', job_controller.job_delete); 
 
// PUT request to update Job. 
router.put('/resource/jobs/:id', 
job_controller.job_update_put); 
 
// GET request for one Job. 
router.get('/resource/jobs/:id', job_controller.job_detail); 
 
// GET request for list of all Job items. 
router.get('/resource/jobs', job_controller.job_list); 
 
module.exports = router; 