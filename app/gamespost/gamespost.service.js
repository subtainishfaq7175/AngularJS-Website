/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('gamespostService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getGamesPost= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'games/'+arg);
        return promise;
    };

    home.getGamesLike= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gameslike/'+arg);
        return promise;
    };

    home.getGamesDislike= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesdislikes/'+arg);
        return promise;
    };


    home.getGamesFavourite= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesfavourites/'+arg);
        return promise;
    };


    return home;

}]);