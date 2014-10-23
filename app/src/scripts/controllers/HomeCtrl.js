'use strict';

module.exports = function($scope, HomeService) {

    // create a message to display in our view
    console.log('HomeCtrl Loaded');

    var getInfo = function() 
    {
        console.log('HomeCtrl.getInfo');

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth()+1; //January is 0!
        var day = today.getDate();
        

        HomeService.getHebrewDate(year, month, day).then(function(result) {
            console.log(result);
        });
    };    
    
    getInfo();
}