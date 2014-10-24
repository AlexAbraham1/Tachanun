'use strict';

module.exports = function($scope, HomeService) {

    // create a message to display in our view
    console.log('HomeCtrl Loaded');

    var tachanunDates = HomeService.getTachanunDates();

    var getInfo = function() 
    {
        console.log('HomeCtrl.getInfo');

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth()+1; //January is 0!
        var day = today.getDate();
        

        HomeService.getHebrewDate(year, month, day).then(function(result) {
            console.log(result);

            $scope.hebrewDate = result.hebrew;

            if (day < 10) {
                day = '0' + day
            } 

            if (month < 10) {
                month = '0' + month
            } 

            $scope.englishDate = month + '/' + day + '/' + year;

            $scope.tachanun = calculateTachanun(result.hd + " " + result.hm, result.events);

            console.log($scope.tachanun);
        });
    };    
    
    getInfo();

    var calculateTachanun = function(date, events)
    {
        // if (date == "30 Sh'vat") {
        //     if (events["Rosh Chodesh Adar I"]) {
        //         return "Rosh Chodesh Adar I"
        //     } else {
        //         return "Rosh Chodesh Adar"
        //     }
        // }

        if (date == "30 Sh'vat") {
            for (var i = 0; i < events.length; i++) {
                if (events[i] == "Rosh Chodesh Adar I") {
                    return "Rosh Chodesh Adar I";
                }
            }
            return "Rosh Chodesh Adar"
        }

        else {
            if (date in tachanunDates) {
                return tachanunDates[date];
            } else {
                return null;
            }
        }
    }
}