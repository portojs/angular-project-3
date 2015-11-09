/**
 * Created by Peter on 09.11.2015.
 */
angular.module('mercCompany')
  .controller('RequestIndexController', function($scope, Requests) {
    $scope.requests = Requests.query();
  });