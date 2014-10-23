'use strict';

require("../../vendor/angular/angular");
require("../../vendor/angular-resource/angular-resource");
require("../../vendor/angular-route/angular-route");
require("../../vendor/angular-animate/angular-animate");
require("../../vendor/angular-sanitize/angular-sanitize");
require("../../vendor/angular-ui-router/release/angular-ui-router");
require("../../vendor/angular-bootstrap/ui-bootstrap");
require("../../vendor/angular-bootstrap/ui-bootstrap-tpls");


console.log("app.js Loaded");


var tachanun = angular.module('Tachanun', ['ngRoute', 'ui.router', 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.bootstrap']);


//CONFIG
tachanun.config(require("./routes/MainRoutes"));


//DIRECTIVES
tachanun.directive('updateTitle', ["$rootScope", "$timeout", require('./directives/UpdateTitle')]);


//Controllers
tachanun.controller('HomeCtrl', ["$scope", "HomeService", require("./controllers/HomeCtrl")]);



//SERVICES
tachanun.service('HomeService', ["$http", "$q", "$rootScope", require("./services/HomeService")]);




angular.bootstrap(document, ['Tachanun']);