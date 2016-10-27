/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('calendarService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getGameByDateGte= function (dat)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesgte/'+dat);
        return promise;
    };

    return home;

}]);