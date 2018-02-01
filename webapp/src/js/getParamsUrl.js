/*
* @Author: Neeze@ZJS
* @Date:   2017-10-11
 * @Last Modified by: zhouyou@werun
 * @Last Modified time: 2018-02-01 19:14:31
*/
//获取url中的参数
const getParamsUrl = function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
};

module.exports = getParamsUrl;
