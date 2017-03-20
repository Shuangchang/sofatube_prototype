/**
 * Created by sxccias on 7/11/16.
 */
var myapp = angular.module('myapp', ['myapp.controller','myapp.factory','ui.router','angularUtils.directives.dirPagination']);
myapp.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider){
    
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/explore.opening");

    $stateProvider

        .state('explore',{
            url:'/explore',
            templateUrl:"templates/explore.html",
            controller:'MainCtrl'
        })
        .state('explore.opening',{
            url:'/opening',
            templateUrl:"templates/opening.html"
        })
        .state('searchResult',{
            url:'/searchResult',
            templateUrl:"templates/searchResult.html"
        })
        .state('singleVideo', {
            url: "/singleVideo",
            templateUrl: "templates/singleVideo.html"
        })
        .state('login',{
             url:"/login",
             templateUrl:"templates/login.html"
        })
        .state('error',{
            url:'/error',
            templateUrl:"templates/error.html"
        })
        .state('event',{
            url:"/event",
            templateUrl:"templates/event.html"
        })
        .state('main',{
            url:"/mySofatube",
            templateUrl:"templates/main.html"
        })
        .state('main.myVideos', {
            url: "/myVideos",
            templateUrl: "templates/myVideos.html"
        })

        .state('main.oneVideo',{
            url:"/oneVideo",
            templateUrl:"templates/temp-single-video.html"
        })
        .state('main.changeThumbnail',{
            url:"/changeThumbnail",
            templateUrl:"templates/changeThumbnail.html"
        })
        .state('main.changePermission',{
            url:"/changePermission",
            templateUrl:"templates/changePermission.html"
        })
        .state('main.myScreenings', {
            url: "/myScreenings",
            templateUrl: "templates/myScreenings.html"
        })
        .state('main.myDropbox', {
            url: "/myDropbox",
            templateUrl: "templates/myDropbox.html"
        })
        .state('main.profile', {
            url: "/profile",
            templateUrl: "templates/profile.html"
        })
        .state('main.notifications', {
            url: "/notifications",
            templateUrl: "templates/notifications.html"
        })
        .state('main.screeningReceipt', {
            url: "/screeningReceipt",
            templateUrl: "templates/screeningReceipt.html"
        })
        .state('main.dropboxFiles', {
            url: "/dropboxFiles",
            templateUrl: "templates/dropboxFiles.html"
        })
        .state('main.Q&A', {
            url: "/QA",
            templateUrl: "templates/QA.html"
        })

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);

});
myapp.run(function($rootScope){
    $rootScope.$on('$viewContentLoaded', function(event, next) {
        componentHandler.upgradeAllRegistered();
    })});
myapp.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])

