/**
 * Created by sxccias on 7/28/16.
 */
angular.module('myapp.factory',[])
    .factory('VideoData',['$http', function ($http) {
        var videoData = {
            getData: function () {
                return $http({
                    method:'GET',
                    url:'data/somevideos.json'})
                    .then(function (response) {
                    return response.data;
                });
            }
        };
        return videoData;
    }])
    .factory('MenuData',['$http', function ($http) {
        var menuData = {
            getData: function () {
                return $http({
                    method:'GET',
                    url:'data/menuData.json'})
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
        return menuData;
    }])
    .factory('UserVideoData',['$http', function ($http) {
        var userVideoData = {
            getData: function () {
                return $http({
                    method:'GET',
                    url:'data/userVideoData.json'})
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
        return userVideoData;
    }])
    .factory('DropboxFilesData',['$http', function ($http) {
        var dropboxFilesData = {
            getData: function () {
                return $http({
                    method:'GET',
                    url:'data/dropboxFiles.json'})
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
        return dropboxFilesData;
    }])
    .factory('DropboxProjectsData',['$http', function ($http) {
        var dropboxProjectsData = {
            getData: function () {
                return $http({
                    method:'GET',
                    url:'data/dropboxProjects.json'})
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
          return dropboxProjectsData;

    }])
    .service('selectedProjectInfo', function(){
        this.seletedProject;
    })
