var express = require('express'),
    app = express(),
	mongojs = require('mongojs'),
    bodyParser = require('body-parser'),// post 请求数据处理
	db = mongojs('test','');// 通过mongo  api 快速链接数据库
	 //user1//数据库的地址测试环境默认链接本地locahost：27017  也可直接写入表文件名没有自动创建表
	
	
	app.use(express.static( __dirname +'/public'));//通过管道链  使用express 的static 方法访问静态文件资源（css/js/img等）
	
	//这里处理请求，或可使用 路由组件处理
	app.use(bodyParser.json());//处理post请求体数据问题
	//查询
	app.get('/contactList',function(req,res){// get请求
		console.log('Get request');
	    db.users.find(function(err,docs){
			console.log(err,docs)
		    res.json(docs);
		})
	})
	//添加
	app.post('/contactList',function(req,res){//post请求
		console.log('post request',req,req.body,res);
	    db.users.insert(req.body, function(err,doc){
			console.log(err,doc)
		    res.json(doc);
		})
	})
     //删除
	app.delete('/contactlist/:id',function(req,res){//delete 请求
		var id = req.params.id;
		console.log(id)
		db.users.remove({_id: mongojs.ObjectId(id)},function(err,doc){
			console.log(err)
			res.json(doc)
		})
	})
	//查询单个数据
	app.get('/contactList/:id',function(req,res){// get请求
		console.log('Get request');
		var id = req.params.id;
	    db.users.findOne({_id: mongojs.ObjectId(id)},function(err,docs){
			console.log(err,docs)
		    res.json(docs);
		})
	})
	//修改
	app.put('/contactList/:id',function(req,res){//post请求
		console.log(1);
		var id = req.params.id;
		
		db.users.findAndModify({//findAndModify  查找修改
			query:{_id: mongojs.ObjectId(id)},
			update:{ $set: { name:req.body.name,
			                 email:req.body.email,
						     number:req.body.number
			                }
			        },
		new : true
		},
		function(err,doc){
			console.log(123123)
				res.json(doc)
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