accessid = ''
accesskey = ''
host = ''
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
now = timestamp = Date.parse(new Date()) / 1000;

//图片
var arr1 = [
    {
        1 : 'anyixian-min.jpg',
        2 : 'caiyilin-min.jpg',
        3 : 'chenqiaoen-min.jpg',
        4 : 'chenyanxi-min.jpg',
        5 : 'fanbingbing-min.jpg',
        6 : 'guanzhilin-min.jpg',
        7 : 'lizhi-min.jpg',
        8 : 'lijiaxin-min.jpg',
        9 : 'linxinru-min.jpg',
        10 : 'linyichen-min.jpg',
        11 : 'linzhiling-min.jpg',
        12 : 'liujialing-min.jpg',
        13 : 'meiyanfang-min.jpg',
        14 : 'songhuiqiao-min.jpg',
        15 : 'suotang-min.jpg',
        16 : 'wangzuxian-min.jpg',
        17 : 'xuxiyuan-min.jpg',
        18 : 'yangmi-min.jpg',
        19 : 'zhangmanyu-min.jpg',
        20 : 'zhongchuhong-min.jpg',
        21 : 'anyixian-min.jpg',
        22 : 'caiyilin-min.jpg',
        23 : 'chenqiaoen-min.jpg',
        24 : 'chenyanxi-min.jpg',
        25 : 'fanbingbing-min.jpg',
        26 : 'guanzhilin-min.jpg',
        27 : 'lizhi-min.jpg',
        28 : 'lijiaxin-min.jpg',
        29 : 'linxinru-min.jpg',
        30 : 'linyichen-min.jpg',
        31 : 'linzhiling-min.jpg',
        32 : 'liujialing-min.jpg',
        33 : 'meiyanfang-min.jpg',
        34 : 'songhuiqiao-min.jpg',
        35 : 'suotang-min.jpg',
        36 : 'wangzuxian-min.jpg',
        37 : 'xuxiyuan-min.jpg',
        38 : 'yangmi-min.jpg',
        39 : 'zhangmanyu-min.jpg',
        40 : 'zhongchuhong-min.jpg',
        41 : 'anyixian-min.jpg',
        42 : 'caiyilin-min.jpg',
        43 : 'chenqiaoen-min.jpg',
        44 : 'chenyanxi-min.jpg',
        45 : 'fanbingbing-min.jpg',
        46 : 'guanzhilin-min.jpg',
        47 : 'lizhi-min.jpg',
        48 : 'lijiaxin-min.jpg',
        49 : 'linxinru-min.jpg',
        50 : 'linyichen-min.jpg',
        51 : 'linzhiling-min.jpg',
        52 : 'liujialing-min.jpg',
        53 : 'meiyanfang-min.jpg',
        54 : 'songhuiqiao-min.jpg',
        55 : 'suotang-min.jpg',
        56 : 'wangzuxian-min.jpg',
        57 : 'xuxiyuan-min.jpg',
        58 : 'yangmi-min.jpg',
        59 : 'zhangmanyu-min.jpg',
        60 : 'zhongchuhong-min.jpg',
        61 : 'anyixian-min.jpg',
        62 : 'caiyilin-min.jpg',
        63 : 'chenqiaoen-min.jpg',
        64 : 'chenyanxi-min.jpg',
        65 : 'fanbingbing-min.jpg',
        66 : 'guanzhilin-min.jpg',
        67 : 'lizhi-min.jpg',
        68 : 'lijiaxin-min.jpg',
        69 : 'linxinru-min.jpg',
        70 : 'linyichen-min.jpg',
        71 : 'linzhiling-min.jpg',
        72 : 'liujialing-min.jpg',
        73 : 'meiyanfang-min.jpg',
        74 : 'songhuiqiao-min.jpg',
        75 : 'suotang-min.jpg',
        76 : 'wangzuxian-min.jpg',
        77 : 'xuxiyuan-min.jpg',
        78 : 'yangmi-min.jpg',
        79 : 'zhangmanyu-min.jpg',
        80 : 'zhongchuhong-min.jpg',
        81 : 'anyixian-min.jpg',
        82 : 'caiyilin-min.jpg',
        83 : 'chenqiaoen-min.jpg',
        84 : 'chenyanxi-min.jpg',
        85 : 'fanbingbing-min.jpg',
        86 : 'guanzhilin-min.jpg',
        87 : 'lizhi-min.jpg',
        88 : 'lijiaxin-min.jpg',
        89 : 'linxinru-min.jpg',
        90 : 'linyichen-min.jpg',
        91 : 'linzhiling-min.jpg',
        92 : 'liujialing-min.jpg',
        93 : 'meiyanfang-min.jpg',
        94 : 'songhuiqiao-min.jpg',
        95 : 'suotang-min.jpg',
        96 : 'wangzuxian-min.jpg',
        97 : 'xuxiyuan-min.jpg',
        98 : 'yangmi-min.jpg',
        99 : 'zhangmanyu-min.jpg',
        100 : 'zhongchuhong-min.jpg'
    },
    {
        1 : 'dengchao-min.jpg',
        2 :  'guodegang-min.jpg',
        3 : 'huge-min.jpg',
        4 : 'jindong-min.jpg',
        5 : 'liming-min.jpg',
        6 :  'libingxian-min.jpg',
        7 :  'liminhao-min.jpg',
        8 :  'liangchaowei-min.jpg',
        9 :  'liudehua-min.jpg',
        10 : 'songchengxian-min.jpg',
        11 : 'sunhonglei-min.jpg',
        12 :'wanghan-min.jpg',
        13 : 'wangbaoqiang-min.jpg',
        14 :'wenzhang-min.jpg',
        15 : 'wushixun-min.jpg',
        16 : 'wuyifan-min.jpg',
        17 : 'wuyanzu-min.jpg',
        18 :'xuanbin-min.jpg',
        19 : 'zhangxueyou-min.jpg',
        20 : 'zhouxingchi-min.jpg',
        21 :'dengchao-min.jpg',
        22 : 'guodegang-min.jpg',
        23 :'huge-min.jpg',
        24 :'jindong-min.jpg',
        25 :'liming-min.jpg',
        26 : 'libingxian-min.jpg',
        27 : 'liminhao-min.jpg',
        28 : 'liangchaowei-min.jpg',
        29 : 'liudehua-min.jpg',
        30 : 'songchengxian-min.jpg',
        31 : 'sunhonglei-min.jpg',
        32 :'wanghan-min.jpg',
        33 : 'wangbaoqiang-min.jpg',
        34 :'wenzhang-min.jpg',
        35 : 'wushixun-min.jpg',
        36 : 'wuyifan-min.jpg',
        37 : 'wuyanzu-min.jpg',
        38 :'xuanbin-min.jpg',
        39 : 'zhangxueyou-min.jpg',
        40 : 'zhouxingchi-min.jpg',
        41 :'dengchao-min.jpg',
        42 : 'guodegang-min.jpg',
        43 :'huge-min.jpg',
        44 :'jindong-min.jpg',
        45 :'liming-min.jpg',
        46 : 'libingxian-min.jpg',
        47 : 'liminhao-min.jpg',
        48 : 'liangchaowei-min.jpg',
        49 : 'liudehua-min.jpg',
        50 : 'songchengxian-min.jpg',
        51 : 'sunhonglei-min.jpg',
        52 :'wanghan-min.jpg',
        53 : 'wangbaoqiang-min.jpg',
        54 :'wenzhang-min.jpg',
        55 : 'wushixun-min.jpg',
        56 : 'wuyifan-min.jpg',
        57 : 'wuyanzu-min.jpg',
        58 :'xuanbin-min.jpg',
        59 : 'zhangxueyou-min.jpg',
        60 : 'zhouxingchi-min.jpg',
        61 :'dengchao-min.jpg',
        62 : 'guodegang-min.jpg',
        63 :'huge-min.jpg',
        64 :'jindong-min.jpg',
        65 :'liming-min.jpg',
        66 : 'libingxian-min.jpg',
        67 : 'liminhao-min.jpg',
        68 : 'liangchaowei-min.jpg',
        69 : 'liudehua-min.jpg',
        70 : 'songchengxian-min.jpg',
        71 : 'sunhonglei-min.jpg',
        72 :'wanghan-min.jpg',
        73 : 'wangbaoqiang-min.jpg',
        74 :'wenzhang-min.jpg',
        75 : 'wushixun-min.jpg',
        76 : 'wuyifan-min.jpg',
        77 : 'wuyanzu-min.jpg',
        78 :'xuanbin-min.jpg',
        79 : 'zhangxueyou-min.jpg',
        80 : 'zhouxingchi-min.jpg',
        81 :'dengchao-min.jpg',
        82 : 'guodegang-min.jpg',
        83 :'huge-min.jpg',
        84 :'jindong-min.jpg',
        85 :'liming-min.jpg',
        86 : 'libingxian-min.jpg',
        87 : 'liminhao-min.jpg',
        88 : 'liangchaowei-min.jpg',
        89 : 'liudehua-min.jpg',
        90 : 'songchengxian-min.jpg',
        91 : 'sunhonglei-min.jpg',
        92 :'wanghan-min.jpg',
        93 : 'wangbaoqiang-min.jpg',
        94 :'wenzhang-min.jpg',
        95 : 'wushixun-min.jpg',
        96 : 'wuyifan-min.jpg',
        97 : 'wuyanzu-min.jpg',
        98 :'xuanbin-min.jpg',
        99 : 'zhangxueyou-min.jpg',
        100 : 'zhouxingchi-min.jpg'
    }
];
//姓名
var arr2 = [
    {
        1 : '安以轩',
        2 : '蔡依林',
        3 : '陈乔恩',
        4 : '陈妍希',
        5 : '范冰冰',
        6 : '关之琳',
        7 : '黎姿' ,
        8 : '李嘉欣',
        9 : '林心如',
        10 :'林依晨',
        11 :'林志玲',
        12 :'刘嘉玲',
        13 :'梅艳芳',
        14 :'宋慧乔',
        15 :'隋棠' ,
        16 :'王祖贤',
        17 :'徐熙媛',
        18 :'杨幂' ,
        19 :'张曼玉',
        20 :'钟楚红',
        21 :'安以轩',
        22 :'蔡依林',
        34 :'陈乔恩',
        24 :'陈妍希',
        25 :'范冰冰',
        26 :'关之琳',
        27 :'黎姿' ,
        28 :'李嘉欣',
        29 :'林心如',
        30 :'林依晨',
        31 :'林志玲',
        32 :'刘嘉玲',
        33 :'梅艳芳',
        34 :'宋慧乔',
        35 :'隋棠' ,
        36 :'王祖贤',
        37 :'徐熙媛',
        38 :'杨幂' ,
        39 :'张曼玉',
        40 :'钟楚红',
        41 :'安以轩',
        42 :'蔡依林',
        43 :'陈乔恩',
        44 :'陈妍希',
        45 :'范冰冰',
        46 :'关之琳',
        47 :'黎姿' ,
        48 :'李嘉欣',
        49 :'林心如',
        50 :'林依晨',
        51 :'林志玲',
        52 :'刘嘉玲',
        53 :'梅艳芳',
        54 :'宋慧乔',
        55 :'隋棠' ,
        56 :'王祖贤',
        57 :'徐熙媛',
        58 :'杨幂' ,
        59 :'张曼玉',
        60 :'钟楚红',
        61 :'安以轩',
        62 :'蔡依林',
        63 :'陈乔恩',
        64 :'陈妍希',
        65 :'范冰冰',
        66 :'关之琳',
        67 :'黎姿' ,
        68 :'李嘉欣',
        69 :'林心如',
        70 :'林依晨',
        71 :'林志玲',
        72 :'刘嘉玲',
        73 :'梅艳芳',
        74 :'宋慧乔',
        75 :'隋棠' ,
        76 :'王祖贤',
        77 :'徐熙媛',
        78 :'杨幂' ,
        79 :'张曼玉',
        80 :'钟楚红',
        81 :'安以轩',
        82 :'蔡依林',
        83 :'陈乔恩',
        84 :'陈妍希',
        85 :'范冰冰',
        86 :'关之琳',
        87 :'黎姿' ,
        88 :'李嘉欣',
        89 :'林心如',
        90 :'林依晨',
        91 :'林志玲',
        92 :'刘嘉玲',
        93 :'梅艳芳',
        94 :'宋慧乔',
        95 :'隋棠' ,
        96 :'王祖贤',
        97 :'徐熙媛',
        98 :'杨幂' ,
        99 :'张曼玉',
        100 :'钟楚红'
    },
    {
        1 : '邓超' ,
        2 : '郭德纲',
        3 : '胡歌' ,
        4 : '靳东' ,
        5 : '黎明' ,
        6 : '李秉宪',
        7 : '李敏镐',
        8 : '梁朝伟',
        9 : '刘德华',
        10 :'宋承宪',
        11 :'孙红雷',
        12 :'汪涵' ,
        13 :'王宝强',
        14 :'文章' ,
        15 :'吴世勋',
        16 :'吴彦祖',
        17 :'吴亦凡',
        18 :'玄彬' ,
        19 :'张学友',
        20 :'周星驰',
        21 :'邓超' ,
        22 :'郭德纲',
        34 :'胡歌' ,
        24 :'靳东' ,
        25 :'黎明' ,
        26 :'李秉宪',
        27 :'李敏镐',
        28 :'梁朝伟',
        29 :'刘德华',
        30 :'宋承宪',
        31 :'孙红雷',
        32 :'汪涵' ,
        33 :'王宝强',
        34 :'文章' ,
        35 :'吴世勋',
        36 :'吴彦祖',
        37 :'吴亦凡',
        38 :'玄彬' ,
        39 :'张学友',
        40 :'周星驰',
        41 :'邓超' ,
        42 :'郭德纲',
        43 :'胡歌' ,
        44 :'靳东' ,
        45 :'黎明' ,
        46 :'李秉宪',
        47 :'李敏镐',
        48 :'梁朝伟',
        49 :'刘德华',
        50 :'宋承宪',
        51 :'孙红雷',
        52 :'汪涵' ,
        53 :'王宝强',
        54 :'文章' ,
        55 :'吴世勋',
        56 :'吴彦祖',
        57 :'吴亦凡',
        58 :'玄彬' ,
        59 :'张学友',
        60 :'周星驰',
        61 :'邓超' ,
        62 :'郭德纲',
        63 :'胡歌' ,
        64 :'靳东' ,
        65 :'黎明' ,
        66 :'李秉宪',
        67 :'李敏镐',
        68 :'梁朝伟',
        69 :'刘德华',
        70 :'宋承宪',
        71 :'孙红雷',
        72 :'汪涵' ,
        73 :'王宝强',
        74 :'文章' ,
        75 :'吴世勋',
        76 :'吴彦祖',
        77 :'吴亦凡',
        78 :'玄彬' ,
        79 :'张学友',
        80 :'周星驰',
        81 :'邓超' ,
        82 :'郭德纲',
        83 :'胡歌' ,
        84 :'靳东' ,
        85 :'黎明' ,
        86 :'李秉宪',
        87 :'李敏镐',
        88 :'梁朝伟',
        89 :'刘德华',
        90 :'宋承宪',
        91 :'孙红雷',
        92 :'汪涵' ,
        93 :'王宝强',
        94 :'文章' ,
        95 :'吴世勋',
        96 :'吴彦祖',
        97 :'吴亦凡',
        98 :'玄彬' ,
        99 :'张学友',
        100 :'周星驰'
    }
];
// 判断才做系统
var ua = navigator.userAgent;
var phone;
if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {//安卓手机
  phone = 0;
} else if (ua.indexOf('iPhone') > -1) {//苹果手机
  phone = 1;
  
}
// 缓存图片
var img1 = new Array(100);
var img2 = new Array(100);
var img1Arr = [];
var img2Arr = [];
for (var i = 0; i < 100; i++) {
    img1[i]=new Image();
    img1Arr[i] = img1[i].src = '../../images/female/'+arr1[0][i]+'';
}
for (var i = 0; i < 100; i++) {
    img2[i]=new Image();
    img2Arr[i] = img2[i].src = '../../images/male/'+arr1[1][i]+'';
    if(i == 99){
    }
}
// 获取url,因为下面的clientId需要从url中拿，所以要写在声明前面
function UrlSearch(){
    var name,value;
    var str=location.href; //取得整个地址栏
    var num=str.indexOf("?")
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            this[name]=value;
         }
    }
    console.log(str)
}
var Request = new UrlSearch(); //实例化
var myClientId = Request.clientId;



