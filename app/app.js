'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
  'ngRoute',
  'gameApp.version',
  'kendo.directives',
    'ui.router',
  'angularSpinner'
]).controller('mainCtrl', ['$scope','newsService',function($scope,newsService)
{
  $scope.newslist;

  newsService.getNewsFeedF().then(function (response)
  {

    $scope.newslist=response.data;

  })


}]);
;
