// Author & Email: sysqua@hotmail.com
// Purpose: Manage the customers model and its functionalities.
// Date: 10 Sep 2020

const con = require("../helper/db.js");

// constructor
const Vehicles = function(objVehicle) {
    this.vehicle_type_id = objVehicle.vehicle_type_id;
    this.driver_id = objVehicle.driver_id;
    this.vehicle_registration_number = objVehicle.vehicle_registration_number;
    this.capacity = objVehicle.capacity;
    this.active = objVehicle.active;    
};


Vehicles.create = (newVehicle, result) => {
  con.query("INSERT INTO tbl_vehicles SET ?", newVehicle, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new Vehicle : ", { id: res.insertId, ...newVehicle });
    result(null, { id: res.insertId, ...newVehicle });
  });
};

Vehicles.findById = (vehicle_id, result) => {
    var sql = `select v.vehicle_id,v.vehicle_type_id, vt.vehicle_type, v.driver_id, d.first_name, d.last_name,v.vehicle_registration_number,v.capacity, v.active
    from tbl_vehicles v INNER JOIN tbl_vehicle_type vt using (vehicle_type_id) inner join tbl_drivers d using(driver_id) WHERE v.vehicle_id = ${vehicle_id}`

  con.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found the vehicle: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Vehicles.getByDriverId = (driver_id, result) => {
    var sql = `select v.vehicle_id,v.vehicle_type_id, vt.vehicle_type, v.driver_id, d.first_name, d.last_name,v.vehicle_registration_number,v.capacity, v.active
    from tbl_vehicles v INNER JOIN tbl_vehicle_type vt using (vehicle_type_id) inner join tbl_drivers d using(driver_id) WHERE v.driver_id = ${driver_id}`

    con.query(sql, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found the vehicle: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  


Vehicles.getAll = result => {
    var sql = `select v.vehicle_id,v.vehicle_type_id, vt.vehicle_type, v.driver_id, d.first_name, d.last_name,v.vehicle_registration_number,v.capacity, v.active
    from tbl_vehicles v INNER JOIN tbl_vehicle_type vt using (vehicle_type_id) inner join tbl_drivers d using(driver_id);`

    con.query(sql, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Vehicles: ", res);
      result(null, res);
    });
};

Vehicles.go_live = (id, objParam, result) => {
    con.query(
      "UPDATE tbl_vehicles SET active = ? WHERE vehicle_id = ?",
      [objParam.active, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Vehicles with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("Vehicles is live status set now: ", { id: id, ...objParam });
        result(null, { id: id, ...objParam });
      }
    );
    console.log("Vehicle status set for ride!");
  };

module.exports = Vehicles;