(function () {  
    function onBridgeReady() {  
        WeixinJSBridge.call('hideOptionMenu');  
    }  
  
    if (typeof WeixinJSBridge == "undefined") {  
        if (document.addEventListener) {  
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);  
        } else if (document.attachEvent) {  
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);  
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);  
        }  
    } else {  
        onBridgeReady();  
    }  
    var useragent = navigator.userAgent;  
    if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {   
        var opened = window.open('about:blank', '_self');  
    }  
    else{  
        window.alert = function(name){  
            var iframe = document.createElement("IFRAME");  
            iframe.style.display="none";  
            iframe.setAttribute("src", 'data:text/plain,');  
            document.documentElement.appendChild(iframe);  
            window.frames[0].window.alert(name);  
            iframe.parentNode.removeChild(iframe);  
        }  
    }     
      
})()

$(document).ready(function(){

    $('.chaedu_a').click(function(e){
        var myreg = /^\d{8}$/;
        var creg = /^[\u2E80-\u9FFF]+$/;
        var ownername = $('.chaedu_input1').val();
        var gonghao = $('.chaedu_input2').val();
        var data = {ownername:ownername,gonghao:gonghao}; 
        if(creg.test(ownername)&&myreg.test(gonghao)){
            $.post('/check_gonghao',data,function(dataa,status){
                if(dataa.code===200){
                    window.location.href='/chaedu_zonghe';
                }
                if(dataa.code===400){
                    $(".chaedu_input2").val("姓名或工号不正确"); 
                }
                if(dataa.code===100){
                    $(".chaedu_input2").val("系统异常..."); 
                }
            });

        }else{
           if(ownername.length===0){
                 $(".chaedu_input1").val("请输入使用者姓名"); 
                 return;                
            }
            if(!creg.test(ownername)){ 
                 $(".chaedu_input1").val("姓名格式错误"); 
                 return;
            }

           if(gonghao.length===0){
                 $(".chaedu_input2").val("请输入使用者工号"); 
                 return;                
            }
            if(!myreg.test(gonghao)){ 
                 $(".chaedu_input2").val("工号格式错误"); 
                 return;
            }

        }

        e.preventDefault();

    })



})