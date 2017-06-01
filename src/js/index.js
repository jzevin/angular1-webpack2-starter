angular.module('myApp',['ngRoute'])
  .config(['$locationProvider', '$routeProvider', require('./app/app.config.js')])
  .controller('homeCtrl', require('./app/home/home.controller.js'));
