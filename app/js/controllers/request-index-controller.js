/**
 * Created by Peter on 09.11.2015.
 */
angular.module('mercCompany')
  .controller('RequestIndexController', function($scope, Requests) {
    $scope.request = {};
    $scope.requests = Requests.query();
    $scope.requestsNew = [
      {
      category: "Infiltration",
      title: "In and out",
      body: "Get some sensitive document from a secret facility in deep mountains."
      }
    ];
    $scope.addRequest = function(){
      $scope.requestsNew.push($scope.request);
      $scope.request = {};
    };
  });