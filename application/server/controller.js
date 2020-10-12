var sdk = require('./sdk.js');
var router = require('express').Router();

  router.get('/api/getWallet', function (req, res) {
    var walletid = req.query.walletid;
    let args = [walletid];
    sdk.send(false, 'getWallet', args, res);
  });
  router.get('/api/setWallet', function(req, res){
    var name = req.query.name;
		var id = req.query.id;
    var coin = req.query.coin;
    let args = [name, id, coin];
    sdk.send(true, 'setWallet', args, res);
  });
  router.get('/api/getScooter', function(req, res){
    var scooterkey = req.query.scooterkey;
    let args = [scooterkey];
    sdk.send(false, 'getScooter', args, res);
  });
  router.get('/api/setScooter', function (req, res) {
    var productname = req.query.productname;
    var manufacturer = req.query.manufacturer;
    var price = req.query.price;
    var walletid = req.query.walletid;
    let args = [productname, manufacturer, price, walletid];
    sdk.send(true, 'setScooter', args, res);
  });
  router.get('/api/getAllscooter', function (req, res) {
    let args = [];
    sdk.send(false, 'getAllScooter', args, res);
  });
  router.get('/api/purchaseScooter', function (req, res) {
    var walletid = req.query.walletid;
    var scooterkey = req.query.scooterkey;
    let args = [walletid, scooterkey];
    sdk.send(true, 'purchaseScooter', args, res);
});

router.post('/api/purchaseScooter', (req, res) => {
  console.log("chek");
    console.log(req.body);
    console.log("ch3ek");
  
    
    var walletid = req.body.walletid;
    var scooterkey = req.body.scooterkey;
    let args = [walletid, scooterkey];
    sdk.send(true, 'purchaseScooter', args, res);
  
  });

  router.get('/api/changeScooterPrice', function(req, res){
    var scooterkey = req.query.scooterkey;
    var price = req.query.price;
    let args = [scooterkey, price];
    sdk.send(true, 'changeScooterPrice', args, res);
  });
  router.get('/api/deleteScooter', function(req, res){
    var scooterkey = req.query.scooterkey;
    let args = [scooterkey];
    sdk.send(true, 'deleteScooter', args, res);
  });

  module.exports =router;