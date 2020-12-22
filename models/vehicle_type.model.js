// Author & Email: sysqua@hotmail.com
// Purpose: Manage the vehicle type model and its functionalities.
// Date: 19 Aug 2020

const con = require("../helper/db.js");

// constructor
const VType = function(vtype) {
  this.vehicle_type = vtype.vehicle_type;
};

VType.getAll = result => {
  con.query("SELECT * FROM tbl_vehicle_type", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Vehicle type: ", res);
      result(null, res);
    });
};

module.exports = VType;