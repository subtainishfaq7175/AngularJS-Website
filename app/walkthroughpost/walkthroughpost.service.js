/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('walkthroughpostService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getLetsplayList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplays');
        return promise;
    };

    home.getWalkthroughPost= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'walkthrough/'+arg);
        return promise;
    };


    return home;

}]);