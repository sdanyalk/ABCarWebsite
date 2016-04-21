(function () {

    var app = angular.module('homeModule');

    app.controller("homeController", homeController);
    homeController.$inject = ['$scope'];

    function homeController($scope) {
        $scope.message = "I am home page";
    }

})();