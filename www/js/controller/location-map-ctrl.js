(function () {
    'use strict';

    angular.module('visaHackApp').controller('LocationMapCtrl', ['$stateParams', '$scope', '$state', '$cordovaGeolocation','merchantInfoApi', LocationMapCtrl]);

    function LocationMapCtrl($stateParams, $scope, $state, $cordovaGeolocation,merchantInfoApi) {
      var vm = this;
        
        var options = {timeout: 10000, enableHighAccuracy: true};
        $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
          center: {lat: 37.55, lng: -122.27},//latLng,
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var restaurants = [
            ['Cafe Savini', 37.55818, -122.276454, 4],
            ['Noas Bagels', 37.560808, -122.274599, 5],
            ['Corner Bakery', 37.557098, -122.274907, 3],
            ['Tokyo Village', 37.562148, -122.276976, 2],
            ['El Torito', 37.563006, -122.278883, 1]
        ];
 
        for (var i = 0; i < restaurants.length; i++) {
            var resturant = restaurants[i];
            var marker = new google.maps.Marker({
            position: {lat: resturant[1], lng: resturant[2]},
            map: $scope.map,
            title: resturant[0],
            animation: google.maps.Animation.DROP
        });
       
          var contentString = "awesome";
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          }); 
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }

  },function(error){
    console.log("Could not get location");
  });
    };

})();