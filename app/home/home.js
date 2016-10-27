'use strict';

angular.module('gameApp')


.controller('HomeCtrl', ['$scope','SeatEatsConstants','$state','homeService',function($scope,SeatEatsConstants,$state,homeService)
{

    $scope.isLetsplayUpdateLoaded=false;
    $scope.isGamesUpdateLoaded=false;
    $scope.isGamesFeedLoaded=false;
    $scope.isNewsUpdateLoaded=false;

    // Arrays to manage data
    $scope.newsUpdate=[];
    $scope.letsPlayUpdate=[];
    $scope.gamesUpdate=[];
    $scope.gamesFeed=[];




    homeService.getGamesUpdate().then(function(response)
    {

        for(var i=0; i<response.data.length;i++)
        {
            $scope.gamesUpdate.push(response.data[i]);
        }

        $scope.isGamesUpdateLoaded=true;





    });
    homeService.getGamesFeed().then(function(response)
    {
        console.log(response);
        debugger;
        $scope.isGamesFeedLoaded=true;
        for(var i=0; i<response.data.length;i++)
        {
            $scope.gamesFeed.push(response.data[i]);
        }



    });
    homeService.getLetsplayUpdate().then(function(response)
    {
        console.log(response);
        $scope.isLetsplayUpdateLoaded=true;

        for(var i=0; i<response.data.length;i++)
        {
            $scope.letsPlayUpdate.push(response.data[i]);
        }





    });

    homeService.getNewsUpdate().then(function(response)
    {
        console.log(response);
        $scope.isNewsUpdateLoaded=true;
        for(var i=0; i<response.data.length;i++)
        {
            $scope.newsUpdate.push(response.data[i]);
        }




    });




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
