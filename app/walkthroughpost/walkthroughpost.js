'use strict';

angular.module('gameApp').controller('walkthroughpostCtrl', ['$scope','SeatEatsConstants','$state','resolvedWalkthrough',function($scope,SeatEatsConstants,$state,resolvedWalkthrough)
{

//Todo make content dynamic and and add resolve

$scope.current={};
$scope.current.chapterIndex=0;
$scope.current.chapter=undefined;
$scope.current.pageIndex=0;
$scope.current.page=undefined;

$scope.prevPage=function ()
{
  if($scope.current.pageIndex>0)
      $scope.current.pageIndex--;
    else
      $scope.current.pageIndex= $scope.post.chapters[$scope.current.chapterIndex].images.length-1;

    $scope.current.page= $scope.post.chapters[$scope.current.chapterIndex].images[ $scope.current.pageIndex].image_url;
};
$scope.nextPage=function () {
    if($scope.current.pageIndex<$scope.post.chapters[$scope.current.chapterIndex].images.length-1)
        $scope.current.pageIndex++;
    else
        $scope.current.pageIndex= 0;


    $scope.current.page= $scope.post.chapters[$scope.current.chapterIndex].images[ $scope.current.pageIndex].image_url;

};
$scope.selectPage=function (pageIndex)
{
    $scope.current.page= $scope.post.chapters[$scope.current.chapterIndex].images[ pageIndex].image_url;
    $scope.current.pageIndex= pageIndex;
};
$scope.selectChapter=function (chapterIndex) {

    $scope.current.chapter= $scope.post.chapters[chapterIndex];
    $scope.current.chapterIndex= chapterIndex;
};

$scope.post=resolvedWalkthrough.data;

    if(angular.isDefined($scope.post.chapters) && $scope.post.chapters.length>0)
if(angular.isDefined($scope.post.chapters[0].images) && $scope.post.chapters[0].images.length>0)
    $scope.current.page= $scope.post.chapters[0].images[0].image_url;


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
