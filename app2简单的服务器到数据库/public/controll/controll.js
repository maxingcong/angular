var app = angular.module('myApp',[]);
app.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log('测试')
	$http.get('/contactlist').success((res)=>{
		console.log('我的get请求成功')
		$scope.contactlist = res
	})
}]);
