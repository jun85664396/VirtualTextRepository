//CreateClient
var redisClient = redis.createClient({"auth_pass":config.redis.pass});

function getRedisText(opt,callback){
	redisClient.hget(config.redis.repository,opt.key,function(err,reply){
		if(err){
			callback({"status":false,"msg":err});
		}
		callback({"status":true,"msg":reply});
	});
}
function setRedisText(opt,callback){
	redisClient.hset(config.redis.repository,opt.key,opt.msg,function(err,reply){
		if(err){
			callback({"status":false,"msg":err});
		}
		callback({"status":true,"msg":reply});
	});
}
module.exports = exports;
module.exports = 	{"getRedisText":getRedisText,
	"setRedisText":setRedisText};
