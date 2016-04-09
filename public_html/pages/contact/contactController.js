(function(){
    
    var app = angular.module('AIGApp');
    app.controller("contactController", contactController);
    
    function contactController($scope){
        $scope.message = "I am contact page";
    }
    
}());