// // 换肤
// var skin = getQueryStringByName('model'); //获取地址栏的model，用来判读加载皮肤
// if(skin==2){
//     $('#skin').attr('href','../../base/starSkin2.css')
// }else if(skin==3){
//     $('#skin').attr('href','../../base/starSkin3.css')
// }




//获取参数
// var data = JSON.parse(localStorage.getItem('data'));

//获取性别

function add(data){
     $.post(HOSTNAME+'/pcStarTest',data,function(response){
        console.log(response);
        if(response.code == 1){
            //加载图片
            $('#big_img').attr('src',response.starsData[4].star.picture);
            $('#small_img1').attr('src',response.starsData[0].star.picture);
            $('#small_img2').attr('src',response.starsData[1].star.picture);
            $('#small_img3').attr('src',response.starsData[2].star.picture);
            $('#small_img4').attr('src',response.starsData[3].star.picture);

            //加载国家
            $('#country').text(response.starsData[0].star.country.name);
            //加载性别
            if(response.starsData[0].star.sex == 0){
                $('#ta').text("她");
            }else{
                $('#ta').text("他");
            }

            //加载相似度
            if(parseInt(Math.round(response.starsData[4].confidence))+10 > 100){
                $('#percent_mark1').text(parseInt(Math.round(response.starsData[4].confidence))+'%');
            }else{
                $('#percent_mark1').text(parseInt(Math.round(response.starsData[4].confidence))+10+'%');
            }
            $('#percent_mark2').text(parseInt(Math.round(response.starsData[1].confidence))+10+'%');
            $('#percent_mark3').text(parseInt(Math.round(response.starsData[2].confidence))+10+'%');
            $('#percent_mark4').text(parseInt(Math.round(response.starsData[3].confidence))+10+'%');
            $('#percent').text(Math.round(response.starsData[0].confidence)+10+'%');


            //存储在客户端
            localStorage.setItem("stardata",JSON.stringify(response)); //字符串
            localStorage.setItem("wxarpt-my-uuid",response.uuid);
            console.log(localStorage.getItem("wxarpt-my-uuid"))
            localStorage.setItem("wxarpt-my-clientid",response.clientId);
            localStorage.setItem("mobile",response.mobile);
        }else{
            $('#picture0').show();
            $('#mask').hide();
            $('#picture1').hide();
            layer.alert(response.err+'，请上传清晰人脸照片');
        }

    })
}


