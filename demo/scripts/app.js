'use strict';

/**
 * @ngdoc overview
 * @name kaiserappyoApp
 * @description
 * # kaiserappyoApp
 *
 * Main module of the application.
 */
angular
  .module('kaiserApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularModalService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
       templateUrl: 'views/main.html',
       controller: 'LandingCtrl',
       controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
