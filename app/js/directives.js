'use strict';

/* Directives */


angular.module('worldcup.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('appName', ['name', function(name) {
    return function(scope, elm, attrs) {
      elm.text(name);
    };
  }]);