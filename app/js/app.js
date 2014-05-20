'use strict';

// Declare app level module which depends on filters, and services
// https://docs.angularjs.org/api/ng/function/angular.module
// ngSanitize is used to render html from the controller: http://stackoverflow.com/questions/9381926/insert-html-into-view-using-angularjs
angular.module('worldcup', [
  'ngRoute',
  'ngSanitize',
  'worldcup.filters',
  'worldcup.services',
  'worldcup.directives',
  'worldcup.controllers'
]).
// Specify routing directives
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', { templateUrl: 'partials/home.html', controller: 'homecontroller' }).
    when('/teams', { templateUrl: 'partials/teams.html', controller: 'teamscontroller' }).
    when('/teams/:id', { templateUrl: 'partials/teamdetails.html', controller: 'teamdetailscontroller' }).
    when('/scores', { templateUrl: 'partials/scores.html', controller: 'scorescontroller' }).
    otherwise({redirectTo: '/home'});
}]);