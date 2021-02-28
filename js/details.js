// 打开详情页的时候先查看是否有携带id参数
// 如果没有id参数的时候 跳转到列表 
// 如果有id参数的时候 根据id去获取对象的数据 渲染

// http://gz2008.com/day06_code/project/html/detail.html?id=4
let reg = /id=(\d+)/;
if (!reg.test(location.search)) {
    location.href = '../html/list.html'
}
let id = reg.exec(location.search)[1];
let container = document.querySelector('.container');
// 根据id获取数据
pAjax({
    url: '../php/getDetail.php',
    data: {
        id
    }
}).then(res => {
    res = JSON.parse(res);
    renderHtml(res.detail)
})


function renderHtml(data) {
    // let main=document.querySelector('.x-main')
    container.innerHTML = `
        <ol class="breadcrumb">
            <li><a href="#">详情</a></li>
        </ol>
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object"
                        src="${data.goods_big_logo}"
                        alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">${data.goods_name}
                </h4>
                <div class="price">
                    <i class="glyphicon glyphicon-yen"></i>
                    <span>${data.goods_price}</span>
                </div>
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button" class="btn btn-default">XL</button>
                    <button type="button" class="btn btn-default">L</button>
                    <button type="button" class="btn btn-default">M</button>
                    <button type="button" class="btn btn-default">S</button>
                    <button type="button" class="btn btn-default">XS</button>
                </div>

                <div>
                    <button class="btn btn-warning btn-lg" id="goCar">查看购物车</button>
                    <button class="btn btn-danger btn-lg" id="addCar">加入购物车</button>
                </div>
            </div>
        </div>

        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation"><a href="#">Messages</a></li>
        </ul>
        <div class="goods_detail">
            ${data.goods_introduce}
        </div>`
}

container.onclick = function () {
    let e = window.event;
    if (e.target.id == 'goCar') {
        location.href = '../html/car.html'
    }

    if (e.target.id == 'addCar') {
        // alert('添加购物车')
        // 把当前这个条商品的goods_id ，用户名 ，goods_num 添加到 购物车的表
        // goods_id = id
        // userName = getCookie('login)  如果没有登录的时候 不能添加数据，提示进行登录
        // goods_num  判断这个用户对应的这个goods_id 是否已经存在，如果存在 goods_num++，如果不存在操作添加商品到购物车，其中 goods_num = 1


        let login = getCookie('login');
        if (!login) {
            alert('没有登录请到登录页面进行登录');
            localStorage.setItem('url', location.href);
            location.href = '../html/denglu.html';
            return
        }

        // 发添加购物车的ajax请求
        pAjax({
            url: '../php/addCar.php',
            type: 'post',
            data: {
                'goods_id': id,
                'userName': login
            }
        }).then(function (res) {
            console.log(res);
        })
    }
}