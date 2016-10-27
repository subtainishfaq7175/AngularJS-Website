'use strict';

angular.module('gameApp').controller('calendarCtrl', ['$scope','SeatEatsConstants','$state','calendarService',function($scope,SeatEatsConstants,$state,calendarService)
{

    $scope.recentGames=[];
    $scope.springGames=[];
    $scope.autumnGames=[];
    $scope.winterGames=[];
    $scope.summerGames=[];
    $scope.currentYear=new Date().getFullYear();
$scope.dat=new Date((new Date).getTime() - 7 * 24 * 60 * 60 * 1000);
//new Date((new Date).getTime() - 7 * 24 * 60 * 60 * 1000);


    $scope.isRecentLoaded=false;
    calendarService.getGameByDateGte($scope.dat.toDateString()).then(function (response)
    {
        $scope.isRecentLoaded=true;
        $scope.recentGames=response.data;

    });


    var firstDay = (new Date(new Date().getFullYear(), 3, 1)).toDateString();
    var lastDay = (new Date(new Date().getFullYear(), 6, 0)).toDateString();

    $scope.isSpringLoaded=false;
    calendarService.getGameByDateRange(firstDay,lastDay).then(function (response)
    {

        $scope.isSpringLoaded=true;
        $scope.springGames=response.data; ;;
    });

    var firstDay = (new Date(new Date().getFullYear(), 6, 1)).toDateString();
    var lastDay = (new Date(new Date().getFullYear(), 9, 0)).toDateString();

    $scope.isSummerLoaded=false;
    calendarService.getGameByDateRange(firstDay,lastDay).then(function (response)
    {

        $scope.isSummerLoaded=true;
        $scope.summerGames=response.data; ;;
    });


    var firstDay =( new Date(new Date().getFullYear(), 0, 1)).toDateString();
    var lastDay =( new Date(new Date().getFullYear(), 3, 0)).toDateString();
    ;;


    $scope.isWinterLoaded=false;
    calendarService.getGameByDateRange(firstDay,lastDay).then(function (response)
    {
        $scope.isWinterLoaded=true;
        $scope.winterGames=response.data; ;;
    });

    var firstDay =( new Date(new Date().getFullYear(), 9, 1)).toDateString();
    var lastDay =( new Date(new Date().getFullYear()+1, 0, 0)).toDateString();
    ;


    $scope.isAutumnLoaded=false;
    calendarService.getGameByDateRange(firstDay,lastDay).then(function (response)
    {
        $scope.autumnGames=response.data; ;;
        $scope.isAutumnLoaded=true;
        debugger;
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
