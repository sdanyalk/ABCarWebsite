(function () {

    var app = angular.module('AIGApp');
    app.controller("aboutController", aboutController);

    function aboutController($scope) {
        $scope.message = "I am about page";
    };

}());