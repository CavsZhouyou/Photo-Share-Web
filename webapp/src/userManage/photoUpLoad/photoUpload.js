/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 图片上传依赖文件
 * @Date: 2017-12-18 11:29:15 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-02-03 21:00:33
 */

//get the view
const photoUpload = require("./photoUpload.html");

//import css
require("./photoUpload.scss");

//import js
require("../../js/iconfont.js");
require("../../js/jquery.cookie.min.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(photoUpload);

    $("#upload").click(function() {
        var photoURL = "./img/photo24.jpg",
            photoName = $("#user-name").val(),
            photoClass = $("#class")
                .find("option:selected")
                .val(),
            descriptions = $("#description").val(),
            uploadTime = new Date(),
            uploadUser = $.cookie("account"),
            status = "1",
            id = 25,
            postData;

        postData = {
            photourl: photoURL,
            photoname: photoName,
            photoclass: photoClass,
            descriptions: descriptions,
            uploadtime: uploadTime,
            uploaduser: uploadUser,
            status: status
        };

        $.ajax({
            url: "/PhotoShareWeb/photo/addPhoto",
            type: "POST",
            data: JSON.stringify(postData),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                if (data.success) {
                    alert("上传成功！");
                } else {
                    alert("上传失败！");
                }
            }
        });
    });
};
