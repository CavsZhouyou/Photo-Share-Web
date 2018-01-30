/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 图片审核界面js依赖文件
 * @Date: 2017-12-18 00:44:09 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-18 09:36:35
 */

//get the view
const photoCheck = require("./photoCheck.html");

//import css
require("./photoCheck.scss");

//import js
require("../../js/iconfont.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(photoCheck);
};
