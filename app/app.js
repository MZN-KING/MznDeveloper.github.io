'use strict';

var siteHeaderText={};

var minhasKamalPersonalWebsite = angular.module('minhasKamalPersonalWebsite', [
    'ngRoute',
    'homeModule',
    'contactModule',
    'workModule',
    'educationModule',
    'publicationsModule',
    'projectsModule',
    'experienceModule',
    'errorModule',
    'sidebarModule',
    'siteHeaderModule',
    'siteFooterModule',
]);

minhasKamalPersonalWebsite.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/error',
            });
    }
]);
