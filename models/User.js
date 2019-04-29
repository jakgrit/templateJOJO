const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const mst_employee = new Schema({
    employee_id : {
        type : String,
        lowercase : true
    },
    name : {
        type : String,
        lowercase : true
    },
    doctype : {
        type : String,
        lowercase : true
    },
    user : {
        type : String,
        lowercase : true
    },
    password : {
        type : String,
        lowercase : true
    },
    salary : {
        type : String,
        lowercase : true
    }
});

module.exports = mongoose.model('mst_employee',mst_employee,'mst_employee');