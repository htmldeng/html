"use strict";

var arry = [{
  name: ["粉红豹", "裸熊", "芝麻街", "花木兰", "三丽鸥", "潘通", "迪士尼"]
}, {
  name: ["拖鞋", "清洁保鲜", "家室", "收纳", "", "浴室用品"]
}, {
  name: ["杯壶", "餐具", "功能厨具"]
}, {
  name: ["T桖", "运动服饰", "内衣", "", "丝袜"]
}, {
  name: ["美妆", "身体护理", "护肤品", "口腔护理", "洗发护发"]
}, {
  name: ["旅行用品", "箱包"]
}, {
  name: ["生活电器", "数码"]
}, {
  name: ["雨具", "零食", "文具", "玩具"]
}];
var box = $('.box');
$('.navLeft li').each(function (index) {
  $('.navLeft li').eq(index + 1).hover(function () {
    var str = '';
    $.each(arry[index].name, function (index, item) {
      str += "<li ><a href=\"\">".concat(item, "</a></li>");
    });
    box.html(str);
    box.show();
  });
});
box.mouseover(function () {
  box.show();
});
box.mouseout(function () {
  box.hide();
});