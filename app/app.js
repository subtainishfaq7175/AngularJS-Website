'use strict';

// Declare app level module which depends on views, and components
angular.module('gameApp', [
  'ngRoute',
  'gameApp.version',
  'kendo.directives',
    'ui.router',
  'angularSpinner',
  'angularSimpleSlider',
  'angularModalService',
  'ngStorage',
    'ui.bootstrap',
    'yaru22.angular-timeago',
    'vcRecaptcha'

]).controller('mainCtrl', ['$scope','newsService','homeService','$localStorage','$rootScope','ModalService','$state',function($scope,newsService,homeService,$localStorage,$rootScope,ModalService,$state)
{
    $rootScope.header={};
    $scope.newslist;$scope.letsplaylist;$scope.header.isSignedIn=false;

    if ($localStorage.currentUser)
    {
        $rootScope.header.isSignedIn=true;
        $rootScope.header.name=$localStorage.currentUser.name;
    }

    $scope.getClass=function(arg)
    {
        if ( $state.current.name.indexOf(arg)!=-1)
        {
            return "active";
        }
    };
    $scope.openLoginModal = function(){
        ModalService.showModal({
            templateUrl: "login/login-template.html",
            controller: "LoginController"
        }).then(function(modal) {
            // The modal object has the element built, if this is a bootstrap modal
            // you can call 'modal' to show it, if it's a custom modal just show or hide
            // it as you need to.
            modal.element.modal();
            modal.close.then(function(result) {
                console.log(modal);
                $scope.message = result ? "You said Yes" : "You said No";
            });
        });

    };

  newsService.getNewsFeedF().then(function (response)
  {

    $scope.newslist=response.data;

  });

  homeService.getLetsplayUpdate().then(function (response) {

    $scope.letsplaylist=response.data;
  });


}])
 .run(run);

function run($rootScope, $http, $state, $localStorage) {
    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
        $http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams, options)
        {
         //   $rootScope.header.toState=toState;

            if(toState.name.indexOf("profile")!=-1)
            {
                  if(!angular.isDefined($localStorage.currentUser))
                  {
                    $state.go('home');
                    event.preventDefault();
                  }
            }
        })



    function getStateClass(toState) {

    }

}
;
