'use strict';

angular.module('gameApp').controller('gamesCtrl', ['$scope','SeatEatsConstants','$state','gamesService',function($scope,SeatEatsConstants,$state,gamesService)
{
//Todo pagination , search and popular tabs
    $scope.isGamesLoaded=false;
    $scope.isGamesFeedLoaded=false;
    $scope.gamesList=[];
    $scope.gamesFeed=[];

    gamesService.getGamesList().then(function (response)
    {
        console.log(response);

        for(var i=0; i<response.data.length;i++)
        {
            $scope.gamesList.push(response.data[i]);
        }
        $scope.isGamesLoaded=true;


    });
    gamesService.getGamesFeed().then(function (response)
    {
        console.log(response);

        for(var i=0; i<response.data.length;i++)
        {
            $scope.gamesFeed.push(response.data[i]);
        }

        $scope.isGamesFeedLoaded=true;

    })








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
