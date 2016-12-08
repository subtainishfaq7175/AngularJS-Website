'use strict';

angular.module('gameApp')


.controller('NewsCtrl', ['$scope','SeatEatsConstants','$state','newsService',function($scope,SeatEatsConstants,$state,newsService)
{
//Todo search and pagination


    $scope.isNewsLoaded=false;
    $scope.newsDetails=[];
    $scope.searchNews=searchNews;
    $scope.model={};
    $scope.page=0;
    $scope.pages=0;
    newsService.getNewsList(1).then(function (response) {
        $scope.isNewsLoaded=true;
        response=response.data;
        debugger;

        for(var i=0;i<response.docs.length;i++)
        {
            $scope.newsDetails.push(response.docs[i]);
        }
    $scope.page=response.page;
    $scope.pages=response.pages;
    });
    $scope.getNumber = function(num) {
        return new Array(num);
    };
    $scope.getActivePage = function(num) {
        if(num==$scope.page)
        {
            return "active"
        }
    };
    $scope.getRequestedPage = function(num) {


        newsService.getNewsList(num).then(function (response) {
            response=response.data;
            $scope.newsDetails.splice(0,$scope.newsDetails.length);
            for(var i=0;i<response.docs.length;i++)
            {
                $scope.newsDetails.push(response.docs[i]);
            }
        });


    };
    function  searchNews() {
    $scope.isNewsLoaded=false;

    newsService.getSearchedNewsList($scope.model.query) .then(function (response)
    {
        $scope.isNewsLoaded=true;
        response=response.data;
        while($scope.newsDetails.length > 0) {
            $scope.newsDetails.pop();
        }
        debugger;

        for(var i=0;i<response.docs.length;i++)
        {
            $scope.newsDetails.push(response.docs[i]);
        }
    });
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
