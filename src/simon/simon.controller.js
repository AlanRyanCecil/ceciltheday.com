angular.module('SimonSaysApp')
    .controller('SimonCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.game = 'Simon Says';
        var colors = angular.element('.color');

        colors.on('click', function (event) {
            var elem = angular.element(event.target),
                color = elem.attr('class').split(' ')[1];
            console.log(color);
            elem.addClass('clicked');
            $timeout(function () {
                elem.removeClass('clicked');
            }, 300);
        });
    }])