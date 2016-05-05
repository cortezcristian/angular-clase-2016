'use strict';

/**
 * @ngdoc overview
 * @name angularClase2016App
 * @description
 * # angularClase2016App
 *
 * Main module of the application.
 */
angular
  .module('angularClase2016App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'adf',
    'adf.structures.base',
		'adf.widget.clock'
  ])
  .config(function ($routeProvider, dashboardProvider) {

		dashboardProvider
		.structure('6-6', {
			rows: [{
				columns: [{
					styleClass: 'col-md-6'
				}, {
					styleClass: 'col-md-6'
				}]
			}]
		});

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
