'use strict';

angular.module('gameApp').controller('LoginController', ['$scope','AuthenticationService','$rootScope','close','toastr',function($scope,AuthenticationService,$rootScope,close,toastr)
{


//Todo make content dynamic and and add resolve

    $scope.isSingin=true;
    $scope.credentials={};
   var vm=this;
    $scope.authenticate= function()
    {
        if($scope.isSingin)
            SingIn();
        else
            SingUp();

        console.log($scope.credentials);


    };

    $scope.close = function(result) {
        $scope.isSingin=result;
        //close(result, 500); // close, but give 500ms for bootstrap to animate
    };



    function SingIn() {
       $scope.loading = true;
        AuthenticationService.Login($scope.credentials.name, $scope.credentials.password, function (result)
        {
            debugger;
            if (result === true) {
              console.log("success"); // $location.path('/dashboard');
                $scope.close(result);
                close(null,500);

                $rootScope.header.isSignedIn=true;
                toastr.success('Login Successful', 'Welcome!');


            } else {
                toastr.error('Login Failure', vm.error);

                $scope.error = 'Username or password is incorrect';
                $scope.loading = false;
            }
        });
    };
    function SingUp() {
       $scope.loading = true;
        AuthenticationService.SignUp($scope.credentials.name, $scope.credentials.password, function (result)
        {
            debugger;
            if (result === true) {
                console.log("success");
                toastr.success('Signed up Successful', 'Welcome!');
// $location.path('/dashboard');
            } else {
                toastr.error('Login Failure', "Signed up Issue");
                $scope.error = 'Username or password is incorrect';
                $scope.loading = false;
            }
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
