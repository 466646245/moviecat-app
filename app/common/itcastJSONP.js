/**
 * Created by 丶香葱 on 2016/12/13.
 */
(function (angular) {
    angular.module('moviecat.jsonp',[])
        .service('itcastJSONP',['$window',function ($window) {
            var doc=$window.document;
            this.jsonp=function (url,params,callback) {
                url+='?';
                for (var k in params){
                    url+=k+'='+params[k]+'&';
                }
                var callbackName='itcast_jsonp_'+(new Date()-0);
                url +='callback='+callbackName;
                var script=doc.createElement('script');
                script.src=url;
                doc.body.appendChild(script);
                $window[callbackName]=function (data) {
                    callback(data);
                };
            };
        }])
})(angular)