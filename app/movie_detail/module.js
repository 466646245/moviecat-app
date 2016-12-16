/**
 * Created by 丶香葱 on 2016/12/16.
 */
(function (angular) {
    angular.module('moviecat.details',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/details/:id?',{
                templateUrl:'./movie_detail/view.html',
                controller:'DetailController'
            })
        }])
        .controller('DetailController',['$scope','$routeParams','itcastJSONP',
            function ($scope,$routeParams,itcastJSONP) {
                var id=$routeParams.id;
                itcastJSONP.jsonp('https://api.douban.com/v2/movie/subject/'+id,{},                 function (data) {
                    $scope.movieDetail=data;
                    console.log(data);
                    $scope.$apply();
                });
            }]);
})(angular)