/**
 * Created by 丶香葱 on 2016/12/13.
 */
(function (angular) {
    angular.module('moviecat.top250',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/top250/:page?',{
                templateUrl:'./top250/view.html',
                controller:'Top250Controller'
            });
        }])
        .controller('Top250Controller',['$scope','$http','$routeParams','$route','itcastJSONP',
            function ($scope,$http,$routeParams,$route,itcastJSONP) {
            $scope.pageSize=5;
            $scope.curPage=$routeParams.page||1;
            var movieStart=($scope.curPage-1)*$scope.pageSize;
            itcastJSONP.jsonp('https://api.douban.com/v2/movie/top250',
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