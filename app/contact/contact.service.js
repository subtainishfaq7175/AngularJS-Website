/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('contactService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.postMessage= function (obj)
    {

        var promise = $http.post(SeatEatsConstants.AppUrlApi+'messages',obj);
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