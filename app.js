var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var brandRouter = require('./routes/brands.routes'); // brand is exposed as make
var languageRouter = require('./routes/languages.routes');
var adminRouter = require('./routes/admin.routes');
var verifyRouter = require('./routes/verification.routes');
var bloodRouter = require('./routes/blood.routes');
var customerRouter = require('./routes/customers.routes');
var driverRouter = require('./routes/driver.routes');
var rideRouter = require('./routes/ride.routes');
var vtypeRouter = require('./routes/vehicle_type.routes');
var vehicleRouter = require('./routes/vehicle.routes');
var webpushRouter = require('./routes/webpush.routes');



//Defining variables
var SERVER_PORT = 3000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/api/v1.0/make', brandRouter);   // brand is expossed as make.
app.use('/api/v1.0/languages', languageRouter);
app.use('/api/v1.0/admin', adminRouter);
app.use('/api/v1.0/otp', verifyRouter);
app.use('/api/v1.0/bloodgroups', bloodRouter);
app.use('/api/v1.0/customers', customerRouter);
app.use('/api/v1.0/drivers', driverRouter);
app.use('/api/v1.0/ride', rideRouter);
app.use('/api/v1.0/vtype', vtypeRouter);
app.use('/api/v1.0/vehicle', vehicleRouter);
app.use('/api/v1.0/webpush', webpushRouter);
app.post('/checkpost', (req, res) => {
    res.status(200).send({
        message:
            "Working post test!"
    });
});


console.log("Welcome to Chalo API Service!");


//this wrapper is only for testing purpose
if (!module.parent) {
    // staring the express server
    app.listen(SERVER_PORT, function () {
        console.log("Chalo API Server is listening at port :  ", SERVER_PORT);
    });
}


module.exports = app;

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.post('/add', (req, res) => {
//     res.send('response from a post method')
//   })
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// module.exports = app;
