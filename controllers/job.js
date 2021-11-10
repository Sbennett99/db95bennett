var Job = require('../models/job'); 
 
// List of all Jobs 
exports.job_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Job list'); 
}; 
 
// for a specific Job. 
exports.job_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Job detail: ' + req.params.id); 
}; 
 
// Handle Job create on POST. 
exports.job_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Job create POST'); 
}; 
 
// Handle Job delete form on DELETE. 
exports.job_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Job delete DELETE ' + req.params.id); 
}; 
 
// Handle Job update form on PUT. 
exports.job_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Job update PUT' + req.params.id); 
}; 