'use strict';
var app = angular.module('application', []);
app.controller('AppCtrl', function($scope, appFactory){
        $("#success_setscooter").hide();
        $("#success_getallscooter").hide();
        $("#success_getscooter").hide();
        $("#success_getwallet").hide();
        $("#success_changescooterprice").hide();
        $("#success_deletescooter").hide();
        $scope.getWallet = function(){
                appFactory.getWallet($scope.walletid, function(data){
                        $scope.search_wallet = data;
                        $("#success_getwallet").show();
                });
        }
       $scope.getAllScooter = function(){
                appFactory.getAllScooter(function(data){
                        var array = [];
                        for (var i = 0; i < data.length; i++){
                                parseInt(data[i].Key);
                                data[i].Record.Key = data[i].Key;
                                array.push(data[i].Record);
                                $("#success_getallscooter").hide();
                        }
                        array.sort(function(a, b) {
                            return parseFloat(a.Key) - parseFloat(b.Key);
                        });
                        $scope.allScooter = array;
                });
        }
        $scope.getScooter = function(){
                appFactory.getScooter($scope.scooterkey, function(data){
                        $("#success_getscooter").show();
                        var array = [];
                        for (var i = 0; i < data.length; i++){
                                data[i].Key = $scope.scooterkey;
                                data[i].productname = data[i].Productname;
                                data[i].manufacturer = data[i].Manufacturer;
                                data[i].price = data[i].Price;
                                data[i].walletid = data[i].WalletID;
                                data[i].count = data[i].Count;
                                array.push(data[i]);
                        }
                        $scope.allScooter = array;
                });
        }
        $scope.setScooter = function(){
            appFactory.setScooter($scope.scooter, function(data){
                        $scope.create_scooter = data;
                        $("#success_setscooter").show();
            });
        }
        $scope.purchaseScooter = function(key){
                appFactory.purchaseScooter(key, function(data){
                        var array = [];
                        for (var i = 0; i < data.length; i++){
                                parseInt(data[i].Key);
                                data[i].Record.Key = data[i].Key;
                                array.push(data[i].Record);
                                $("#success_getallscooter").hide();
                        }
                        array.sort(function(a, b) {
                            return parseFloat(a.Key) - parseFloat(b.Key);
                        });
                        $scope.allScooter = array;
                });
        }
        $scope.changeScooterPrice = function(){
                appFactory.changeScooterPrice($scope.change, function(data){
                        $scope.change_scooter_price = data;
                        $("#success_changescooterprice").show();
                });
        }
        $scope.deleteScooter = function(){
                appFactory.deleteScooter($scope.scooterkeydelete, function(data){
                        $scope.delete_scooter = data;
                        $("#success_deletescooter").show();
                });
        }
});
 app.factory('appFactory', function($http){
        var factory = {};
        factory.getWallet = function(key, callback){
            $http.get('/api/getWallet?walletid='+key).success(function(output){
                        callback(output)
                });
        }
        factory.getAllScooter = function(callback){
            $http.get('/api/getAllScooter/').success(function(output){
                        callback(output)
                });
        }
        factory.getScooter = function(key, callback){
            $http.get('/api/getScooter?scooterkey='+key).success(function(output){
                        callback(output)
                });
        }
        factory.setScooter = function(data, callback){
            $http.get('/api/setScooter?productname='+data.productname+'&manufacturer='+data.manufacturer+'&price='+data.price+'&walletid='+data.walletid).success(function(output){
                        callback(output)
                });
        }
        factory.purchaseScooter = function(key, callback){
            $http.get('/api/purchaseScooter?walletid=5T6Y7U8I&scooterkey='+key).success(function(output){
                $http.get('/api/getAllScooter/').success(function(output){
                        callback(output)
                });
            });
        }
        factory.changeScooterPrice = function(data, callback){
            $http.get('/api/changeScooterPrice?scooterkey='+data.scooterkey+'&price='+data.price).success(function(output){
                        callback(output)
                });
        }
        factory.deleteScooter = function(key, callback){
            $http.get('/api/deleteScooter?scooterkey='+key).success(function(output){
                        callback(output)
                });
        }
        return factory;
});