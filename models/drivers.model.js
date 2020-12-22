// Author & Email: sysqua@hotmail.com
// Purpose: Manage the customers model and its functionalities.
// Date: 10 Sep 2020

const con = require("../helper/db.js");

// constructor
const Drivers = function(objDriver) {
    this.first_name = objDriver.first_name;
    this.last_name = objDriver.last_name;
    this.mobile_number = objDriver.mobile_number;
    this.gender = objDriver.gender;
    this.blood_group_id = objDriver.blood_group_id;
    this.country_id = objDriver.country_id;
    this.city = objDriver.city;
    this.language_id = objDriver.language_id;
    this.default_range = 1000;
    this.registered_date = objDriver.registered_date;
};


Drivers.create = (newDriver, result) => {
  con.query("INSERT INTO tbl_drivers SET ?", newDriver, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new driver : ", { id: res.insertId, ...newDriver });
    result(null, { id: res.insertId, ...newDriver });
  });
};

Drivers.findById = (driver_id, result) => {
  con.query(`SELECT * FROM tbl_drivers WHERE driver_id = ${driver_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the driver: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Drivers.getByMobileNumber = (mobile_number, result) => {
  var sql =`Select * from tbl_drivers d
	  inner join tbl_languages l on
    d.language_id = l.language_id
    left outer join tbl_blood_group bg on 
    bg.blood_group_id = d.blood_group_id
    Where l.active = 1 and d.mobile_number = ${mobile_number}`;

  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the driver: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Drivers.getAll = result => {
  con.query("SELECT * FROM tbl_drivers", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("drivers: ", res);
      result(null, res);
    });
};

module.exports = Drivers;