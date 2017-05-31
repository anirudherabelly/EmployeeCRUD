// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our employee model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Employee', {
    id : {type : Number, required : true},
    name : {type : String, default: ''},
    email : {type : String, default : ''},
    dob : {type : Date, default:Date.now},
    department : {type : String, default: ''},
    gender : {type : String, default: 'M'},
    age : {type : Number, default: 0}
});