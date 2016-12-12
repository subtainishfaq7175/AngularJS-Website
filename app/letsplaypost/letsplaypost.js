'use strict';

angular.module('gameApp')


.controller('letsPlayPostCtrl', ['$scope','SeatEatsConstants','$state','resolvedLetsplay','ModalService','$localStorage','$rootScope','letsplaypostService',function($scope,SeatEatsConstants,$state,resolvedLetsplay,ModalService,$localStorage,$rootScope,letsplaypostService)
{

//Todo make content dynamic and and add resolve


$scope.post=resolvedLetsplay.data;

    $scope.getCounts=function () 
    {
        letsplaypostService.getLetsplayCounts($scope.post._id).then(function (response) {
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
            letsplaypostService.getLetsplayLike($scope.post._id).then(function (response) {

                console.log(response);
                $scope.getCounts();

            })  ;
    };
    $scope.DisLike=function ()
    {

        if ( !$rootScope.header.isSignedIn)
            openLoginModal()
        else
            letsplaypostService.getLetsplayDislike($scope.post._id).then(function (response) {

                console.log(response);
                $scope.getCounts();

            })  ;

    };
    $scope.Favourite=function ()
    {

        if ( !$rootScope.header.isSignedIn)
            openLoginModal()
        else
            letsplaypostService.getLetsplayFavourite($scope.post._id).then(function (response) {

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

