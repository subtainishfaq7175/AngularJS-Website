/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('newsService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getNewsList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'news');
        return promise;
    };


    return home;

}]);