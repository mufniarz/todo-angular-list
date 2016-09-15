angular.module("todoListApp", [])
.controller('mainCtrl', function ($scope) {
    $scope.helloWorld = function () {
        console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
    };
});