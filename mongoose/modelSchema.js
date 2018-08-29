var mongoose = require('./connect.js');

var Schema = mongoose.Schema;

//用户数据模型

var userSchema = new Schema({
	number:Number,
	authCode:Number,
	time:String
});

var codeSchema = new Schema({
	authCode:Number,
	time:String
});

var pingSchema = new Schema({
	username:String,
	number:Number,
	zonghefen:Number,
	jikexishu:Number,
	chushiedu:Number,
	time:String
});


var User = mongoose.model('user',userSchema);
var Code = mongoose.model('code',codeSchema);
var Ping = mongoose.model('ping',pingSchema);


module.exports.User = User;
module.exports.Code = Code;
module.exports.Ping = Ping;