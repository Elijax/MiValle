// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('MiValle', ['ionic', 'starter.controllers', 'starter.services'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.places', {
      url: '/places',
      views: {
        'tab-places': {
          templateUrl: 'templates/places.html',
          controller: 'PlacesCtrl'
        }
      }
    })
    .state('tab.place-detail', {
      url: '/places/:placeId',
      views: {
        'tab-places': {
          templateUrl: 'templates/place-detail.html',
          controller: 'PlaceDetailCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});