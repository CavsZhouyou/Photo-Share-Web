/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 用户管理界面(无路由)
 * @Date: 2017-12-23 11:04:16 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-23 11:44:06
 */

//import scss
require("./userManageCombine.scss");

//import js
require("../js/iconfont.js");

$(function() {
    //添加sider点击事件
    const sidebarList = $("#sidebar").find(".sidebar-item");

    sidebarList.each(function() {
        $(this).click(function() {
            $("#sidebar")
                .find(".active")
                .removeClass("active");
            $(this).addClass("active");

            //界面显示
            $("#content")
                .find(".active")
                .removeClass("active");
            $("#" + $(this).attr("data-type")).addClass("active");
        });
    });
});
