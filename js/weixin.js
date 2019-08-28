/**
 * Created by Wonderchief on 2017/3/27.
 */
function initWeixinShare(options) {
    $.post(HOSTNAME+'/weixin/share',{url:location.href},function (data,status) {
        data.jsApiList=['onMenuShareTimeline','onMenuShareAppMessage'];
        wx.config(data);
        wx.ready(function () {
            wx.onMenuShareAppMessage(options.onMenuShareAppMessage);
            wx.onMenuShareTimeline(options.onMenuShareTimeline);
        });

    });

}
