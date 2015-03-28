'use strict';

/* Filters */

angular.module('openWeatherApp.filters', [])

  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])

  .filter('placeholder', [function() {
    return function (input,phvalue) {
      return (angular.isUndefined(input) || input == '') ? phvalue : input;
    };
  }])

  // Colortion du header en fonction de la temperature
  // Glacial : bleu clair [<-5]
  // Tres froid : bleu : [-5;0]
  // Froid : vert : [0;10]
  // Frais : jaune : [10;15]
  // Doux : orange [15;20]
  // Chaud : orange fonce : [20;30]
  // Tres chaud : rouge : [30;35]
  // Canicule : cramoisi [>35]
  .filter('colorTemp', [function() {
    return function (temp) {
        if (temp < -5) {
          return "bleu-clair";
        } else if (temp > -5 && temp <= 0){
          return "bleu";
        } else if (temp > 0  && temp <= 10){
          return "vert";
        }  else if (temp > 10 && temp <= 15){
          return "jaune";
        } else if (temp > 10 && temp <= 20){
          return "orange";
        } else if (temp > 20 && temp <= 30){
          return "orange-fonce";
        } else if (temp > 30 && temp <= 35){
          return "rouge ";
        } else if (temp > 35){
          return "cramoisi";
        }
    }
  }])
