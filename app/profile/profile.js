'use strict';

angular.module('gameApp').controller('profileCtrl', ['$scope','SeatEatsConstants','$state','$localStorage','AuthenticationService','$rootScope',function($scope,SeatEatsConstants,$state,$localStorage,AuthenticationService,$rootScope)
{
    if ($localStorage.currentUser)
    {
        $scope.name=$localStorage.currentUser.name;
        $scope.role=$localStorage.currentUser.role;
    }

//Todo make content dynamic and and add resolve


$scope.Logout=function () {
    AuthenticationService.Logout();
    $state.go('home');
    $rootScope.header.isSignedIn=false;
    $rootScope.name=undefined;

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
