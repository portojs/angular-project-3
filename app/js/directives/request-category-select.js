/**
 * Created by Peter on 09.11.2015.
 */
angular.module('mercCompany')
  .directive('requestCategorySelect', function(Category) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/request-category-select.html',
      scope: {
        activeCategory: '='
      },
      link: function(scope) {
        scope.categories = Category.query();
        //scope.setActiveCategory = function(category) {
        //  scope.activeCategory = category.title;
        //};
        //scope.getActiveCategory = function() {
        //  return scope.activeCategory;
        //};
      },
      controller: function($scope) {
        this.getActiveCategory = function() {
          return $scope.activeCategory;
        };
        this.setActiveCategory = function(category) {
          $scope.activeCategory = category.title;
        };
        this.notActiveCategory = function() {
          $scope.activeCategory = "";
        };
      }
    }
  });