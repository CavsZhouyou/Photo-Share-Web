/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 首页js依赖文件
 * @Date: 2017-11-26 20:01:16 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-01-31 16:07:47
 */

//import scss
require("./index.scss");

//import js
require("../js/jquery.backstretch.js");
require("../js/iconfont.js");

$(function() {
    // img 依赖
    const jpg1 = require("./img/banner1.jpg");
    const jpg2 = require("./img/banner2.jpg");
    const jpg3 = require("./img/banner3.jpg");
    const jpg4 = require("./img/banner4.jpg");

    // Handle Backstretch 背景轮换
    jQuery.backstretch([jpg1, jpg2, jpg3, jpg4], {
        duration: 10000,
        fade: 750,
        scale: "fade",
        alwaysTestWindowResolution: true
    });

    //点击显示登录界面
    $(".user-name").click(function() {
        $(".login-container").show();
        $(".mask-layer").show();

        //点击切换登录界面
        $(".login").click(function() {
            $(this).addClass("doing");
            $(".regist").removeClass("doing");

            $("#regist-content").hide();
            $("#login-content").show();
        });

        //点击切换注册界面
        $(".regist").click(function() {
            $(this).addClass("doing");
            $(".login").removeClass("doing");

            $("#login-content").hide();
            $("#regist-content").show();
        });

        //点击遮罩层返回
        $(".mask-layer").click(function() {
            $(".login-container").hide();
            $(".mask-layer").hide();
        });

        //点击取消按钮返回
        $(".return").click(function() {
            $(".login-container").hide();
            $(".mask-layer").hide();
        });

        $("#login").click(function() {
            $.ajax({
                url: "/user/login",
                type: "GET",
                dataType: "json",
                data: {
                    account: "root",
                    password: "123456"
                },
                contentType: "application/json",
                success: {}
            });
        });
    });
});
