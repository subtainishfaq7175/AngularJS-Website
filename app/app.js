'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
  'ngRoute',
  'gameApp.version',
  'kendo.directives',
    'ui.router',
  'angularSpinner'
]).controller('mainCtrl', ['$scope','newsService','homeService',function($scope,newsService,homeService)
{
  $scope.newslist;$scope.letsplaylist;

  newsService.getNewsFeedF().then(function (response)
  {

    $scope.newslist=response.data;

  });

  homeService.getLetsplayUpdate().then(function (response) {

    $scope.letsplaylist=response.data;
  });


}]);
;
