'use strict';

   angular.module('gameApp').controller('gamespostCtrl', ['$scope','SeatEatsConstants','$state','resolvedgame','ModalService','$localStorage','$rootScope','gamespostService',function($scope,SeatEatsConstants,$state,resolvedgame,ModalService,$localStorage,$rootScope,gamespostService)
{

    $scope.post=resolvedgame.data;

//Todo make content dynamic and and add resolve
$scope.getCounts=function ()
{
    gamespostService.getGamesCounts($scope.post._id).then(function (response) {
        response=response.data;
        $scope.post.likes=response.likes;
        $scope.post.favourites=response.favourites;
        $scope.post.dislikes=response.dislikes;

        
    })

};
$scope.Like=function ()
{

    if ( !$rootScope.header.isSignedIn)
             openLoginModal()
    else
        gamespostService.getGamesLike($scope.post._id).then(function (response) {

            console.log(response);
            $scope.getCounts();
        })  ;
};
$scope.DisLike=function ()
{

    if ( !$rootScope.header.isSignedIn)
        openLoginModal()
    else
        gamespostService.getGamesDislike($scope.post._id).then(function (response) {

            console.log(response);
            $scope.getCounts();
        })  ;

};
$scope.Favourite=function ()
{

    if ( !$rootScope.header.isSignedIn)
        openLoginModal()
    else
        gamespostService.getGamesFavourite($scope.post._id).then(function (response) {

            console.log(response);
            $scope.getCounts();
        })  ;

};


     function openLoginModal(){
        ModalService.showModal({
            templateUrl: "login/login-template.html",
            controller: "LoginController"
        }).then(function(modal) {
            // The modal object has the element built, if this is a bootstrap modal
            // you can call 'modal' to show it, if it's a custom modal just show or hide
            // it as you need to.
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = result ? "You said Yes" : "You said No";
            });
        });

 };

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
