'use strict';

// Module principal openWeatherApp
var openWeatherApp = angular.module('openWeatherApp',[
  'ngRoute',
  'openWeatherApp.filters',
  'openWeatherApp.services',
  'openWeatherApp.directives',
  'openWeatherApp.controllers',
  "iso-3166-country-codes"
]);

// Configuration des routes
openWeatherApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'partials/forecast.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.when('/storm', {templateUrl: 'partials/storm.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
