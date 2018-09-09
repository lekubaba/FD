$(document).ready(function(){

    $('.chaedu_a').click(function(e){
        var myreg = /^\d{8}$/;
        var creg = /^[\u2E80-\u9FFF]+$/;
        var ownername = $('.chaedu_input1').val();
        var gonghao = $('.chaedu_input2').val();
        var data = {ownername:ownername,gonghao:gonghao}; 
        if(creg.test(ownername)&&myreg.test(gonghao)){
            $.post('/gonghao',data,function(dataa,status){
                if(dataa.code===200){
                    $(".chaedu_input2").val("工号添加成功"); 
                }
                if(dataa.code===400){
                    $(".chaedu_input2").val("工号已存在，不能重复添加"); 
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
                 $(".chaedu_input2").val("请输入工号"); 
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