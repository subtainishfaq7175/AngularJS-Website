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
                controller: 'HomeCtrl'

            })
            .state('news',
                {
                    url: '/news',
                templateUrl: 'news/news.html',
                controller: 'NewsCtrl'

            })
            .state('newspost',
                {
                    url: '/news/newspost',
                templateUrl: 'newspost/newspost.html',
                controller: 'NewspostCtrl'

            })
            .state('letsplay',
                {
                    url: '/letsplay',
                templateUrl: 'letsplay/letsplay.html',
                controller: 'LetsPlayCtrl'

            });

            /*
            .state('edit', {
                url: '/edit',
                templateUrl: 'edit/edit.html',
                controller: 'EditCtrl'
            })*/
        // ... more routes .state

    }])
})();
