/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('letsplayService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getLetsplayList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplays');
        return promise;
    };
    home.getLetsplayPopularList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplaypopular');
        return promise;
    };

    home.getLetsplayFavouriteList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplayfavourite');
        return promise;
    };

    home.getLetsplaySearchList= function (var1)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplayssearch?query='+var1);
        return promise;
    };

    return home;

}]);