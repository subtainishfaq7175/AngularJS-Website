/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('profileService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getGamesPost= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'games/'+arg);
        return promise;
    };


    return home;

}]);