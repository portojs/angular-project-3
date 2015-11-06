/**
 * Created by Peter on 06.11.2015.
 */
angular.module('mercCompany')
  .controller('MercIndexController', function($scope, Mercs) {
    Mercs()
      .success(function(data) {
        $scope.mercs = data;
      });
  });