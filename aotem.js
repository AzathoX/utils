/**
 * 自适应rem类
 * ie9+
 * @Param 像素
 * @Auth by AzathoX
 *
 */
//严格模式
"use strict";
!(function(e,Aotem){

    e.Aotem = Aotem();

})(this,function () {
    var Aotem = function () {

        var html = document.documentElement;
        var size = Aotem.size;
        var proportion = Aotem.proportion;
        proportion = proportion ? proportion : 100;
        //文档宽度
        var width = html.clientWidth;

        if(!width){
            throw  new Error("无法计算宽度")
        }

        this.auto = function () {
            //如果宽度大于设计稿宽度则为100%
            width = width > size ? size :width;

            var resize =  (width/size) * proportion;
            //width/size * 比例 算出px
            html.style.fontSize = (width/size) * proportion + "px";
        }

        return this;
    }

    //设置属性
    Aotem.size = 1200;

    Aotem.proportion = 100;

    Aotem.version = "aotem v1.1";

    Aotem.reset = function () {
        new Aotem().auto();
    }

    function init() {
        //绑定几个值
        window._au = Aotem.reset;
        window._au.proportion = Aotem.proportion;
        window._au.size = Aotem.size;
        window._au$version = window._au$v = Aotem.version;
        //监听windows
        window.addEventListener("orientationchange" in window
            ? "orientationchange":"resize", Aotem.reset,false);
        //监听容器
        document.addEventListener("DOMContentLoaded", Aotem.reset ,false);
    }

    init();
});
