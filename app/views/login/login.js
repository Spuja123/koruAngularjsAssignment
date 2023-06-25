'use strict';

kuroApp.controller('loginCtrl', ['$scope','$location', function($scope, $location) {

    $scope.performLogin = function() {
        $scope.loginForm.$valid && $location.url('/home')
    }

}]);