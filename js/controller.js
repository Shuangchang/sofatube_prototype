/**
 * Created by sxccias on 7/28/16.
 */
angular.module('myapp.controller',['myapp.factory','angularUtils.directives.dirPagination'])
    .controller('MainCtrl', function ($state) {
    $state.transitionTo('explore.opening');
    })
    .controller('advancedSearchCtrl', function($scope) {
        $scope.showAdvancedSearch = false;
    })
    //

    .controller('scrollCtrl', ['$anchorScroll', '$location', '$scope',
        function ($anchorScroll, $location, $scope) {
            $scope.gotoExplore = function(id) {
                $location.hash(id);
                // call $anchorScroll()
                $anchorScroll();
            };
        }
    ])

    .controller('videoDataCtrl',['$scope', 'VideoData',function($scope, VideoData){
        $scope.VideoData = [];
        $scope.showLimit = 6;
        VideoData.getData().then(function (response) {
            $scope.VideoData = response;

        });
        $scope.getIframeSrc = function(src) {
            return 'https://www.youtube.com/embed/' + src;
        };
    }])

    .controller('menuDataCtrl',['$scope', 'MenuData',function($scope, MenuData){
        $scope.MenuData = [];
        MenuData.getData().then(function (response) {
            $scope.MenuData = response;

        });
    }])

    .controller('userVideoDataCtrl',['$scope', 'UserVideoData',function($scope, UserVideoData){
        $scope.userVideoData = [];
        $scope.seleted = {};
        UserVideoData.getData().then(function (response) {
            $scope.userVideoData = response;

        });
        $scope.getIframeSrc = function(src) {
            return 'https://www.youtube.com/embed/' + src;
        };
        // $scope.selectProject = function(x){
        //     for(var i = 0; i<$scope.userVideoData.length; i++)
        //     {
        //         if($scope.userVideoData[i].id == x.id){
        //             $scope.seleted = $scope.userVideoData[i];
        //         }
        //         return $scope.seleted;
        //         alert($scope.seleted.title);
        //     }
        // }
    }])
    .controller('dropboxFilesDataCtrl',['$scope', 'DropboxFilesData',function($scope, DropboxFilesData){
        $scope.DropboxFilesData = [];
        DropboxFilesData.getData().then(function (response) {
            $scope.DropboxFilesData = response;
        });
    }])
    .controller('dropboxProjectsDataCtrl',['$scope', 'DropboxProjectsData', 'selectedProjectInfo',function($scope, DropboxProjectsData, selectedProjectInfo){
        $scope.DropboxProjectsData = [];
        DropboxProjectsData.getData().then(function (response) {
            $scope.DropboxProjectsData = response;
        });
        console.log("howdy"+parseInt($scope.DropboxProjectsData.length));
        $scope.seletedProject = {};
        // $scope.select = function(project){
        //     for(var i=0; i<DropboxProjectsData.length; i++){
        //
        //     }
        // }
        // $scope.pass = function (project) {
        //     console.log("pass "+project);
        //     selectedProjectInfo.selectedProject = project;
        //
        // }
    }])
    .controller('dropboxProjectsFileDataCtrl',['$scope','selectedProjectInfo', function($scope, selectedProjectInfo){
        // $scope.seleted = selectedProject.selectedProject;
    }])
    .controller('showDescriptionCtrl', function($scope){
        $scope.showDescription = false;

    })

// pagination
myapp.controller('MyController', ['$scope','VideoData', function($scope, VideoData){
    $scope.currentPage = 1;
    $scope.pageSize = 6;

    VideoData.getData().then(function (response) {
        $scope.VideoData = response;

    });
    $scope.getIframeSrc = function(src) {
        return 'https://www.youtube.com/embed/' + src;
    };

    $scope.pageChangeHandler = function(num) {
        console.log('page changed to ' + num);
    };
}])

function OtherController($scope) {
    $scope.pageChangeHandler = function(num) {
        console.log('going to page ' + num);
    };
}
myapp.controller('OtherController', OtherController);