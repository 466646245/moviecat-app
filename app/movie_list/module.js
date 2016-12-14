/**
 * Created by 丶香葱 on 2016/12/13.
 */
(function (angular) {
    angular.module('moviecat.movie_list',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/:movieType/:page?',{
                templateUrl:'./movie_list/view.html',
                controller:'MovieListController'
            });
        }])
        .controller('MovieListController',['$scope','$http','$routeParams','$route','itcastJSONP',
            function ($scope,$http,$routeParams,$route,itcastJSONP) {
            $scope.pageSize=5;
            $scope.curPage=$routeParams.page||1;
            var movieStart=($scope.curPage-1)*$scope.pageSize;
            itcastJSONP.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType,
                {start:movieStart,count:$scope.pageSize},function (data) {
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