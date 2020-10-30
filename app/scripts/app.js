'use strict';

/**
 * @ngdoc overview
 * @name sampleappApp
 * @description
 * # sampleappApp
 *
 * Main module of the application.
 */
angular
  .module('sampleappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
