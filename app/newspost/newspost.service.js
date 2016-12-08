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
    home.putNewsComments= function (arg,data)
    {

        var promise = $http.put(SeatEatsConstants.AppUrlApi+'newscomments/'+arg,data);
        return promise;
    };

    return home;

}]);