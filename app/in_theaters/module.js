/**
 * Created by 丶香葱 on 2016/12/13.
 */
(function (angular) {
    angular.module("moviecat.in_theaters",['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/in_theaters/:page?',{
            templateUrl:'./in_theaters/view.html',
            controller:'InTheatersController'
        });
    }])
        .controller('InTheatersController',['$scope','$http','$routeParams','$route','itcastJSONP',
            function ($scope,$http,$routeParams,$route,itcastJSONP) {
        $scope.pageSize=5;
        $scope.curPage=$routeParams.page||1;
        var movieStart=($scope.curPage-1)*$scope.pageSize;
        itcastJSONP.jsonp('https://api.douban.com/v2/movie/in_theaters',{start:movieStart,count:$scope.pageSize},function (data) {
           console.log(data);
           $scope.movie=data;
           $scope.totalPages=Math.ceil(data.total/$scope.pageSize);
           $scope.$apply();
        });
        $scope.goPages=function (current) {
            if(current<=0||current>$scope.totalPages){
                return;
            }
            $route.updateParams({page:current});
        };
    }]);
})(angular)