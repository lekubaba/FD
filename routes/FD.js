var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var path = require('path');
var logger = require('../utils/logger').logger;
let {formatDate} = require('../utils/DateUtil');



router.get('/',function(req,res){
	res.render('fd')
})

router.get('/baoming',function(req,res){
	res.render('yuyue')
})


module.exports = router;