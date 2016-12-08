/**
 * Created by subtainishfaq on 10/13/16.
 */

angular.module("gameApp").factory('faqService',['$http','SeatEatsConstants', function($http,SeatEatsConstants){

    var home = {};

    home.getFaqs= function ()
    {

        var promise = $http.get(SeatEatsConstants.AppUrlApi+'faqs');
        return promise;
    };

    return home;

}]);