angular.module('mercCompany', ['ngRoute', 'ngResource'])
  .config(function(GravatarProvider){
    GravatarProvider.setSize(150);
  });
