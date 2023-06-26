'use strict';
kuroApp.controller('homeCtrl', ['$scope', function ($scope) {

    $scope.loginDetails = [{
        id: 0,
        username: "Dianne Russell",
        phone: "+7(123)029-76-47",
        email: "dianne.russell@gmail.com"
    },
    {
        id: 1,
        username: "Jacob Jones",
        phone: "+7(123)442-90-62",
        email: "jacob.jones@gmail.com"
    },
    {
        id: 2,
        username: "Wade Warren",
        phone: "+7(123)712-21-31",
        email: "wade.warren@gmail.com"
    },
    {
        id: 3,
        username: "Bessie Cooper",
        phone: "+7(123)072-36-28",
        email: "bessie.cooper@gmail.com"
    },
    {
        id: 4,
        username: "Leslie Alexander",
        phone: "+7(123)072-36-28",
        email: "lesile.alexander@gmail.com"
    },
    {
        id: 5,
        username: "Guy Hawkins",
        phone: "+7(123)029-76-47",
        email: "guy.hawkins@gmail.com"
    },
    {
        id: 6,
        username: "Robert Fox",
        phone: "+7(123)712-21-31",
        email: "robert.fox@gmail.com"
    },
    {
        id: 7,
        username: "Wade Warren",
        phone: "+7(123)712-21-31",
        email: "wade.warren@gmail.com"
    },
    {
        id: 8,
        username: "Bessie Cooper",
        phone: "+7(123)072-36-28",
        email: "bessie.cooper@gmail.com"
    },
    {
        id: 9,
        username: "Leslie Alexander",
        phone: "+7(123)072-36-28",
        email: "lesile.alexander@gmail.com"
    },
    {
        id: 10,
        username: "Dianne Russell",
        phone: "+7(123)029-76-47",
        email: "dianne.russell@gmail.com"
    },
    {
        id: 11,
        username: "Bessie Cooper",
        phone: "+7(123)072-36-28",
        email: "bessie.cooper@gmail.com"
    },
    {
        id: 12,
        username: "Leslie Alexander",
        phone: "+7(123)072-36-28",
        email: "lesile.alexander@gmail.com"
    },
    {
        id: 13,
        username: "Guy Hawkins",
        phone: "+7(123)029-76-47",
        email: "guy.hawkins@gmail.com"
    },
    {
        id: 14,
        username: "Robert Fox",
        phone: "+7(123)712-21-31",
        email: "robert.fox@gmail.com"
    },
    {
        id: 15,
        username: "Wade Warren",
        phone: "+7(123)712-21-31",
        email: "wade.warren@gmail.com"
    }];
    $scope.checkUncheckAll = function () {
        $scope.checkall = $scope.checkall ? true : false;
        angular.forEach($scope.loginDetails, (user) =>{
            user.checked = $scope.checkall;
        });
        $scope.canDelete = !$scope.checkall ? true : false;
    };

    $scope.updateCheckall = function () {
        let userTotal = $scope.loginDetails.length;
        let count = 0;
        angular.forEach($scope.loginDetails, (item) => {
            item.checked && count++;
        });
        $scope.checkall = (userTotal == count) ? true : false;
        $scope.canDelete = (count <= 0) ? true : false;
    };

    $scope.canDelete = true;
}]);