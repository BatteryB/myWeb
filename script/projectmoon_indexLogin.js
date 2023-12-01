let goLogin = document.getElementById('login1');
let goLogout = document.getElementById('logout1');

window.onload = function () {
    let isLogin = localStorage.getItem('isLogin');
    if (isLogin === 'true') {
        goLogout.style.display = 'block';
        goLogin.style.display = 'none';
    } else {
        goLogout.style.display = 'none';
        goLogin.style.display = 'block';
    }
}
function changeIsLogin() {
    let isLogin = localStorage.getItem('isLogin');
    if (isLogin === 'true') {
        isLogin = 'false';
    } else {
        isLogin = 'true';
    }

    localStorage.setItem('isLogin', isLogin);
    location.reload();
}

function loadLogin(){
    window.location.href = "projectmoon_Login.html";
}





function clickBack() {
    window.location.href = "main.html";
}