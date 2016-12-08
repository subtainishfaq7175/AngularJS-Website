/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('newsService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getNewsList= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'news?page='+arg);
        return promise;
    };
    home.getSearchedNewsList= function (var1)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'newssearch?query='+var1);
        return promise;
    };

    home.getNewsFeedF= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'newsupdatef');
        return promise;
    };


    return home;

}]);