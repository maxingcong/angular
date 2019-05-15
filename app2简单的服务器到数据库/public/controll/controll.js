var app = angular.module('myApp',[]);
app.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log('测试')
	
	//查询的封装
	var refresh =function(){
	     $http.get('/contactlist').success((res)=>{
     		console.log('我的get请求成功')
		    $scope.contactlist = res
	    })
	}
	/*
	$http.get('/contactlist').success((res)=>{
		console.log('我的get请求成功')
		$scope.contactlist = res
	})*/
	refresh()
	
	//数据的添加
	$scope.addContact = function(){ // 事件添加实在相应的变量控制器内部添加
	    console.log($scope.contact)
		$http.post('/contactlist',$scope.contact).success((res)=>{
		   console.log('我的post添加成功',res)
		   refresh()
	    })
	}
	
	
	//删除
	$scope.remove = function(id){
	    console.log('删除'+id)
        $http.delete('/contactlist/'+ id).success(function(res){
			console.log('delete 删除成功了',res)
			refresh()
		})		 
	}
	
	//数据的修改
	    // 点击编辑按钮查询相应数据
	$scope.edit = function(id){
		console.log('编辑查询详情')
		  $http.get('/contactlist/'+id).success((res)=>{
     		console.log('我的get请求成功')
		    $scope.contact = res
	    })
	}
	 //查询出数据  点击修改
	$scope.update = function(){
		console.log('编辑查询详情')
		  $http.put('/contactlist/'+$scope.contact._id,$scope.contact).success((res)=>{
     		console.log('我的get请求成功',res)
		    refresh()
	    })
	}
}]);

