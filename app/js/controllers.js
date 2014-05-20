'use strict';

/* Controllers */

angular.module('worldcup.controllers', []).
  controller('homecontroller', ['$scope', 'WorldCupAPI', function($scope, WorldCupAPI) {
    $scope.groupList = [];
    WorldCupAPI.getGroups().success(function(response) {
    	//
    });
  }]).
  controller('teamscontroller', ['$scope', '$log', 'WorldCupAPI', function($scope, $log, WorldCupAPI) {
    $scope.searchFilter = function (team) {
      var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || keyword.test(team.name) || keyword.test(team.continent);
	};
	$scope.teamList = [];
    WorldCupAPI.getTeams().success(function (response) {
      $scope.teamList = response.teams;
    });
  }]).
  controller('teamdetailscontroller', ['$scope', '$routeParams', 'WorldCupAPI', function($scope, $routeParams, WorldCupAPI) {
    WorldCupAPI.getTeams().success(function (response) {
      $scope.teamId = $routeParams.id;
      $scope.team = response.teams[$scope.teamId - 1];
    });
  }]).
  controller('scorescontroller', ['$scope', function($scope) {

  }]);