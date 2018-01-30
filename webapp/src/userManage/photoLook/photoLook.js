/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 图片查看界面js依赖文件
 * @Date: 2017-12-18 11:00:51 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-18 11:08:23
 */

//get the view
const photoLook = require("./photoLook.html");

//import css
require("./photoLook.scss");

//import js
require("../../js/iconfont.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(photoLook);
};
