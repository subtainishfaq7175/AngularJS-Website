/**
 * Created by subtainishfaq on 10/12/16.
 */
(function() {



    angular.module('gameApp').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

        /**
         * Default path for any unmatched url
         */
        $urlRouterProvider.otherwise('/notfound');
        $urlRouterProvider.when('', '/');

        $stateProvider
            .state('404',
                {
                    url: '/notfound',
                templateUrl: 'notfound/notfound.html',
                controller: 'notfoundCtrl'

            })

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
            .state('newspost/:id',
                {

                    resolve: {
                        // create an Object property called "messages"
                        // which will later be used for Dependency Injection
                        // inside our Controller. Inject any Services we need as usual.
                        resolvedNews: function (newspostService,$stateParams) {
                            // Return our Service call, that returns a Promise
                            return newspostService.getNewsPost($stateParams.id);
                        }
                    },
                    url: '/news/newspost',
                templateUrl: 'newspost/newspost.html',
                controller: 'NewspostCtrl'

            })
            .state('letsplay',
                {
                    url: '/letsplay',
                templateUrl: 'letsplay/letsplay.html',
                controller: 'LetsPlayCtrl'

            })
            .state('letsplaypost',
                {
                    url: '/letsplay/playpost',
                templateUrl: 'letsplaypost/letsplaypost.html',
                controller: 'letsPlayPostCtrl'

            })
            .state('calendar',
                {
                    url: '/calendar',
                    templateUrl: 'calendar/calendar.html',
                    controller: 'calendarCtrl'

                })
            .state('games',
                {
                    url: '/games',
                    templateUrl: 'games/games.html',
                    controller: 'gamesCtrl'

                })
            .state('gamespost',
                {
                    url: '/games/gamespost',
                    templateUrl: 'gamespost/gamespost.html',
                    controller: 'gamespostCtrl'

                })
            .state('walkthrough',
                {
                    url: '/walkthrough',
                    templateUrl: 'walkthrough/walkthrough.html',
                    controller: 'walkthroughCtrl'

                })
            .state('walkthroughpost',
                {
                    url: '/walkthrough/reader',
                    templateUrl: 'walkthroughpost/walkthroughpost.html',
                    controller: 'walkthroughpostCtrl'

                })
            .state('faq',
                {
                    url: '/faq',
                    templateUrl: 'faq/faq.html',
                    controller: 'faqCtrl'

                })
            .state('contact',
                {
                    url: '/contact',
                    templateUrl: 'contact/contact.html',
                    controller: 'contactCtrl'

                })
            .state('disclaimer',
                {
                    url: '/disclaimer',
                    templateUrl: 'disclaimer/disclaimer.html',
                    controller: 'disclaimerCtrl'

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
