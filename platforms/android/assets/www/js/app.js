// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMaterial'])

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

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventCtrl'
        }
      }
    })

 .state('app.searchdescription', {
    url: '/search/:categoryID',
    views: {
      'menuContent': {
        templateUrl: 'templates/searchdescription.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
}]);


// .factory('theFactory',"$scope", function theFactory($http, $scope){
//     return{
//         getJson: function (){
//             return    $http({
//              url: "http://localhost:8100/search/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg&q" + "&q=" + $scope.theValue,
//             //url: "http://www.goodreads.com/event/index.xml?key=vwhrg6TGzcbpZ3ZTgzdDXg&q" + "&q=" + $scope.theValue,
//             method:"GET",
//             transformResponse: function (value) {
//                         var x2js = new X2JS({});
//                         $scope.test = value.toString();
//                         var response = angular.bind(x2js, x2js.xml_str2json, value)();
//                         return response;
//                     }
//         }).then(function(response){
//         console.log(response);
//         }, function(err){
//         console.log("error");
//         });
//         }
//     }
// });
