/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 个人信息界面js依赖文件
 * @Date: 2017-12-18 16:19:45 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-18 16:21:50
 */

//get the view
const personalInfo = require("./perdonalInfo.html");

//import css
require("./personalInfo.scss");

//import fontIcon
require("../../js/iconfont.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(personalInfo);
};
