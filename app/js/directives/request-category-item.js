/**
 * Created by Peter on 09.11.2015.
 */
angular.module('mercCompany')
  .directive('requestCategoryItem', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/request-category-item.html',
      scope: {
        category: "="
      },
      require: "^requestCategorySelect",
      link: function(scope, element, attrs, requestCategorySelect) {
        scope.makeActive = function() {
          requestCategorySelect.setActiveCategory(scope.category);
        };
        scope.categoryActive = function() {
          return requestCategorySelect.getActiveCategory() === scope.category.title;
        }
      }
    }
  });