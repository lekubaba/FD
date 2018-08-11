var mongoose = require('./connect.js');

var Schema = mongoose.Schema;

//用户数据模型

var userSchema = new Schema({
	number:Number,
	time:String
});


var User = mongoose.model('user',userSchema);


module.exports.User = User;