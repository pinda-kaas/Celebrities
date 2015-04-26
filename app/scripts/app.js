'use strict';

angular
  .module('vodaApp', [
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
        templateUrl: 'views/richlist.html',
        controller: 'RichListCtrl'
      });
  }).

  constant('_',window._);
