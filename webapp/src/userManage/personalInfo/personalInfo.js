/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 个人信息界面js依赖文件
 * @Date: 2017-12-18 16:19:45 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-02-03 21:53:05
 */

//get the view
const personalInfo = require("./perdonalInfo.html");

//import css
require("./personalInfo.scss");

//import fontIcon
require("../../js/iconfont.js");
require("../../js/jquery.cookie.min.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(personalInfo);

    //获取个人资料
    getPersonalData();

    //点击修改个人信息
    $("#commit").click(function() {
        var account = $.cookie("account"),
            username = $("#user-name").val(),
            headimg = "./img/user.jpg",
            email = $("#user-mail").val(),
            phonenumber = parseInt($("#user-phone").val()),
            descriptions = $("#user-introduce").val(),
            postData;

        postData = {
            account: account,
            username: username,
            headimg: headimg,
            email: email,
            phonenumber: phonenumber,
            descriptions: descriptions
        };

        $.ajax({
            url: "/PhotoShareWeb/user/updateUser",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(postData),
            async: false,
            success: function(data) {
                if (data.success) {
                    alert("修改成功");
                } else {
                    alert("修改失败！");
                }
            }
        });
    });

    /**
     * @description 获取个人资料
     */
    function getPersonalData() {
        var account = $.cookie("account"),
            data = {
                account: account
            };

        //获取用户信息
        $.ajax({
            url: "/PhotoShareWeb/user/getUserByAccount",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            async: false,
            success: function(data) {
                if (data.success) {
                    $("#user-name").val(data.user.username || "");
                    $("#user-mail").val(data.user.email || "");
                    $("#user-phone").val(data.user.phonenumber || "");
                    $("#user-introduce").val(data.user.descriptions || "");
                } else {
                    alert("获取个人资料失败！");
                }
            }
        });
    }
};
