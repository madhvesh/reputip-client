// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('visaHackApp', ['ionic','ngCordova','ionic.rating','starter.controllers','uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    //controller: 'MapCtrl'
  })
   
  .state('home', {
    url: '/home',
    abstract: true,
    templateUrl: 'templates/home.html'
    //controller: 'AppCtrl'
  })
  .state('home.maps', {
    url: '/maps',
    views: {
      'tab-search': {
        templateUrl: 'templates/map.html'
      }
    }
  })
  .state('home.nearby', {
    url: '/nearby',
    views: {
      'tab-nearby': {
        templateUrl: 'templates/nearby.html',
        //controller: 'NearbyCtrl'
      }
      }  
    })
    .state('home.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/search.html'
      }
      }  
    }) 
    .state('home.search-details', {
    url: '/search/:id',
    views: {
      'tab-search': {
        templateUrl: 'templates/browse.html'
      }
      }  
    }) 
   .state('home.activity', {
    url: '/activity',
    views: {
      'tab-activity': {
        templateUrl: 'templates/activity.html'
        }
      }  
    }) 
    .state('home.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/more.html'
        }
      }  
    })
  .state('home.location', {
    url: '/location',
    views: {
      'tab-activity': {
        templateUrl: 'templates/locationmap.html'
        }
      }  
    })         
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/nearby');
});
