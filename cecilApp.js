'use strict';

angular.module('CecilApp', ['ngMaterial'])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.heading = 'be sure to Cecil the day.';
    }]);