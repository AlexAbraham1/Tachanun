"use strict";

module.exports = function($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {

    console.log("MainRoutes Loaded");

    $locationProvider.html5Mode(true).hashPrefix("!");

    $stateProvider.state("Home", {
        url: "/",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/home.html",
                controller: "HomeCtrl"
            }
        },
        data : { pageTitle: 'Home' }

    })

    //MAKE SURE THE "OTHERWISE" STATE IS AT BOTTOM
    .state("otherwise", {
        url: "*path",
        views: {
            layout: {
                templateUrl: "/release/html/layouts/404.html"
            }
        },
        data : { pageTitle: 'Page Not Found' }
    });


}