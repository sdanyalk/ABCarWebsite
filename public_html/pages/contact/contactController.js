(function () {

    var app = angular.module('AIGApp');
    app.controller("contactController", contactController);
    contactController.$inject = ['$scope'];

    function contactController($scope) {
        $scope.message = "I am contact page";
    }

})();