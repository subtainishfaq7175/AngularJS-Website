'use strict';

angular.module('gameApp').controller('faqCtrl', ['$scope','SeatEatsConstants','$state','faqResolve',function($scope,SeatEatsConstants,$state,faqResolve)
{

$scope.faqs=faqResolve.data;
$scope.faqsGenral=[];
$scope.faqsWalkthrough=[];
$scope.faqsGames=[];
$scope.faqsProfiles=[];

for( var i=0;i<$scope.faqs.length ; i++)
{
    switch ($scope.faqs[i].category){
        case "General" :
            $scope.faqsGenral.push($scope.faqs[i]);
            break;
            case "Game" :
            $scope.faqsGames.push($scope.faqs[i]);
            break;
            case "Walkthrough" :
            $scope.faqsWalkthrough.push($scope.faqs[i]);
            break;
            case "Profile" :
            $scope.faqsProfiles.push($scope.faqs[i]);
            break;


    }
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
