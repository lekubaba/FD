var mongoose = require('./connect.js');

var Schema = mongoose.Schema;

//用户数据模型

var userSchema = new Schema({
	number:Number,
	authCode:Number,
	time:String
});

//授权码数据模型

var codeSchema = new Schema({
	authCode:Number,
	time:String
});

//评估数据模型
var pingSchema = new Schema({
	username:String,
	number:Number,
	zonghefen:Number,
	jikexishu:Number,
	chushiedu:Number,
	time:String
});

//工号数据模型

var haoSchema = new Schema({
	ownername:String,
	gonghao:Number,
	time:String
});

//买卖评估数据模型
var pgSchema = new Schema({
	username:String,
	number:Number,
	zonghefen:Number,
	jikexishu:Number,
	chushiedu:Number,
	gonghao:Number,
	jindu_:String,
	time:String
});


var User = mongoose.model('user',userSchema);
var Code = mongoose.model('code',codeSchema);
var Ping = mongoose.model('ping',pingSchema);
var Hao= mongoose.model('hao',haoSchema);
var Pg = mongoose.model('pg',pgSchema);



module.exports.User = User;
module.exports.Code = Code;
module.exports.Ping = Ping;
module.exports.Hao = Hao;
module.exports.Pg = Pg;