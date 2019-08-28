/**
 * Created by Wonderchief on 2017/11/2.
 */
function handler(msg){
    showElement("i am js; from android--> msg="+JSON.stringify(msg));

}

function showElement(msg){
    var div   =document.getElementById("div_box");  //获取div
    var ele=document.createElement('h2');    //创建P元素节点
    ele.innerHTML=msg;                //设置p节点的内容
    div.appendChild(ele);                    //添加子节点ele
}
function rightBtnClick(data){
    alert('rightBtnClick');
    showElement("i am js; from android&ndash;&gt; rightBtnClick-->data="+data);
}
function return_action(data){
    alert('return_action');
    showElement("i am js; from android&ndash;&gt; return_action-->data="+data);
}
function return_paySure(data){
    alert('return_paySure');
    showElement("i am js; from android&ndash;&gt; return_paySure-->data="+data);
}
function return_sureMsg(){
    alert('return_sureMsg');
    showElement("i am js; from android&ndash;&gt; return_sureMsg-->");
}
function return_bottomAlert(data){
    alert('return_ bottomAlert');
    showElement("i am js; from android&ndash;&gt; return_ bottomAlert-->data="+data);
}
function send_message(data){
    alert('send_message');
    showElement("i am js; from android&ndash;&gt; send_message-->data="+data);
}
function reload_table(){
    alert('reload_table');
    showElement("i am js; from android&ndash;&gt; reload_table-->");
}
function return_bageNum(){
    alert('return_bageNum');
    showElement("i am js; from android&ndash;&gt; return_bageNum-->");
}

function reload_index(){
    alert('reload_index');
    showElement("i am js; from android&ndash;&gt; reload_index-->");
}
function reload_mine(){
    alert('reload_mine');
    showElement("i am js; from android&ndash;&gt; reload_mine-->");
}
function return_openSettingsURLString(agr0,arg1) {
    alert('return_openSettingsURLString');
    showElement("i am js; from android&ndash;&gt; return_openSettingsURLString-->agr0="+agr0);
}
function click_chatNav() {
    alert('click_chatNav');
    showElement("i am js; from android&ndash;&gt; click_chatNav-->");
}
function keyboardWillShow() {
    alert('return_keyboardWillShow');
    showElement("i am js; from android&ndash;&gt; return_keyboardWillShow-->");
}
function keyboardWillHide() {
    alert('return_keyboardWillHide');
    showElement("i am js; from android&ndash;&gt; return_keyboardWillHide-->");
}
function return_bottomAlert(msg) {
    alert('return_bottomAlert');
    showElement("i am js; from android&ndash;&gt; return_bottomAlert-->msg="+msg);
}
function return_APPInfo(msg) {
    alert('return_bottomAlert');
    showElement("i am js; from android&ndash;&gt; return_bottomAlert-->msg="+msg);
}

function return_photo(data1,data2){
    alert('return_photo');
    showElement("i am js; from android&ndash;&gt; return_photo-->data1="+data1);
}
// function return_getStatusBarHeight(data1,data2){
//     alert('return_getStatusBarHeight');
//     showElement("i am js; from android&ndash;&gt; return_getStatusBarHeight-->data1="+data1);
// }

//判断设备
function getInterface(){

    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    if(isAndroid && window.android!=null && typeof(window.android)!="undefined")
        return window.android;
    else
        return window.APPJS;
}

// 页面跳转
function request(){

    var app= getInterface();

//      <!--app.html_jump_href('file:///android_asset/h5/home.html','return');-->
    app.post_photo('other','face','face')
//                <!--alert('end_request');-->
}
// 左上角后退
function leftBtnClick(){
    alert('leftBtnClick');
    showElement("i am js; from android--> leftBtnClick");
}
