/**
 * Created by subtainishfaq on 10/12/16.
 */
(function() {



    angular.module('gameApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

        /**
         * Default path for any unmatched url
         */
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home',
                {
                    url: '/',
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl',

            })
            /*
            .state('edit', {
                url: '/edit',
                templateUrl: 'edit/edit.html',
                controller: 'EditCtrl'
            })*/
        // ... more routes .state

    }])
})();
