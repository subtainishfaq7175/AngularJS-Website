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
    home.getGamesFeed= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesfeed');
        return promise;
    };


    return home;

}]);