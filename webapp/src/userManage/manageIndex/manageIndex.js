/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 用户管理界面页面依赖文件
 * @Date: 2017-12-17 23:19:45 
 * @Last Modified by: zhouyou@weruan
 * @Last Modified time: 2017-12-18 21:23:25
 */

//import css
require("./manageIndex.scss");

//import js
require("../../js/route.js");

$(function() {
    /**创建路由
     *注意：js文件地址为打包后的文件地址
     *     css文件地址为打包后的文件地址
     */
    const _routersList = [
        {
            url: "/photoCheck",
            javascript: "js/photoCheck.js",
            css: "css/photoCheck.css"
        },
        {
            url: "/photoLook",
            javascript: "js/photoLook.js",
            css: "css/photoLook.css"
        },
        {
            url: "/photoUpload",
            javascript: "js/photoUpload.js",
            css: "css/photoUpload.css"
        },
        {
            url: "/personalInfo",
            javascript: "js/personalInfo.js",
            css: "css/personalInfo.css"
        },
        {
            url: "/changePassword",
            javascript: "js/changePassword.js",
            css: "css/changePassword.css"
        }
    ];

    // 界面路由
    _routersList.forEach(function(_routerItem) {
        spaRouters.map(_routerItem.url, function(transiton) {
            spaRouters.asyncFun(
                _routerItem.javascript,
                transiton,
                _routerItem.css
            );
        });
    });

    // 初始化路由
    spaRouters.init();

    /**页面初始化
     *
     */

    //添加sider点击事件
    const sidebarList = $("#sidebar").find(".sidebar-item");

    sidebarList.each(function() {
        $(this).click(function() {
            console.log(11);
            $("#sidebar")
                .find(".active")
                .removeClass("active");
            $(this).addClass("active");
        });
    });
});
