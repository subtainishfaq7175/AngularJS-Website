/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('homeService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getGamesUpdate= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'gamesupdate');
        return promise;
    };


    home.getLetsplayFeed= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'lestplayfeed');
        return promise;
    };
    home.createRepo= function (index)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'createrepository.php?index='+index);
        return promise;
    };
    home.removeRepository= function (index)
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'removeRepository.php?index='+index);
        return promise;
    };

    return home;

}]);