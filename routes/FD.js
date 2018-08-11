let {User} = require('../mongoose/modelSchema')
var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var path = require('path');
var logger = require('../utils/logger').logger;
let {formatDate} = require('../utils/DateUtil');



router.get('/',function(req,res){
	res.render('number')
})

router.get('/choose',function(req,res){
	res.render('fd')
})


router.post('/save_number',function(req,res){
	var user = new User({
		number:req.body.number,
		time:formatDate('yyyy-MM-dd hh:mm:ss')
	})

	user.save(function(err){
		if(err){
			return logger.error(err)
		}
		var ret = {code:200};
		return res.json(ret);
	})
})



router.get('/baoming',function(req,res){
	res.render('yuyue')
})




module.exports = router;