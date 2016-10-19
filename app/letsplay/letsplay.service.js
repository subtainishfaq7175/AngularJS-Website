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

    return home;

}]);