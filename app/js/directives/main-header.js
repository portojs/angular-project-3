/**
 * Created by Peter on 05.11.2015.
 */
angular.module('mercCompany')
  .directive('mainHeader', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html',
      link: function(scope) {
        scope.link = 1;
        scope.selectLink = function(linkNr) {
          scope.link = linkNr;
        };
        scope.linkIsSelected = function(linkNr) {
          return scope.link === linkNr;
        };
      }
    }
  });