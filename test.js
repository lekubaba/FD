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

/*
嘿，闺蜜
很高兴能够认识你，
初次被你的声音打动，被你神秘勾起了兴趣，
嘿，闺蜜
虽然我们还没能见面
你的味道是那么的熟悉
现在的我在畅想，如果第一次我们相遇

天空很蓝，有点风，我们站在城市最高楼，威风吹动你的发丝，好美，


可是现在，没有足够勇气与你相见
我怕我没有那么优秀，不能把你留住

嘿，闺蜜，你好，imissyou


闺蜜你好，
我对你微笑，
疯癫的我在为你歌唱，
天很黑，温度很高，
特别害怕城市的喧闹，
一个人
自嗨自嘲，
左右摇摆，为你绽放，

如果有人在我左右，
我希望是你为我停留，
哪怕是只有一秒
我就会觉得不枉此生
如果不曾深夜孤独过
怎知相遇其实是缘分
那个正真的我
miss you
哈哈，
闺蜜，你好

*/



