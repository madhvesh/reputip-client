angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
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

  }, function(error){
    console.log("Could not get location");
  });
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
