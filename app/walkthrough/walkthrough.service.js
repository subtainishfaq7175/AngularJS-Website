/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('walkthroughService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getWalkthroughList= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'walkthrough?page='+arg);
        return promise;
    };

    home.getWalkthroughListBySearch= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'walkthroughsearch/'+arg);
        return promise;
    };

    home.getWalkthroughListByTag= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'walkthroughsearchtag/'+arg);
        return promise;
    };
home.getWalkthroughListByLanguage= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'walkthroughsearchlanguage/'+arg);
        return promise;
    };


    return home;

}]);