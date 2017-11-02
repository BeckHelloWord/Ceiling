/* 
 * 封装吸顶函数，需结合css实现。
 * 也可以直接用js改变样式，可以自行修改。
 */
function ceiling(obj, topDom) {
    var ot = obj.offsetTop,
        showTopDist = 900; //显示‘返回按钮’的边界
    document.onscroll = function () {
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        /*
         * 在这里我给obj添加一个自定义属性。className可能会影响原有的class
         * 三元运算使代码更简洁
         */
        obj.setAttribute("data-fixed", st >= ot ? "fixed" : "");
        topDom.setAttribute("data-show-back-top", st >= showTopDist ? "show" : "");
    }

    topDom.addEventListener('click', function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    })
}