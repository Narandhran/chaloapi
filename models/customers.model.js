// Author & Email: sysqua@hotmail.com
// Purpose: Manage the customers model and its functionalities.
// Date: 20 Aug 2020

const con = require("../helper/db.js");

// constructor
const Customers = function(objCustomers) {
    this.first_name = objCustomers.first_name;
    this.last_name = objCustomers.last_name;
    this.mobile_number = objCustomers.mobile_number;
    this.gender = objCustomers.gender;
    this.blood_group_id = objCustomers.blood_group_id;
    this.country_id = objCustomers.country_id;
    this.city = objCustomers.city;
    this.language_id = objCustomers.language_id;
    this.default_range = 1000;
    this.registered_date = objCustomers.registered_date;
};


Customers.create = (newCustomer, result) => {
  con.query("INSERT INTO tbl_customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new customer : ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customers.findById = (customer_id, result) => {
  con.query(`SELECT * FROM tbl_customers WHERE customer_id = ${customer_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customers.findbyMobileNumber = (mobile_number, result) => {
  var sql =`Select * from tbl_customers c
	  inner join tbl_languages l on
    c.language_id = l.language_id
    left outer join tbl_blood_group bg on 
    bg.blood_group_id = c.blood_group_id
    Where l.active = 1 and c.mobile_number = ${mobile_number}`;

  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customers.getAll = result => {
  con.query("SELECT * FROM tbl_customers", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("customers: ", res);
      result(null, res);
    });
};

module.exports = Customers;