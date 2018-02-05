/*
 * @Author: zhouyou@weruan 
 * @Descriptions: 图片审核界面js依赖文件
 * @Date: 2017-12-18 00:44:09 
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-02-03 20:24:47
 */

//get the view
const photoCheck = require("./photoCheck.html");

//import css
require("./photoCheck.scss");

//import js
require("../../js/iconfont.js");

// 路由调用
SPA_RESOLVE_INIT = function(transition) {
    $("#content").html(photoCheck);

    //加载图片列表
    getPhotoList();

    /**
     * @description 加载图片列表
     */
    function getPhotoList() {
        $.ajax({
            url: "/PhotoShareWeb/share/photo/getPhotoByStatus",
            type: "POST",
            data: {
                status: "1"
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
            $photoContainer = $(".photo-check-container"),
            $photoBox;

        photoList.forEach(photo => {
            photoBoxString = require("./photo.html");
            photoBoxString = photoBoxString
                .replace("$className", getPhotoClass(photo.photoclass))
                .replace(/photoName/g, photo.photoname)
                .replace("$photoURL", photo.photourl)
                .replace("$photoDescription", photo.descriptions)
                .replace(/photoID/g, photo.id);

            $photoBox = $(photoBoxString);

            $photoBox.find(".pass").click(function() {
                const self = this;
                var photoID = $(this).attr("data-ID"),
                    data = {
                        id: photoID,
                        status: "2"
                    };

                $.ajax({
                    url: "/PhotoShareWeb/share/photo/updateStatus",
                    type: "POST",
                    data: JSON.stringify(data),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        if (data.success) {
                            $(self)
                                .parent()
                                .parent()
                                .remove();
                            alert("审核成功！");
                        } else {
                            alert("审核失败！");
                        }
                    }
                });
            });

            $photoBox.find(".nopass").click(function() {
                const self = this;
                var photoID = $(this).attr("data-ID"),
                    data = {
                        id: photoID,
                        status: "3"
                    };

                $.ajax({
                    url: "/PhotoShareWeb/share/photo/updateStatus",
                    type: "POST",
                    data: JSON.stringify(data),
                    dataType: "json",
                    contentType: "application/json",
                    success: function(data) {
                        if (data.success) {
                            $(self)
                                .parent()
                                .parent()
                                .remove();
                            alert("审核成功！");
                        } else {
                            alert("审核失败！");
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
    function getPhotoClass(photoClass) {
        var className;

        $.ajax({
            url: "/PhotoShareWeb/share/photoClass/getPhotoClass",
            type: "POST",
            data: {
                id: photoClass
            },
            dataType: "json",
            async: false,
            success: function(data) {
                if (data.success) {
                    className = data.photoClass.classname;
                } else {
                    alert("获取图片分类失败！");
                }
            }
        });

        return className;
    }
};
