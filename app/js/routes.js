/**
 * Created by Peter on 05.11.2015.
 */
angular.module('mercCompany')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/company', {redirectTo: 'templates/pages/company.index.html'})
      .when( '/', {redirectTo: 'templates/pages/company.index.html'})
      .otherwise({redirectTo: '/'});
  }]);