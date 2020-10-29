var sdk = require('./sdk.js');
var router = require('express').Router();

  router.post('/api/getWallet', function (req, res) {
    var walletid = req.body.walletid;
    let args = [walletid];
    sdk.send(false, 'getWallet', args, res);
  });

  router.post('/api/setWallet', function(req, res){
    var name = req.body.name;
		var id = req.body.id;
    var coin = req.body.coin;
    let args = [name, id, coin];
    sdk.send(true, 'setWallet', args, res);
  });

  router.post('/api/getScooter', function(req, res){
    var scooterkey = req.body.scooterkey;
    let args = [scooterkey];
    sdk.send(false, 'getScooter', args, res);
  });
  router.post('/api/setScooter', function (req, res) {
    console.log("작동중");
    var productname = req.body.productname;
    var manufacturer = req.body.manufacturer;
    var price = req.body.price;
    var walletid = req.body.walletid;
    let args = [productname, manufacturer, price, walletid];
    sdk.send(true, 'setScooter', args, res);
  });
  router.post('/api/getAllscooter', function (req, res) {
    let args = [];
    sdk.send(false, 'getAllScooter', args, res);
  });

//계정등록코드
router.post('/api/registerWallet', (req, res) => {
  console.log("checkcheck");
  var walletid = req.body.walletid;
  var name = req.body.name;
  var token = req.body.token;
  let args = [walletid, name, token];
  sdk.send(true, 'registerWallet', args, res);
})

//스쿠터구매
router.post('/api/purchaseScooter', (req, res) => {

    console.log(req.body);

    
    var walletid = req.body.walletid;
    var scooterkey = req.body.scooterkey;
    let args = [walletid, scooterkey];
    sdk.send(true, 'purchaseScooter', args, res);
  
  });

  router.post('/api/changeScooterPrice', function(req, res){
    var scooterkey = req.body.scooterkey;
    var price = req.body.price;
    let args = [scooterkey, price];
    sdk.send(true, 'changeScooterPrice', args, res);
  });
  router.post('/api/deleteScooter', function(req, res){
    var scooterkey = req.body.scooterkey;
    let args = [scooterkey];
    sdk.send(true, 'deleteScooter', args, res);
  });

  module.exports =router;