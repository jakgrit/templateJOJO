const Login = require('../models/User');

module.exports = {
    login : async (req, res) => {

        let {
            user, password
        } = req.body;
        console.log(user);
        
        let LoginData = await Login.findOne({
            user : user,
            password : password
        })

        if(LoginData){
            if(LoginData.doctype == "admin"){
                return res.render('admin');
            }else if(LoginData.doctype == "manager"){
                return res.render('manager');
            }else{
                return res.render('employee');
            }
        }else{
            return res.render('notfound');
        }
    },
    addUser : async (req, res) => {
        let login = new Login({
            employee_id : req.body.employee_id,
            name : req.body.name,
            doctype : req.body.doctype,
            user : req.body.user,
            password : req.body.password,
            salary : req.body.salary
        });
        login.save();
        return res.json(login);
    }
}