window.angular.module('ngff.controllers.nfl',[])
    .controller('NFLController', ['$scope', '$routeParams', 'Global', 'NFL', '$log', function($scope, $routeParams, Global, NFL, $log){
        $scope.global = Global;

        $scope.nflteams = NFL.teams;
        $scope.nflteam = NFL.teams[$routeParams['nflTeamId']];
    }])
