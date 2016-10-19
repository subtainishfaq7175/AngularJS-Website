/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('letsplaypostService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getLetsplayPost= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplays/'+arg);
        return promise;
    };


    return home;

}]);