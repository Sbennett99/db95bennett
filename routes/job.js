var express = require('express'); 
const job_controller = require('../controllers/job_controller'); 
var router = express.Router(); 

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl;
    res.redirect("/login"); 
  } 
 
/* GET jobs */ 
router.get('/', job_controller.job_view_all_Page); 


/* GET detail job page */ 
router.get('/detail', job_controller.job_view_one_Page); 


/* GET create job page */ 
router.get('/create',secured, job_controller.job_create_Page); 

/* GET create update page */ 
router.get('/update',secured, job_controller.job_update_Page); 

router.get('/delete',secured, job_controller.job_delete_Page); 

module.exports = router; 
