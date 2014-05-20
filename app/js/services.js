'use strict';

/* Services */

// Registering services (no dependencies []). Injecting editable values in module
// http://stackoverflow.com/questions/13015523/angular-js-is-value-the-proper-way-to-set-app-wide-constant-and-how-to-retri
var worldcupServices = angular.module('worldcup.services', []); // ['ngResource']

worldcupServices.
  value('name', 'World Cup Application').
  value('version', '0.1').
  value('github', '');

// Changing a bit here. Investigate how the higher level ngResource is used
// http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app
worldcupServices.factory('WorldCupAPI', function($http) {
  return {
    getTeams: function () {
      return $http({
        method: 'GET', 
        url: 'data/teams.json'
      });
    },
    getTeamUpcomingMatches: function() {
      return $http.get('data/groups.json');
    }
  };
});