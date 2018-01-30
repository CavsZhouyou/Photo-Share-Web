/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 图片上传依赖文件
 * @Date: 2017-12-18 11:29:15 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-18 11:31:40
 */

//get the view
const photoUpload = require("./photoUpload.html");

//import css
require("./photoUpload.scss");

//import js
require("../../js/iconfont.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(photoUpload);
};
