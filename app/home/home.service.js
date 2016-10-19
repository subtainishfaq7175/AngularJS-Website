/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('homeService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getGamesUpdate= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesupdate');
        return promise;
    };

    home.getLetsplayUpdate= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplaysupdate');
        return promise;
    };

    home.getNewsUpdate= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'newsupdate');
        return promise;
    };

    home.getGamesFeed= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesfeed');
        return promise;
    };


    return home;

}]);