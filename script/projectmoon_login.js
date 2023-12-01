let pass = [];
let isLogin = false;

window.onload = function () {
    ifLogin = localStorage.getItem('isLogin');
    const storedPass = localStorage.getItem('pass');
    if(storedPass){
        pass = storedPass.split(',');
    }
};

function addToPassArray(){
    const id = document.getElementById("address").value;
    const password = document.getElementById("password").value;

    const entry = `${id}:${password}`;
    if(id === "" || password === "") {
        alert("아이디나 패스워드가 입력되지 않았습니다");
    }else {
        pass.push(entry);
        console.log("배열추가", pass);
        localStorage.setItem('pass', pass.join(','));
    }
    document.form1.reset();
}

function checkLogin(){
    const id = document.getElementById("address").value;
    const password = document.getElementById("password").value;

    const fullId = `${id}:${password}`;

    console.log("비교", fullId);

    pass.forEach(diId =>{
        console.log("현 diId:", diId);
        if(diId === fullId){
            alert("성공");
            isLogin=true;
            localStorage.setItem('isLogin',isLogin);
        }
    });

    if(isLogin === true) {
        window.location.href = "projectmoon_main.html";
    }else if(isLogin === false){
        alert("로그인 실패!");
        document.form1.reset();
    }
}