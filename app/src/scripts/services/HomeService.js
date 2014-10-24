'use strict';

module.exports = function($http, $q, $rootScope) {

    console.log("HomeService Loaded");


    this.getHebrewDate = function(year, month, day)
    {
        var URL = "http://www.hebcal.com/converter/?cfg=json&gy=" + year + "&gm=" + month + "&gd=" + day + "&g2h=1";

        var deferred = $q.defer();

        $http.get(URL).success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).error(function(data, status, headers, config) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    this.getTachanunDates = function()
    {
        return {
            "1 Tishrei": "Rosh Hashana",
            "2 Tishrei": "Rosh Hashana",
            "9 Tishrei": "Erev Yom Kippur",
            "10 Tishrei": "Yom Kippur",
            "11 Tishrei": "In Between Yom Kippur & Sukkot",
            "12 Tishrei": "In Between Yom Kippur & Sukkot",
            "13 Tishrei": "In Between Yom Kippur & Sukkot",
            "14 Tishrei": "Erev Sukkot",
            "15 Tishrei": "Sukkot",
            "16 Tishrei": "Sukkot",
            "17 Tishrei": "Sukkot",
            "18 Tishrei": "Sukkot",
            "19 Tishrei": "Sukkot",
            "20 Tishrei": "Sukkot",
            "21 Tishrei": "Sukkot",
            "22 Tishrei": "Sukkot",
            "23 Tishrei": "Sukkot",
            "24 Tishrei": "End of Tishrei",
            "25 Tishrei": "End of Tishrei",
            "26 Tishrei": "End of Tishrei",
            "27 Tishrei": "End of Tishrei",
            "28 Tishrei": "End of Tishrei",
            "29 Tishrei": "End of Tishrei",
            "30 Tishrei": "Rosh Chodesh Cheshvan",
            "1 Cheshvan": "Rosh Chodesh Cheshvan",
            "30 Cheshvan": "Rosh Chodesh Kislev",
            "1 Kislev": "Rosh Chodesh Kislev",
            "25 Kislev": "Chanukah",
            "26 Kislev": "Chanukah",
            "27 Kislev": "Chanukah",
            "28 Kislev": "Chanukah",
            "29 Kislev": "Chanukah",
            "30 Kislev": "Chanukah & Rosh Chodesh Tevet",
            "1 Tevet": "Chanukah &  Rosh Chodesh Tevet",
            "2 Tevet": "Chanukah",
            "1 Sh'vat": "Rosh Chodesh Sh'vat",
            "15 Sh'vat": "Rosh Chodesh Sh'vat",
            "30 Sh'vat": "Rosh Chodesh Adar",
            "1 Adar I": "Rosh Chodesh Adar I",
            "1 Adar": "Rosh Chodesh Adar",
            "14 Adar I": "Purim Katan",
            "14 Adar": "Purim",
            "15 Adar I": "Shushan Purim Katan",
            "15 Adar": "Shushan Purim",
            "30 Adar I": "Rosh Chodesh Adar II" ,
            "14 Adar II": "Purim",
            "15 Adar II": "Shushan Purim",
            "1 Adar II": "Rosh Chodesh Adar II",
            "1 Nisan": "Rosh Chodesh Nisan",
            "2 Nisan": "No Tachanun During Nisan",
            "3 Nisan": "No Tachanun During Nisan",
            "4 Nisan": "No Tachanun During Nisan",
            "5 Nisan": "No Tachanun During Nisan",
            "6 Nisan": "No Tachanun During Nisan",
            "7 Nisan": "No Tachanun During Nisan",
            "8 Nisan": "No Tachanun During Nisan",
            "9 Nisan": "No Tachanun During Nisan",
            "10 Nisan": "No Tachanun During Nisan",
            "11 Nisan": "No Tachanun During Nisan",
            "12 Nisan": "No Tachanun During Nisan",
            "13 Nisan": "No Tachanun During Nisan",
            "14 Nisan": "Erev Pesach",
            "15 Nisan": "Pesach",
            "16 Nisan": "Pesach",
            "17 Nisan": "Pesach",
            "18 Nisan": "Pesach",
            "19 Nisan": "Pesach",
            "20 Nisan": "Pesach",
            "21 Nisan": "Pesach",
            "22 Nisan": "Pesach",
            "23 Nisan": "No Tachanun During Nisan",
            "24 Nisan": "No Tachanun During Nisan",
            "25 Nisan": "No Tachanun During Nisan",
            "26 Nisan": "No Tachanun During Nisan",
            "27 Nisan": "No Tachanun During Nisan",
            "28 Nisan": "No Tachanun During Nisan",
            "29 Nisan": "No Tachanun During Nisan",
            "30 Nisan": "Rosh Chodesh Iyyar",
            "1 Iyyar": "Rosh Chodesh Iyyar",
            "14 Iyyar": "Pesach Sheini",
            "18 Iyyar": "Lag BaOmer",
            "1 Sivan": "Rosh Chodesh Sivan",
            "2 Sivan": "In Between Rosh Chodesh & Shavuot",
            "3 Sivan": "In Between Rosh Chodesh & Shavuot",
            "4 Sivan": "In Between Rosh Chodesh & Shavuot",
            "5 Sivan": "In Between Rosh Chodesh & Shavuot",
            "6 Sivan": "Shavuot",
            "7 Sivan": "Shavuot",
            "8 Sivan": "Post-Shavuot (Bring Korban Chagigah)",
            "9 Sivan": "Post-Shavuot (Bring Korban Chagigah)",
            "10 Sivan": "Post-Shavuot (Bring Korban Chagigah)",
            "11 Sivan": "Post-Shavuot (Bring Korban Chagigah)",
            "12 Sivan": "Post-Shavuot (Bring Korban Chagigah)",
            "30 Sivan": "Rosh Chodesh Tamuz",
            "1 Tamuz": "Rosh Chodesh Tamuz",
            "1 Av": "Rosh Chodesh Av",
            "9 Av": "Tisha B'Av",
            "15 Av": "Tu B'Av",
            "30 Av": "Rosh Chodesh Elul",
            "1 Elul": "Rosh Chodesh Elul",
            "29 Elul": "Erev Rosh Hashana"
        }
    }

    return this;
}