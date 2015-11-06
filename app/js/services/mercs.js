/**
 * Created by Peter on 06.11.2015.
 */
angular.module('mercCompany')
  .factory('Mercs', function MercsFactory($resource) {
    return $resource('json/mercs.json', {}, {});
  });