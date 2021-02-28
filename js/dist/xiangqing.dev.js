"use strict";

function xiangqing() {
  var mainPic = document.querySelector('#mainPic');
  var imgbox = document.querySelectorAll('#imgbox img');
  imgbox.forEach(function (item) {
    item.onmouseover = function () {
      for (var i = 0; i < imgbox.clientHeight; i++) {
        imgbox[i].className = '';
      }

      this.className = 'active';
      var pic = this.getAttribute('src');
      mainPic.setAttribute('src', pic);
    };
  });
}

var reg = /id=(\d+)/;

if (!reg.test(location.search)) {
  location.href = '../html/xiangqing.html';
}

var id = reg.exec(location.search)[1];
var container = document.querySelector('.container'); // 根据id获取数据

pAjax({
  url: '../php/xiangqing.php',
  data: {
    id: id
  }
}).then(function (res) {
  res = JSON.parse(res);
  renderHtml(res.detail);
});

function shuju(data) {
  var main = document.querySelector('.x-main');
  var str = "  <div class=\"x-mainTop\">\n    <div class=\"page\">\n\n        <a href=\"/index.html\">\u9996\u9875</a> <span>&gt;</span>\n        <a href=\"/category-channel-46.html\">\u6742\u8D27</a> <span>&gt;</span>\n        <a href=\"/category-channel-46-57.html#cid57\">\u96F6\u98DF</a> <span>&gt;</span>\n        <a href=\"#\">MINISO \u6CF0\u56FD\u8292\u679C\u5E7285g</a>\n    </div>\n    <div class=\"x-mainFoot\">\n        <div class=\"Pleft x-picShower\">\n            <div class=\"mainPic\">\n                <img src=\"".concat(data.img, "\"\n                    class=\"no_coupon_goods_img\" style=\"height: 100%\" alt=\"\" id=\"mainPic\">\n\n            </div>\n\n            <ul>\n                <li class=\"imgbox active\" id=\"imgbox\"\n                    data-mainpicurl=\"https://s1.miniso.cn/bsimg/ec/public/images/5c/eb/5ceb0ebf14992d90754a3ca3b4b9a52b.jpg?x-oss-process=style/high\">\n                    <img src=\"").concat(data.img1, "\"\n                        alt=\"\"></li>\n                <li class=\"imgbox\" id=\"imgbox\"\n                    data-mainpicurl=\"https://s1.miniso.cn/bsimg/ec/public/images/ef/95/ef957ed9d8a664bfa23777177bbf0857.jpg?x-oss-process=style/high\">\n                    <img src=\"").concat(data.img2, "\"\n                        alt=\"\"></li>\n                <li class=\"imgbox\" id=\"imgbox\"\n                    data-mainpicurl=\"https://s1.miniso.cn/bsimg/ec/public/images/60/4a/604a859ae2285b28f016f530bb9c119a.jpg?x-oss-process=style/high\">\n                    <img src=\"").concat(data.img3, "\"\n                        alt=\"\"></li>\n                <li class=\"imgbox\" id=\"imgbox\"\n                    data-mainpicurl=\"https://s1.miniso.cn/bsimg/ec/public/images/ee/4c/ee4c30ee0760c36111a0c90394c97c43.jpg?x-oss-process=style/high\">\n                    <img src=\"").concat(data.img4, "\"\n                        alt=\"\"></li>\n                <li class=\"imgbox\" id=\"imgbox\"\n                    data-mainpicurl=\"https://s1.miniso.cn/bsimg/ec/public/images/8b/8a/8b8af4b69a11ae35029d88f2b0c42004.jpg?x-oss-process=style/high\">\n                    <img src=\"").concat(data.img5, "\"\n                        alt=\"\"></li>\n                \n            </ul>\n\n            <script>\n                xiangqing()\n            </script>\n        </div>\n\n        <div class=\"Pright\">\n            <h2>MINISO ").concat(data.name, "</h2>\n            <p class=\"x-gray\">\u6CF0\u56FD\u8FDB\u53E3\u4F18\u8D28\u8292\u679C</p>\n            <div class=\"limited x-hide\">\n                <span class=\"x-fsz18 special_name\"></span>\n\n            </div>\n            <div class=\"x-row\">\n                <span>\u552E\u4EF7</span>\n                <div class=\"x-red x-price\">\xA5").concat(data.price, "</div>\n                <div class=\"x-del x-originPrice\"><span>\u539F\u4EF7:&nbsp;\xA510</span></div>\n                <div class=\"x-unionPrice x-hide\"></div>\n                <br>\n                <span>\u670D\u52A1</span>\n                <ul class=\"service\">\n                    <li>30\u5929\u65E0\u5FE7\u9000\u6362\u8D27</li>\n                    <li>\n                        <div></div><span>48\u5C0F\u65F6\u9000\u6B3E</span>\n                    </li>\n                    <li>\n                        <div></div><span>\u6EE179\u5143\u5305\u90AE</span>\n                    </li>\n                    <li>\n                        <div></div><span>\u4F18\u54C1\u5168\u7403\u7504\u9009</span>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"chioceBoard\">\n                <div class=\"x-chioser\">\n                    <div class=\"typeText\" data-spec-id=\"23\" id=\"type_0\">\n                        <h1>\u89C4\u683C</h1>\n                        <ul>\n                            <li class=\"active\" data-private-id=\"1513398305163\" id=\"item_1513398305163\">85g\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <h1>\u6570\u91CF</h1>\n                <div class=\"count\">\n                    <span class=\"reduce reduceDis\"><img\n                            src=\"http://m.miniso.cn/public/app/siteyx/statics/static/images/reduceDisable.png\"\n                            alt=\"\"></span>\n                    <input id=\"selectedNum\" value=\"1\" class=\"quantity\"\n                        onkeydown=\"if(event.keyCode==13)event.keyCode=9\"\n                        onkeypress=\"if ((event.keyCode<48 || event.keyCode>57)) event.returnValue=false\">\n                    <span class=\"plus\"><img\n                            src=\"http://m.miniso.cn/public/app/siteyx/statics/static/images/plus.png\"\n                            alt=\"\"></span>\n                </div>\n\n            </div>\n\n\n            <div class=\"btnBar\">\n                <button hidden=\"\" disabled=\"disabled\" id=\"ButtonDisabled\"\n                    style=\"display: none;\">\u5546\u54C1\u552E\u7F44</button>\n                <button class=\"x-redBtn2 shopping\" id=\"ButtonFastBuy\">\u7ACB\u5373\u8D2D\u4E70</button>\n                <button class=\"x-redBtn\" id=\"ButtonAddCart\">\n                    <img src=\"public/app/siteyx/statics/static/images/cart2.png\" alt=\"\">\n                    \u52A0\u5165\u8D2D\u7269\u8F66\n                </button>\n                <button class=\"x-collectBtn collection-btn\">\u6536\u85CF</button>\n\n                <button class=\"x-collectBtn\">\u6536\u85CF</button>\n            </div>\n        </div>\n    </div>\n</div>");
  main.innerHTML += str;
}

; // shuju();