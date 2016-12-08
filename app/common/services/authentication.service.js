/**
 * Created by subtainishfaq on 11/4/16.
 */
(function () {
  'use strict';

  angular
    .module('gameApp')
    .factory('AuthenticationService', Service);

  function Service($http,$localStorage,SeatEatsConstants,$rootScope) {
    var service = {};

    service.Login = Login;
    service.Logout = Logout;
    service.SignUp = SignUp;

    return service;

    function Login(username, password, callback) {
      $http.post(SeatEatsConstants.AppUrlApi+'authenticate', { name: username, password: password })
        .success(function (response) {
          // login successful if there's a token in the response
          debugger;

          if (response.token) {
            // store username and token in local storage to keep user logged in between page refreshes
            $localStorage.currentUser = { name: username, token: response.token };
              $rootScope.header.name=username;
              $rootScope.header.isSignedIn=true;
            // add jwt token to auth header for all requests made by the $http service
            $http.defaults.headers.common.Authorization = response.token;



            // execute callback with true to indicate successful login
            callback(true);
          } else {
            // execute callback with false to indicate failed login
            callback(false);
          }
        });
    }

    function SignUp(username, password, callback) {
      $http.post(SeatEatsConstants.AppUrlApi+'signup', { name: username, password: password })
        .success(function (response) {
          // login successful if there's a token in the response
          debugger;

          if (response.token) {
            // store username and token in local storage to keep user logged in between page refreshes
            $localStorage.currentUser = { name: username, token: response.token };
              $rootScope.header.name=username;
              $rootScope.header.isSignedIn=true;
            // add jwt token to auth header for all requests made by the $http service
            $http.defaults.headers.common.Authorization = response.token;



            // execute callback with true to indicate successful login
            callback(true);
          } else {
            // execute callback with false to indicate failed login
            callback(false);
          }
        });
    }


    function Logout() {
      // remove user from local storage and clear http auth header
      delete $localStorage.currentUser;
      $http.defaults.headers.common.Authorization ;
        $rootScope.header.name=undefined;
        $rootScope.header.isSignedIn=false;
    }
  }
})();
