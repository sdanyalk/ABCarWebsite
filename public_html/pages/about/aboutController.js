(function () {

    var app = angular.module('AIGApp');
    app.controller("aboutController", aboutController);
    aboutController.$inject = ['$scope'];

    function aboutController($scope) {
        $scope.message = "I am about page";
    };

})();