/**
 * Created by Wonderchief on 2017/1/12.
 */
var service = "http://test.legle.cc:8080/azz";
// var service = "http://h5-lovesudy.oss-cn-shenzhen.aliyuncs.com/version1";
var HOSTNAME = 'http://azz.legle.cc';

function getQueryString(){

    var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+","g"));

    if(result == null){

        return "";

    }

    for(var i = 0; i < result.length; i++){
        result[i] = result[i].substring(1);
    }

    return result;

}

//根据QueryString参数名称获取值

function getQueryStringByName(name){

    var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));

    if(result == null || result.length < 1){
        return "";
    }

    return result[1];

}

//根据QueryString参数索引获取值

function getQueryStringByIndex(index){

    if(index == null){

        return "";

    }

    var queryStringList = getQueryString();

    if (index >= queryStringList.length){

        return "";

    }

    var result = queryStringList[index];

    var startIndex = result.indexOf("=") + 1;

    result = result.substring(startIndex);

    return result;

}
//微信分享
function initWeixinShare(options) {
    $.post('http://azz.legle.cc/weixin/share',{url:location.href},function (data,status) {
        data.jsApiList=['onMenuShareTimeline','onMenuShareAppMessage'];
        wx.config(data);
        wx.ready(function () {
            wx.onMenuShareAppMessage(options.onMenuShareAppMessage);
            wx.onMenuShareTimeline(options.onMenuShareTimeline);
        });
    });
}
