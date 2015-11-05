/**
 * Created by Peter on 05.11.2015.
 */
angular.module('mercCompany')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/company', {
        templateUrl: 'templates/pages/company/index.html'
      })
      .when('/requests', {
        templateUrl: 'templates/pages/requests/index.html'
      })
      .when( '/', {
        templateUrl: 'templates/pages/company/index.html'
      })
      .otherwise({redirectTo: '/'});
  }]);