'use strict';

angular.module('gameApp')


.controller('NewspostCtrl', ['$scope','SeatEatsConstants','$state','resolvedNews','newspostService',function($scope,SeatEatsConstants,$state,resolvedNews,newspostService)
{

//Todo make content dynamic and and add resolve
$scope.news= resolvedNews.data;
$scope.model={};

$scope.postComment=function ()
{
    newspostService.putNewsComments($scope.news._id,$scope.model).then(function (response)
    {
      console.log(response.data);
    })
}




}]);



/*

 $scope.repoList=repolist.data;
 $scope.dataLoading=false;
 $scope.openRepo = function (item)
 {

 //change state and show pictures there
 $state.go("repository",{ "repo": item });
 };

 $scope.removeRepo = function (item, index)
 {
 $scope.dataLoading=true;
 if ($scope.repoList.length > 0)
 {
 homeService.removeRepository(index).then(function(response)
 {
 console.log(response);
 $scope.dataLoading=false;
 $scope.repoList.remove(index);



 });


 }
 }

 $scope.addNewRepo = function ()
 {
 $scope.dataLoading=true;
 homeService.createRepo(($scope.repoList.length + 1)).then(function(response)
 {
 console.log(response);
 var obj = "repository" + ($scope.repoList.length + 1);
 $scope.repoList.push(obj);


 });

 };







 Array.prototype.remove = function (from, to) {
 var rest = this.slice((to || from) + 1 || this.length);
 this.length = from < 0 ? this.length + from : from;
 return this.push.apply(this, rest);
 };
 */
