/**
 * Created by Peter on 06.11.2015.
 */
angular.module('mercCompany')
  .controller('MercIndexController', function($scope, Mercs) {
    $scope.mercs = Mercs.query();
  });