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


var User = mongoose.model('user',userSchema);
var Code = mongoose.model('code',codeSchema);


module.exports.User = User;
module.exports.Code = Code;