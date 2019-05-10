var express = require('express'),
    app = express(),
	mongojs = require('mongojs'),
    //db = mongojs('users','');// 通过mongo  api 快速链接数据库
	 db = mongojs('users','');// 通过mongo  api 快速链接数据库
	 //user1//数据库的地址测试环境默认链接本地locahost：27017  也可直接写入表文件名没有自动创建表
	
	
	app.use(express.static( __dirname +'/public'));//通过管道链  使用express 的static 方法访问静态文件资源（css/js/img等）
	app.get('/contactList',function(req,res){
		console.log('Get request');
	    db.users.find(function(err,docs){
			console.log(err,docs)
		    res.json(docs);
		})
	})

	app.listen(3000,function(err,res ){//
		if(err){ console.log(err)
		}else {
			console.log(res)
			//<!---address.address+','+--->
		}
	});
	console.log('server linstenr localhost:3000')