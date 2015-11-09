/**
 * Created by Peter on 09.11.2015.
 */
angular.module('mercCompany')
  .factory('Requests', function RequestsFactory($resource) {
    return $resource('json/requests.json', {}, {});
  });