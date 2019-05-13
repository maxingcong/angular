var express = require('express'),
    app = express();
	app.use(express.static( __dirname +'/public'));//通过管道链  使用express 的static 方法访问静态文件资源（css/js/img等）
	app.get('/contactList',function(req,res){
		console.log('Get request');
		t1 = {
			name:'张三',
			email:'zhagnsan',
			number:'111'
		};
		t2 = {
			name:'张三',
			email:'zhagnsan',
			number:'111'
		}
		t3 = {
			name:'张三',
			email:'zhagnsan',
			number:'111'
		}
		var contactList = [t1,t2,t3];
		res.json(contactList);
	})

	app.listen(3000,function(err,res ){//
		if(err){ console.log(err)
		}else {
			console.log(res)
			//<!---address.address+','+--->
		}
	});
	console.log('server linstenr localhost:3000')