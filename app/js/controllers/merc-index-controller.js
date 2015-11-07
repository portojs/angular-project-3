/**
 * Created by Peter on 06.11.2015.
 */
angular.module('mercCompany')
  .controller('MercIndexController', function($scope, Mercs, Gravatar) {
    $scope.mercs = Mercs.query();
    $scope.gravatarUrl = function(email) {
      return Gravatar(email);
    }
  });