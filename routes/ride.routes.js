var express = require('express');
var router = express.Router();

const ride = require("../controllers/ride.controller.js");

// Create a new ride request
router.post("/create", ride.create);

router.post("/pasengerAccept", ride.pasengerAccept);


// Retrieve all status id and status
router.get("/status", ride.all_status);

// Retrieve all open requests
router.get("/get_requests", ride.get_all_requests);

// Retrieve all rides
router.get("/all_rides", ride.getAll);

// confirm ride with driverid, statusid
// router.put("/confirm/:ride_id", ride.confirm_ride);
router.put('/confirm/:ride_id', function (req, res) {
  try{
    return ride.confirm_ride(req,res)
  }catch(error){
    res.send(error)
  }
})


router.put('/rideAcceptedByDriver/:ride_id', function (req, res) {
  try{
    return ride.rideAcceptedByDriver(req,res)
  }catch(error){
    res.send(error)
  }
})


// Retrieve a single ride with ride_id
router.get("/get/:ride_id", ride.rideById);

// Retrieve a single ride with ride_id
//router.get("/get_ride_byradius", ride.rideBygps_radius);

// Retrieve a single ride with ride_id
router.post("/get_ride_byradius", ride.rideBygps_radius);

const con = require("../helper/db.js");
var cDateTime = require("../utils/generic.js");


router.put('/passenger_approval/:ride_id', function (req, res, next) {
  try {
    con.query(
      'UPDATE tbl_rides SET is_passenger_accept = ? where ride_id = ?',
      [req.body.isAccept, req.params.ride_id],
      function (err, result) {
        if (err) throw err;
        else {
          if (req.body.isAccept) res.send({ message: 'Accepted Successfully' })
          else res.send({ message: 'Rejected successfully' });
        }
      }
    )
  } catch (error) {
    res.status(500);
    throw Error('invalid JSON');
  }
})

router.post('/start/:ride_id', function (req, res, next) {


  try {
    con.query(
      'SELECT * FROM tbl_rides where ride_id = ?',
      [req.params.ride_id],
      function (err, result) {
        if (err) throw err;
        else {
          if (result[0].passenger_accept) {
            var sql = 'UPDATE tbl_rides SET status_id = ?, ride_start_time = ? where ride_id = ?'
            var values = [
              5,
              cDateTime.getDateTime(),
              req.params.ride_id
            ]

            con.query(sql, values, function (err, result) {
              if (err) throw err;
              console.log("Result: " + result);

              res.json({
                'status': 'Ride Started'
              });

            });
          }
          else res.status(200).send({ status: 200, message: 'Waiting for passenger approval' });
        }
      })
  } catch (e) {
    res.status(500);
    throw Error('invalid JSON');
  }
});

router.post('/coordinates/:ride_id', function (req, res, next) {
  try {
    var sql = 'insert into tbl_coordinates(ride_id,timestamp,latitude,longitude) values(?,?,?,?)'
    var values = [
      req.params.ride_id,
      cDateTime.getDateTime(),
      req.body.hasOwnProperty('latitude') ? req.body.latitude : 0,
      req.body.hasOwnProperty('longitude') ? req.body.longitude : 0
    ]

    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);

      res.json({
        'status': 'on ride'
      });

    });
  } catch (e) {
    res.status(500);
    throw Error('invalid JSON');
  }
});

// get detail product
router.get("/get_live/:ride_id", function (req, res, next) {
  try {
    var sql = 'select * from tbl_coordinates where ride_id = ? order by timestamp desc limit 1'
    var values = [
      req.params.ride_id
    ]
    console.log(sql);
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);

      res.json(result);

    });
  } catch (e) {
    res.status(500);
    throw Error('invalid JSON');
  }
});

router.post('/end/:ride_id', function (req, res, next) {
  try {
    var sql = 'UPDATE tbl_rides SET status_id = ?, ride_end_time = ? where ride_id = ?'
    var values = [
      7,
      cDateTime.getDateTime(),
      req.params.ride_id
    ]

    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
      res.json({
        'status': 'Ride Completed'
      });

    });
  } catch (e) {
    res.status(500);
    throw Error('invalid JSON');
  }
});

// get detail product
router.get("/get_coordinates/:ride_id", function (req, res, next) {
  try {
    var sql = 'select * from tbl_coordinates where ride_id = ? order by timestamp'
    //var sql = 'select * from tbl_coordinates'  

    var values = [
      req.params.ride_id
    ]
    console.log(sql);
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);

      res.json(result);

    });
  } catch (e) {
    res.status(500);
    throw Error('invalid JSON');
  }
});



module.exports = router;
