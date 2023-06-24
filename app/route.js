'use strict'
kuroApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
  
    $routeProvider
    .when("/login", {
        templateUrl: 'views/login/login.html',
        controller: 'loginCtrl'
      })
    .when("/home", {
      templateUrl: 'views/home/home.html',
      controller: 'homeCtrl'
    })
    .otherwise({redirectTo: '/login'});
  }]);