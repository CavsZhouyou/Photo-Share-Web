/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 图片查看界面js依赖文件
 * @Date: 2017-12-18 11:00:51 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-02-06 13:15:27
 */

//get the view
const photoLook = require("./photoLook.html");

//import css
require("./photoLook.scss");

//import js
require("../../js/iconfont.js");
require("../../js/jquery.cookie.min.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(photoLook);

    //获取图片分类列表
    var classList = getPhotoClassList();

    //加载图片列表
    getPhotoList();

    /**
     * @description 加载图片列表
     */
    function getPhotoList() {
        var account = $.cookie("account");

        $.ajax({
            url: "/PhotoShareWeb/share/photo/getPhotoByAccount",
            type: "POST",
            data: {
                account: account
            },
            dataType: "json",
            success: function(data) {
                if (data.success) {
                    //向页面插入图片
                    appendPhotoList(data.photoList);
                }
            }
        });
    }

    /**
     * @description 向页面插入图片
     * @param {Arrey} photoList
     */
    function appendPhotoList(photoList) {
        var photoBoxString,
            $photoContainer = $(".photo-look-container"),
            $photoBox;

        photoList.forEach(photo => {
            photoBoxString = require("./photo.html");
            photoBoxString = photoBoxString
                .replace("$className", getPhotoClass(photo.photoclass))
                .replace(/photoName/g, photo.photoname)
                .replace("$photoURL", photo.photourl)
                .replace("$photoDescription", photo.descriptions)
                .replace("$photoID", photo.id);

            switch (photo.status) {
                case "1":
                    photoBoxString = photoBoxString
                        .replace("$statusID", "checking")
                        .replace("$icon", "help")
                        .replace("$status", "审核中");
                    break;
                case "2":
                    photoBoxString = photoBoxString
                        .replace("$statusID", "pass")
                        .replace("$icon", "success")
                        .replace("$status", "审核通过");
                    break;
                case "3":
                    photoBoxString = photoBoxString
                        .replace("$statusID", "nopass")
                        .replace("$icon", "false")
                        .replace("$status", "审核未通过");
                    break;
                default:
                    break;
            }
            $photoBox = $(photoBoxString);

            $photoBox.find(".delete").click(function() {
                const self = this;
                var photoID = $(this).attr("data-ID");

                $.ajax({
                    url: "/PhotoShareWeb/share/photo/deletePhotoByID",
                    type: "POST",
                    data: {
                        id: photoID
                    },
                    dataType: "json",
                    success: function(data) {
                        if (data.success) {
                            $(self)
                                .parent()
                                .parent()
                                .remove();
                        } else {
                            alert("删除图片失败！");
                        }
                    }
                });
            });

            $photoContainer.append($photoBox);
        });
    }

    /**
     * @description 通过ID获取图片分类
     * @param {String} photoClass
     */
    function getPhotoClass(photoClassID) {
        var className;

        classList.forEach(photoclass => {
            if (photoclass.id === photoClassID) {
                className = photoclass.classname;
            }
        });

        return className;
    }

    /**
     * @description 获取图片分类列表
     */
    function getPhotoClassList() {
        var resultList;

        $.ajax({
            url: "/PhotoShareWeb/share/photoClass/getPhotoClassList",
            async: false,
            success: function(data) {
                resultList = data.photoClassList;
            }
        });

        return resultList;
    }
};
