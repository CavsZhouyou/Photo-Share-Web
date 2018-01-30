/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 修改密码界面js依赖文件
 * @Date: 2017-12-18 17:44:41 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-18 17:47:15
 */

//get the view
const changePassword = require("./changePassword.html");

//import css
require("./changePassword.scss");

//import fontIcon
require("../../js/iconfont.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(changePassword);
};
