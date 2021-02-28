"use strict";

var list = document.querySelector(".y-row");
var page = document.querySelector('.page'); // let defaultInfo = {
//     len: 20,
//     num: 1
// }
// pAjax({
//     url: '../php/getData.php',
//     data: {
//         start: defaultInfo.num,
//         len: defaultInfo.len
//     }
// }).then((res) => {
//     res = JSON.parse(res);
//     new Pagination(page, {
//         pageInfo: {
//             pagenum: 1,
//             pagesize: defaultInfo.len,
//             total: res.total,
//             totalpage: Math.ceil(res.total / defaultInfo.len)
//         },
//         textInfo: {
//             first: '首页',
//             prev: '上一页',
//             list: '',
//             next: '下一页',
//             last: '最后一页'
//         },
//         change: function (num) {
//             defaultInfo.num = num;
//             getData();
//             scrollTo(0, 0)
//         }
//     });
// })

function getData() {
  var res;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(pAjax({
            url: '../php/getData.php',
            data: {
              start: defaultInfo.num,
              len: defaultInfo.len
            }
          }));

        case 2:
          res = _context.sent;
          res = JSON.parse(res);
          renderHtml(res.list);
          console.log(res);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function liebiao() {
  var ed = document.querySelector('.y-row');
  var str = "<div class=\"x-rowTop\">\n    <h1>\u4EBA\u6C14\u63A8\u8350</h1>\n    <a href=\"\">\u66F4\u591A\u63A8\u8350&nbsp;></a>\n</div>\n<div class=\"x-rowMain\">\n    <div class=\"itemList\">\n        <a href=\"http://m.miniso.cn/product-488.html\">\n            <img class=\"lazy-load img_lazyloaded\"\n                data-original=\"https://s1.miniso.cn/bsimg/ec/public/images/f8/43/f843cfeab432cffd7c442615f50a3102.png\"\n                alt=\"\u6E05\u65B0\u82B1\u9999\u7CFB\u5217\u9999\u4F53\u55B7\u96FE\"\n                src=\"https://s1.miniso.cn/bsimg/ec/public/images/f8/43/f843cfeab432cffd7c442615f50a3102.png\"\n                style=\"display: inline;\">\n        </a>\n        <div class=\"x-Ptag\">4\u79CD\u9999\u5473</div>\n        <div class=\"tagBox\"></div>\n        <a class=\"title\" href=\"http://m.miniso.cn/product-488.html\">\u6E05\u65B0\u82B1\u9999\u7CFB\u5217\u9999\u4F53\u55B7\u96FE</a><br>\n        <span class=\"\">\xA510</span>\n    </div>\n    <div class=\"item\">\n        <input type=\"hidden\" name=\"id\" value=\"1\">\n        <a class=\"imgbox\" href=\"http://m.miniso.cn/product-730.html\">\n            <img class=\"lazy-load img_lazyloaded\"\n                data-original=\"https://s1.miniso.cn/bsimg/ec/public/images/bb/29/bb295507bfbcb8e3b0641b4bf4905bf6.png\"\n                alt=\"MINISO \u6CF0\u56FD\u8292\u679C\u5E7285g\"\n                src=\"https://s1.miniso.cn/bsimg/ec/public/images/bb/29/bb295507bfbcb8e3b0641b4bf4905bf6.png\"\n                style=\"display: inline;\">\n        </a>\n        <div class=\"tagBox\">\n        </div>\n        <a class=\"title\" href=\"http://m.miniso.cn/product-730.html\">MINISO \u6CF0\u56FD\u8292\u679C\u5E7285g</a><br>\n        <span class=\"\">\xA510</span>\n    </div>\n    <div class=\"item\">\n        <a class=\"imgbox\" href=\"http://m.miniso.cn/product-1024.html\">\n            <img class=\"lazy-load img_lazyloaded\"\n                data-original=\"https://s1.miniso.cn/bsimg/ec/public/images/72/14/7214283f631a698d9aa836f49fe9ac7f.jpg?x-oss-process=style/high\"\n                alt=\"1.5\u6BEB\u7C73\u6781\u7EC6\u81EA\u52A8\u7709\u7B14\"\n                src=\"https://s1.miniso.cn/bsimg/ec/public/images/72/14/7214283f631a698d9aa836f49fe9ac7f.jpg?x-oss-process=style/high\"\n                style=\"display: inline;\">\n            <div class=\"x-Ptag\">2\u8272\u53EF\u9009</div>\n        </a>\n        <div class=\"tagBox\">\n        </div>\n        <a class=\"title\" href=\"http://m.miniso.cn/product-1024.html\">1.5\u6BEB\u7C73\u6781\u7EC6\u81EA\u52A8\u7709\u7B14</a><br>\n        <span class=\"\">\xA510</span>\n\n    </div>\n    <div class=\"item\">\n\n        <a class=\"imgbox\" href=\"http://m.miniso.cn/product-610.html\">\n            <img class=\"lazy-load img_lazyloaded\"\n                data-original=\"https://s1.miniso.cn/bsimg/ec/public/images/cb/b7/cbb774d60f7182f813e76f4779d947ed.png\"\n                alt=\"8\u7247\u88C5\u6696\u8EAB\u7CFB\u5217\u6696\u8D34\"\n                src=\"https://s1.miniso.cn/bsimg/ec/public/images/cb/b7/cbb774d60f7182f813e76f4779d947ed.png\"\n                style=\"display: inline;\">\n        </a>\n        <div class=\"tagBox\">\n        </div>\n        <a class=\"title\" href=\"http://m.miniso.cn/product-610.html\">8\u7247\u88C5\u6696\u8EAB\u7CFB\u5217\u6696\u8D34</a><br>\n        <span class=\"\">\xA510</span>\n\n\n    </div>\n    <div class=\"item\">\n\n        <a class=\"imgbox\" href=\"http://m.miniso.cn/product-1017.html\">\n            <img class=\"lazy-load img_lazyloaded\"\n                data-original=\"https://s1.miniso.cn/bsimg/ec/public/images/50/49/50491e6d6f277461000ee1ed737f39d0.png\"\n                alt=\"\u8584\u65E0\u611F0.1\u7CFB\u5217240MM\u536B\u751F\u5DFE8\u7247\u88C5\"\n                src=\"https://s1.miniso.cn/bsimg/ec/public/images/50/49/50491e6d6f277461000ee1ed737f39d0.png\"\n                style=\"display: inline;\">\n        </a>\n        <div class=\"tagBox\">\n        </div>\n        <a class=\"title\" href=\"http://m.miniso.cn/product-1017.html\">\u8584\u65E0\u611F0.1\u7CFB\u5217240MM\u536B\u751F\u5DFE8\u7247\u88C5</a><br>\n        <span class=\"\">\xA510</span>\n\n    </div>\n    <div class=\"item\">\n\n        <a class=\"imgbox\" href=\"http://m.miniso.cn/product-85.html\">\n            <img class=\"lazy-load img_lazyloaded\"\n                data-original=\"https://s1.miniso.cn/bsimg/ec/public/images/98/a8/98a8d51e5b2c4b6e806ec6a73a79f38a.png\"\n                alt=\"\u5B8C\u7F8E\u81EA\u52A8\u7709\u7B14\"\n                src=\"https://s1.miniso.cn/bsimg/ec/public/images/98/a8/98a8d51e5b2c4b6e806ec6a73a79f38a.png\"\n                style=\"display: inline;\">\n            <div class=\"x-Ptag\">4\u8272\u53EF\u9009</div>\n        </a>\n        <div class=\"tagBox\">\n        </div>\n        <a class=\"title\" href=\"http://m.miniso.cn/product-85.html\">\u5B8C\u7F8E\u81EA\u52A8\u7709\u7B14</a><br>\n        <span class=\"\">\xA59.9</span>\n\n    </div>\n    <div class=\"item\">\n\n        <a class=\"imgbox\" href=\"http://m.miniso.cn/product-186.html\">\n            <img class=\"lazy-load img_lazyloaded\"\n                data-original=\"https://s1.miniso.cn/bsimg/ec/public/images/b2/7f/b27fd467bfb1d8fb6f659cd0bf1af4a0.png\"\n                alt=\"\u4E09\u652F\u88C5\u62A4\u9F88\u6781\u7B80\u74F7\u611F\u7259\u5237\"\n                src=\"https://s1.miniso.cn/bsimg/ec/public/images/b2/7f/b27fd467bfb1d8fb6f659cd0bf1af4a0.png\"\n                style=\"display: inline;\">\n        </a>\n        <div class=\"tagBox\">\n        </div>\n        <a class=\"title\" href=\"http://m.miniso.cn/product-186.html\">\u4E09\u652F\u88C5\u62A4\u9F88\u6781\u7B80\u74F7\u611F\u7259\u5237</a><br>\n        <span class=\"\">\xA510</span>\n\n    </div>\n</div>";
  ed.innerHTML += str;
}