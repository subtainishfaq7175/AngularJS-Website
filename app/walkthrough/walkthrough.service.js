/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('walkthroughService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getWalkthroughList= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'walkthrough');
        return promise;
    };


    return home;

}]);