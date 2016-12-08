/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('gamesService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getGamesList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'games');
        return promise;
    };
    home.getGamesSearchList= function (var1)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamessearch?query='+var1);
        return promise;
    };
    home.getGamesFeed= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesfeed');
        return promise;
    };


    home.getGamesPopularList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamespopular');
        return promise;
    };

    home.getGamesFavouriteList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesfavourite');
        return promise;
    };

    return home;

}]);