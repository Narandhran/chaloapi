// Author & Email: sysqua@hotmail.com
// Purpose: Manage the blood group model and its functionalities.
// Date: 09 Sep 2020

const con = require("../helper/db.js");

// constructor
const BloodGroup = function(blood) {
  this.blood_group = blood.blood_group;
};

BloodGroup.create = (newBG, result) => {
    con.query("INSERT INTO tbl_blood_group SET ?", newBG, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created a blood group: ", { id: res.insertId, ...newBG });
      result(null, { id: res.insertId, ...newBG });
    });
  };
  

BloodGroup.getAll = result => {
  con.query("SELECT * FROM tbl_blood_group", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("blood groups: ", res);
      result(null, res);
    });
};

module.exports = BloodGroup;