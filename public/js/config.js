/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/app/start.html");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('app', {
            abstract: true,
            url: "/app",
            templateUrl: "common/content.html",
        })
        .state('app.events', {
            url: '/start.html',
            templateUrl: 'events/events.html'
        })
        .state('app.messages', {
            url: '/messages.html',
            templateUrl: 'messages/messages.html'
        })
        .state('app.message_detail', {
            url: '/message_detail.html',
            templateUrl: 'messages/message_detail.html'
        })
        .state('app.members', {
            url: '/members.html',
            templateUrl: 'members/members.html'
        })
        .state('app.transactions', {
            url: '/transactions.html',
            templateUrl: 'transactions/transactions.html'
        });
}

angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
