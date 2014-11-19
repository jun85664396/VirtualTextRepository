global.config = require("./config");
global.redis = require("redis");
var redis_util = require("./lib/redis");
var express = require("express");
var bodyParser = require('body-parser')
var ejs = require("ejs");
var app = express();

//Express Configure
app.listen(8000,function(req,res){console.log("TextRepository")});
app.use(bodyParser());
app.use("/assets",express.static(__dirname + "/assets"));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/');

//Mapping
app.get("/",function(req,res){
	res.render("index");
});

app.get("/t/*",function(req,res){
	redis_util.getRedisText({"key":req.params['0']},function(opt){
		var msg = "";
		if(opt.status){
			msg = opt.msg === null ? "":opt.msg;
		}
		res.render("repository",
							 {
								 "keys":req.params['0'],
								 "msg":msg
							 });
	});
});

app.put("/t/*",function(req,res){
	res.contentType("json");
	redis_util.setRedisText({"key":req.params['0'],"msg":req.body.msg},function(opt){
		res.send(opt.status);
	});
});
