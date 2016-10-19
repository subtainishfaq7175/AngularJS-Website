/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('newspostService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getNewsPost= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'news/'+arg);
        return promise;
    };

    return home;

}]);