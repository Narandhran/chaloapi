// Author & Email: sysqua@hotmail.com
// Purpose: Manage the admin model and its functionalities.
// Date: 20 Aug 2020

const con = require("../helper/db.js");

// constructor
const Admins = function(objAdmin) {
    this.first_name = objAdmin.first_name;
    this.last_name = objAdmin.last_name;
    this.username = objAdmin.username;
    this.password = objAdmin.password;
    this.email = objAdmin.email;
    this.mobile_number = objAdmin.mobile_number;
    this.role_id = objAdmin.role_id;
    this.created_datetime = objAdmin.created_datetime;
    this.active = objAdmin.active;
};


Admins.create = (newAdmin, result) => {
  con.query("INSERT INTO tbl_admin SET ?", newAdmin, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new admin user: ", { id: res.insertId, ...newAdmin });
    result(null, { id: res.insertId, ...newAdmin });
  });
};

Admins.findById = (admin_id, result) => {
  con.query(`SELECT * FROM tbl_admin WHERE admin_id = ${admin_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the admin user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Admins.getAll = result => {
  con.query("SELECT * FROM tbl_admin", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("admin users: ", res);
      result(null, res);
    });
};

Admins.updateById = (id, brand, result) => {
  con.query(
    "UPDATE tbl_admin SET first_name = ?, last_name = ?, username = ?, password = ?, email= ?, mobile_number =? , role_id =?, active = ? WHERE admin_id = ?",
    [brand.brand_name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Brand with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated brand: ", { id: id, ...brand });
      result(null, { id: id, ...brand });
    }
  );
};

Admins.remove = (id, result) => {
  con.query("DELETE FROM tbl_admin WHERE admin id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found brand with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted admin with admin id: ", id);
    result(null, res);
  });
};

//Login Functionalities
//http://coding-karma.com/2017/08/12/creating-login-registration-using-nodejs-mysql/

// module.exports.authenticate=function(req,res){
//   var email=req.body.email;
//   var password=req.body.password;
 
 
//   connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
//     if (error) {
//         res.json({
//           status:false,
//           message:'there are some error with query'
//           })
//     }else{
     
//       if(results.length >0){
// decryptedString = cryptr.decrypt(results[0].password);
//           if(password==decryptedString){
//               res.json({
//                   status:true,
//                   message:'successfully authenticated'
//               })
//           }else{
//               res.json({
//                 status:false,
//                 message:"Email and password does not match"
//                });
//           }
        
//       }
//       else{
//         res.json({
//             status:false,    
//           message:"Email does not exits"
//         });
//       }
//     }
//   });
// }



module.exports = Admins;