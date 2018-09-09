var all_money = 500000;
var first_money = 2500;
var first_month = 27;
var sec_money = 0;
var sec_month = 0;
var third_money = 0;
var third_month = 0;
var ka_num = 5;
var ka_zong = 100000;
var ka_shengyu = 90000;
var ka_six = 8000;
var ka_first = 70;
var ka_years = 30000;
var ka_last = 15000;
var ka_laste = 15000;
var loan_num = 5;
var loan_all=100000;
var loan_six = 2;
var loan_three = 1;
var loan_one = 0;
var other_yc = "否";
var other_dq = "否";
var other_dc = "否";
var other_db = "否";
var other_zx = "否";
var other_gz = "否";
var other_gjj = "否";
var other_gjje = 0;
var other_six = 3;
var other_three = 2;
var other_one = 1;
var other_yfs = 1;
var other_yqs = 0;
var other_yqall = 0;


//将金额转化成万为单位的值
var Maths =function(value){
	//将数值转换成字符串
	var str = String(value);
	//数值长度
	var len = str.length;
	if(len===4){
		return Number('0.8');
	}
	if(len===5){
		return Number(str.slice(0,1)+'.'+str.slice(1,2));
	}
	if(len===6){
		return Number(str.slice(0,2)+'.'+str.slice(2,3));
	}
}


var zonghefen =79;
var jikexishu =3.7;
var chushiedu = 120000;

if(jikexishu===3.7){
	chushiedu = Maths(Math.round(chushiedu*1.2));
}else if(jikexishu===3.8){
	chushiedu =chushiedu;
}else if(jikexishu===3.9){
	chushiedu =chushiedu*0.75;
}
console.log(chushiedu)