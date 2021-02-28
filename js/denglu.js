function denglu() {
    var inp1 = document.querySelector('.x-input');
    var inp2 = document.querySelector('.y-input');
    var btn = document.querySelector('.denglu');
    var hin = document.querySelector('.hint');
    var btn =document.querySelector('.denglu');
    var board = document.querySelector('.board');
    var reg = /^1[356789]\d{9}$/;
    var reg1 = /^\d{6}$/;

    btn.onclick = function () {
        if (reg.test(inp1.value) && reg1.test(inp2.value)) {
            hin.innerHTML=''
            location.href="../html/index.html"
            let xhr = new XMLHttpRequest();
            // get 请求传递参数给后端
            // 直接把参数拼接在 接口的后面，参数之间用&符号链接
            xhr.open('get', `../php/denglu.php=${user.value}&password=${pass.value}`);

            xhr.send();

            xhr.onload = function () {
                console.log(xhr.responseText);
            }

        } else if (reg.test(inp1.value) && reg1.test(inp2.value)) {
            hin.innerHTML = ('请正输入号码')
        } else if (reg.test(inp1.value) && reg1.test(inp2.value)) {
            hin.innerHTML = ('请正输入密码')
        } else {
            hin.innerHTML = ('请正确输入')
        }

    }
}