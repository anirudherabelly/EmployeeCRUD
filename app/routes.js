// app/routes.js

// grab the employee model we just created
var Employee = require('./models/employee');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/employees', function(req, res) {
        // use mongoose to get all employees in the database
        Employee.find(function(err, employees) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            // return all employees in JSON format
            res.json(employees); 
        });
    });

    // route to handle creating goes here (app.post)
    app.post('',function(req,res){
        Employee.push(req.employeeData,function(err){
            if(err)
                res.send(err);
        });
    })

    // route to handle delete goes here (app.delete)
    app.delete('',function(req,res){
        Employee.find({id:req.id}).remove().exec();
    })

    //route to handle editing goes here (app.put)
    app.put('',function(req,res){

    })
    
    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};