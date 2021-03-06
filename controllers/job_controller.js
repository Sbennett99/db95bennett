var Job = require('../models/job'); 
 
// List of all Jobs 
exports.job_list = async function(req, res) { 
    try{ 
        thejobs = await Job.find(); 
        res.send(thejobs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// for a specific Job. 
exports.job_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Job.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}
 
// Handle Job create on POST. 
exports.job_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Job(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"job_title":"goat", "pay":12, "isHourly":"large"} 
    document.job_title = req.body.job_title; 
    document.pay = req.body.pay; 
    document.isHourly = req.body.isHourly; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

 
// Handle Job delete form on DELETE. 
exports.job_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Job.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Job update form on PUT. 
exports.job_update_put =  async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Job.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.job_title)  
               toUpdate.job_title = req.body.job_title; 
        if(req.body.pay) toUpdate.pay = req.body.pay; 
        if(req.body.isHourly) toUpdate.isHourly = req.body.isHourly; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
        
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);

    } 
}; 







// New Controllers A12 -----------------------------------------------

// Handle a show all view 
exports.job_view_all_Page = async function(req, res) { 
    try{ 
        thejobs = await Job.find(); 
        res.render('job', { title: 'Job Search Results', results: thejobs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 




// Handle a show one view with id specified by query 
exports.job_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Job.findById( req.query.id) 
        res.render('jobdetail', { title: 'Job Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a job. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.job_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('jobcreate', { title: 'Job Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a job. 
// query provides the id 
exports.job_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Job.findById(req.query.id) 
        res.render('jobupdate', { title: 'Job Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.job_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Job.findById(req.query.id) 
        res.render('jobdelete', { title: 'Job Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 