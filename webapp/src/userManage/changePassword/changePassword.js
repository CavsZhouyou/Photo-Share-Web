/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 修改密码界面js依赖文件
 * @Date: 2017-12-18 17:44:41 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-02-03 22:00:50
 */

//get the view
const changePassword = require("./changePassword.html");

//import css
require("./changePassword.scss");

//import fontIcon
require("../../js/iconfont.js");
require("../../js/jquery.cookie.min.js");
// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(changePassword);

    //点击修改密码
    $("#commit").click(function() {
        var account = $.cookie("account"),
            password = $("#new-password").val(),
            postData;

        postData = {
            account: account,
            password: password
        };

        $.ajax({
            url: "/PhotoShareWeb/share/user/changePassword",
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
};
