var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var http          = require('http')
var fs            = require('fs');
var Fabric_Client = require('fabric-client');
var path          = require('path');
var util          = require('util');
var os            = require('os');
const cors = require('cors');
const controller = require('./controller.js');
const dotenv = require('dotenv');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin:"http://localhost:3000",
  credentials:true

}
app.use(cors(corsOptions))
app.use('/', controller);
//require('./controller.js')(app);



app.use(express.static(path.join(__dirname, '../client')));
var port = process.env.PORT || 3001;
app.listen(port,function(){
  console.log("Live on port: " + port);
});