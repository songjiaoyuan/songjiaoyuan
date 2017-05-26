var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'news', //数据库名称
	port: 3306
})
router.post("/zhuce", function(req, res) {
	console.log("abc");
//	var uname = req.body.uname;
	var pwd = req.body.password;
	var tel = req.body.tel;
	//	if(uname == "wang") {
	//		res.send("失败")
	//	} else if(uname != "" && uname != "admin") {
	//		res.send("成功")
	//	} else if(uname == "admin") {
	//		res.send("占用")
	//	} else {
	//		res.send("失败")
	//	}
	getAllUsers(tel, function(err, result) {
		if(result.length > 0) {
			res.send({ flag: 2 }) //被占用
			return;
		} else if(result.length == 0) {
			save(tel, pwd, function(err, result) {
				//res.send({ flag: 1 });
				if(result.insertId>0){
					res.send({ flag: 1 });//注册成功
				}else if(err){
					res.send({ flag: 0 });//注册失败
				}else{
					res.send({ flag: 0 });//注册失败
				}
			})
		}
	})
})

//获取用户名
function getAllUsers(aname, callback) {
	pool.getConnection(function(err, connection) {
		var getAllUsers_Sql = 'select * from  user where tel=?';
		connection.query(getAllUsers_Sql, [aname], function(err, result) {
			console.log("result:" + result);
			if(err) {
				console.log("getAllUsers Error: " + err.message);
				return;
			}
			connection.release(); //释放连接
			callback(err, result);
		});
	});
}

//将用户信息存入数据库
function save(aname, pwd, callback) {
	pool.getConnection(function(err, connection) {
		var Sql = 'insert into user (tel,password) values (?,?)';
		connection.query(Sql, [aname, pwd], function(err, result) {
			console.log("result:" + result);
			if(err) {
				console.log("save Error: " + err.message);
				return;
			}
			connection.release(); //释放连接
			callback(err, result);
		});
	});
}

module.exports = router;
