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

    home.getLetsplayLike= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplayslikes/'+arg);
        return promise;
    };

    home.getLetsplayDislike= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplaysdislikes/'+arg);
        return promise;
    };


    home.getLetsplayFavourite= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplaysfavourites/'+arg);
        return promise;
    };

    home.getLetsplayCounts= function (arg)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'letsplayscount/'+arg);
        return promise;
    };



    return home;

}]);