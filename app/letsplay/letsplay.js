'use strict';

angular.module('gameApp')


.controller('LetsPlayCtrl', ['$scope','SeatEatsConstants','$state','letsplayService',function($scope,SeatEatsConstants,$state,letsplayService)
{

//Todo Search Functionality and bottom tab



$scope.isTable=false;
$scope.isLetsplayLoaded=false;
$scope.letsPlayArray = [];

letsplayService.getLetsplayList().then(function(response)
{

    for(var i=0; i<response.data.docs.length;i++)
    {
        $scope.letsPlayArray.push(response.data.docs[i]);
    }
    $scope.isLetsplayLoaded=true;

    });

$scope.clickTable=function ()
{

    $scope.isTable=true;

};

$scope.clickList=function ()
{

    $scope.isTable=false;

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
