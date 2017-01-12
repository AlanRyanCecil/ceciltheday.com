'use strict';

angular.module('CecilTheDay').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    controller: 'HeaderCtrl',
                    templateUrl: 'header/header.view.html'
                },
                'main@': {
                    controlller: 'MainCtrl',
                    templateUrl: 'main/main.view.html'
                },
                'footer': {
                    controller: 'FooterCtrl',
                    templateUrl: 'footer/footer.view.html'
                }
            }
        })
        .state('home.about', {
            url: 'about',
            views: {
                'main@': {
                    controller: 'AboutCtrl',
                    templateUrl: 'about/about.view.html'
                }
            }
        })
}])