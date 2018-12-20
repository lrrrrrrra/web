//通过window.onload来解决JS代码加载模块问题。即JS代码要在载入模块之后
//当页面加载完成之后再执行以下代码
window.onload=function(){
//  通过元素的id属性获取元素对象
var oDiv=document.getElementById('item1');
console.log(oDiv);
}