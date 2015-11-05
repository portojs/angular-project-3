/**
 * Created by Peter on 05.11.2015.
 */
angular.module('mercCompany')
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html'
    }
  });