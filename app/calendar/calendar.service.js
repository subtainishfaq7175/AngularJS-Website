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

    home.getGameByDateRange= function (dat1,dat2)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesrange?datstart='+dat1+"&datend="+dat2);
        return promise;
    };

    return home;

}]);