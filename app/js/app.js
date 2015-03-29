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
  $routeProvider.when('/login', {templateUrl: 'partials/login.php', controller: 'UserCtrl'});
  $routeProvider.when('/signup', {templateUrl: 'partials/signup.php', controller: 'UserCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
