window.angular.module('ngff.controllers.leagues',[]).controller('LeaguesController', ['$scope', '$routeParams', '$location', 'Global', 'Leagues', '$log',
    function($scope, $routeParams, $location, Global, Leagues, $log){
        $scope.global = Global;

        $scope.create = function() {
            var league = new Leagues({
               name: this.league.name
            });

            league.$save(function(response){
               $location.path('leagues/' + response._id);
            });

            this.league.name = '';
        };

        $scope.find = function(query){
          Leagues.query(query, function(leagues){
             $scope.leagues = leagues;
          });
        };

        $scope.findOne = function(){
          Leagues.get({leagueId: $routeParams.leagueId}, function(league){
             $scope.league = league;
          });
        };

        $scope.update = function(){
            var league = $scope.league;
            league.$update(function(){
               $location.path('leagues/' + league._id);
            });
        };

        $scope.destroy = function(league){
            $log.log('destroy');

            league.$delete();



            for(var i in $scope.leagues){
                if($scope.leagues[i] == league){
                    $scope.leagues.splice(i, 1);
                }
            }
        };
    }
]);
