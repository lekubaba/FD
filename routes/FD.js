let {User,Code} = require('../mongoose/modelSchema')
var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var path = require('path');
var logger = require('../utils/logger').logger;
let {formatDate} = require('../utils/DateUtil');


//首页

router.get('/',function(req,res){
	res.render('number')
})

//选择通道页面

router.get('/choose',function(req,res){
	res.render('fd')
})

//保存输入的手机号

router.post('/save_number',function(req,res){
	var user = new User({
		number:req.body.number,
		authCode:req.body.authCode,
		time:formatDate('yyyy-MM-dd hh:mm:ss')
	})

	Code.find({authCode:req.body.authCode},function(err,results){
		if(err){
			return logger.error(err)
		}else{

			if(results.length>0){

				user.save(function(err){
					if(err){
						return logger.error(err)
					}
					var ret = {code:200};
					return res.json(ret);
				})


			}else{
				return res.json({code:300});
			}			

		}
	})


})

//打开添加授权码页面

router.get('/open_addcode',function(req,res){
	res.render('addcode');
})

//添加授权码
router.post('/add_authCode',function(req,res){
	var code = new Code({
		authCode:req.body.authCode,
		time:formatDate('yyyy-MM-dd hh:mm:ss')
	})

	Code.find({authCode:req.body.authCode},function(err,result){
		if(err){
			return logger.error(err)
		}else{
			if(result.length>0){
				var ret = {code:400};
				return res.json(ret);
			}else{

				code.save(function(err){
					if(err){
						return logger.error(err)
					}
					var ret = {code:200};
					return res.json(ret);
				})

			}
		}
	})


})



router.get('/baoming',function(req,res){
	res.render('yuyue')
})




module.exports = router;