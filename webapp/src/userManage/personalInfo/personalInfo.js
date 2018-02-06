/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 个人信息界面js依赖文件
 * @Date: 2017-12-18 16:19:45 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-02-06 11:43:20
 */

//get the view
const personalInfo = require("./perdonalInfo.html");

//import css
require("./personalInfo.scss");

//import fontIcon
require("../../js/iconfont.js");
require("../../js/jquery.cookie.min.js");
require("../../js/qiniu/plupload/plupload.dev.js");
require("../../js/qiniu/plupload/moxie.js");
require("../../js/qiniu/qiniu.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(personalInfo);

    //获取个人资料
    getPersonalData();

    //点击修改个人信息
    $("#commit").click(function() {
        var account = $.cookie("account"),
            username = $("#user-name").val(),
            headimg = $("#photo").attr("src"),
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
            url: "/PhotoShareWeb/share/user/updateUser",
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
            url: "/PhotoShareWeb/share/user/getUserByAccount",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            async: false,
            success: function(data) {
                if (data.success) {
                    $("#user-name").val(data.user.username || "");
                    $("#photo").attr(
                        "src",
                        data.user.headimg || "./img/user.png"
                    );
                    $("#user-mail").val(data.user.email || "");
                    $("#user-phone").val(data.user.phonenumber || "");
                    $("#user-introduce").val(data.user.descriptions || "");
                } else {
                    alert("获取个人资料失败！");
                }
            }
        });
    }

    var uploader = Qiniu.uploader({
        disable_statistics_report: false, // 禁止自动发送上传统计信息到七牛，默认允许发送
        runtimes: "html5,flash,html4", // 上传模式,依次退化
        browse_button: "file", // 上传选择的点选按钮，**必需**
        // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
        // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
        // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
        uptoken: getTokenMessage(), // uptoken 是上传凭证，由其他程序生成
        // uptoken_url: "/PhotoShareWeb/share/auth/getUpToken", // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
        // uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
        //    // do something
        //    return uptoken;
        // },
        get_new_uptoken: false, // 设置上传文件的时候是否每次都重新获取新的 uptoken
        // downtoken_url: '/downtoken',
        // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
        unique_names: false, // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
        save_key: false, // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `save_key`，则开启，SDK在前端将不对key进行任何处理
        domain: "http://p3pjzejg3.bkt.clouddn.com/", // bucket 域名，下载资源时用到，如：'http://xxx.bkt.clouddn.com/' **必需**
        container: "photo-container", // 上传区域 DOM ID，默认是 browser_button 的父元素，
        max_file_size: "10mb", // 最大文件体积限制
        flash_swf_url: "../plupload/Moxie.swf", //引入 flash,相对路径
        max_retries: 3, // 上传失败最大重试次数
        dragdrop: true, // 开启可拖曳上传
        drop_element: "photo-container", // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
        chunk_size: "4mb", // 分块上传时，每块的体积
        auto_start: true, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
        //x_vars : {
        //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
        //    'time' : function(up,file) {
        //        var time = (new Date()).getTime();
        // do something with 'time'
        //        return time;
        //    },
        //    'size' : function(up,file) {
        //        var size = file.size;
        // do something with 'size'
        //        return size;
        //    }
        //},
        init: {
            FilesAdded: function(up, files) {
                plupload.each(files, function(file) {
                    // 文件添加进队列后,处理相关的事情
                });
            },
            BeforeUpload: function(up, file) {
                // 每个文件上传前,处理相关的事情
                console.log("上传开始");
            },
            UploadProgress: function(up, file) {
                // 每个文件上传时,处理相关的事情
                console.log("上传中");
            },
            FileUploaded: function(up, file, info) {
                // 每个文件上传成功后,处理相关的事情
                // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
                // {
                //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                //    "key": "gogopher.jpg"
                //  }
                // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                var domain = up.getOption("domain");
                var res = JSON.parse(info.response);
                var sourceLink = domain + res.key; //获取上传成功后的文件的Url;
                console.log(sourceLink);
                $("#photo").attr("src", sourceLink);
            },
            Error: function(up, err, errTip) {
                base.hideLoading();
                //上传出错时,处理相关的事情
                if (file.code == "-600") {
                    base.showAlertDialog("上传图片的大小不能超过10mb！");
                } else if (file.code == "-601") {
                    base.showAlertDialog("上传图片的格式有误！");
                } else {
                    base.showAlertDialog(err);
                }
            },
            UploadComplete: function() {
                //队列文件处理完毕后,处理相关的事情
            },
            Key: function(up, file) {
                // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                // 该配置必须要在 unique_names: false , save_key: false 时才生效
                var timestamp = Date.parse(new Date());
                var key = file.name + "/" + timestamp;
                // do something with key here
                return key;
            }
        }
    });

    function getTokenMessage() {
        var token;
        $.ajax({
            url: "/PhotoShareWeb/share/auth/getUpToken",
            async: false,
            success: function(data) {
                token = data;
            }
        });
        return token;
    }
};