// setTimeout(goprogress(sex),0);
// if(start == true){
//     alert(11)
// }


//进度条
function goprogress(sex){
    var pro=document.getElementsByTagName("progress")[0];
    gotoend(pro,0,sex);
}
//进度条
function gotoend(pro,value,sex){
    var value=value+1;
    if(phone == 0){
        $('#android').show();
        if(sex == '0'){
            //图片
            $('#android').attr('src', img1Arr[value]);
            //姓名
            $('#start_btn_f').text(arr2[0][value]);
        }else{
            //图片
            $('#android').attr('src', img2Arr[value]);
            //姓名
            $('#start_btn_f').text(arr2[1][value]);
        }
    }else{
        if(sex == '0'){
            //姓名
            $('#start_btn_f').text(arr2[0][value]);
        }else{
            //姓名
            $('#start_btn_f').text(arr2[1][value]);
        }
    }
    

    //进度条
    pro.value=value;
    if(value<100) {
        setTimeout(function(){gotoend(pro, value, sex);},20)
        if(value > 96){
            $('#picture1').hide();
        }
    }else{
        setTimeout(function(){
            // alert("任务完成")
            $('#picture2').fadeIn();
        },20);
    }
}



// 短信验证
$(function () {
    var code = 0 ; //在全局定义验证码
    //产生验证码
    var InterValObj; //timer变量，控制时间
    var count = 60; //间隔函数，1秒执行
    var curCount;//当前剩余秒数

    var testdata = JSON.parse(localStorage.getItem("stardata"));
    function createCode(){
        curCount = count;
        $('#code').attr("disabled","true" );
        console.log($('#phone').val())
        var mobile = $("#phone").val();
        if( mobile == ''){
            layer.alert('请输入手机号码获得验证码')
        }else{
            $.get(HOSTNAME+'/sendVerifyCode?mobile='+mobile,function (result) {

                if(result.code==1)
                {
                    InterValObj = window.setInterval(SetRemainTime, 1000);
                    $('#code').html("重发(" + curCount + ")");
                    layer.alert("短信验证码已发到您的手机,请查收");
                    console.log(curCount);
                }
                else{
                    layer.alert("短信验证码发送失败，请重新发送")
                }
            });
        }
    }
    //倒时开始
    function SetRemainTime() {
        if (curCount == 0) {
            window.clearInterval(InterValObj);// 停止计时器
            $('#code').html("获取验证码");
            $('#code').removeAttr("disabled");
        }else {
            curCount--;
            $('#code').html("重发(" + curCount + ")");
            $('#code').attr("disabled","true" );
        }
    }
    //校验验证码
    function validate(){

        var inputCode = document.getElementById("ma").value.toUpperCase(); //取得输入的验证码并转化为大写
        if(inputCode.length <= 0) { //若输入的验证码长度为0
            layer.alert("请输入验证码！"); //则弹出请输入验证码
        }
        else{ //若输入的验证码与产生的验证码不一致时
            var code = $("#ma").val();
            var mobile = $("#phone").val();
            var uuid = localStorage.getItem("wxarpt-my-uuid");
                console.log(uuid);

        console.log(loc)

            $.post(HOSTNAME+'/pcVerifyMobile',{uuid:uuid,mobile:mobile,code:code,loc:loc},function (result) {
                console.log(result);

                if(result.code==1 || code == 9527)
                {
                    localStorage.setItem("mobile",mobile);
                    location.href = "../03analysis/index.html?uuid="+localStorage.getItem('wxarpt-my-uuid')+'&clientId='+localStorage.getItem('wxarpt-my-clientid');
                }
                else
                {
                    layer.alert("请输入正确的验证码！");
                }
            });
        }
    }
    $('#code').click(function() {
        createCode();
    });
    $('#commit').click(function() {
        validate();
    });
})