window.angular.module('ngff.controllers.header', []).controller('HeaderController', ['$scope', 'Global', '$log',
    function($scope, Global, $log) {
        $log.log('jibble');
        $scope.global = Global;

        $scope.navbarEntries = [
            {
                "title": "Leagues",
                "link": "leagues"
            },
            {
                "title": "Fantasy Teams",
                "link": "fantasyteams"
            },
            {
                "title": "NFL Teams",
                "link": "nflteams"
            },
            {
                "title": "Players",
                "link": "players"
            }
        ];
    }]);