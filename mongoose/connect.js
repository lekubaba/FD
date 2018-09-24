var mongoose = require('mongoose');
var logger = require('../utils/logger.js').logger;



// var DB_URL   = 'mongodb://wxf4754d57d42fee70:7ee0d9ca73ec7fef8ff38858b4bf3c2b@www.xiaohongxian.com:27906/feidai';
var DB_URL   =  'mongodb://feidai:yjx123456@feidai.com.ssdsedssddsfuldsdehonkodklsjefuli76576jdjd87yuh.xiaohongxian.com:27906/feidai';

mongoose.Promise = require('bluebird');

mongoose.connect(DB_URL,{useMongoClient: true});

mongoose.connection.on('connected',function(){
	logger.info('数据库连接成功');
});
mongoose.connection.on('error',function(){
	logger.error('连接异常');

});
mongoose.connection.on('disconnected',function(){
	logger.info('连接已经断开');

});


module.exports = mongoose;