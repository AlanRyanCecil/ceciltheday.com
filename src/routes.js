'use strict';

angular.module('CecilTheDay').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    controller: 'HeaderCtrl',
                    templateUrl: 'src/header/header.view.html'
                },
                'main@': {
                    controlller: 'MainCtrl',
                    templateUrl: 'src/main/main.view.html'
                },
                'footer': {
                    controller: 'FooterCtrl',
                    templateUrl: 'src/footer/footer.view.html'
                }
            }
        })

        .state('home.simon', {
            url: 'simon',
            views: {
                'main@': {
                    controller: 'SimonCtrl',
                    templateUrl: 'src/simon/simon.view.html'
                }
            }
        })

        .state('home.about', {
            url: 'about',
            views: {
                'main@': {
                    controller: 'AboutCtrl',
                    templateUrl: 'src/about/about.view.html'
                }
            }
        })
}])