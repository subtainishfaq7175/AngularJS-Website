'use strict';

angular.module('gameApp').controller('walkthroughCtrl', ['$scope','SeatEatsConstants','$state','walkthroughService',function($scope,SeatEatsConstants,$state,walkthroughService)
{

    //todo add pagination ,tags and dyncamic data
$scope.isWalkthroughLoaded = false;
$scope.walkthroughList=[];

walkthroughService.getWalkthroughList().then(function (response)
{

    var currRow=-1;

    for(var i=0; i<response.data.length;i++)
    {
        if(i%5==0)
        {

            $scope.walkthroughList.push({rows:[]});
            currRow++;

        }
        $scope.walkthroughList[currRow].rows.push(data[i]);

    }


    $scope.isWalkthroughLoaded=true;
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
