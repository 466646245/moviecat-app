/**
 * Created by 丶香葱 on 2016/12/12.
 */
(function (angular) {
    angular.module('moviecat.home',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/home_page',{
                templateUrl:'./home/view.html'
            });
        }])
})(angular)