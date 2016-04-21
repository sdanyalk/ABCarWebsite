(function () {

    var app = angular.module('contactModule');

    app.controller("contactController", contactController);
    contactController.$inject = ['$scope'];

    function contactController($scope) {
        $scope.message = "I am contact page";
    }

})();