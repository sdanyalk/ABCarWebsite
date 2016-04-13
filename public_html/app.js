(function () {

    var app = angular.module('AIGApp', ['ngRoute']);
    app.config(routeConfiguration);

    function routeConfiguration($routeProvider) {
        $routeProvider
                // route for the home page
                .when('/', {
                    templateUrl: 'pages/home/homeView.html',
                    controller: 'homeController'
                })

                // route for the about page
                .when('/about', {
                    templateUrl: 'pages/about/aboutView.html',
                    controller: 'aboutController'
                })

                // route for the contact page
                .when('/contact', {
                    templateUrl: 'pages/contact/contactView.html',
                    controller: 'contactController'
                });
    };

})();