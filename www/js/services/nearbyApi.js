(function () {
    'use strict';

    angular.module('visaHackApp').factory('nearbyInfoApi', [nearbyInfoApi]);

    function nearbyInfoApi() {
        
        var nearbyData = JSON.parse('[{"id": 1,"icon":"ion-android-restaurant", "title": "Restaurants"}, {"id": 2,"icon":"ion-ios-americanfootball","title": "Sport Bars"}, {"id": 3,"icon":"ion-ios-paw","title": "Salons"}, {"id": 5,"icon":"ion-ios-people","title": "Beauty-Spa"},{"id": 6,"icon":"ion-social-foursquare","title": "Check-in-offers"}]');
     
        function getNearbyInfo(){
            return nearbyData;
        }

        return {
            getNearbyInfo: getNearbyInfo,
        };
    };
})();