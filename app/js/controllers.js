'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', ['ngAutocomplete'])
  // ngAutocomplete est la pour la proposition de ville dans la barre de recherche

  // Controller for "open weather map" api data search
  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMap','exampleLocations','ISO3166',
      function($scope,openWeatherMap,exampleLocations,ISO3166) {


    $scope.message = '';
    $scope.hasState = '';

    // Expose example locations to $scope
    // On commence avec des villes en exemple
    $scope.exampleLocations = exampleLocations;
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';


    // initialization load data for first example entry
    // forecast : json de l'API openweathermap
    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: exampleLocations[ 0 ]
    });

    // Get forecast data for location as given in $scope.location
    // definit le forecast à partir de la location
    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

    // Set $scope.location and execute search on API
    // Definit location et forecast
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
