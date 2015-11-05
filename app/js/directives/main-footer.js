/**
 * Created by Peter on 05.11.2015.
 */
angular.module('mercCompany')
  .directive('mainFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-footer.html'
    }
  });