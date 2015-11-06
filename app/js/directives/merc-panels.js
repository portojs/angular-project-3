/**
 * Created by Peter on 06.11.2015.
 */
angular.module('mercCompany')
  .directive('mercPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/merc-panels.html',
      link: function(scope) {
        scope.panel = 1;
        scope.selectPanel = function(panelNr) {
          scope.panel = panelNr;
        };
        scope.selectedPanel = function(panelNr) {
          return scope.panel === panelNr;
        };
      }
    }
  });