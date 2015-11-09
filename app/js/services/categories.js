/**
 * Created by Peter on 09.11.2015.
 */
angular.module('mercCompany')
  .factory('Categories', function CategoriesFactory($resource) {
    return $resource('json/categories.json', {}, {});
  });