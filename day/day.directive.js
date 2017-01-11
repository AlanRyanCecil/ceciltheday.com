'use strict';

angular.module('CecilApp')
    .directive('cecilDay', [function () {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'day/day.view.html',
            scope: {
                content: '@'
            },
            link: function (scope, elem, attrs) {
                angular.element(elem).on('click', _=> {
                    
                });
            }
        }
    }]);