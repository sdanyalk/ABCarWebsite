(function () {
    
    var app = angular.module('AIGApp');
    app.controller("homeController", homeController);
    
    function homeController($scope){
        $scope.message = "I am home page";
    };
    
}());