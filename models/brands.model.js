// Author & Email: sysqua@hotmail.com
// Purpose: Manage the admin model and its functionalities.
// Date: 19 Aug 2020

const con = require("../helper/db.js");

// constructor
const Brands = function(brand) {
  this.brand_name = brand.brand_name;
};

Brands.create = (newBrand, result) => {
  con.query("INSERT INTO tbl_brands SET ?", newBrand, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created brand: ", { id: res.insertId, ...newBrand });
    result(null, { id: res.insertId, ...newBrand });
  });
};

Brands.findById = (brand_id, result) => {
  con.query(`SELECT * FROM tbl_brands WHERE brand_id = ${brand_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found brand: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Brands.getAll = result => {
  con.query("SELECT * FROM tbl_brands", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("brands: ", res);
      result(null, res);
    });
};

Brands.updateById = (id, brand, result) => {
  con.query(
    "UPDATE tbl_brands SET brand_name = ? WHERE brand_id = ?",
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

Brands.remove = (id, result) => {
  con.query("DELETE FROM tbl_brands WHERE brand_id = ?", id, (err, res) => {
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

    console.log("deleted brand with brand_id: ", id);
    result(null, res);
  });
};

module.exports = Brands;