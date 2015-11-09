/**
 * Created by Peter on 09.11.2015.
 */
angular.module('mercCompany')
  .factory('Category', function CategoriesFactory($resource) {
    return $resource('json/categories.json', {}, {});
  });