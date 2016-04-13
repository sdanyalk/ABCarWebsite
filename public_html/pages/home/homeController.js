(function () {

    var app = angular.module('AIGApp');
    app.controller("homeController", homeController);
    homeController.$inject = ['$scope'];

    function homeController($scope) {
        $scope.message = "I am home page";
    };

})();