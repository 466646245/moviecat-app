/**
 * Created by 丶香葱 on 2016/12/15.
 */
(function (angular) {
    angular.module('moviecat.autoActive',[])
        .directive('autoActive',['$location',function ($location) {
            return{
                link:function (scope,element) {
                    scope.location=$location;
                    scope.$watch('location.url()',function (newValue) {
                        var aLink=element.children().attr('href');
                        if(aLink.indexOf(newValue)>-1){
                            element.parent().children().removeClass('active');
                            element.addClass('active');
                        }
                    });
                }
            }
        }])
})(angular)